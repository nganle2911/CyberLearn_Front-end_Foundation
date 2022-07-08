class FillBlank extends Question {
    constructor(_type, _id, _content, _answers) {
        super(_type, _id, _content, _answers);
    }

    render(index) {
        return `
            <div>
                <p class="lead font-italic@" style="font-size: 30px;">
                    Question ${index}: ${this.content}
                </p>
                <input id="answer-${this.id}" type="text" class="form-control w-50">
            </div>
        `; 
    }

    checkExact() {
        let value = document.getElementById(`answer-${this.id}`).value;
        value = value.toLowerCase();

        if (value === this.answers[0].content.toLowerCase()) {
            return true;
        }
        return false; 
    }
}

const newQuestion1 = new FillBlank(1, 1, "What day is today?", [
    {content: "Monday"},
    {content: "Tuesday"},
    {content: "Thursday"},
    {content: "Friday"}
]); 

console.log(newQuestion1.render());