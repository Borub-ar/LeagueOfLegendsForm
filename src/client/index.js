// import 'normalize.css';
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

// import Swup from 'swup';
// import SwupFormsPlugin from '@swup/forms-plugin';


const emailForm = document.querySelector('.main-container__form');
const emailInput = document.querySelector('.main-container__input');
const placeholder = document.querySelector('.main-container__placeholder');
const errorIcon = document.querySelector('.main-container__error-icon');
const errorMsg = document.querySelector('.main-container__error-msg');


// const swup = new Swup({
//     plugins: [new SwupFormsPlugin()]
// });

export default class App {
    constructor() {
        // Add event handlers
        emailInput.addEventListener('focus', this._minimizeEmailPlaceholder.bind(this));
        emailInput.addEventListener('focusout', this._normalizeEmailPlaceholder.bind(this));
        emailInput.addEventListener('focusout', this._emailValidation.bind(this));
        emailForm.addEventListener('submit', this._emailValidation.bind(this));
    }

    _minimizeEmailPlaceholder() {
        placeholder.classList.add('main-container__placeholder--focus');
    }

    _normalizeEmailPlaceholder() {
        if (emailInput.value) return;
        placeholder.classList.remove('main-container__placeholder--focus');
    }

    _emailValidation(e) {
        const regex = /@/;

        if (!emailInput.value || !regex.test(emailInput.value)) {
            e.preventDefault();
            // removing required swup attribute
            emailForm.removeAttribute('data-swup-form');
            this._showEmailError();
        }

        if (emailInput.value && regex.test(emailInput.value)) {
            // setting required swup attribute
            emailForm.setAttribute('data-swup-form', '');
            this._hideEmailError();
        }
    }

    _showEmailError() {
        emailInput.classList.add('main-container__input--error');
        errorIcon.classList.add('main-container__error-icon--show');
        errorMsg.classList.add('main-container__error-msg--show');
    }

    _hideEmailError() {
        emailInput.classList.remove('main-container__input--error');
        errorIcon.classList.remove('main-container__error-icon--show');
        errorMsg.classList.remove('main-container__error-msg--show');
    }
}