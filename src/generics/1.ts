import axios from "axios";

// Не розумію чому повертаємо T, якщо Т це рядок. А в умові завдання сказано, що повертати потрібно об'єкт?
export async function fetchData<T extends string>(url: T): Promise<T> {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
