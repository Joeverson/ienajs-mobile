// a library to wrap and simplify api calls
import {
  create
} from "apisauce";
import Auth from "../Helpers/Auth";
import {
  NavigationActions
} from "react-navigation";

// our 'constructor'
const api = create({
  baseURL: 'http://dupdevelop.com.br:3007',
  headers: {
    "Cache-Control": "no-cache",
    Authorization: ""
  },
  timeout: 10000
});

/**
 * Interceptando as informações que vem da API
 * para fazer alguma determinada ação com os
 * dados de retorno.
 */
api.addResponseTransform(response => {

});

// quando faz uma requisição a api ele deve adicioanr o token
api.addAsyncRequestTransform(async req => {
  const token = await Auth.getToken();
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
});

export default api;
