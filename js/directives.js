/**
 * INCISO - Gestione invalidi civili, ciechi civili e sordi
 *
 * Main directives.js file
 * Define directives for used plugin
 *
 *
 * Functions (directives)
 *  - sideNavigation
 *  - iboxTools
 *  - minimalizaSidebar
 *  - sparkline
 *  - icheck
 *  - dropZone
 *  - fullScroll
 *  - closeOffCanvas
 *  - landingScrollspy
 *  - fitHeight
 *  - iboxToolsFullScreen
 *  - slimScroll
 *  - truncate
 *  - touchSpin
 *  - resizeable
 *  - bootstrapTagsinput
 *
 */
(function () {
  /**
   * pageTitle - Directive for set Page title - mata title
   */
  function pageTitle($rootScope, $timeout) {
    return {
      link: function (scope, element) {
        var listener = function (
          event,
          toState,
          toParams,
          fromState,
          fromParams
        ) {
          // Default title - load on Dashboard 1
          var title =
            "INCISO | Gestione invalidi civili, ciechi civili e sordi";
          // Create your own title pattern
          if (toState.data && toState.data.pageTitle)
            title = "INCISO | " + toState.data.pageTitle;
          $timeout(function () {
            element.text(title);
          });
        };
        $rootScope.$on("$stateChangeStart", listener);
      }
    };
  }

  /**
   * sideNavigation - Directive for run metsiMenu on sidebar navigation
   */
  function sideNavigation($timeout) {
    return {
      restrict: "A",
      link: function (scope, element) {
        // Call the metsiMenu plugin and plug it to sidebar navigation
        $timeout(function () {
          element.metisMenu();
        });

        // Colapse menu in mobile mode after click on element
        var menuElement = $('#side-menu a:not([href$="\\#"])');
        menuElement.click(function () {
          if ($(window).width() < 769) {
            $("body").toggleClass("mini-navbar");
          }
        });

        // Enable initial fixed sidebar
        if ($("body").hasClass("fixed-sidebar")) {
          var sidebar = element.parent();
          sidebar.slimScroll({
            height: "100%",
            railOpacity: 0.9
          });
        }
      }
    };
  }

  /**
   * iboxTools - Directive for iBox tools elements in right corner of ibox
   */
  function iboxTools($timeout) {
    return {
      restrict: "A",
      scope: true,
      templateUrl: "views/common/ibox_tools.html",
      controller: function ($scope, $element) {
        // Function for collapse ibox
        $scope.showhide = function () {
          var ibox = $element.closest("div.ibox");
          var icon = $element.find("i:first");
          var content = ibox.children(".ibox-content");
          content.slideToggle(200);
          // Toggle icon from up to down
          icon.toggleClass("fa-chevron-up").toggleClass("fa-chevron-down");
          ibox.toggleClass("").toggleClass("border-bottom");
          $timeout(function () {
            ibox.resize();
            ibox.find("[id^=map-]").resize();
          }, 50);
        };
        // Function for close ibox
        $scope.closebox = function () {
          var ibox = $element.closest("div.ibox");
          ibox.remove();
        };
      }
    };
  }

  /**
   * iboxTools with full screen - Directive for iBox tools elements in right corner of ibox with full screen option
   */
  function iboxToolsFullScreen($timeout) {
    return {
      restrict: "A",
      scope: true,
      templateUrl: "views/common/ibox_tools_full_screen.html",
      controller: function ($scope, $element) {
        // Function for collapse ibox
        $scope.showhide = function () {
          var ibox = $element.closest("div.ibox");
          var icon = $element.find("i:first");
          var content = ibox.children(".ibox-content");
          content.slideToggle(200);
          // Toggle icon from up to down
          icon.toggleClass("fa-chevron-up").toggleClass("fa-chevron-down");
          ibox.toggleClass("").toggleClass("border-bottom");
          $timeout(function () {
            ibox.resize();
            ibox.find("[id^=map-]").resize();
          }, 50);
        };
        // Function for close ibox
        $scope.closebox = function () {
          var ibox = $element.closest("div.ibox");
          ibox.remove();
        };
        // Function for full screen
        $scope.fullscreen = function () {
          var ibox = $element.closest("div.ibox");
          var button = $element.find("i.fa-expand");
          $("body").toggleClass("fullscreen-ibox-mode");
          button.toggleClass("fa-expand").toggleClass("fa-compress");
          ibox.toggleClass("fullscreen");
          setTimeout(function () {
            $(window).trigger("resize");
          }, 100);
        };
      }
    };
  }

  /**
   * minimalizaSidebar - Directive for minimalize sidebar
   */
  function minimalizaSidebar($timeout) {
    return {
      restrict: "A",
      template: '<a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="" ng-click="minimalize()"><i class="fa fa-bars"></i></a>',
      controller: function ($scope, $element) {
        $scope.minimalize = function () {
          $("body").toggleClass("mini-navbar");
          if (
            !$("body").hasClass("mini-navbar") ||
            $("body").hasClass("body-small")
          ) {
            // Hide menu in order to smoothly turn on when maximize menu
            $("#side-menu").hide();
            // For smoothly turn on menu
            setTimeout(function () {
              $("#side-menu").fadeIn(400);
            }, 200);
          } else if ($("body").hasClass("fixed-sidebar")) {
            $("#side-menu").hide();
            setTimeout(function () {
              $("#side-menu").fadeIn(400);
            }, 100);
          } else {
            // Remove all inline style from jquery fadeIn function to reset menu state
            $("#side-menu").removeAttr("style");
          }
        };
      }
    };
  }

  function closeOffCanvas() {
    return {
      restrict: "A",
      template: '<a class="close-canvas-menu" ng-click="closeOffCanvas()"><i class="fa fa-times"></i></a>',
      controller: function ($scope, $element) {
        $scope.closeOffCanvas = function () {
          $("body").toggleClass("mini-navbar");
        };
      }
    };
  }

  /**
   * sparkline - Directive for Sparkline chart
   */
  function sparkline() {
    return {
      restrict: "A",
      scope: {
        sparkData: "=",
        sparkOptions: "="
      },
      link: function (scope, element, attrs) {
        scope.$watch(scope.sparkData, function () {
          render();
        });
        scope.$watch(scope.sparkOptions, function () {
          render();
        });
        var render = function () {
          $(element).sparkline(scope.sparkData, scope.sparkOptions);
        };
      }
    };
  }

  /**
   * icheck - Directive for custom checkbox icheck
   */
  function icheck($timeout) {
    return {
      restrict: "A",
      require: "ngModel",
      link: function ($scope, element, $attrs, ngModel) {
        return $timeout(function () {
          var value;
          value = $attrs["value"];

          $scope.$watch($attrs["ngModel"], function (newValue) {
            $(element).iCheck("update");
          });

          return $(element)
            .iCheck({
              checkboxClass: "icheckbox_square-green",
              radioClass: "iradio_square-green"
            })
            .on("ifChanged", function (event) {
              if ($(element).attr("type") === "checkbox" && $attrs["ngModel"]) {
                $scope.$apply(function () {
                  return ngModel.$setViewValue(event.target.checked);
                });
              }
              if ($(element).attr("type") === "radio" && $attrs["ngModel"]) {
                return $scope.$apply(function () {
                  return ngModel.$setViewValue(value);
                });
              }
            });
        });
      }
    };
  }

  /**
   * dropZone - Directive for Drag and drop zone file upload plugin
   */
  function dropZone() {
    return {
      restrict: "C",
      link: function (scope, element, attrs) {
        var config = {
          url: "http://localhost:8080/upload",
          maxFilesize: 100,
          paramName: "uploadfile",
          maxThumbnailFilesize: 10,
          parallelUploads: 1,
          autoProcessQueue: false
        };

        var eventHandlers = {
          addedfile: function (file) {
            scope.file = file;
            if (this.files[1] != null) {
              this.removeFile(this.files[0]);
            }
            scope.$apply(function () {
              scope.fileAdded = true;
            });
          },

          success: function (file, response) {}
        };

        dropzone = new Dropzone(element[0], config);

        angular.forEach(eventHandlers, function (handler, event) {
          dropzone.on(event, handler);
        });

        scope.processDropzone = function () {
          dropzone.processQueue();
        };

        scope.resetDropzone = function () {
          dropzone.removeAllFiles();
        };
      }
    };
  }

  /**
   * fullScroll - Directive for slimScroll with 100%
   */
  function fullScroll($timeout) {
    return {
      restrict: "A",
      link: function (scope, element) {
        $timeout(function () {
          element.slimscroll({
            height: "100%",
            railOpacity: 0.9
          });
        });
      }
    };
  }

  /**
   * slimScroll - Directive for slimScroll with custom height
   */
  function slimScroll($timeout) {
    return {
      restrict: "A",
      scope: {
        boxHeight: "@"
      },
      link: function (scope, element) {
        $timeout(function () {
          element.slimscroll({
            height: scope.boxHeight,
            railOpacity: 0.9
          });
        });
      }
    };
  }

  /**
   * landingScrollspy - Directive for scrollspy in landing page
   */
  function landingScrollspy() {
    return {
      restrict: "A",
      link: function (scope, element, attrs) {
        element.scrollspy({
          target: ".navbar-fixed-top",
          offset: 80
        });
      }
    };
  }

  /**
   * fitHeight - Directive for set height fit to window height
   */
  function fitHeight() {
    return {
      restrict: "A",
      link: function (scope, element) {
        element.css("height", $(window).height() + "px");
        element.css("min-height", $(window).height() + "px");
      }
    };
  }

  /**
   * truncate - Directive for truncate string
   */
  function truncate($timeout) {
    return {
      restrict: "A",
      scope: {
        truncateOptions: "="
      },
      link: function (scope, element) {
        $timeout(function () {
          element.dotdotdot(scope.truncateOptions);
        });
      }
    };
  }

  /**
   * touchSpin - Directive for Bootstrap TouchSpin
   */
  function touchSpin() {
    return {
      restrict: "A",
      scope: {
        spinOptions: "="
      },
      link: function (scope, element, attrs) {
        scope.$watch(scope.spinOptions, function () {
          render();
        });
        var render = function () {
          $(element).TouchSpin(scope.spinOptions);
        };
      }
    };
  }

  /**
   * dettaglioPrestazioni - Directive for Dettaglio Prestazioni
   */
  function dettaglioPrestazioni($compile) {
    var directive = {};
    directive.restrict = "E";
    directive.scope = {
      anno: "@",
      parameter: "<"
    };
    directive.transclude = true;
    directive.templateUrl = function (scope, element) {
      return element.url;
    };
    return directive;
  }

  function datepicker() {
    // return {
    //   restrict: "EA",
    //   require: "ngModel",
    //   link: function(scope, elem, attrs, ngModelCtrl) {

    //     var updateModel = function(dateText) {
    //       scope.$apply(function() {
    //         ngModelCtrl.$setViewValue(dateText);
    //       });
    //     };

    //     var options = {
    //       dateFormat: "dd/mm/yy",
    //       onSelect: function(dateText) {
    //         updateModel(dateText);
    //       }
    //     };

    //     elem.datepicker(options);
    //   }
    // };

    return {
      restrict: "A",
      link: function (scope, element, attrs, ngModelCtrl) {
        element.datepicker({
          todayBtn: "linked",
          format: "dd/mm/yyyy",
          keyboardNavigation: false,
          forceParse: true,
          calendarWeeks: true,
          autoclose: true,
          language: window.language
          //orientation: 'bottom left'
        });
      }
    };
  }

  function customPopover() {

    return {
      restrict: 'A',
      template: '<span class="{{class}}" > <i class="fa fa-circle-o"></i> {{label}}</span>',
      link: function (scope, el, attrs) {
        scope.label = attrs.popoverLabel;
        scope.class = attrs.popoverClass;
        $(el).popover({
          trigger: attrs.popoverTrigger,
          html: true,
          content: attrs.popoverHtml,
          placement: attrs.popoverPlacement
        });
      }


    }
  }

  /**
   *
   * Collega tutte le funzioni al modulo principale
   */
  angular
    .module("inciso")
    .directive("pageTitle", pageTitle)
    .directive("sideNavigation", sideNavigation)
    .directive("iboxTools", iboxTools)
    .directive("minimalizaSidebar", minimalizaSidebar)
    .directive("sparkline", sparkline)
    .directive("icheck", icheck)
    .directive("dropZone", dropZone)
    .directive("fullScroll", fullScroll)
    .directive("closeOffCanvas", closeOffCanvas)
    .directive("landingScrollspy", landingScrollspy)
    .directive("fitHeight", fitHeight)
    .directive("iboxToolsFullScreen", iboxToolsFullScreen)
    .directive("slimScroll", slimScroll)
    .directive("truncate", truncate)
    .directive("dettaglioPrestazioni", dettaglioPrestazioni)
    .directive("touchSpin", touchSpin)
    .directive("datepicker", datepicker)
    .directive("customPopover", customPopover);

})();