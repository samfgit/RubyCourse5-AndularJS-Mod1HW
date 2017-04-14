(function () {

'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
	$scope.checkItems = function () {
		var items = $scope.items;
		var itemCount;

		if (items) {
			itemCount = filterEmptyItems($scope.items.split(',')).length;			
		}

		if (items && itemCount>0) {
			console.log(itemCount);
			if (itemCount<4) {
				$scope.message = "Enjoy!";
				$scope.msgType = "tip";
			} else {
				$scope.message = "Too much!";
				$scope.msgType = "warning";
			}
		}
		else {
			$scope.message = "Please enter data first!";
			$scope.msgType = "error";
		}
	};
}

function filterEmptyItems(items) {
	var itemList = items;
	for (var item = itemList.length - 1; item >= 0; item--) {
		if(itemList[item]=="")
			itemList.splice(item,1);
	}
	return itemList;
}

})();