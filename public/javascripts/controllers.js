var cartoBuilder = angular.module('cartoBuilder', [])

cartoBuilder.controller(
    'MapListCtrl',function($scope) {
        $scope.maps = [ { 'name': 'carte1', 'desc': 'desc1'}, 
                        {'name':'carte2','desc':'desc2'}
                    ];  
}
);