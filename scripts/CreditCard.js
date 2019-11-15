import validationInput from './validation';
import styles from './styles';

export default class CreditCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const formEl = document.createElement('form');
    const btnEl = document.createElement('button');
    const labelEl = document.createElement('label');
    const style = document.createElement('style');
    const warnMessage = document.createElement('span');
    const addImgPartnerCard = document.createElement('div');
    const getInputLink = document.querySelector('cc-input').shadowRoot.children[0];

    labelEl.textContent = 'Card for payment';
    btnEl.textContent = 'Submit';
    warnMessage.textContent = '*card payments only Visa and MasterCard';
    style.textContent = styles;

    formEl.classList.add('creditCard');
    btnEl.classList.add('btnSubmit');
    warnMessage.classList.add('warning');


    shadow.appendChild(style); 
    shadow.appendChild(formEl);
    formEl.appendChild(warnMessage);
    warnMessage.insertAdjacentHTML('afterend', `
      <div class="modalWindow">
        <div class="content">
            <span>Payment was succes</span>
            <button class='btn' type='button'>OK</button>
        </div>
    </div>`);
    formEl.appendChild(labelEl);
    formEl.appendChild(addImgPartnerCard);
    formEl.appendChild(getInputLink);
    formEl.appendChild(btnEl);

    const getShadowLink = document.querySelector('credit-card').shadowRoot;
    const getModalWindow = getShadowLink.querySelector('.modalWindow');
    const getBtnLink = getShadowLink.querySelector('.btn');
    
    
    formEl.addEventListener('submit', e => {
      e.preventDefault();
      getModalWindow.classList.add('show');
    })
    getBtnLink.addEventListener('click', e => getModalWindow.classList.remove('show'));
    getInputLink.addEventListener('input', e => validationInput(e, getInputLink));
  }
}