import API from "../Api"

export const login = data => API.post("/login", data)