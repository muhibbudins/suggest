"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Suggest = function () {
  function Suggest(app, opts) {
    _classCallCheck(this, Suggest);

    this.wrapper = app;
    this.start();
  }

  _createClass(Suggest, [{
    key: "fetch",
    value: function fetch() {
      return new Promise(function (resolve) {});
    }
  }, {
    key: "filter",
    value: function filter() {
      return new Promise(function (resolve) {});
    }
  }, {
    key: "draw",
    value: async function draw() {
      // const fetch = await this.fetch()
      // const result = await this.filter(fetch)

      return "\n      <div class=\"suggest-wrapper\">\n        <input type=\"text\" />\n        <div class=\"suggest-list\">\n          " + this.drawItem([]) + "\n        </div>\n      </div>\n    ";
    }
  }, {
    key: "drawItem",
    value: function drawItem() {}
  }, {
    key: "start",
    value: function start() {
      var _this = this;

      this.draw().then(function (res) {
        console.log(res);
        document.querySelector(_this.wrapper).innerHTML = res;
      });
    }
  }]);

  return Suggest;
}();