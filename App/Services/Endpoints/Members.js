import API from "../Api"

export const save = data => API.post("/member", data)
export const list = data => API.get("/member")