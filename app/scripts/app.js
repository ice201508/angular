'use strict';

/**
 * @ngdoc overview
 * @name miguApp
 * @description
 * # miguApp
 *
 * Main module of the application.
 */
angular
  .module('miguApp', [
  	'ui.bootstrap',
    'ngAnimate',
    'ui.router',
    'restangular',
    'ipCookie'
  ]).config(function($stateProvider,$urlRouterProvider){
  	$urlRouterProvider.otherwise('/main/ctrl/error');
  	$stateProvider
  		.state('main',{
  			url: '/main',
  			views:{
  				'indexView':{
  					templateUrl:'views/main.html',
  					controller:'mainCtrl'
  				}
  			}
  		}).state('main.ctrl',{
  			url:'/ctrl',
  			views:{
  				'mainView':{
  					templateUrl:'views/ctrl.html',
  					controller:'mainCtrl'
  				}
  			}
  		}).state('main.blog',{
        url:'/blog',
        views:{
          'mainView':{
            templateUrl:'views/blog.html',
            controller:'blogCtrl'
          }
        }
      }).state('main.blog.fileList',{
        url:'/fileList',
        views:{
          'blogView':{
            templateUrl:'views/files/angularjs.html',
            controller:'reDayCtrl'
          }
        }
      }).state('main.ctrl.fileDisplay',{
  			url:'/fileDisplay',
  			views:{
  				'ctrlView':{
  					templateUrl:'views/files/arrival-detail.html',
  					controller:'arrivalDetailsCtrl'
  				}
  			}
  		}).state('main.ctrl.error',{
        url:'/error',
        views:{
          'ctrlView':{
            templateUrl:'views/files/error.html',
            controller:'errorCtrl'
          }
        }
      }).state('main.ctrl.diff',{
  			url:'/diff',
  			views:{
  				'ctrlView':{
  					templateUrl:'views/files/diff.html',
  					controller:'diffCtrl'
  				}
  			}
  		}).state('main.ctrl.download',{
  			url:'/download',
  			views:{
  				'ctrlView':{
  					templateUrl:'views/files/file-download.html',
  					controller:'downloadCtrl'
  				}
  			}
  		}).state('main.ctrl.autoDownload',{
  			url:'/autoDownload',
  			views:{
  				'ctrlView':{
  					templateUrl:'views/files/file-auto-download.html',
  					controller:'autoDownloadCtrl'
  				}
  			}
  		}).state('main.ctrl.fileStatus',{
  			url:'/fileStatus',
  			views:{
  				'ctrlView':{
  					templateUrl:'views/files/file-status.html',
  					controller:'fileStatusCtrl'
  				}
  			}
  		}).state('main.ctrl.reProvince',{
  			url:'/reProvince',
  			views:{
  				'ctrlView':{
  					templateUrl:'views/files/re-province.html',
  					controller:'reProvinceCtrl'
  				}
  			}
  		}).state('main.ctrl.reZhiFuBao',{
  			url:'/reZhiFuBao',
  			views:{
  				'ctrlView':{
  					templateUrl:'views/files/re-zhifubao.html',
  					controller:'reZhiFuBaoCtrl'
  				}
  			}
  		}).state('main.ctrl.reDay',{
  			url:'/reDay',
  			views:{
  				'ctrlView':{
  					templateUrl:'views/files/re-day.html',
  					controller:'reDayCtrl'
  				}
  			}
  		}).state('main.ctrl.reMonth',{
  			url:'/reMonth',
  			views:{
  				'ctrlView':{
  					templateUrl:'views/files/re-month.html',
  					controller:'reMonthCtrl'
  				}
  			}
  		}).state('main.ctrl.reJiHe',{
  			url:'/reJiHe',
  			views:{
  				'ctrlView':{
  					templateUrl:'views/files/re-jihe.html',
  					controller:'reJiHeCtrl'
  				}
  			}
  		}).state('main.ctrl.formProvince',{
  			url:'/formProvince',
  			views:{
  				'ctrlView':{
  					templateUrl:'views/files/form-province.html',
  					controller:'formProvinceCtrl'
  				}
  			}
  		}).state('main.ctrl.formGlobal',{
  			url:'/formGlobal',
  			views:{
  				'ctrlView':{
  					templateUrl:'views/files/form-global.html',
  					controller:'formGlobalCtrl'
  				}
  			}
  		});
  });
