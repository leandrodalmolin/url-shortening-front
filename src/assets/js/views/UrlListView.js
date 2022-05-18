import ViewAbstract from "./ViewAbstract";
import { API_URL } from "../config";

class UrlListView extends ViewAbstract {
    _parentElement = document.querySelector('.js-url-list-view');

    _generateMarkup() {
        return `
            <div class="url-list__item">
                <span>${this._data.full}</span>
                <span>/${this._data.short}</span>
                <a href="${API_URL + this._data.short}" class="btn">Visit</a>
            </div>
        `;
    }
}

export default new UrlListView();