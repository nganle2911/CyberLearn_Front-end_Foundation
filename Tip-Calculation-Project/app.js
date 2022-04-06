function getElement(id) {
    return document.getElementById(id); 
}

function calculateTip() {
    var sumOfBill = getElement("billAmount").value;
    var satisfiedAndTip = getElement("serviceQuality").value;
    var numOfPeople = getElement("contributor").value; 

    //Validation
    if (sumOfBill === "" || satisfiedAndTip == 0) {
        alert("Please choose value");
        return; 
    }


    //Check whether continue to enter number of contributors or not 
    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
        getElement("each").style.display = "none";
    } else {
        getElement("each").style.display = "block";
    }

    //Calculate 
    var sumOfTip = (sumOfBill * satisfiedAndTip) / numOfPeople; 
    //Round to 2-digit decimal 
    sumOfTip = Math.round(sumOfTip*100)/100;
    //Always having 2-digit decimal 
    sumOfTip = sumOfTip.toFixed(2); 

    //Display div-totalTip zone
    getElement("totalTip").style.display = "block";
    getElement("tip").innerHTML = sumOfTip;
}

getElement("totalTip").style.display = "none";
getElement("each").style.display = "none"; 

//Assign an event for button having id = calculate
getElement("calculate").onclick = function() {
    calculateTip();
}