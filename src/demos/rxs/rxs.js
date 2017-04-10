/**
 * rxs v0.4.0 (https://github.com/ItsJonQ/rxs#readme)
 * Reactive CSS: Super fast dynamic CSS rules.
 * Licensed under MIT
 */
(function(global, factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = global.document ?
      factory(global, true) :
      function(w) {
        if (!w.document) {
          throw new Error('RXS: Reactive CSS requires a window with a document');
        }
        return factory(w);
      };
  } else {
    factory(global);
  }
}(typeof window !== 'undefined' ? window : this, function(window, noGlobal) {
  'use strict';
  var document = window.document;

  var RXSRule = function(selector) {
    this.selector = selector;
    this.styleSheet = this.getStyleSheet();
    this.rule = this.getRule();
    this.ruleIndex = this.getRuleIndex();
    return this;
  };

  RXSRule.prototype.addStyleSheet = function() {
    var style = document.createElement('style');
    style.appendChild(document.createTextNode(''));
    document.head.appendChild(style);
    return style.sheet;
  };

  RXSRule.prototype.getStyleSheet = function() {
    return this.styleSheet || document.styleSheets[0] || this.addStyleSheet();
  };

  RXSRule.prototype.getRules = function() {
    var sheet = this.getStyleSheet();
    return sheet.cssRules || sheet.rules;
  };

  RXSRule.prototype.getRuleIndex = function() {
    if (!this.ruleIndex) {
      if (this.rule) {
        this.ruleIndex = this.findRuleIndex();
      } else {
        var len = this.getRules().length;
        this.ruleIndex = len ? len - 1 : 0;
      }
    }
    return this.ruleIndex;
  };

  RXSRule.prototype.addRule = function() {
    var index = this.getRuleIndex();
    this.getStyleSheet().insertRule(this.selector + ' { }', index);
    return this.getRules()[index];
  };

  RXSRule.prototype.removeRule = function() {
    if (this.findRule()) {
      this.getStyleSheet().deleteRule(this.getRuleIndex());
    }
    return this;
  };

  RXSRule.prototype.findRuleIndex = function() {
    var rules = this.getRules();
    var index = false;
    for (var i = 0, len = Object.keys(rules).length; i < len; i++) {
      if (rules[i].selectorText === this.selector) {
        index = i; break;
      }
    }
    return index;
  };

  RXSRule.prototype.findRule = function() {
    var rules = this.getRules();
    var index = this.findRuleIndex();
    var rule = index !== false ? rules[index] : false;
    return rule;
  };

  RXSRule.prototype.getRule = function() {
    return this.rule = this.findRule() || this.addRule();
  };

  RXSRule.prototype.isImportant = function(prop) {
    return prop.toString().indexOf('!important') >= 0 ? 'important' : '';
  };

  RXSRule.prototype.set = function(styleProps, important) {
    var self = this;
    Object.keys(styleProps).forEach(function(k) {
      var prop = styleProps[k];
      var p = typeof prop === 'string' ? prop.replace(' !important', '') : prop;
      var i = important === 'important' ? 'important' : self.isImportant(prop);
      self.getRule().style.setProperty(k, p, i);
    });
    return this;
  };

  RXSRule.prototype.inspect = function() {
    var style = this.getRule().style;
    return Object.keys(style).reduce(function(props, r) {
      if(style[r].length && isNaN(parseInt(r, 10))) {
        props[r] = style[r];
      }
      return props;
    }, {});
  };

  RXSRule.prototype.remove = function() {
    return this.removeRule();
  };

  var RXS = function(selector, props) {
    if (!selector || typeof selector !== 'string') {
      return false;
    }
    var rule = new RXSRule(selector);
    if (props && typeof props === 'object') {
      rule.set(props);
    }
    return rule;
  };

  window.RXSRule = RXSRule;
  return window.rxs = window.RXS = RXS;
}));
