// * Block scope 
/* var student = {
    studentCode: 1, 
    studentName: "Jax",
    studentType: "Difficult",
    math: 8,
    physics: 9,
    chemistry: 10,

    calculateAverageScore: function() {
        var score = (Number(this.math) + Number(this.physics) + Number(this.chemistry)) / 3; 

        return score; 
    }
} */

// console.log(student);

// * 2 methods to access the object's attributes 
/* console.log("Student Code: ", student.studentCode);
console.log("Student Code 2:", student["studentName"]); */

// var averageScore = student.calculateAverageScore();
// console.log("Average Score: ", averageScore);

// ============================================================================

// todo: USING JS OOP 
/* var student1 = new Student();
student1.studentName = "Philippe";
student1.studentCode = 1;
student1.studentType = "Normal"; 
student1.math = 8;
student1.physics = 9;
student1.chemistry = 10;
student1.trainingScore = 8; 
student1.calculateAverageScore();
student1.ranking();

console.log(student1); */


/* var student2 = new Student();
student2.studentName = "Marie";
student2.studentCode = 2;
student2.studentType = "Normal";
student2.math = 7;
student2.physics = 8.9;
student2.chemistry = 9.8;
student2.trainingScore = 7;
student2.calculateAverageScore();
student2.ranking();

console.log(student2); */

// ============================================================================

var student = new Student();
var validation = new Validation();

var confirmProcess = function() {
    student.studentCode = document.getElementById('studentCode').value;
    student.studentName = document.getElementById('studentName').value;
    student.studentType = document.getElementById('studentType').value;
    student.math = document.getElementById('math').value;
    student.physics = document.getElementById('physics').value;
    student.chemistry = document.getElementById('chemistry').value; 
    student.trainingScore = document.getElementById('trainingScore').value;


    // * Check Validation 
    var valid = true; 

    // * Check empty 
    valid &= validation.checkEmpty(student.studentCode, 'Student Code', 'error_studentCode_required')
        & validation.checkEmpty(student.studentName, 'Student Name', 'error_studentName_required')
        & validation.checkEmpty(student.math, 'Math Score', 'error_math_required') & validation.checkEmpty(student.physics, 'Physics Score', 'error_physics_required')
        & validation.checkEmpty(student.chemistry, 'Chemistry Score', 'error_chemistry_required')
        & validation.checkEmpty(student.trainingScore, 'Training Score', 'error_trainingScore_required');
    

    // * Check input is all numbers 
    valid &= validation.checkAllNumbers(student.studentCode, 'Student Code', 'error_studentCode_all_numbers')
        & validation.checkAllNumbers(student.math, 'Math Score', 'error_math_all_numbers')
        & validation.checkAllNumbers(student.physics, 'Physics Score', 'error_physics_all_numbers')
        & validation.checkAllNumbers(student.chemistry, 'Chemistry Score', 'error_chemistry_all_numbers')
        & validation.checkAllNumbers(student.trainingScore, 'Training Score', 'error_trainingScore_all_numbers');

    // * Check the length of user's input 
    valid &= validation.checkLengthOfInput(student.studentCode, 'Student Code', 'error_studentCode_min_max_length', 3, 10);

    // * Check the value's score from 0 - 10
    valid &= validation.checkValueOfScore(student.math, "Math Score", 'error_math_value', 0, 10)
        & validation.checkValueOfScore(student.physics, "Physics Score", 'error_physics_value', 0, 10)
        & validation.checkValueOfScore(student.chemistry, "Chemistry Score", 'error_chemistry_value', 0, 10) & validation.checkValueOfScore(student.trainingScore, 'Training Score', 'error_trainingScore_value', 0, 10);

    // * Check the studentName must be all letters
    valid &= validation.checkAllLetters(student.studentName, 'Student Name', 'error_studentName_all_letters'); 

    if (!valid) {
        return;
    }

    // * Print results to the screen 
    document.getElementById('txtStudentName').innerHTML = student.studentName;
    document.getElementById('txtStudentCode').innerHTML = student.studentCode;
    document.getElementById('txtStudentType').innerHTML = student.studentType;
    document.getElementById('averageScores').innerHTML = student.calculateAverageScore().toFixed(2);
    document.getElementById('ranking').innerHTML = student.ranking();
}

document.querySelector('#btnConfirm').onclick = confirmProcess;

