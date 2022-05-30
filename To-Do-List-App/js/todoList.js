export class ToDoList {
    constructor() {
        this.tdList = [];
    }

    addToDo(toDo) {
        this.tdList.push(toDo);
    }

    removeToDo(index) {
        this.tdList.splice(index, 1);
    }

    renderToDo() {
        let content = "";
        // *reduceRight: Iterate the array from right to left
        // *reduce: Iterate the array from left to right 
        content = this.tdList.reduceRight((tdContent, item, index) => {
            tdContent += `
                <li>
                    <span>${item.textToDo}</span>
                    <div class="buttons">
                        <button class="remove" data-index="${index}" data-status="${item.status}" onclick="deleteToDo(event)">
                            <i class="fa fa-trash-alt"></i>
                        </button>
                        <button class="completed" data-index="${index}" data-status="${item.status}" onclick="completedToDo(event)">
                            <i class="fa-regular fa-circle-check"></i>
                            <i class="fa fa-check-circle"></i>
                        </button>
                    </div>
                </li>
            `;
            return tdContent; 
        }, '');

        return content;
    }

    sortToDoList(isDES) {
        this.tdList.sort((toDo, nextToDo) => {
            const textA = toDo.textToDo.toLowerCase();
            const textB = nextToDo.textToDo.toLowerCase();

            // localCompare() - arrange in ascending (by default)
            return textB.localeCompare(textA);
        });

        if (isDES) {
            this.tdList.reverse();
        }
    }
}