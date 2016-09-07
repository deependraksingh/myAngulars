var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/ar', {
			templateUrl: 'ar.html',
			controller: 'arController'
		})
		.when('/ar/addOnCharge', {
			templateUrl: 'ar/addOnCharge.html',
			controller: 'aocController'
		})
		.when('/ar/addOnGroup', {
			templateUrl: 'ar/addOnGroup.html',
			controller: 'aogController'
		})
		.when('/ar/itemGroup', {
			templateUrl: 'ar/itemGroup.html',
			controller: 'iGController'
		})    
    .when('/pos', {
			templateUrl: 'pos.html',
			controller: 'posController'
		})
		.when('/inventory', {
			templateUrl: 'inventory.html',
			controller: 'invController'
		})    
		.otherwise({
			redirectTo: '/index'
		 });
   });
app.controller("arController", function ($scope) {
             
        });
app.controller("aocController", function ($scope) {
             $scope.myDate = new Date();

      $scope.minDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() - 2,
      $scope.myDate.getDate());

      $scope.maxDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() + 2,
      $scope.myDate.getDate()); 
      
             $scope.name = '';
             $scope.description = '';
             $scope.chargeType = '';
             $scope.taxType = '';
             $scope.amountType = '';
             $scope.amount = '';
             $scope.status = '';
             $scope.activationDate = '';
             $scope.deactivationDate = '';
             $scope.chargeType = {
                availableOptions:[
                             {
                            id: '1',
                            name: 'Tax',
                            }, {
                            id: '2',
                            name: 'Surcharge',
                           }],
                selectedOption: {id: '1', name: 'Tax'}    
                           };
            var addOnCharges = [
                {
                    id:1, name: "VAT 1", description: "Vat 5% Inclusive", chargeType:1, taxType:1, amountType:1 , amount: 5, status: 1, activationDate: new Date(2016,08,28) , deactivationDate: new Date(2018,08,28)
                },
                {
                    id:2, name: "VAT 2", description: "Vat 12.50% Inclusive", chargeType:1, taxType:1, amountType:1 , amount: 12.5, status: 1, activationDate: new Date(2018,08,28) , deactivationDate: new Date(2018,08,28)
                },
                {
                    id:3, name: "VAT 3", description: "Vat 5% Exclusive", chargeType:1, taxType:2, amountType:1 , amount: 5, status: 1, activationDate: new Date(2016,08,28) , deactivationDate:new Date(2018,08,28)
                },
                {
                    id:4, name: "VAT 4", description: "Vat 12.50% Exclusive", chargeType:1, taxType:2, amountType:1 , amount: 12.5, status: 1, activationDate: new Date(2016,08,28), deactivationDate: new Date(2018,08,28)
                }
            ];

            $scope.addOnCharges = addOnCharges;
            $scope.sortColumn = "name";
            $scope.reverseSort = false;
            
           $scope.edit = true;
           $scope.error = false;
           $scope.incomplete = false;
           $scope.hideform = true;
           $scope.editAOC = function(id) {
           $scope.hideform = false;
           if (id == 'new') {
           $scope.edit = true;
           $scope.incomplete = true;
           $scope.name = '';
           $scope.description = '';
           $scope.amount = 0.00;
           $scope.activationDate = ''; 
           $scope.deactivationDate = ''; 
             } 
             else 
             {
           $scope.edit = false;
           $scope.name = $scope.addOnCharges[id-1].name;
           $scope.description = $scope.addOnCharges[id-1].description; 
           $scope.chargeType = $scope.addOnCharges[id-1].chargeType;
           $scope.taxType = $scope.addOnCharges[id-1].taxType; 
           $scope.amountType = $scope.addOnCharges[id-1].amountType; 
           $scope.amount = $scope.addOnCharges[id-1].amount;
           $scope.status = $scope.addOnCharges[id-1].status; 
           $scope.activationDate = $scope.addOnCharges[id-1].activationDate; 
           $scope.deactivationDate = $scope.addOnCharges[id-1].deactivationDate;            
            } 
            };
           
       

            $scope.sortData = function (column) {
                $scope.reverseSort = ($scope.sortColumn == column) ?
                    !$scope.reverseSort : false;
                $scope.sortColumn = column;
            }

            $scope.getSortClass = function (column) {

                if ($scope.sortColumn == column) {
                    return $scope.reverseSort
                      ? 'arrow-down'
                      : 'arrow-up';
                }

                return '';
            }
          
        }); 
app.controller("aogController", function ($scope) {
          var addOnGroups = [
                {
                    id:1, name: "VAT 1", description: "Vat 5%", status: 1
                },
                {
                    id:2, name: "VAT 2", description: "Vat 12.50%", status: 1
                }
            ];   
            
          $scope.addOnGroups = addOnGroups; 
             $scope.name = '';
             $scope.description = '';
             $scope.status = '';
             
           $scope.edit = true;
           $scope.error = false;
           $scope.incomplete = false;
           $scope.hideform = true;
           $scope.editAOG = function(id) {
           $scope.hideform = false;
           if (id == 'new') {
           $scope.edit = true;
           $scope.incomplete = true;
           $scope.name = '';
           $scope.description = '';
             } 
             else 
             {
           $scope.edit = false;
           $scope.name = $scope.addOnGroups[id-1].name;
           $scope.description = $scope.addOnGroups[id-1].description; 
           $scope.status = $scope.addOnGroups[id-1].status; 
            } 
            };
           
            $scope.sortData = function (column) {
                $scope.reverseSort = ($scope.sortColumn == column) ?
                    !$scope.reverseSort : false;
                $scope.sortColumn = column;
            }

            $scope.getSortClass = function (column) {

                if ($scope.sortColumn == column) {
                    return $scope.reverseSort
                      ? 'arrow-down'
                      : 'arrow-up';
                }

                return '';
            }
        }); 
app.controller("iGController", function ($scope) {
            
        });         
app.controller("posController", function ($scope) {
            
        });
app.controller("invController", function ($scope) {
            
        });        
