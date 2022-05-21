export class Glasses {
    constructor(_id, _src, _virtualImg, _brand, _name, _color, _price, _description) {
        this.id = _id; 
        this.src = _src; 
        this.virtualImg = _virtualImg; 
        this.brand = _brand; 
        this.name = _name; 
        this.color = _color; 
        this.price = _price; 
        this.description = _description; 
        this.status = true; //vì trong dữ liệu ko có status, nên gán cho nó value true 
        // this.status = _status;
    }
}