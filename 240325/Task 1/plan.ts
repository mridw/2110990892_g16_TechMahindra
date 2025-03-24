abstract class Plan{
    protected rate:number;
    constructor(rate:number){
        this.rate=rate;
    }
    abstract getBill(units:number):number;
}
class ElectricityBIll extends Plan{
    constructor(){
        super(5.5);//rate per unit
    }
    getBill(units: number): number {
        return units*this.rate;
    }
}
class WaterBill extends Plan{
    constructor(){
        super(2);//rate per unit
    }
    getBill(units: number): number {
        return units*this.rate;
    }
}
class InternetBIll extends Plan{
    constructor(){
        super(10);//rate per unit
    }
    getBill(units: number): number {
        return units*this.rate;
    }
}

function getPlanInstance(planType:string):Plan{
    switch(planType){
        case "electricity":
            return new ElectricityBIll();
        case "water":
            return new WaterBill();
        case "internet":
            return new InternetBIll();
        default:
            throw new Error("Invalid Plan Type Selected");
    }
}

(window as any).getPlanInstance=getPlanInstance;