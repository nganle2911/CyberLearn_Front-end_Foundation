class MultipleChoice extends Question {
    constructor(_type, _id, _content, _answers) {
        super(_type, _id, _content, _answers);
    }

    render(index) {
        let answersHTML = ""; 
        for(let item of this.answers) {
            answersHTML += `
                <div>
                    <input value="${item.id}" type="radio" name="answer-${this.id}" class="answer-${this.id}">
                    <label class="lead">${item.content}</label>
                </div>
            `;
        }

        return `
            <div>
                <p class="lead font-italic" style="font-size: 30px;">
                    Question ${index}: ${this.content} 
                </p>
                ${answersHTML}
            </div>
        `;
    }


    checkExact() {
        const inputList = document.getElementsByClassName(`answer-${this.id}`);

        let answerId;

        for(let input of inputList) {
            if (input.checked) {
                answerId = input.value;
            }
        }

        if (!answerId) {
            return false; 
        }

        for(let answer of this.answers) {
            if (answerId === answer.id) {
                return answer.exact; 
            }
        }

        return false; 
    }
}

const newQuestion = new MultipleChoice(1, 1, "What day is today?", [
    {content: "Monday"},
    {content: "Tuesday"},
    {content: "Thursday"},
    {content: "Friday"}
]); 

console.log(newQuestion.render());