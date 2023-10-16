export class Products
{
    Pid:number = 101;
    Pname:string = "One Plus Nord2";
    Pprice:number = 22900;
    brand:string = "One Plus";

    constructor(id:number,name:string,price:number,brd:string)
    {
        this.Pid = id;
        this.Pname = name;
        this.Pprice = price;
        this.brand = brd;
    }

    pDetails()
    {
        return `Product Id${this.Pid}, Product Name: ${this.Pname}, Price: ${this.Pprice}, Brand: ${this.brand} `
    }

}
// var pObj = new Products(102,"One Plus Nord2",30000,"One Plus");
// console.log(pObj.pDetails());