"use strict";
var Category = (function () {
    function Category(categoryId, categoryName) {
        this.categoryId = categoryId;
        this.categoryName = categoryName;
    }
    return Category;
}());
exports.Category = Category;
exports.Categories = [
    { categoryId: 101, categoryName: 'Electrical' },
    { categoryId: 102, categoryName: 'Electronics' },
    { categoryId: 103, categoryName: 'Household' },
    { categoryId: 104, categoryName: 'Food' }
];
