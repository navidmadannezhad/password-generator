// defining some elements
let passwordInput = document.getElementsByTagName('input')[0];
let messageField = document.querySelector('div.messages');

// Core functions
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
    let password = passwordInput.value;
    if(passwordCapitalCheck(password) && passwordLengthCheck(password) && passwordNumberExistenceCheck(password) && passwordSmallLetterCheck(password)){
        setNotErrorMessage('کلمه عبور مناسب می‌باشد')
    }
}

// Password Check functions --
function passwordLengthCheck(password){
    passwordLength = password.length;
    switch(true){
        case passwordLength < 16:
            setErrorMessage('تعداد کاراکتر ها کمتر از ۱۶ حرف است');
            break;
        case passwordLength == 16:
            return true;
            break;
        case passwordLength > 16:
            setErrorMessage('تعداد کاراکتر ها بیشتر از ۱۶ حرف است');
            break;
    }
}

function passwordNumberExistenceCheck(password){
    let contains_number = password.match(/[0-9]/g);
    if(contains_number){
        return true;
    }else{
        setErrorMessage('حداقل از یک عدد در رمز عبور استفاده کنید')
    }
}

function passwordSmallLetterCheck(password){
    let contains_smallLetter = password.match(/[a-z]/g);
    if(contains_smallLetter){
        return true;
    }else{
        setErrorMessage('حداقل از یک حرف کوچک در رمز عبور استفاده کنید');
    }
}

function passwordCapitalCheck(password){
    let contains_capitalLetter = password.match(/[A-Z]/g);
    if(contains_capitalLetter){
        return true;
    }else{
        setErrorMessage('حداقل از یک جرف بزرگ در رمز عبور استفاده کنید');
    }
}

// Message functions --
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