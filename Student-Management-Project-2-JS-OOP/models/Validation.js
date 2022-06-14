var Validation = function () {

    // * Check Empty 
    this.checkEmpty = function(value, name, idError) {
        if (value.trim() === '') {
            document.getElementById(idError).innerHTML = name + ' must be filled !';
            document.getElementById(idError).style.display = 'block';
            return false; 
        } else {
            document.getElementById(idError).innerHTML = '';
            document.getElementById(idError).style.display = 'none';
            return true; 
        }
    }

    // * Check user's input is all numbers 
    this.checkAllNumbers = function(value, name, idError) {
        var regexNum = /^[-+]?[0-9]+\.[0-9]+$/;

        if (regexNum.test(value)) {
            document.getElementById(idError).innerHTML = '';
            document.getElementById(idError).style.display = 'none';
            return true; 
        } else {
            document.getElementById(idError).innerHTML = name + ' must be all numbers !';
            document.getElementById(idError).style.display = 'block';
            return false;
        }
    }

    // * Check the length of user's input 
    this.checkLengthOfInput = function(value, name, idError, minLen, maxLen) {
        if (value.trim().length < minLen || value.trim().length > maxLen) {
            document.getElementById(idError).innerHTML = name + ' must have from ' + minLen + ' to ' + maxLen + ' characters !';
            document.getElementById(idError).style.display = 'block';
            return false; 
        } else {
            document.getElementById(idError).innerHTML = '';
            document.getElementById(idError).style.display = 'none';
            return true; 
        }
    }

    // * Check value of scores from 0 - 10 
    this.checkValueOfScore = function(value, name, idError, minVal, maxVal) {
        if (Number(value) >= minVal && Number(value) <= maxVal) {
            document.getElementById(idError).innerHTML = '';
            document.getElementById(idError).style.display = 'none';
            return true; 
        } else {
            document.getElementById(idError).innerHTML = name + ' must be from 0 - 10 !';
            document.getElementById(idError).style.display = 'block';
            return false; 
        }
    }

    // * Check user's input is all letters 
    this.checkAllLetters = function(value, name, idError) {
        regexLetter = /^[A-Za-z ]+$/;

        if (regexLetter.test(value)) {
            document.getElementById(idError).innerHTML = '';
            document.getElementById(idError).style.display = 'none';
            return true; 
        } else {
            document.getElementById(idError).innerHTML = name + ' must be all letters !';
            document.getElementById(idError).style.display = 'block';
            return false;
        }
    }
}