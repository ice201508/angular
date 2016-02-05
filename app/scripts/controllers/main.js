'use strict';

/**
 * @ngdoc function
 * @name miguApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the miguApp
 */

angular.module('miguApp')
	.controller('mainCtrl',['$scope','ipCookie','$location',
		function($scope,ipCookie,$location){
			$scope.goAll=function(){
				ipCookie('name','Lucy');
				ipCookie('Time', new Date());
				$location.path('main/fileDisplay');
			};
			$scope.goError=function(){
				$location.path('main/error');
			};
			$scope.goDiff=function(){
				$location.path('main/diff');
			};
			$scope.goDownload=function(){
				$location.path('main/download');
			};
			$scope.goAutoDownload=function(){
				$location.path('main/autoDownload');
			};
			$scope.goFileStatus=function(){
				$location.path('main/fileStatus');
			};
			$scope.goReProvince=function(){
				$location.path('main/reProvince');
			};
			$scope.goReZhiFuBao=function(){
				$location.path('main/reZhiFuBao');
			};
			$scope.goReDay=function(){
				$location.path('main/reDay');
			};
			$scope.goReMonth=function(){
				$location.path('main/reMonth');
			};
			$scope.goReJiHe=function(){
				$location.path('main/reJiHe');
			};
			$scope.goFormProvince=function(){
				$location.path('main/formProvince');
			};
			$scope.goFormGlobal=function(){
				$location.path('main/formGlobal');
			};


		//侧边栏样式

			$('#one_1,#one_2,#one_3').show();
			$('#two_1,#two_2,#two_3,#two_4,#two_5,#two_6,#two_7,#two_8').hide();
			$('#three_1,#three_2').hide();

		//点击事件
			$('#one').click(function(){
				$('#one_1,#one_2,#one_3').toggle(500);
				$('#m-menu-1,#m-menu-2,#m-menu-3').removeClass('glyphicon-chevron-up glyphicon-chevron-down');
				$('#m-menu-2,#m-menu-3').addClass('glyphicon-chevron-down');
				$('#m-menu-1').addClass('glyphicon-chevron-up');
			});
			$('#two').click(function(){
				$('#two_1,#two_2,#two_3,#two_4,#two_5,#two_6,#two_7,#two_8').toggle(500);
				$('#m-menu-1,#m-menu-2,#m-menu-3').removeClass('glyphicon-chevron-up glyphicon-chevron-down');
				$('#m-menu-1,#m-menu-3').addClass('glyphicon-chevron-down');
				$('#m-menu-2').addClass('glyphicon-chevron-up');
			});
			$('#three').click(function(){
				$('#three_1,#three_2').toggle(500);
				$('#m-menu-1,#m-menu-2,#m-menu-3').removeClass('glyphicon-chevron-up glyphicon-chevron-down');
				$('#m-menu-1,#m-menu-2').addClass('glyphicon-chevron-down');
				$('#m-menu-3').addClass('glyphicon-chevron-up');
			});
			$('#one,#one_1,#one_2,#one_3').click(function(){
				$('#one,#two,#three').removeClass('active');
				$('#two_1,#two_2,#two_3,#two_4,#two_5,#two_6,#two_7,#two_8,#three_1,#three_2').removeClass('active');
				$('#two_1,#two_2,#two_3,#two_4,#two_5,#two_6,#two_7,#two_8,#three_1,#three_2').hide();
				
				$('#one').addClass('active');
				$('#one_1,#one_2,#one_3').removeClass('active');
				$(this).addClass('active');
			});
			$('#two,#two_1,#two_2,#two_3,#two_4,#two_5,#two_6,#two_7,#two_8').click(function(){
				$('#one,#two,#three').removeClass('active');
				$('#one_1,#one_2,#one_3,#three_1,#three_2').hide();
				$('#one_1,#one_2,#one_3,#three_1,#three_2').removeClass('active');
				$('#two').addClass('active');
				$('#two_1,#two_2,#two_3,#two_4,#two_5,#two_6,#two_7,#two_8').removeClass('active');
				$(this).addClass('active');
			});
			$('#three,#three_1,#three_2').click(function(){
				$('#one,#two,#three').removeClass('active');
				$('#one_1,#one_2,#one_3,#two_1,#two_2,#two_3,#two_4,#two_5,#two_6,#two_7,#two_8').hide();
				$('#one_1,#one_2,#one_3,#two_1,#two_2,#two_3,#two_4,#two_5,#two_6,#two_7,#two_8').removeClass('active');
				$('#three').addClass('active');
				$('#three_1,#three_2').removeClass('active');
				$(this).addClass('active');
			});
	}]);
