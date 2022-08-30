export default class ViewAbstract {
    _data;

    _clear() {
        this._parentElement.innerHTML = '';
    }

    render(data, clear = false) {
        if ( !data || Array.isArray(data) && data.length === 0 ) {
            return;
        }

        this._data = data;
        const markup = this._generateMarkup();
        
        if (clear) {
            this._clear();
        }

        this._parentElement.insertAdjacentHTML('afterbegin', markup);

        this.onAfterRender();
    }

    // Custom event
    onAfterRender() {}
}