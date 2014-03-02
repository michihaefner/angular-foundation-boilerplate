var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base',

    paths: {
        "jquery": "app/js/vendor/jquery1.10.2",
        "angular": "app/js/vendor/angular/angular",
        "angular-route": "app/js/vendor/angular/angular-route",
        "angular-mocks": "app/js/vendor/angular/angular-mocks",
        "foundation-base": "app/js/vendor/foundation",
        "foundation": "app/js/vendor/foundation.loadPlugins", // loads jQuery, FoundationJS and FoundationPlugins
        //Angular Application
        "ngApp": "app/js/angular-app/app",
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
        },
        "angular-mocks": {
            deps: ["angular", "ngApp"]
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});