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
})({"SGTj":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = () => {
  const video = _react.default.createRef();

  const canvas = _react.default.createRef();

  const handleClick = async () => {
    var _c$getContext;

    if (!video.current) return;
    if (!canvas.current) return;
    const [v, c] = [video.current, canvas.current];
    c.width = v.videoWidth;
    c.height = v.videoHeight;
    (_c$getContext = c.getContext('2d')) === null || _c$getContext === void 0 ? void 0 : _c$getContext.drawImage(v, 0, 0, c.width, c.height);
  };

  (0, _react.useEffect)(() => {
    ;

    (async () => {
      if (!video.current) return;
      const constraints = {
        audio: false,
        video: true
      };

      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        const videoTracks = stream.getVideoTracks();
        console.log('Got stream with constraints:', constraints);
        console.log(`Using video device: ${videoTracks[0].label}`);
        console.log(stream);
        video.current.srcObject = stream;
      } catch (e) {
        if (e.name === 'ConstraintNotSatisfiedError') {
          const v = constraints.video;
          console.error(`The resolution ${v.width.exact}x${v.height.exact} px is not supported by your device.`);
        } else if (e.name === 'PermissionDeniedError') {
          console.error('Permissions have not been granted to use your camera and ' + 'microphone, you need to allow the page access to your devices in ' + 'order for the demo to work.');
        }

        console.error(`getUserMedia error: ${e.name}`, e);
      }
    })();
  }, [video.current]);
  return _react.default.createElement("div", null, _react.default.createElement("h1", null, "getUserMedia Canvas"), _react.default.createElement("video", {
    autoPlay: true,
    playsInline: true,
    ref: video
  }), _react.default.createElement("button", {
    onClick: handleClick
  }, "Snapshot to Canvas"), _react.default.createElement("canvas", {
    ref: canvas,
    width: 100,
    height: 100,
    style: {
      backgroundColor: 'red'
    }
  }));
};

exports.default = _default;
},{"react":"n8MK"}]},{},[], null)
//# sourceMappingURL=GetUserMediaCanvas.a29ac7f9.js.map