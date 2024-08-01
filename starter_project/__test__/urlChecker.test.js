/**
 * @jest-environment jsdom
 */
const { urlChecking } = require("../src/client/js/urlChecker");

describe('URL Checking Function', () => {

    test('Email is not a URL', () => {
        expect(urlChecking("mailto:zeiad@gmail.com")).toBeFalsy();
    });

    test('Valid URL with http', () => {
        expect(urlChecking("http://www.google.com")).toBeTruthy();
    });

    test('Valid URL with https', () => {
        expect(urlChecking("https://www.google.com")).toBeTruthy();
    });

    test('URL without protocol', () => {
        expect(urlChecking("www.google.com")).toBeTruthy();
    });

    test('Valid IP address URL', () => {
        expect(urlChecking("http://192.168.1.1")).toBeTruthy();
    });

    test('URL with port number', () => {
        expect(urlChecking("http://localhost:3000")).toBeTruthy();
    });

    test('URL with path', () => {
        expect(urlChecking("http://www.google.com/search")).toBeTruthy();
    });

    test('URL with query string', () => {
        expect(urlChecking("http://www.google.com/search?q=test")).toBeTruthy();
    });

    test('URL with fragment', () => {
        expect(urlChecking("http://www.google.com/search#fragment")).toBeTruthy();
    });
});