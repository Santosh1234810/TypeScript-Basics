"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
var Products = /** @class */ (function () {
    function Products(id, name, price, brd) {
        this.Pid = 101;
        this.Pname = "One Plus Nord2";
        this.Pprice = 22900;
        this.brand = "One Plus";
        this.Pid = id;
        this.Pname = name;
        this.Pprice = price;
        this.brand = brd;
    }
    Products.prototype.pDetails = function () {
        return "Product Id".concat(this.Pid, ", Product Name: ").concat(this.Pname, ", Price: ").concat(this.Pprice, ", Brand: ").concat(this.brand, " ");
    };
    return Products;
}());
exports.Products = Products;
// var pObj = new Products(102,"One Plus Nord2",30000,"One Plus");
// console.log(pObj.pDetails());
