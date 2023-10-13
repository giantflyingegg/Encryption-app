
//get buttons
const encryptButton = document.getElementById('encryptButton');
const decryptButton = document.getElementById('decryptButton');

//encrypt function
function encrypt() {

  let inputText = document.getElementById('input').value;
  console.log(inputText);
  let key = document.getElementById('key').value;

  //check if key is a number
  if (!/^\d+$/.test(key)) {
    alert("Key must only contain numeric characters!");
    return;}

  let encryptedText = '';
  let resultArr = [];
  let keyStr = key.toString();
  let keyArr = keyStr.split("").map(Number);
  let j = 0;

  for (let i = 0; i < inputText.length; i++) {
    let charCode = inputText.charCodeAt(i);
    resultArr.push(charCode - keyArr[j]);
     j = (j+1) % keyArr.length; 
  } return String.fromCharCode(...resultArr);
}

//decrypt function
function decrypt() {

  let inputText = document.getElementById('input').value;
  console.log(inputText);
  let key = document.getElementById('key').value;

   //check if key is a number
   if (!/^\d+$/.test(key)) {
    alert("Key must only contain numeric characters!");
    return;}

  let decryptedText = '';
  let resultArr = [];
  let keyStr = key.toString();
  let keyArr = keyStr.split("").map(Number);
  let j = 0;

  for (let i = 0; i < inputText.length; i++) {
    let charCode = inputText.charCodeAt(i);
     resultArr.push(charCode + keyArr[j]);
     j = (j+1) % keyArr.length; 
     
  } return String.fromCharCode(...resultArr);
}

//event listeners
encryptButton.addEventListener('click', () => {
  console.log('encrypt button clicked');
  const outputText = encrypt();
  document.getElementById('output').innerHTML = outputText;
});

decryptButton.addEventListener('click', () => {
  console.log('decrypt button clicked');
  const outputText = decrypt();
  document.getElementById('output').innerHTML = outputText;
});

document.getElementById('output').addEventListener('cut', (e) => {
  e.preventDefault();
});

  