import { api, Endpoints } from "./axios-config";

export async function getMyListTodo() {
  return await api.get<any>(Endpoints.myList);
}
