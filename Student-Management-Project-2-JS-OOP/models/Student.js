// * Prototype is a class object in JS 
var Student = function() {
    
    // * Declare attributes 
    this.studentCode = '';
    this.studentName = '';
    this.studentType = '';
    this.math = '';
    this.physics = '';
    this.chemistry = '';
    this.trainingScore = '';

    this.calculateAverageScore = function() {
        var score = (Number(this.math) + Number(this.physics) + Number(this.chemistry)) / 3;

        return score; 
    }

    this.ranking = function() {
        var averageScore = this.calculateAverageScore();
        if (this.trainingScore < 5) {
            return 'Below Average';
        } else {
            if (averageScore < 5) {
                return 'Below Average';
            } else if (averageScore >= 5 && averageScore < 6.5) {
                return 'Average';
            } else if (averageScore >= 6.5 && averageScore < 8) {
                return 'Good';
            } else if (averageScore >= 8 && averageScore < 9) {
                return 'Very Good';
            } else if (averageScore >= 9 && averageScore < 10) {
                return 'Excellent';
            } else {
                return 'Invalid !';
            }
        }
    }
}