import 'regenerator-runtime/runtime'; // polyfill for async functions
import { TIMEOUT_SEC } from "./config";

const timeout = function (s) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};

export const AJAX = async function (url, payload = null) {
    // eslint-disable-next-line no-useless-catch
    try {
        const fetchPromise = !payload
            ? fetch(url)
            : fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
        ;

        // Timeout prevents bad internet connections running fetch function forever
        const res = await Promise.race([fetchPromise, timeout(TIMEOUT_SEC)]);
        const data = await res.json();

        if (!res.ok) {
            // Errors related to server side validation
            if (data.errors) {
                throw new Error(data.errors[0].msg);
            }

            throw new Error(`${data.message} (${res.status})`);
        }

        return data;
    } catch (err) {
        throw err;
    }
};