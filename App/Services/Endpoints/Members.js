import API from "../Api"

export const save = data => API.post("/member", data)
export const update = data => API.put(`/member/${data._id}`, data)
export const list = () => API.get("/member")