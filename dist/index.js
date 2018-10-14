'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Suggest = function () {
  function Suggest(app, opts) {
    _classCallCheck(this, Suggest);

    this.wrapper = app;
    this.id = 'asdasd';
    this.options = Object.assign({}, opts);
    this.state = {};
    this.start();
  }

  _createClass(Suggest, [{
    key: 'template',
    value: function template() {
      return '\n      <div class="suggest-wrapper" data-suggest-id="' + this.id + '">\n        <input type="text" />\n        <div class="suggest-list"></div>\n      </div>\n    ';
    }
  }, {
    key: 'result',
    value: function result(data, regex) {
      return data.map(function (item) {
        var title = item['title'].toLowerCase().replace(regex, '<b>$1</b>');

        return '<div class="suggest-list_item" data-title="' + item['title'] + '" data-value="' + item['value'] + '">' + title + '</div>';
      }).join('\n');
    }
  }, {
    key: 'draw',
    value: async function draw(wrapper, query) {
      var _this = this;

      await fetch(this.options['url']).then(function (res) {
        return res.json();
      }).then(function (res) {
        var search = '(' + query.split(/ /g).join('|') + ')';
        var regex = new RegExp(search, 'g');

        wrapper.innerHTML = _this.result(res.filter(function (item) {
          return regex.test(item['value']) || regex.test(item['title']);
        }), regex);
      });
    }
  }, {
    key: 'start',
    value: function start() {
      var _this2 = this;

      var wrapper = document.querySelector(this.wrapper);

      wrapper.innerHTML = this.template();

      var element = document.querySelector('[data-suggest-id="' + this.id + '"]');
      var input = element.querySelector('input');
      var list = element.querySelector('.suggest-list');

      input.addEventListener('keyup', function (e) {
        var value = e.target.value;

        if (value.length >= _this2.options['minimal']) {
          list.classList.add('suggest-list_active');

          _this2.draw(list, value).then(function () {
            list.querySelectorAll('.suggest-list_item').forEach(function (element) {
              element.addEventListener('click', function (e) {
                _this2.state = e.target.dataset;
                input.value = _this2.state['title'];
              }, false);
            });
          });
        } else {
          list.classList.remove('suggest-list_active');
        }
      }, false);
    }
  }]);

  return Suggest;
}();