export class AuthService {
  // TODO: storage(localstorage 등) 따로 관리하기
  constructor(private storage: Storage = localStorage) {}

  getToken() {
    return this.storage.getItem('sessionToken');
  }

  setToken(token: string) {
    return this.storage.setItem('sessionToken', token);
  }

  removeToken() {
    this.storage.removeItem('sessionToken');
  }
}
