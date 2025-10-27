import React, { useEffect, useRef, useState } from "react";
import "./OfferSlider.scss";

const AUTOPLAY_MS = 5000;
const SWIPE_THRESHOLD = 40;

const slides = [
  {
    badge: "🔥 Горящее",
    title: "-25% на первый заказ",
    sub: "Для новых клиентов при оформлении онлайн. До 30 ноября.",
    cta: { text: "Заказать со скидкой", href: "/order" },
    bg: "/offers/offer1.jpg",
  },
  {
    badge: "🎁 Подарок",
    title: "Бесплатная доставка от 3000 ₽",
    sub: "По городу и пригороду. Простой порог — и в путь.",
    cta: { text: "Узнать условия", href: "/about" },
    bg: "/offers/offer2.jpg",
  },
  {
    badge: "⭐ Хит недели",
    title: "2=3 на популярные позиции",
    sub: "Третья — в подарок. Комбинируй как хочешь.",
    cta: { text: "Собрать набор", href: "/menu" },
    bg: "/offers/offer3.jpg",
  },
  {
    badge: "⚡ Только сегодня",
    title: "Промокод FLASH —15%",
    sub: "Введи код при оформлении заказа.",
    cta: { text: "Скопировать код", href: "/order" },
    bg: "/offers/offer4.jpg",
  },
  {
    badge: "💎 Премиум",
    title: "Кэшбэк 10% на элитные позиции",
    sub: "Бонусами на следующий заказ.",
    cta: { text: "Получить кэшбэк", href: "/account" },
    bg: "/offers/offer5.jpg",
  },
];

export default function OfferSlider() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const trackRef = useRef(null);
  const rootRef = useRef(null);
  const dragging = useRef(false);
  const startX = useRef(0);
  const deltaX = useRef(0);

  const go = (i) => setIndex((i + slides.length) % slides.length);
  const next = () => go(index + 1);
  const prev = () => go(index - 1);

  // autoplay
  const stopAutoplay = () => timerRef.current && clearInterval(timerRef.current);
  const startAutoplay = () => {
    stopAutoplay();
    timerRef.current = setInterval(next, AUTOPLAY_MS);
  };

  useEffect(() => {
    startAutoplay();
    const onVis = () => (document.visibilityState === "hidden" ? stopAutoplay() : startAutoplay());
    document.addEventListener("visibilitychange", onVis);
    return () => {
      stopAutoplay();
      document.removeEventListener("visibilitychange", onVis);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // translate track
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  }, [index]);

  // touch/drag
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onDown = (e) => {
      dragging.current = true;
      startX.current = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
      track.style.transition = "none";
      stopAutoplay();
    };
    const onMove = (e) => {
      if (!dragging.current) return;
      const x = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
      deltaX.current = x - startX.current;
      track.style.transform = `translateX(calc(-${index * 100}% + ${deltaX.current}px))`;
    };
    const onUp = () => {
      if (!dragging.current) return;
      dragging.current = false;
      track.style.transition = "";
      if (Math.abs(deltaX.current) > SWIPE_THRESHOLD) {
        deltaX.current < 0 ? next() : prev();
      } else {
        // snap back
        track.style.transform = `translateX(-${index * 100}%)`;
      }
      deltaX.current = 0;
      startAutoplay();
    };

    track.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    track.addEventListener("touchstart", onDown, { passive: true });
    track.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onUp);

    return () => {
      track.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      track.removeEventListener("touchstart", onDown);
      track.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <section
      className="offer-slider"
      id="special-offers"
      aria-label="Спецпредложения"
      ref={rootRef}
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <div className="offer-slider__viewport" role="region">
        <div className="offer-slider__track" ref={trackRef}>
          {slides.map((s, i) => (
            <article
              className={`offer-slide ${i === index ? "is-active" : ""}`}
              key={i}
              style={{ backgroundImage: `url(${s.bg})` }}
            >
              <div className="offer-slide__content">
                <span className="offer-badge">{s.badge}</span>
                <h3 className="offer-title">{s.title}</h3>
                <p className="offer-sub">{s.sub}</p>
                <a className="offer-cta" href={s.cta.href}>
                  {s.cta.text}
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="offer-nav" aria-hidden="true">
          <button
            className="offer-arrow offer-arrow--prev"
            type="button"
            onClick={prev}
            aria-label="Предыдущий слайд"
          >
            ◀
          </button>
          <button
            className="offer-arrow offer-arrow--next"
            type="button"
            onClick={next}
            aria-label="Следующий слайд"
          >
            ▶
          </button>
          <div className="offer-dots" role="tablist" aria-label="Индикаторы слайдов">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`offer-dot ${i === index ? "is-active" : ""}`}
                onClick={() => go(i)}
                aria-label={`Перейти к слайду ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
