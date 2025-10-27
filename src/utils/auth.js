const USERS_KEY = 'cm-users'

export function loadUsers() {
  try { return JSON.parse(localStorage.getItem(USERS_KEY) || '[]') } catch { return [] }
}
export function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}
export function registerUser({ email, password, name }) {
  const users = loadUsers()
  if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
    return { ok: false, message: 'Пользователь уже зарегистрирован' }
  }
  users.push({ email, password, name })
  saveUsers(users)
  return { ok: true }
}
export function checkCredentials({ email, password }) {
  const users = loadUsers()
  const u = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password)
  if (u) return { ok: true, user: { email: u.email, name: u.name } }
  return { ok: false, message: 'Неверная почта или пароль' }
}
