export default class MobileMenu {
    _triggerElement;
    _elementSelectorsToToggle;
    _toggleClass;

    constructor(selector, elementSelectorsToToggle = [], toggleClass = 'open') {
        if (!selector) {
            return;
        }

        this._triggerElement = document.querySelector(selector);
        this._elementSelectorsToToggle = elementSelectorsToToggle;
        this._toggleClass = toggleClass;
        this._setEvents();
    }

    _setEvents() {
        this._triggerElement.addEventListener('click', this._toggleElements.bind(this));
        document.addEventListener('keyup', this._closeMenuOnEscape.bind(this));
    }

    _toggleElements() {
        if (!this._elementSelectorsToToggle) {
            return;
        }

        const elementSelectors = this._elementSelectorsToToggle.join(',');
        const elements = document.querySelectorAll(elementSelectors);
        elements.forEach(element => {
            element.classList.toggle(this._toggleClass);
        });
    }

    _closeMenuOnEscape(event) {
        if (this._triggerElement.classList.contains(this._toggleClass) && event.code === 'Escape') {
            this._triggerElement.click();
        }
    }
}