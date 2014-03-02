
require.config({
	baseUrl: ".",
	paths: {
		"jquery": "js/vendor/jquery-2.1.0",
		"angular": "js/vendor/angular/angular",
		"utils": "js/ui/loadUtils",
		"uiRouter": "js/vendor/angular/ui-router",
		"ngApp": "app",
		
		"loadControllers": "ng-controllers/loadControllers",
		"loadFilters": "ng-filters/loadFilters",
		"loadServices": "ng-services/loadServices"
	},
	shim: {
		"jquery": {
			exports: "jQuery"
		},
		"angular": {
			deps: ["jquery"],
			exports: "angular"
		},
		"utils": {
			deps: ["angular"]
		},
		"uiRouter": {
			deps: ["angular"]
		}

	}
});


require(["ngApp"], function() {});
