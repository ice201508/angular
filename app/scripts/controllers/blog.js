'use strict';

/**
 * @ngdoc function
 * @name miguApp.controller:blogCtrl
 * @description
 * # blogCtrl
 * Controller of the miguApp
 */

angular.module('miguApp')
	.controller('blogCtrl',['$scope','ipCookie','$location',
		function($scope,ipCookie,$location){
			var myDate = new Date().getTime();//当前时间毫秒

	    //传参
	    $scope.params = {
	      time: ipCookie('times')||  myDate  //日期
	    };

    //时间控件
    $scope.open = function ($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.opened = true;
    };

    //列表数据
    $scope.list=[
    	{'aa':'移动互联网1','bb':'中国移动','cc':'广东省','dd':'受理中','ee':'2016-02-04','ff':'中国移动'},
    	{'aa':'移动互联网2','bb':'中国移动','cc':'广东省','dd':'受理中','ee':'2016-02-04','ff':'中国移动'},
    	{'aa':'移动互联网','bb':'中国移动','cc':'广东省','dd':'受理中','ee':'2016-02-04','ff':'中国移动'},
    	{'aa':'移动互联网','bb':'中国移动','cc':'广东省','dd':'受理中','ee':'2016-02-04','ff':'中国移动'},
    	{'aa':'移动互联网','bb':'中国移动','cc':'广东省','dd':'受理中','ee':'2016-02-04','ff':'中国移动'},
    	{'aa':'移动互联网','bb':'中国移动','cc':'广东省','dd':'受理中','ee':'2016-02-04','ff':'中国移动'},
    	{'aa':'移动互联网','bb':'中国移动','cc':'广东省','dd':'受理中','ee':'2016-02-04','ff':'中国移动'}
    ];
	}]);