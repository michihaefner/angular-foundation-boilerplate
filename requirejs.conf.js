require.config({
	paths: {
		"jquery": "app/js/vendor/jquery1.10.2",
		"angular": "app/js/vendor/angular/angular",
		"angular-route": "app/js/vendor/angular/angular-route",
		"foundation-base": "app/js/vendor/foundation",
		"foundation": "app/js/vendor/foundation.loadPlugins", // loads jQuery, FoundationJS and FoundationPlugins
		//Angular Application
		"myApp": "app/js/angular-app/app",
		"loadControllers": "app/js/angular-app/controllers/loadControllers",
		"loadDirectives": "app/js/angular-app/directives/loadDirectives",
		"loadFilters": "app/js/angular-app/filters/loadFilters",
		"loadServices": "app/js/angular-app/services/loadServices"
	},
	shim: {
		"angular-routes": {
			deps: ["angular"]
		},
		"angular": {
			deps: ["foundation"],
			exports: "angular"
		},
		"jquery": {
			exports: "jQuery"
		},
		"foundation-base": {
			exports: "Foundation"
		}
	}
});