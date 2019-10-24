import {
  AsyncStorage
}
from 'react-native'

class Auth {
  async isLogged() {
    return JSON.parse(await AsyncStorage.getItem('@novaalianca/auth'))
  }

  async setLogged(bool) {
    await AsyncStorage.setItem('@novaalianca/auth', JSON.stringify(bool))
  }

  async getUser() {
    return JSON.parse(await AsyncStorage.getItem('@novaalianca/user'))
  }

  async setUser(user) {
    await AsyncStorage.setItem('@novaalianca/user', JSON.stringify(user))
    await this.setLogged(true)
  }

  async getToken() {
    return JSON.parse(await AsyncStorage.getItem('@novaalianca/token'))
  }

  async setToken(token) {
    await AsyncStorage.setItem('@novaalianca/token', JSON.stringify(token))
  }

  async logout() {
    await AsyncStorage.setItem('@novaalianca/token', 'false')
    await AsyncStorage.setItem('@novaalianca/user', '{}')
    await AsyncStorage.setItem('@novaalianca/auth', 'false')
    await AsyncStorage.clear()
  }
}

export default new Auth()
