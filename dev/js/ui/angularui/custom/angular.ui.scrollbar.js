angular.module('ui.scrollbar', [])
  .value('uiScrollbarConfig',{})
  .directive('uiScrollbar', [
    'uiScrollbarConfig', '$timeout', '$rootScope',
    function(uiScrollbarConfig, $timeout, $rootScope) {
      return {
        restrict: 'A',
        link: function(scope, el, attrs) {
            //add classes for customizing the style
            el.addClass("ui-scrollbar");
            el.addClass("clearfix");

            //wrap the ui-scrollbar content inside the scrollbar classes and add a scrollarea
            var wrapper = $('<div class="scrollbar-viewport"><div class="scrollbar-overview"></div></div>'),
                scrollbar = $('<div class="scrollbar"><div class="scrollbar-track"><div class="scrollbar-thumb"><div class="end"></div></div></div></div>');
            wrapper.children('.scrollbar-overview').append(el.find(':first'));
            el.append(scrollbar);
            el.append(wrapper);

            //create the scrollbar
            var uiScrollbar = el.tinyscrollbar();
            resize();

            //watch if the content of the scrollbar changes. if it does, update the scrollbar
            scope.$watch('player.playlist.tracks', function() {
              var scrollPos = Math.abs( parseInt( el.find(".scrollbar-overview").css("top"), 10 ) );
              console.log("new song added");
              console.log(scrollPos);
              $timeout(function() {
                uiScrollbar.tinyscrollbar_update(scrollPos);
              });
            }, true);

            //watch if another song in the playlist starts playing, scroll to songposition
            scope.$watch('player.playlist.position', function() {
              console.log("song changed");
              uiScrollbar.tinyscrollbar_update();
              var pos = $rootScope.player.playlist.position,
                  track = uiScrollbar.find(".track").eq(pos),
                  trackHeight = track.outerHeight(true),
                  trackRelativePos = track.position().top + trackHeight - el.height();

              if (trackRelativePos > 0) {
                $timeout(function() {
                  uiScrollbar.tinyscrollbar_update(trackRelativePos);
                });
              }
              
            }, true);

            //watch if the window size changes, if it does, change the size of the scrollbar
            $(window).resize(function() {
              resize();
            });
            
            //change size of the scrollbar to fit full height
            function resize() {
              var height = $(window).height() - el.offset().top - 50;
              el.css({ height: height });
              uiScrollbar.tinyscrollbar_update();
            }
        }

      }
    }
  ]);




