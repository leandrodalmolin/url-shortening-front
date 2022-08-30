export default class Store {
  _state = [];
  _storageKey = '';

  constructor(storageKey = '') {
    this._setStorageKey(storageKey);
    this._load();
  }

  getState() {
    return this._state;
  }

  setState(newState) {
    this._state = newState;
  }

  _setStorageKey(newKey) {
    this._storageKey = newKey;
  }

  /**
   * Load state from localStorage 
   */
  _load() {
    const storage = localStorage.getItem(this._storageKey);
    if (!storage) return;
    this.setState(JSON.parse(storage));
  }

  /**
   * Persist state to localStorage 
   */
  persist() {
    localStorage.setItem(this._storageKey, JSON.stringify(this.getState()));
  }
}