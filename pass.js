// defining some elements
let passwordInput = document.getElementsByTagName('input')[0];
let messageField = document.querySelector('div.messages');
// defining functions

function putGeneratedPasswordInTextArea(){
    passwordInput.value = generatePassword();
}

function generatePassword(){
    let allUsableCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let generatedPassword = "";
    for(let passwordCharCount = 0; passwordCharCount <= 15; passwordCharCount++){
        let randomCharCount = Math.floor(Math.random()*allUsableCharacters.length);
        generatedPassword = generatedPassword + allUsableCharacters[randomCharCount];
    }
    
    return generatedPassword;
}

function checkPassword(){
    let passwordLength = passwordInput.value.length;
    switch(true){
        case passwordLength < 16:
            setErrorMessage('تعداد کاراکتر ها کمتر از ۱۶ حرف است');
            break;
        case passwordLength == 16:
            setNotErrorMessage('کلمه عبور مناسب است');
            break;
        case passwordLength > 16:
            setErrorMessage('تعداد کاراکتر ها بیشتر از ۱۶ حرف است');
            break;
    }
}
   
function setErrorMessage(errorMessage){
   messageField.innerText = errorMessage;
    
    let messageFieldClasses = messageField.classList;
    messageFieldClasses.contains('notError') ? messageFieldClasses.remove('notError') : messageFieldClasses.add('error'); 
    
    messageFieldClasses.add('error');
}

function setNotErrorMessage(notErrorMessage){
    messageField.innerText = notErrorMessage;
    
    let messageFieldClasses = messageField.classList;
    messageFieldClasses.contains('error') ? messageFieldClasses.remove('error') : messageFieldClasses.add('notError'); 
    
     messageFieldClasses.add('notError');
}