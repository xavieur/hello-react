class Vehicle {
    constructor(model){
        this.model = model
    }
    getDesc(){
        return 'model: ' + this.model
    }
}


const v = new Vehicle('Ford')

const ext = v.getDesc
console.log(v.getDesc())
console.log(ext())