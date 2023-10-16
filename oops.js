var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Students = /** @class */ (function () {
    // constructor
    function Students(id, name, add) {
        this.stdId = 101;
        this.stdName = "Rahul";
        this.stdAddress = "Pune";
        this.stdId = id;
        this.stdName = name;
        this.stdAddress = add;
    }
    Students.prototype.stdDetails = function () {
        return "Id:".concat(this.stdId, " Name:").concat(this.stdName, " Address:").concat(this.stdAddress);
    };
    return Students;
}());
// created object
// var stdObj = new Students(101,"Vijay","Pune");
// console.log(stdObj.stdName);
// var stdObj2 = new Students(102,"Swati","Mumbai");
// console.log(stdObj.stdDetails());
// console.log(stdObj2.stdDetails());
var Result = /** @class */ (function (_super) {
    __extends(Result, _super);
    function Result(id, name, addr, m, p, c) {
        var _this = _super.call(this, id, name, addr) || this;
        _this.math = m;
        _this.phy = p;
        _this.chem = c;
        return _this;
    }
    Result.prototype.stdDetails = function () {
        return "Id:".concat(this.stdId, " Name:").concat(this.stdName, " Address:").concat(this.stdAddress, " Math:").concat(this.math, " Physics:").concat(this.phy, " Chemistry:").concat(this.chem);
    };
    return Result;
}(Students));
var resObj = new Result(101, "Sumedha", "Beed", 67, 87, 75);
console.log(resObj.stdDetails());
