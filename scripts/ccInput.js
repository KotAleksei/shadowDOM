export default class CCInput extends HTMLElement {
  constructor() {
    super();
    const shadowEl = this.attachShadow({mode: 'open'});
    const inputEl = document.createElement('input');
    inputEl.setAttribute('type', 'text');
    inputEl.setAttribute('placeholder', 'xxxx xxxx xxxx xxxx');
    inputEl.setAttribute('maxlength', '19');
    inputEl.setAttribute('required', 'true');
    inputEl.setAttribute('pattern', `^(?:[4-5]{1})\\d{3}\\s\\d{4}\\s\\d{4}\\s\\d{4}`);
    inputEl.classList.add('valueOfCard');
    
    shadowEl.appendChild(inputEl);
  }
}