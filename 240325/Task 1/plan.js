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
var Plan = /** @class */ (function () {
    function Plan(rate) {
        this.rate = rate;
    }
    return Plan;
}());
var ElectricityBIll = /** @class */ (function (_super) {
    __extends(ElectricityBIll, _super);
    function ElectricityBIll() {
        return _super.call(this, 5.5) || this; //rate per unit
    }
    ElectricityBIll.prototype.getBill = function (units) {
        return units * this.rate;
    };
    return ElectricityBIll;
}(Plan));
var WaterBill = /** @class */ (function (_super) {
    __extends(WaterBill, _super);
    function WaterBill() {
        return _super.call(this, 2) || this; //rate per unit
    }
    WaterBill.prototype.getBill = function (units) {
        return units * this.rate;
    };
    return WaterBill;
}(Plan));
var InternetBIll = /** @class */ (function (_super) {
    __extends(InternetBIll, _super);
    function InternetBIll() {
        return _super.call(this, 10) || this; //rate per unit
    }
    InternetBIll.prototype.getBill = function (units) {
        return units * this.rate;
    };
    return InternetBIll;
}(Plan));
function getPlanInstance(planType) {
    switch (planType) {
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
window.getPlanInstance = getPlanInstance;
