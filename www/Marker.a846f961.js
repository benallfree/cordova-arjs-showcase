// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"N8Jz":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = () => {
  (0, _react.useEffect)(() => {
    window.addEventListener('camera-init', data => {
      console.log('camera-init', data);
    });
    window.addEventListener('camera-error', error => {
      console.log('camera-error', error);
    });
    AFRAME.registerComponent('registerevents', {
      init: function () {
        var marker = this.el;
        marker.addEventListener('markerFound', function () {
          var markerId = marker.id;
          console.log('markerFound', markerId); // TODO: Add your own code here to react to the marker being found.
        });
        marker.addEventListener('markerLost', function () {
          var markerId = marker.id;
          console.log('markerLost', markerId); // TODO: Add your own code here to react to the marker being lost.
        });
      }
    });
  }, []);
  return _react.default.createElement("a-scene", {
    embedded: true,
    arjs: "sourceType: webcam; detectionMode: mono_and_matrix; matrixCodeType: 3x3; sourceWidth:1280; sourceHeight:720; displayWidth: 300; displayHeight: 300;"
  }, _react.default.createElement("a-marker", {
    preset: "hiro",
    id: "marker-hiro",
    registerevents: true
  }, _react.default.createElement("a-box", {
    position: "0 0.5 0",
    material: "opacity: 0.5; side: double;color:blue;"
  }, _react.default.createElement("a-torus-knot", {
    radius: "0.26",
    "radius-tubular": "0.05",
    animation: "property: rotation; to:360 0 0; dur: 5000; easing: linear; loop: true"
  }))), _react.default.createElement("a-marker", {
    type: "barcode",
    value: "5",
    id: "marker-barcode-5"
  }, _react.default.createElement("a-box", {
    position: "0 0.5 0",
    material: "opacity: 0.5; side: double;color:red;"
  }, _react.default.createElement("a-torus-knot", {
    radius: "0.26",
    "radius-tubular": "0.05",
    animation: "property: rotation; to:360 0 0; dur: 5000; easing: linear; loop: true"
  }))), _react.default.createElement("a-entity", {
    camera: true
  }));
};

exports.default = _default;
},{"react":"n8MK"}]},{},[], null)
//# sourceMappingURL=Marker.a846f961.js.map