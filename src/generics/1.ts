import axios from "axios";

export async function fetchData<T extends string>(url: T): Promise<object> {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
