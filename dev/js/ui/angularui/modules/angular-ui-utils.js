define(
  [
    "js/ui/angularui/modules/event/event",
    "js/ui/angularui/modules/format/format",
    "js/ui/angularui/modules/highlight/highlight",
    "js/ui/angularui/modules/include/include",
    "js/ui/angularui/modules/indeterminate/indeterminate",
    "js/ui/angularui/modules/inflector/inflector",
    "js/ui/angularui/modules/jq/jq",
    "js/ui/angularui/modules/keypress/keypress",
    "js/ui/angularui/modules/mask/mask",
    "js/ui/angularui/modules/reset/reset",
    "js/ui/angularui/modules/route/route",
    "js/ui/angularui/modules/scrollfix/scrollfix",
    "js/ui/angularui/modules/scroll/ui-scroll",
    "js/ui/angularui/modules/scroll/ui-scroll-jqlite",
    "js/ui/angularui/modules/showhide/showhide",
    "js/ui/angularui/modules/unique/unique",
    "js/ui/angularui/modules/validate/validate"
  ],
  function() {
    angular.module('angular.ui.utils',  [
      "ui.event",
      "ui.format",
      "ui.highlight",
      "ui.include",
      "ui.indeterminate",
      "ui.inflector",
      "ui.jq",
      "ui.keypress",
      "ui.mask",
      "ui.reset",
      "ui.route",
      "ui.scrollfix",
      "ui.scroll",
      "ui.scroll.jqlite",
      "ui.showhide",
      "ui.unique",
      "ui.validate"
    ]);
  }
);


