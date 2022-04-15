
window.addEventListener("load", function() {
    truncateCardTitle();
});

function truncateCardTitle() {
    var cardList = document.getElementsByClassName("card-title");
    console.log(cardList);

    for (var i = 0; i < cardList.length; i++) {
        var text = cardList[i].innerHTML; 
        var newText = truncateString(text, 35); 
        cardList[i].innerHTML = newText;
    }
}

// To shorten the string 
function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "..."; 
    } else {
        return str; 
    }
}

