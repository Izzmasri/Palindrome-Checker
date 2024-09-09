
const textInput = document.querySelector('#text-input');
const checkBtn = document.querySelector('#check-btn');
const textResult = document.querySelector('#result');

const emptyInput = ()=>{
    if(textInput.value === ""){
        alert("Please input a value");
        return true;
    }
    return false;
}

const checkPalindrome = () =>{
    if(!emptyInput()){

        const regex = /[^a-z0-9]/gi;
        const inputValue = textInput.value.replace(regex, '').toLowerCase();
        const reversedInput = inputValue.split('').reverse().join('');
        if(inputValue === reversedInput){
            textResult.innerHTML = `
<span class="inner-span"><strong class="rubik-bubbles-regular">${textInput.value}</strong> is a palindrome</span>`;
        }else{
            textResult.innerHTML = `
<span class="inner-span"><strong class="rubik-bubbles-regular">${textInput.value} </strong>is not a palindrome</span>`;
        }
    }
}


checkBtn.addEventListener("click",checkPalindrome);