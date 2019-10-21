import API from "../Api"

export const save = (data) => API.post("/member", data)