let questionList = []; 

const fetchQuestion = async () => {
    try {
        const res = await axios({
            url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions",
            method: "GET"
        });
        return res.data; 
    } catch (error) {
        console.log(error);
    }
}; 

const renderQuestion = () => {
    let htmlContent = "";
    for(let i in questionList) {
        htmlContent += questionList[i].render(+i + 1); 
    }
    document.getElementById('questionsContainer').innerHTML = htmlContent;   
}; 

// Tham số data trong mapData là nhận kết quả trả về từ res.data, sau đó, lấy kết quả trả về đó, mới xét tới questionType và xếp vào loại câu hỏi phù hợp 
const mapData = (data = []) => {
    questionList = data.map((item) => {
        const {questionType, id, content, answers} = item; 

        if (item.questionType === 1) {
            return new MultipleChoice(questionType, id, content,answers);
        } else {
            return new FillBlank(questionType, id, content, answers);
        }
    });
}

const submit = () => {
    let result = 0; 

    for (let item of questionList) {
        if (item.checkExact()) {
            result++; 
        } 
    }
    alert("Result: " + result + "/" + questionList.length);
}

fetchQuestion().then((data) => {
    mapData(data); 

    // code when having already questionList
    renderQuestion(); 
}); 