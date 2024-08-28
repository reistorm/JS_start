// асинхр.функция на запрос репозитория
export async function fetchRepos(username) {
  // запрос на получения репозитория пользователя
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  // смотрим статус служебной инф-ии
  if (!response.ok) {
    throw new Error('User not found');
  }
  // возвращаем данные 
  return response.json();
}
