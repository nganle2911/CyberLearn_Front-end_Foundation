
// todo: Define click event for Confirm button
var confirmProcess = function () {
    // * Get user's info from input tag
    var studentCode = document.getElementById("studentCode").value;
    var studentName = document.getElementById("studentName").value;
    var studentType = document.getElementById("studentType").value;
    var mathScore = document.getElementById("math").value;
    var physicsScore = document.getElementById("physics").value;
    var chemistryScore = document.getElementById("chemistry").value;
    var trainingScore = document.getElementById("trainingScore").value; 

    var averageScore = calculateAverageScore(mathScore, physicsScore, chemistryScore);
    // * toFixed() : to round the decimal point  
    // console.log(averageScore.toFixed(2));

    var ranking = studentRanking(averageScore, trainingScore);
    // console.log(ranking);

    // todo: Print results 
    document.querySelector("#txtStudentName").innerHTML = studentName;
    document.querySelector("#txtStudentCode").innerHTML = studentCode;
    document.querySelector("#txtStudentType").innerHTML = studentType;
    document.querySelector("#averageScores").innerHTML = averageScore;
    document.querySelector("#ranking").innerHTML = ranking;
}

document.querySelector("#btnConfirm").onclick = confirmProcess;

// todo: Function of calculating average scores
var calculateAverageScore = function (mathScore, physicsScore, chemistryScore) {
    var score = (Number(mathScore) + Number(physicsScore) + Number(chemistryScore)) / 3; 

    return score;
}

// todo: Function of student ranking 
var studentRanking = function (averageScore, trainingScore) {
    if (trainingScore < 5) {
        return "Below Average";
    } else {
        if (averageScore < 5) {
            return "Below Average";
        } else if (averageScore >= 5 && averageScore < 6.5) {
            return "Average";
        } else if (averageScore >= 6.5 && averageScore < 8) {
            return "Good";
        } else if (averageScore >= 8 && averageScore < 9) {
            return "Very Good";
        } else if (averageScore >= 9 && averageScore < 10) {
            return "Excellent";
        } else {
            return "Invalid !";
        }
    }
}
