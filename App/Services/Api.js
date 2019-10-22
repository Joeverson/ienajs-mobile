// a library to wrap and simplify api calls
import {
  create
} from "apisauce";
import Auth from "../Helpers/Auth";
import {
  NavigationActions
} from "react-navigation";
import { NavigationActions } from 'react-navigation'
import { store } from '../Containers/App'

// our 'constructor'
const api = create({
  baseURL: 'http://192.168.1.6:3007/api/v1',
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
  if (response.ok) {
    if (!response.data.status.success) {
      store.dispatch(NotificationActions.danger(response.data.status.message))
      response.done = false
    } else {
      response.done = true
    }
  } else {
    response.done = false
  }
});

// quando faz uma requisição a api ele deve adicioanr o token
api.addAsyncRequestTransform(async req => {
  const token = await Auth.getToken();
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
});

export default api;
