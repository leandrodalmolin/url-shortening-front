import '../scss/main.scss';
import UrlShortenerForm from "./forms/UrlShortenerForm";
import MobileMenu from "./components/MobileMenu";

/**
 * Handles form submit
 */
new UrlShortenerForm(
    '.js-form',
    ['.js-form-full-url']
);

/**
 * Toggles menu (open/close)
 */
new MobileMenu(
    '.js-btn-menu',
    ['.js-btn-menu', '.js-header-nav-links']
);