import ViewAbstract from "./ViewAbstract";
import { API_URL } from "../config";
import { copyToClipboard } from "../helpers";

class UrlListView extends ViewAbstract {
    _parentElement = document.querySelector('.js-url-list-view');

    _generateMarkup() {
        return `
            <div class="url-list__item">
                <span>${this._data.full}</span>
                <span>/${this._data.short}</span>
                <button data-url="${API_URL + this._data.short}" class="btn  js-copy-to-clipboard">Copy</button>
            </div>
        `;
    }

    onAfterRender() {
        const buttons = document.querySelectorAll('.js-copy-to-clipboard');
        buttons.forEach(button => button.addEventListener('click', this._copyBtnClickHandler.bind(this)));
    }

    _copyBtnClickHandler(event) {
        const button = event.target
        const url = button.dataset.url;
        copyToClipboard(url).then(() => {
            this._copiedBtnFeedback(button)
        });
    }

    _copiedBtnFeedback(button) {
        button.textContent = 'Copied!';
        button.classList.add('btn--secondary');
    }
}

export default new UrlListView();