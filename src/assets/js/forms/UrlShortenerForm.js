import UrlListView from "../views/UrlListView";
import { AJAX } from "../helpers";
import { PERSIST_URL_API_ENDPOINT } from "../config";

export default class UrlShortenerForm {
    _formElement;
    _urlInput;
    _submitButton;
    _inputSelectorsToClear;
    _isFormValid = true;

    constructor(selector, inputSelectorsToClear = []) {
        if (!selector) {
            return;
        }

        this._formElement = document.querySelector(selector);
        this._urlInput = document.getElementById('fullUrl');
        this._submitButton = this._formElement.querySelector('button[type="submit"]');
        this._inputSelectorsToClear = inputSelectorsToClear;
        this._setEvents();
    }

    _setEvents() {
        this._urlInput.addEventListener('keydown', this._removeError.bind(this));
        this._formElement.addEventListener('submit', this._onSubmit.bind(this));
    }

    async _onSubmit(event) {
        event.preventDefault();
        this._showLoading();
        
        this._validateForm()
        if (!this._isFormValid) {
            this._hideLoading();
            return;
        }

        try {
            const data = await this._persistUrl();
            this._clearInputFields();
            UrlListView.render(data);
        }
        // Server side validation
        catch (error) {
            this._showError(this._urlInput, error.message);
        }

        this._hideLoading();
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

    _showLoading() {
        this._submitButton.classList.add('btn--loading');
    }

    _hideLoading() {
        this._submitButton.classList.remove('btn--loading');
    }

    /**
     * Client side validation
     */
    _validateForm() {
        this._isFormValid = true;

        if ( this._isRequired(this._urlInput) ) {
            this._isFormValid = false;
            this._showError(this._urlInput, 'Please add a link');
        }
        else if ( !this._isValidUrl(this._urlInput.value) ) {
            this._isFormValid = false;
            this._showError(this._urlInput, 'Please add a valid link');
        }
    }

    _isRequired(input) {
        return input.hasAttribute('required') && input.value ==='';
    }

    _isValidUrl(urlString) {
        try { 
            return Boolean(new URL(urlString)); 
        } catch(e) { 
            return false; 
        }
    }

    _showError(input, message) {
        const formField = input.parentElement;
        formField.classList.add('error');

        const error = formField.querySelector('small');
        error.textContent = message;
        error.focus();
    }

    _removeError(event) {
        const formField = event.target.parentElement;
        formField.classList.remove('error');

        const error = formField.querySelector('small');
        error.textContent = '';
    }
}