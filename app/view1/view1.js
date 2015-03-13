'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1',
      {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ["$http","$log","$scope",function($http,$log,$scope) {
    $scope.tabularData = "";

    $http.get("data/sampledata.json").success(function(data, status, headers, config) {
        $log.log("DATA RX" + (data && data.length > 0 ? data.length : "Empty data"));
        $scope.tabularData = data;
    }).error(function(data, status, headers, config) {
            $log.error(data);
    });


}]).directive("popupDisplay",[function(){
        return {
            link: function(scope, element, attribute) {
                element.on("click",function(){
                    alert("Hey there, just checking" + scope.data + element.parent().children().eq(0).attr("id"));
                    element.next().modal('toggle');
                });
                element.bind('mouseover', function() {
                    element.css({
                         "cursor": 'pointer'
                    });
                });
            }
        }
    }]);