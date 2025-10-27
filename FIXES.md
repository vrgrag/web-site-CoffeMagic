# Быстрый фикс ошибки '@vitejs/plugin-react'
Ошибка:
> Cannot find package '@vitejs/plugin-react' imported from vite.config.js

Решение:
1) Установите плагин:  
   `npm i -D @vitejs/plugin-react`
2) Запустите снова:  
   `npm run dev`

Примечания:
- Требуется Node.js 18+ для Vite 5.
- Если после установки всё ещё падает, удалите кэш/пересоберите:
  - Windows PowerShell: `rd /s /q node_modules` + удалить `package-lock.json`, затем `npm i`.
