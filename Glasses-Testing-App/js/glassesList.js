export class GlassesList {
    constructor() {
        this.glist = [];
    }
    addGlasses(glasses) {
        this.glist.push(glasses);
    }
    renderGlasses() {
        // HTML tags include the content of glasses object 
        let content = ""; 
        // Browse the array 
        content = this.glist.reduce((glContent, item, index) => {
            glContent += `
                <div class="col-4">
                    <img class="img-fluid vglasses__items" onclick="tryOnGlasses(event)" data-id="${item.id}" src="${item.src}" alt="Glasses">
                </div>
            `;
            return glContent; 
        }, '');

        return content; 
    }
}