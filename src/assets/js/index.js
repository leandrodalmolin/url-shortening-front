import '@scss/main.scss';
import UrlShortenerForm from "./forms/UrlShortenerForm";
import MobileMenu from "./components/MobileMenu";
import Store from './store';
import UrlListView from './views/UrlListView';

/**
 * LocalStorage manager
 */
const store = new Store('shortenedUrls');

/**
 * Renders urls stored in the browser
 */
UrlListView.render(store.getState());

/**
 * Handles form submit
 */
new UrlShortenerForm(
    '.js-form',
    store,
    ['.js-form-full-url'],
);

/**
 * Toggles menu (open/close)
 */
new MobileMenu(
    '.js-btn-menu',
    ['.js-btn-menu', '.js-header-nav-links']
);