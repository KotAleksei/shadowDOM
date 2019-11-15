const styles = `
.warning {
  display: block;
  text-align: right;
  color: red;
  margin-top: -20px;
  margin-bottom: 10px;
}
.creditCard {
  display: block;
  width: 500px;
  height: 300px;
  border: 1px solid grey;
  border-radius: 20px;
  padding: 40px;
  margin: 0 auto;
  position: relative;
  margin-top: 150px;
  font-family: Muli,sans-serif;
}
label {
  font-size: 20px;
}
.partnerVisa {
  position: absolute;
  content: '';
  top: 70px;
  right: 40px;
  width: 50px;
  height: 50px;
  background-size: cover;
  background-image: url('./img/visa-1527435-1298265.png');
  animation: addImg 0.4s ease;
}
.partnerMasterCard {
  position: absolute;
  content: '';
  top: 70px;
  right: 40px;
  width: 50px;
  height: 50px;
  background-size: cover;
  background-image: url('./img/mastercard-logo-icon-png_44630.png');
  animation: addImg 0.4s ease;
}
@keyframes addImg {
  from{
    opacity: 0
  } to {
    opacity: 1;
  }
}
.valueOfCard {
  display: block;
  width: 350px;
  height: 40px;
  font-size: 23px;
  padding-left: 25px;
  margin-top: 10px;
}
.btnSubmit {
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: 20px;
  background-color: #343a40;
  color: white;
}
:host .btnSubmit:hover {
  cursor: pointer;
  transition: .3s;
  background-color: green;
}
input {
  outline: none;
  border: 1px solid grey;
}
input:focus {
  border: 1px solid blue;
}
input:not(:focus):valid:not(:placeholder-shown) {
  border: 1px solid green;
}
input:not(:focus):invalid:not(:placeholder-shown) {
  border: 1px solid red;
}
.modalWindow {
  display: none;
}
.modalWindow.show {
  display: block;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
}
.modalWindow.show > .content {
  font-size: 21px;
  padding-top: 20px;
  width: 300px;
  height: 150px;
  border-radius: 10px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding-top: 50px;
  z-index: 5;
}
.content > button {
  display: block;
  margin: 0 auto;
  width: 100px;
  height: 30px;
  margin-top: 20px;
}
`;

export default styles;