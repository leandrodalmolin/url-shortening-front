import UrlListView from "../views/UrlListView";
import { AJAX } from "../helpers";
import { PERSIST_URL_API_ENDPOINT } from "../config";

export default class UrlShortenerForm {
    _formElement;
    _inputSelectorsToClear;

    constructor(selector, inputSelectorsToClear = []) {
        if (!selector) {
            return;
        }

        this._formElement = document.querySelector(selector);
        this._inputSelectorsToClear = inputSelectorsToClear;
        this._setEvents();
    }

    _setEvents() {
        this._formElement.addEventListener('submit', this._onSubmit.bind(this));
    }

    async _onSubmit(event) {
        event.preventDefault();
        const data = await this._persistUrl();
        this._clearInputFields();
        UrlListView.render(data);
    }

    async _persistUrl() {
        const formData = new FormData(event.target);
        const payload = { fullUrl: formData.get('fullUrl') };
        return await AJAX(PERSIST_URL_API_ENDPOINT, payload);
    }

    _clearInputFields() {
        if (!this._inputSelectorsToClear) {
            return;
        }

        const inputSelectorsToClear = this._inputSelectorsToClear.join(',');
        const inputs = document.querySelectorAll(inputSelectorsToClear);
        inputs.forEach(input => {
            input.value = '';
        });
    }
}