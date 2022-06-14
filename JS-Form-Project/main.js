var checkValidation = function() {
    // todo: METHOD 1
    /* // Check lastName 
    var lastName = document.getElementById("lastName").value;
    if (lastName.trim() === "") {
        document.getElementById("error_lastName").innerHTML = "Last Name must be filled !"
    } else {
        document.getElementById("error_lastName").innerHTML = ""; 
    }

    // Check firstName
    var firstName = document.getElementById("firstName").value;
    if (firstName.trim() === "") {
        document.getElementById("error_firstName").innerHTML = "First Name must be filled !"
    } else {
        document.getElementById("error_firstName").innerHTML = "";
    } */

    // todo: METHOD 2
    // Check lastName
    /* var lastName = document.getElementById("lastName").value;
    var checkLastName = kiemTraRong(lastName, "error_lastName", "Last Name");

    return checkLastName; */

    // todo: METHOD 3
    var valid = true; //Put flag 

    // Check lastName 
    /* if (verifyEmpty("lastName", "error_lastName")) {
        valid = true; //page will be submitted 
    } else {
        valid = false; //page will not be submitted
    }

    // Check firstName 
    if (verifyEmpty("firstName", "error_firstName")) {
        valid = true;
    } else {
        valid = false; 
    }

    return valid; */
    
    // *A shorten way 

    // Verify empty input
    valid = verifyEmpty("lastName", "error_lastName") & verifyEmpty("firstName", "error_firstName") & verifyEmpty("password", "error_password" ) & verifyEmpty("confirmPassword", "error_confirmPassword") & verifyEmpty("phone", "error_phone") & verifyEmpty("email", "error_email");

    // Verify input is all letters 
    valid &= verifyAllLetters("lastName", "error_lastName_all_letter") & verifyAllLetters("firstName", "error_firstName_all_letter"); 

    // Verify input is all numbers 
    valid &= verifyAllNumbers("phone", "error_phone");
    
    // Verify email format 
    valid &= verifyEmail("email", "error_email");

    // Verify the length of password 
    valid &= verifyLengthPassword("password", "error_password_min_max_length");

    // Verify confirm password 
    /* valid &= verifyLengthPassword("confirmPassword", "error_confirmPassword", 32, 6); */

    // *Check valid variable 
    if (!valid) {
        return false; 
    }
    return true;
}


// todo: METHOD 2 
/* var kiemTraRong = function (value, selectorError, name) {
    if (value.trim() === "") {
        document.getElementById(selectorError).innerHTML = name + " must be filled !";
        return false; 
    } else {
        document.getElementById(selectorError).innerHTML = name + ""; 
        return true;
    }
} */

// todo: METHOD 3 - The shortest way 
var verifyEmpty = function (idValue, idError) {
    var inputText = document.getElementById(idValue); 

    if (inputText.value.trim() === "") {
        document.getElementById(idError).innerHTML = inputText.name + " must be filled !";
        document.getElementById(idError).style.display = "block";
        return false;
    } else {
        document.getElementById(idError).innerHTML = "";
        document.getElementById(idError).style.display = "none";
        return true;
    }
}


// todo: Check all letters for input 
var verifyAllLetters = function(idValue, idError) {

    // Take the value input by selector
    var inputTxt = document.getElementById(idValue);

    var regexLetter = /^[A-Za-z ]+$/; 

    if (regexLetter.test(inputTxt.value)) {
        // Valid
        document.getElementById(idError).innerHTML = "";
        document.getElementById(idError).style.display = "none";
        return true;
    } else {
        // Invalid
        document.getElementById(idError).innerHTML = inputTxt.name + " must be all letters !";
        document.getElementById(idError).style.display = "block";
    }
}

// todo: Check all numbers
var verifyAllNumbers = function(idValue, idError) {

    var inputTxt = document.getElementById(idValue);
    var regexNumbers = /^[0-9]+$/;

    if (regexNumbers.test(inputTxt.value)) {
        document.getElementById(idError).innerHTML = "";
        document.getElementById(idError).style.display = "none";
        return true;
    } else {
        document.getElementById(idError).innerHTML = inputTxt.name + " must be all numbers !";
        document.getElementById(idError).style.display = "block";
        return false; 
    }
}

// todo: Check email regex validation
var verifyEmail = function(idValue, idError) {
    var inputTxt = document.getElementById(idValue);
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (regexEmail.test(inputTxt.value)) {
        document.getElementById(idError).innerHTML = "";
        document.getElementById(idError).style.display = "none";
        return true; 
    } else {
        document.getElementById(idError).innerHTML = inputTxt.name + " is invalid !";
        document.getElementById(idError).style.display = "block";
        return false;
    }
}

// todo: Check the length of password 
var verifyLengthPassword = function(idValue, idError) {
    var inputTxt = document.getElementById(idValue);

    if (inputTxt.value.length >= inputTxt.value.minLength && inputTxt.value.length <= inputTxt.value.maxLength) {
        document.getElementById(idError).innerHTML = "";
        document.getElementById(idError).style.display = "none";
        return true;
    } else {
        document.getElementById(idError).innerHTML = inputTxt.name + " is invalid !";
        document.getElementById(idError).style.display = "block";
        return false; 
    }

}

// todo: Check value of password 
/* var verifyValue = function(idValue, idError, maxVal, minVal) {
    var inputTxt = document.getElementById(idValue);
    
    if (inputTxt.value > maxVal || inputTxt.value < minVal) {
        document.getElementById(idError).innerHTML = inputTxt.name + " is invalid !";
        document.getElementById(idError).style.display = "block";
        return false;
    } else {
        document.getElementById(idError).innerHTML = "";
        document.getElementById(idError).style.display = "none";
        return true;
    }
} */


document.getElementById("lastName").onblur = checkValidation; 
document.getElementById("firstName").onblur = checkValidation; 

document.getElementById("btnRegister").onclick = checkValidation;