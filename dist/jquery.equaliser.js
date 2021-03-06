/*!
 * Equaliser v1.0.6
 * Make the heights of elements on the same row the same
 * https://mogusbi.co.uk
 *
 * Written by Mo Gusbi
 */
; (function ($, window, document, undefined) {
  'use strict';

  var pluginName = 'equaliser',
      defaults = {
        minus: 0,
        add: 0
      };

  function Plugin(element, options) {
    this.element = element;
    this.settings = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  $.extend(Plugin.prototype, {
    init: function () {
      var _this = this,
          resizeTimer;

      $(window).on('load resize', function () {
        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(function () {
          _this.setHeights();
        }, 100);
      });

      _this.setHeights();
    },
    setHeights: function () {
      var settings = this.settings,
          currentTallest = 0,
          currentRowStart = 0,
          rowDivs = [],
          topPosition = 0,
          currentDiv;

      $(this.element)
        .removeAttr('style')
        .each(function () {
          $(this).removeAttr('style');

          topPosition = Math.round($(this).offset().top);

          if (currentRowStart !== topPosition) {
           
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv += 1) {
              rowDivs[currentDiv].outerHeight(currentTallest - settings.minus + settings.add);
            }

            rowDivs.length = 0;
            currentRowStart = topPosition;
            currentTallest = $(this).outerHeight();
            rowDivs.push($(this));
          } else {
           
            rowDivs.push($(this));

            currentTallest = (currentTallest < $(this).outerHeight()) ? ($(this).outerHeight()) : (currentTallest);
          }

         
          for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv += 1) {
            rowDivs[currentDiv].outerHeight(currentTallest - settings.minus + settings.add);
          }
        });
    }
  });

  $.fn[pluginName] = function (options) {
    if (!$.data(this, "plugin_" + pluginName)) {
      $.data(this, "plugin_" + pluginName, new Plugin(this, options));
    }

    return this;
  };
})(jQuery, window, document);