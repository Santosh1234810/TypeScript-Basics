class Students{
    stdId:number = 101;
    private stdName:string = "Rahul";
    stdAddress:string = "Pune";
    private contact:number = 9049326579;

    // constructor
    constructor(id:number,name:string,add:string){
        this.stdId = id;
        this.stdName = name;
        this.stdAddress = add; 
    }
    stdDetails(){
        return `Id:${this.stdId} Name:${this.stdName} Address:${this.stdAddress}`;
    }
}
// created object
// var stdObj = new Students(101,"Vijay","Pune");
// console.log(stdObj.stdName);
// var stdObj2 = new Students(102,"Swati","Mumbai");
// console.log(stdObj.stdDetails());
// console.log(stdObj2.stdDetails());

class Result extends Students{
    math:number;
    phy:number;
    chem:number;

    constructor(id:number,name:string,addr:string,m:number,p:number,c:number)
    {
        super(id,name,addr);
        this.math = m;
        this.phy = p;
        this.chem = c;
    }
    stdDetails(){
        return `Id:${this.stdId} Name:${this.stdName} Address:${this.stdAddress} Math:${this.math} Physics:${this.phy} Chemistry:${this.chem}`
    }
}
var resObj = new Result(101,"Sumedha","Beed",67,87,75);
console.log(resObj.stdDetails());