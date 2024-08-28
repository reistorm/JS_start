
const lightThemeClass = 'light-theme';
const darkThemeClass = 'dark-theme';
// Ключ для хранения темы в LocalStorage
const themeKey = 'theme';

// export для того, чтобы можно было использовать в main.js/другом файле
export function applyTheme(theme) {
  document.body.classList.remove(lightThemeClass, darkThemeClass);
  document.body.classList.add(theme);
}

// переключение темы
export function switchTheme() {
  // либо текущая тема из лок.хранилища, либо светлая тема
  const currentTheme = localStorage.getItem(themeKey) || lightThemeClass;
  const newTheme = currentTheme === lightThemeClass ? darkThemeClass : lightThemeClass;
  localStorage.setItem(themeKey, newTheme);
  // передаем новую тему
  applyTheme(newTheme);
}

// инициализация темы при загрузке страницы (текущая тема)
export function initializeTheme() {
  const savedTheme = localStorage.getItem(themeKey) || lightThemeClass;
  applyTheme(savedTheme);
}
