/**
 * Created by 9 on 1/10/2015.
 */

var testmodule = angular.module("testmodule", []);

testmodule.controller("AppCtrl", function ($http) {
    var app = this;
    var url = "http://localhost:3000";

    app.saveProduct = function (newProduct) {
        $http.post(url + "/add", {name: newProduct}).success(function () {
            loadProduct();
        });
    }

    function loadProduct() {
        $http.get("http://localhost:3000").success(function (products) {
            app.products = products;
        });
    }

    loadProduct();
});
