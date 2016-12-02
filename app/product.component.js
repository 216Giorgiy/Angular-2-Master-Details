"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var product_model_1 = require('./product.model');
var ProductComponent = (function () {
    function ProductComponent() {
        this.products = product_model_1.Products;
        this._filterProduct = new Array();
        console.log('Product');
    }
    Object.defineProperty(ProductComponent.prototype, "categoryName", {
        get: function () {
            return this._categoryName;
        },
        set: function (cname) {
            this._categoryName = (cname && cname.trim()) || 'No Category Selected';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductComponent.prototype, "filterProducts", {
        get: function () {
            this._filterProduct = new Array();
            for (var _i = 0, Products_1 = product_model_1.Products; _i < Products_1.length; _i++) {
                var e = Products_1[_i];
                if (e.categoryName == this._categoryName) {
                    this._filterProduct.push(e);
                }
            }
            return this._filterProduct;
        },
        enumerable: true,
        configurable: true
    });
    ProductComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], ProductComponent.prototype, "categoryName", null);
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'product-data',
            templateUrl: './product.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
