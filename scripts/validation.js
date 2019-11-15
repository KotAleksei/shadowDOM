function validationInput(event, input) {
  const value = event.target.value;
  const data = Number(event.data);
  const prevEl = input.previousElementSibling;
  const hasVisa = prevEl.classList.contains('partnerVisa');
  const hasMC = prevEl.classList.contains('partnerMasterCard');
  const ccInput = document.querySelector('cc-input');
  const ccInputHasProp = ccInput.getAttribute('Card-Brand');
  
  if( isNaN(data) ) {
    input.value = value.slice(0, value.length - 1);
  }
  if(value.length === 0) {
    if(hasVisa) prevEl.classList.remove('partnerVisa');
    if(hasMC) prevEl.classList.remove('partnerMasterCard');
    if(ccInputHasProp) ccInput.removeAttribute('Card-Brand');
  }

  if(data){
    switch (value.length) {
      case 1: {
        if(value === '4') {
          if(hasVisa) break;
          if(hasMC) prevEl.classList.remove('partnerMasterCard')
          prevEl.classList.add('partnerVisa');
          ccInput.setAttribute('Card-Brand', 'Visa');
        }
        if(value === '5'){
          if(hasMC) break;
          if(hasVisa) prevEl.classList.remove('partnerVisa');
          prevEl.classList.add('partnerMasterCard');
          ccInput.setAttribute('Card-Brand', 'MasterCard');
        }
        break;
      }
      case 4:
      case 9:
      case 14:{
        input.value = value.slice(0, value.length) + " ";
        break;
      }
    }
  }
}

export default validationInput;