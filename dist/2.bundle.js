(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/dompurify/dist/purify.js":
/*!***********************************************!*\
  !*** ./node_modules/dompurify/dist/purify.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! @license DOMPurify 2.4.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.7/LICENSE */

(function (global, factory) {
   true ? module.exports = factory() : undefined;
})(this, function () {
  'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }
    return _construct.apply(null, arguments);
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var hasOwnProperty = Object.hasOwnProperty,
    setPrototypeOf = Object.setPrototypeOf,
    isFrozen = Object.isFrozen,
    getPrototypeOf = Object.getPrototypeOf,
    getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var freeze = Object.freeze,
    seal = Object.seal,
    create = Object.create; // eslint-disable-line import/no-mutable-exports

  var _ref = typeof Reflect !== 'undefined' && Reflect,
    apply = _ref.apply,
    construct = _ref.construct;
  if (!apply) {
    apply = function apply(fun, thisValue, args) {
      return fun.apply(thisValue, args);
    };
  }
  if (!freeze) {
    freeze = function freeze(x) {
      return x;
    };
  }
  if (!seal) {
    seal = function seal(x) {
      return x;
    };
  }
  if (!construct) {
    construct = function construct(Func, args) {
      return _construct(Func, _toConsumableArray(args));
    };
  }
  var arrayForEach = unapply(Array.prototype.forEach);
  var arrayPop = unapply(Array.prototype.pop);
  var arrayPush = unapply(Array.prototype.push);
  var stringToLowerCase = unapply(String.prototype.toLowerCase);
  var stringToString = unapply(String.prototype.toString);
  var stringMatch = unapply(String.prototype.match);
  var stringReplace = unapply(String.prototype.replace);
  var stringIndexOf = unapply(String.prototype.indexOf);
  var stringTrim = unapply(String.prototype.trim);
  var regExpTest = unapply(RegExp.prototype.test);
  var typeErrorCreate = unconstruct(TypeError);
  function unapply(func) {
    return function (thisArg) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      return apply(func, thisArg, args);
    };
  }
  function unconstruct(func) {
    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return construct(func, args);
    };
  }
  /* Add properties to a lookup table */

  function addToSet(set, array, transformCaseFunc) {
    var _transformCaseFunc;
    transformCaseFunc = (_transformCaseFunc = transformCaseFunc) !== null && _transformCaseFunc !== void 0 ? _transformCaseFunc : stringToLowerCase;
    if (setPrototypeOf) {
      // Make 'in' and truthy checks like Boolean(set.constructor)
      // independent of any properties defined on Object.prototype.
      // Prevent prototype setters from intercepting set as a this value.
      setPrototypeOf(set, null);
    }
    var l = array.length;
    while (l--) {
      var element = array[l];
      if (typeof element === 'string') {
        var lcElement = transformCaseFunc(element);
        if (lcElement !== element) {
          // Config presets (e.g. tags.js, attrs.js) are immutable.
          if (!isFrozen(array)) {
            array[l] = lcElement;
          }
          element = lcElement;
        }
      }
      set[element] = true;
    }
    return set;
  }
  /* Shallow clone an object */

  function clone(object) {
    var newObject = create(null);
    var property;
    for (property in object) {
      if (apply(hasOwnProperty, object, [property]) === true) {
        newObject[property] = object[property];
      }
    }
    return newObject;
  }
  /* IE10 doesn't support __lookupGetter__ so lets'
   * simulate it. It also automatically checks
   * if the prop is function or getter and behaves
   * accordingly. */

  function lookupGetter(object, prop) {
    while (object !== null) {
      var desc = getOwnPropertyDescriptor(object, prop);
      if (desc) {
        if (desc.get) {
          return unapply(desc.get);
        }
        if (typeof desc.value === 'function') {
          return unapply(desc.value);
        }
      }
      object = getPrototypeOf(object);
    }
    function fallbackValue(element) {
      console.warn('fallback value for', element);
      return null;
    }
    return fallbackValue;
  }
  var html$1 = freeze(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']); // SVG

  var svg$1 = freeze(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'view', 'vkern']);
  var svgFilters = freeze(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']); // List of SVG elements that are disallowed by default.
  // We still need to know them so that we can do namespace
  // checks properly in case one wants to add them to
  // allow-list.

  var svgDisallowed = freeze(['animate', 'color-profile', 'cursor', 'discard', 'fedropshadow', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri', 'foreignobject', 'hatch', 'hatchpath', 'mesh', 'meshgradient', 'meshpatch', 'meshrow', 'missing-glyph', 'script', 'set', 'solidcolor', 'unknown', 'use']);
  var mathMl$1 = freeze(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover']); // Similarly to SVG, we want to know all MathML elements,
  // even those that we disallow by default.

  var mathMlDisallowed = freeze(['maction', 'maligngroup', 'malignmark', 'mlongdiv', 'mscarries', 'mscarry', 'msgroup', 'mstack', 'msline', 'msrow', 'semantics', 'annotation', 'annotation-xml', 'mprescripts', 'none']);
  var text = freeze(['#text']);
  var html = freeze(['accept', 'action', 'align', 'alt', 'autocapitalize', 'autocomplete', 'autopictureinpicture', 'autoplay', 'background', 'bgcolor', 'border', 'capture', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'controlslist', 'coords', 'crossorigin', 'datetime', 'decoding', 'default', 'dir', 'disabled', 'disablepictureinpicture', 'disableremoteplayback', 'download', 'draggable', 'enctype', 'enterkeyhint', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'inputmode', 'integrity', 'ismap', 'kind', 'label', 'lang', 'list', 'loading', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'minlength', 'multiple', 'muted', 'name', 'nonce', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'playsinline', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'translate', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns', 'slot']);
  var svg = freeze(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clippathunits', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterunits', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'primitiveunits', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'startoffset', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'systemlanguage', 'tabindex', 'targetx', 'targety', 'transform', 'transform-origin', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);
  var mathMl = freeze(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'encoding', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);
  var xml = freeze(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']);
  var MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode

  var ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
  var TMPLIT_EXPR = seal(/\${[\w\W]*}/gm);
  var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape

  var ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape

  var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
  );
  var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
  var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
  );
  var DOCTYPE_NAME = seal(/^html$/i);
  var getGlobal = function getGlobal() {
    return typeof window === 'undefined' ? null : window;
  };
  /**
   * Creates a no-op policy for internal use only.
   * Don't export this function outside this module!
   * @param {?TrustedTypePolicyFactory} trustedTypes The policy factory.
   * @param {Document} document The document object (to determine policy name suffix)
   * @return {?TrustedTypePolicy} The policy created (or null, if Trusted Types
   * are not supported).
   */

  var _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, document) {
    if (_typeof(trustedTypes) !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
      return null;
    } // Allow the callers to control the unique policy name
    // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
    // Policy creation with duplicate names throws in Trusted Types.

    var suffix = null;
    var ATTR_NAME = 'data-tt-policy-suffix';
    if (document.currentScript && document.currentScript.hasAttribute(ATTR_NAME)) {
      suffix = document.currentScript.getAttribute(ATTR_NAME);
    }
    var policyName = 'dompurify' + (suffix ? '#' + suffix : '');
    try {
      return trustedTypes.createPolicy(policyName, {
        createHTML: function createHTML(html) {
          return html;
        },
        createScriptURL: function createScriptURL(scriptUrl) {
          return scriptUrl;
        }
      });
    } catch (_) {
      // Policy creation failed (most likely another DOMPurify script has
      // already run). Skip creating the policy, as this will only cause errors
      // if TT are enforced.
      console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
      return null;
    }
  };
  function createDOMPurify() {
    var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();
    var DOMPurify = function DOMPurify(root) {
      return createDOMPurify(root);
    };
    /**
     * Version label, exposed for easier checks
     * if DOMPurify is up to date or not
     */

    DOMPurify.version = '2.4.7';
    /**
     * Array of elements that DOMPurify removed during sanitation.
     * Empty if nothing was removed.
     */

    DOMPurify.removed = [];
    if (!window || !window.document || window.document.nodeType !== 9) {
      // Not running in a browser, provide a factory function
      // so that you can pass your own Window
      DOMPurify.isSupported = false;
      return DOMPurify;
    }
    var originalDocument = window.document;
    var document = window.document;
    var DocumentFragment = window.DocumentFragment,
      HTMLTemplateElement = window.HTMLTemplateElement,
      Node = window.Node,
      Element = window.Element,
      NodeFilter = window.NodeFilter,
      _window$NamedNodeMap = window.NamedNodeMap,
      NamedNodeMap = _window$NamedNodeMap === void 0 ? window.NamedNodeMap || window.MozNamedAttrMap : _window$NamedNodeMap,
      HTMLFormElement = window.HTMLFormElement,
      DOMParser = window.DOMParser,
      trustedTypes = window.trustedTypes;
    var ElementPrototype = Element.prototype;
    var cloneNode = lookupGetter(ElementPrototype, 'cloneNode');
    var getNextSibling = lookupGetter(ElementPrototype, 'nextSibling');
    var getChildNodes = lookupGetter(ElementPrototype, 'childNodes');
    var getParentNode = lookupGetter(ElementPrototype, 'parentNode'); // As per issue #47, the web-components registry is inherited by a
    // new document created via createHTMLDocument. As per the spec
    // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
    // a new empty registry is used when creating a template contents owner
    // document, so we use that as our parent document to ensure nothing
    // is inherited.

    if (typeof HTMLTemplateElement === 'function') {
      var template = document.createElement('template');
      if (template.content && template.content.ownerDocument) {
        document = template.content.ownerDocument;
      }
    }
    var trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, originalDocument);
    var emptyHTML = trustedTypesPolicy ? trustedTypesPolicy.createHTML('') : '';
    var _document = document,
      implementation = _document.implementation,
      createNodeIterator = _document.createNodeIterator,
      createDocumentFragment = _document.createDocumentFragment,
      getElementsByTagName = _document.getElementsByTagName;
    var importNode = originalDocument.importNode;
    var documentMode = {};
    try {
      documentMode = clone(document).documentMode ? document.documentMode : {};
    } catch (_) {}
    var hooks = {};
    /**
     * Expose whether this browser supports running the full DOMPurify.
     */

    DOMPurify.isSupported = typeof getParentNode === 'function' && implementation && implementation.createHTMLDocument !== undefined && documentMode !== 9;
    var MUSTACHE_EXPR$1 = MUSTACHE_EXPR,
      ERB_EXPR$1 = ERB_EXPR,
      TMPLIT_EXPR$1 = TMPLIT_EXPR,
      DATA_ATTR$1 = DATA_ATTR,
      ARIA_ATTR$1 = ARIA_ATTR,
      IS_SCRIPT_OR_DATA$1 = IS_SCRIPT_OR_DATA,
      ATTR_WHITESPACE$1 = ATTR_WHITESPACE;
    var IS_ALLOWED_URI$1 = IS_ALLOWED_URI;
    /**
     * We consider the elements and attributes below to be safe. Ideally
     * don't add any new ones but feel free to remove unwanted ones.
     */

    /* allowed element names */

    var ALLOWED_TAGS = null;
    var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(html$1), _toConsumableArray(svg$1), _toConsumableArray(svgFilters), _toConsumableArray(mathMl$1), _toConsumableArray(text)));
    /* Allowed attribute names */

    var ALLOWED_ATTR = null;
    var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray(html), _toConsumableArray(svg), _toConsumableArray(mathMl), _toConsumableArray(xml)));
    /*
     * Configure how DOMPUrify should handle custom elements and their attributes as well as customized built-in elements.
     * @property {RegExp|Function|null} tagNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any custom elements)
     * @property {RegExp|Function|null} attributeNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any attributes not on the allow list)
     * @property {boolean} allowCustomizedBuiltInElements allow custom elements derived from built-ins if they pass CUSTOM_ELEMENT_HANDLING.tagNameCheck. Default: `false`.
     */

    var CUSTOM_ELEMENT_HANDLING = Object.seal(Object.create(null, {
      tagNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      attributeNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      allowCustomizedBuiltInElements: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: false
      }
    }));
    /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */

    var FORBID_TAGS = null;
    /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */

    var FORBID_ATTR = null;
    /* Decide if ARIA attributes are okay */

    var ALLOW_ARIA_ATTR = true;
    /* Decide if custom data attributes are okay */

    var ALLOW_DATA_ATTR = true;
    /* Decide if unknown protocols are okay */

    var ALLOW_UNKNOWN_PROTOCOLS = false;
    /* Decide if self-closing tags in attributes are allowed.
     * Usually removed due to a mXSS issue in jQuery 3.0 */

    var ALLOW_SELF_CLOSE_IN_ATTR = true;
    /* Output should be safe for common template engines.
     * This means, DOMPurify removes data attributes, mustaches and ERB
     */

    var SAFE_FOR_TEMPLATES = false;
    /* Decide if document with <html>... should be returned */

    var WHOLE_DOCUMENT = false;
    /* Track whether config is already set on this instance of DOMPurify. */

    var SET_CONFIG = false;
    /* Decide if all elements (e.g. style, script) must be children of
     * document.body. By default, browsers might move them to document.head */

    var FORCE_BODY = false;
    /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
     * string (or a TrustedHTML object if Trusted Types are supported).
     * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
     */

    var RETURN_DOM = false;
    /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
     * string  (or a TrustedHTML object if Trusted Types are supported) */

    var RETURN_DOM_FRAGMENT = false;
    /* Try to return a Trusted Type object instead of a string, return a string in
     * case Trusted Types are not supported  */

    var RETURN_TRUSTED_TYPE = false;
    /* Output should be free from DOM clobbering attacks?
     * This sanitizes markups named with colliding, clobberable built-in DOM APIs.
     */

    var SANITIZE_DOM = true;
    /* Achieve full DOM Clobbering protection by isolating the namespace of named
     * properties and JS variables, mitigating attacks that abuse the HTML/DOM spec rules.
     *
     * HTML/DOM spec rules that enable DOM Clobbering:
     *   - Named Access on Window (§7.3.3)
     *   - DOM Tree Accessors (§3.1.5)
     *   - Form Element Parent-Child Relations (§4.10.3)
     *   - Iframe srcdoc / Nested WindowProxies (§4.8.5)
     *   - HTMLCollection (§4.2.10.2)
     *
     * Namespace isolation is implemented by prefixing `id` and `name` attributes
     * with a constant string, i.e., `user-content-`
     */

    var SANITIZE_NAMED_PROPS = false;
    var SANITIZE_NAMED_PROPS_PREFIX = 'user-content-';
    /* Keep element content when removing element? */

    var KEEP_CONTENT = true;
    /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
     * of importing it into a new Document and returning a sanitized copy */

    var IN_PLACE = false;
    /* Allow usage of profiles like html, svg and mathMl */

    var USE_PROFILES = {};
    /* Tags to ignore content of when KEEP_CONTENT is true */

    var FORBID_CONTENTS = null;
    var DEFAULT_FORBID_CONTENTS = addToSet({}, ['annotation-xml', 'audio', 'colgroup', 'desc', 'foreignobject', 'head', 'iframe', 'math', 'mi', 'mn', 'mo', 'ms', 'mtext', 'noembed', 'noframes', 'noscript', 'plaintext', 'script', 'style', 'svg', 'template', 'thead', 'title', 'video', 'xmp']);
    /* Tags that are safe for data: URIs */

    var DATA_URI_TAGS = null;
    var DEFAULT_DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image', 'track']);
    /* Attributes safe for values like "javascript:" */

    var URI_SAFE_ATTRIBUTES = null;
    var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'role', 'summary', 'title', 'value', 'style', 'xmlns']);
    var MATHML_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
    var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
    var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
    /* Document namespace */

    var NAMESPACE = HTML_NAMESPACE;
    var IS_EMPTY_INPUT = false;
    /* Allowed XHTML+XML namespaces */

    var ALLOWED_NAMESPACES = null;
    var DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
    /* Parsing of strict XHTML documents */

    var PARSER_MEDIA_TYPE;
    var SUPPORTED_PARSER_MEDIA_TYPES = ['application/xhtml+xml', 'text/html'];
    var DEFAULT_PARSER_MEDIA_TYPE = 'text/html';
    var transformCaseFunc;
    /* Keep a reference to config to pass to hooks */

    var CONFIG = null;
    /* Ideally, do not touch anything below this line */

    /* ______________________________________________ */

    var formElement = document.createElement('form');
    var isRegexOrFunction = function isRegexOrFunction(testValue) {
      return testValue instanceof RegExp || testValue instanceof Function;
    };
    /**
     * _parseConfig
     *
     * @param  {Object} cfg optional config literal
     */
    // eslint-disable-next-line complexity

    var _parseConfig = function _parseConfig(cfg) {
      if (CONFIG && CONFIG === cfg) {
        return;
      }
      /* Shield configuration object from tampering */

      if (!cfg || _typeof(cfg) !== 'object') {
        cfg = {};
      }
      /* Shield configuration object from prototype pollution */

      cfg = clone(cfg);
      PARSER_MEDIA_TYPE =
      // eslint-disable-next-line unicorn/prefer-includes
      SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? PARSER_MEDIA_TYPE = DEFAULT_PARSER_MEDIA_TYPE : PARSER_MEDIA_TYPE = cfg.PARSER_MEDIA_TYPE; // HTML tags and attributes are not case-sensitive, converting to lowercase. Keeping XHTML as is.

      transformCaseFunc = PARSER_MEDIA_TYPE === 'application/xhtml+xml' ? stringToString : stringToLowerCase;
      /* Set configuration parameters */

      ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
      ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
      ALLOWED_NAMESPACES = 'ALLOWED_NAMESPACES' in cfg ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
      URI_SAFE_ATTRIBUTES = 'ADD_URI_SAFE_ATTR' in cfg ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES),
      // eslint-disable-line indent
      cfg.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      transformCaseFunc // eslint-disable-line indent
      ) // eslint-disable-line indent
      : DEFAULT_URI_SAFE_ATTRIBUTES;
      DATA_URI_TAGS = 'ADD_DATA_URI_TAGS' in cfg ? addToSet(clone(DEFAULT_DATA_URI_TAGS),
      // eslint-disable-line indent
      cfg.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      transformCaseFunc // eslint-disable-line indent
      ) // eslint-disable-line indent
      : DEFAULT_DATA_URI_TAGS;
      FORBID_CONTENTS = 'FORBID_CONTENTS' in cfg ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
      FORBID_TAGS = 'FORBID_TAGS' in cfg ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : {};
      FORBID_ATTR = 'FORBID_ATTR' in cfg ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : {};
      USE_PROFILES = 'USE_PROFILES' in cfg ? cfg.USE_PROFILES : false;
      ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true

      ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true

      ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false

      ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false; // Default true

      SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false

      WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false

      RETURN_DOM = cfg.RETURN_DOM || false; // Default false

      RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false

      RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false

      FORCE_BODY = cfg.FORCE_BODY || false; // Default false

      SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true

      SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false; // Default false

      KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true

      IN_PLACE = cfg.IN_PLACE || false; // Default false

      IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$1;
      NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
      CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
      }
      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
      }
      if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === 'boolean') {
        CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
      }
      if (SAFE_FOR_TEMPLATES) {
        ALLOW_DATA_ATTR = false;
      }
      if (RETURN_DOM_FRAGMENT) {
        RETURN_DOM = true;
      }
      /* Parse profile info */

      if (USE_PROFILES) {
        ALLOWED_TAGS = addToSet({}, _toConsumableArray(text));
        ALLOWED_ATTR = [];
        if (USE_PROFILES.html === true) {
          addToSet(ALLOWED_TAGS, html$1);
          addToSet(ALLOWED_ATTR, html);
        }
        if (USE_PROFILES.svg === true) {
          addToSet(ALLOWED_TAGS, svg$1);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }
        if (USE_PROFILES.svgFilters === true) {
          addToSet(ALLOWED_TAGS, svgFilters);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }
        if (USE_PROFILES.mathMl === true) {
          addToSet(ALLOWED_TAGS, mathMl$1);
          addToSet(ALLOWED_ATTR, mathMl);
          addToSet(ALLOWED_ATTR, xml);
        }
      }
      /* Merge configuration parameters */

      if (cfg.ADD_TAGS) {
        if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
          ALLOWED_TAGS = clone(ALLOWED_TAGS);
        }
        addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
      }
      if (cfg.ADD_ATTR) {
        if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
          ALLOWED_ATTR = clone(ALLOWED_ATTR);
        }
        addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
      }
      if (cfg.ADD_URI_SAFE_ATTR) {
        addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
      }
      if (cfg.FORBID_CONTENTS) {
        if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
          FORBID_CONTENTS = clone(FORBID_CONTENTS);
        }
        addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
      }
      /* Add #text in case KEEP_CONTENT is set to true */

      if (KEEP_CONTENT) {
        ALLOWED_TAGS['#text'] = true;
      }
      /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */

      if (WHOLE_DOCUMENT) {
        addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
      }
      /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */

      if (ALLOWED_TAGS.table) {
        addToSet(ALLOWED_TAGS, ['tbody']);
        delete FORBID_TAGS.tbody;
      } // Prevent further manipulation of configuration.
      // Not available in IE8, Safari 5, etc.

      if (freeze) {
        freeze(cfg);
      }
      CONFIG = cfg;
    };
    var MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ['mi', 'mo', 'mn', 'ms', 'mtext']);
    var HTML_INTEGRATION_POINTS = addToSet({}, ['foreignobject', 'desc', 'title', 'annotation-xml']); // Certain elements are allowed in both SVG and HTML
    // namespace. We need to specify them explicitly
    // so that they don't get erroneously deleted from
    // HTML namespace.

    var COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ['title', 'style', 'font', 'a', 'script']);
    /* Keep track of all possible SVG and MathML tags
     * so that we can perform the namespace checks
     * correctly. */

    var ALL_SVG_TAGS = addToSet({}, svg$1);
    addToSet(ALL_SVG_TAGS, svgFilters);
    addToSet(ALL_SVG_TAGS, svgDisallowed);
    var ALL_MATHML_TAGS = addToSet({}, mathMl$1);
    addToSet(ALL_MATHML_TAGS, mathMlDisallowed);
    /**
     *
     *
     * @param  {Element} element a DOM element whose namespace is being checked
     * @returns {boolean} Return false if the element has a
     *  namespace that a spec-compliant parser would never
     *  return. Return true otherwise.
     */

    var _checkValidNamespace = function _checkValidNamespace(element) {
      var parent = getParentNode(element); // In JSDOM, if we're inside shadow DOM, then parentNode
      // can be null. We just simulate parent in this case.

      if (!parent || !parent.tagName) {
        parent = {
          namespaceURI: NAMESPACE,
          tagName: 'template'
        };
      }
      var tagName = stringToLowerCase(element.tagName);
      var parentTagName = stringToLowerCase(parent.tagName);
      if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
        return false;
      }
      if (element.namespaceURI === SVG_NAMESPACE) {
        // The only way to switch from HTML namespace to SVG
        // is via <svg>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'svg';
        } // The only way to switch from MathML to SVG is via`
        // svg if parent is either <annotation-xml> or MathML
        // text integration points.

        if (parent.namespaceURI === MATHML_NAMESPACE) {
          return tagName === 'svg' && (parentTagName === 'annotation-xml' || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
        } // We only allow elements that are defined in SVG
        // spec. All others are disallowed in SVG namespace.

        return Boolean(ALL_SVG_TAGS[tagName]);
      }
      if (element.namespaceURI === MATHML_NAMESPACE) {
        // The only way to switch from HTML namespace to MathML
        // is via <math>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'math';
        } // The only way to switch from SVG to MathML is via
        // <math> and HTML integration points

        if (parent.namespaceURI === SVG_NAMESPACE) {
          return tagName === 'math' && HTML_INTEGRATION_POINTS[parentTagName];
        } // We only allow elements that are defined in MathML
        // spec. All others are disallowed in MathML namespace.

        return Boolean(ALL_MATHML_TAGS[tagName]);
      }
      if (element.namespaceURI === HTML_NAMESPACE) {
        // The only way to switch from SVG to HTML is via
        // HTML integration points, and from MathML to HTML
        // is via MathML text integration points
        if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }
        if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
          return false;
        } // We disallow tags that are specific for MathML
        // or SVG and should never appear in HTML namespace

        return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
      } // For XHTML and XML documents that support custom namespaces

      if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && ALLOWED_NAMESPACES[element.namespaceURI]) {
        return true;
      } // The code should never reach this place (this means
      // that the element somehow got namespace that is not
      // HTML, SVG, MathML or allowed via ALLOWED_NAMESPACES).
      // Return false just in case.

      return false;
    };
    /**
     * _forceRemove
     *
     * @param  {Node} node a DOM node
     */

    var _forceRemove = function _forceRemove(node) {
      arrayPush(DOMPurify.removed, {
        element: node
      });
      try {
        // eslint-disable-next-line unicorn/prefer-dom-node-remove
        node.parentNode.removeChild(node);
      } catch (_) {
        try {
          node.outerHTML = emptyHTML;
        } catch (_) {
          node.remove();
        }
      }
    };
    /**
     * _removeAttribute
     *
     * @param  {String} name an Attribute name
     * @param  {Node} node a DOM node
     */

    var _removeAttribute = function _removeAttribute(name, node) {
      try {
        arrayPush(DOMPurify.removed, {
          attribute: node.getAttributeNode(name),
          from: node
        });
      } catch (_) {
        arrayPush(DOMPurify.removed, {
          attribute: null,
          from: node
        });
      }
      node.removeAttribute(name); // We void attribute values for unremovable "is"" attributes

      if (name === 'is' && !ALLOWED_ATTR[name]) {
        if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
          try {
            _forceRemove(node);
          } catch (_) {}
        } else {
          try {
            node.setAttribute(name, '');
          } catch (_) {}
        }
      }
    };
    /**
     * _initDocument
     *
     * @param  {String} dirty a string of dirty markup
     * @return {Document} a DOM, filled with the dirty markup
     */

    var _initDocument = function _initDocument(dirty) {
      /* Create a HTML document */
      var doc;
      var leadingWhitespace;
      if (FORCE_BODY) {
        dirty = '<remove></remove>' + dirty;
      } else {
        /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
        var matches = stringMatch(dirty, /^[\r\n\t ]+/);
        leadingWhitespace = matches && matches[0];
      }
      if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && NAMESPACE === HTML_NAMESPACE) {
        // Root of XHTML doc must contain xmlns declaration (see https://www.w3.org/TR/xhtml1/normative.html#strict)
        dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + '</body></html>';
      }
      var dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
      /*
       * Use the DOMParser API by default, fallback later if needs be
       * DOMParser not work for svg when has multiple root element.
       */

      if (NAMESPACE === HTML_NAMESPACE) {
        try {
          doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
        } catch (_) {}
      }
      /* Use createHTMLDocument in case DOMParser is not available */

      if (!doc || !doc.documentElement) {
        doc = implementation.createDocument(NAMESPACE, 'template', null);
        try {
          doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
        } catch (_) {// Syntax error if dirtyPayload is invalid xml
        }
      }
      var body = doc.body || doc.documentElement;
      if (dirty && leadingWhitespace) {
        body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
      }
      /* Work on whole document or just its body */

      if (NAMESPACE === HTML_NAMESPACE) {
        return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
      }
      return WHOLE_DOCUMENT ? doc.documentElement : body;
    };
    /**
     * _createIterator
     *
     * @param  {Document} root document/fragment to create iterator for
     * @return {Iterator} iterator instance
     */

    var _createIterator = function _createIterator(root) {
      return createNodeIterator.call(root.ownerDocument || root, root,
      // eslint-disable-next-line no-bitwise
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, null, false);
    };
    /**
     * _isClobbered
     *
     * @param  {Node} elm element to check for clobbering attacks
     * @return {Boolean} true if clobbered, false if safe
     */

    var _isClobbered = function _isClobbered(elm) {
      return elm instanceof HTMLFormElement && (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function' || typeof elm.namespaceURI !== 'string' || typeof elm.insertBefore !== 'function' || typeof elm.hasChildNodes !== 'function');
    };
    /**
     * _isNode
     *
     * @param  {Node} obj object to check whether it's a DOM node
     * @return {Boolean} true is object is a DOM node
     */

    var _isNode = function _isNode(object) {
      return _typeof(Node) === 'object' ? object instanceof Node : object && _typeof(object) === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string';
    };
    /**
     * _executeHook
     * Execute user configurable hooks
     *
     * @param  {String} entryPoint  Name of the hook's entry point
     * @param  {Node} currentNode node to work on with the hook
     * @param  {Object} data additional hook parameters
     */

    var _executeHook = function _executeHook(entryPoint, currentNode, data) {
      if (!hooks[entryPoint]) {
        return;
      }
      arrayForEach(hooks[entryPoint], function (hook) {
        hook.call(DOMPurify, currentNode, data, CONFIG);
      });
    };
    /**
     * _sanitizeElements
     *
     * @protect nodeName
     * @protect textContent
     * @protect removeChild
     *
     * @param   {Node} currentNode to check for permission to exist
     * @return  {Boolean} true if node was killed, false if left alive
     */

    var _sanitizeElements = function _sanitizeElements(currentNode) {
      var content;
      /* Execute a hook if present */

      _executeHook('beforeSanitizeElements', currentNode, null);
      /* Check if element is clobbered or can clobber */

      if (_isClobbered(currentNode)) {
        _forceRemove(currentNode);
        return true;
      }
      /* Check if tagname contains Unicode */

      if (regExpTest(/[\u0080-\uFFFF]/, currentNode.nodeName)) {
        _forceRemove(currentNode);
        return true;
      }
      /* Now let's check the element's type and name */

      var tagName = transformCaseFunc(currentNode.nodeName);
      /* Execute a hook if present */

      _executeHook('uponSanitizeElement', currentNode, {
        tagName: tagName,
        allowedTags: ALLOWED_TAGS
      });
      /* Detect mXSS attempts abusing namespace confusion */

      if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
        _forceRemove(currentNode);
        return true;
      }
      /* Mitigate a problem with templates inside select */

      if (tagName === 'select' && regExpTest(/<template/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);
        return true;
      }
      /* Remove element if anything forbids its presence */

      if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
        /* Check if we have a custom element to handle */
        if (!FORBID_TAGS[tagName] && _basicCustomElementTest(tagName)) {
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) return false;
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) return false;
        }
        /* Keep content except for bad-listed elements */

        if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
          var parentNode = getParentNode(currentNode) || currentNode.parentNode;
          var childNodes = getChildNodes(currentNode) || currentNode.childNodes;
          if (childNodes && parentNode) {
            var childCount = childNodes.length;
            for (var i = childCount - 1; i >= 0; --i) {
              parentNode.insertBefore(cloneNode(childNodes[i], true), getNextSibling(currentNode));
            }
          }
        }
        _forceRemove(currentNode);
        return true;
      }
      /* Check whether element has a valid namespace */

      if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
        _forceRemove(currentNode);
        return true;
      }
      /* Make sure that older browsers don't get fallback-tag mXSS */

      if ((tagName === 'noscript' || tagName === 'noembed' || tagName === 'noframes') && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);
        return true;
      }
      /* Sanitize element content to be template-safe */

      if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
        /* Get the element's text content */
        content = currentNode.textContent;
        content = stringReplace(content, MUSTACHE_EXPR$1, ' ');
        content = stringReplace(content, ERB_EXPR$1, ' ');
        content = stringReplace(content, TMPLIT_EXPR$1, ' ');
        if (currentNode.textContent !== content) {
          arrayPush(DOMPurify.removed, {
            element: currentNode.cloneNode()
          });
          currentNode.textContent = content;
        }
      }
      /* Execute a hook if present */

      _executeHook('afterSanitizeElements', currentNode, null);
      return false;
    };
    /**
     * _isValidAttribute
     *
     * @param  {string} lcTag Lowercase tag name of containing element.
     * @param  {string} lcName Lowercase attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid, otherwise false.
     */
    // eslint-disable-next-line complexity

    var _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
      /* Make sure attribute cannot clobber */
      if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
        return false;
      }
      /* Allow valid data-* attributes: At least one character after "-"
          (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
          XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
          We don't need to check the value; it's always URI safe. */

      if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR$1, lcName)) ;else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$1, lcName)) ;else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
        if (
        // First condition does a very basic check if a) it's basically a valid custom element tagname AND
        // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
        _basicCustomElementTest(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) ||
        // Alternative, second condition checks if it's an `is`-attribute, AND
        // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        lcName === 'is' && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))) ;else {
          return false;
        }
        /* Check value is safe. First, is attr inert? If so, is safe */
      } else if (URI_SAFE_ATTRIBUTES[lcName]) ;else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE$1, ''))) ;else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && stringIndexOf(value, 'data:') === 0 && DATA_URI_TAGS[lcTag]) ;else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$1, stringReplace(value, ATTR_WHITESPACE$1, ''))) ;else if (value) {
        return false;
      } else ;
      return true;
    };
    /**
     * _basicCustomElementCheck
     * checks if at least one dash is included in tagName, and it's not the first char
     * for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
     * @param {string} tagName name of the tag of the node to sanitize
     */

    var _basicCustomElementTest = function _basicCustomElementTest(tagName) {
      return tagName.indexOf('-') > 0;
    };
    /**
     * _sanitizeAttributes
     *
     * @protect attributes
     * @protect nodeName
     * @protect removeAttribute
     * @protect setAttribute
     *
     * @param  {Node} currentNode to sanitize
     */

    var _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
      var attr;
      var value;
      var lcName;
      var l;
      /* Execute a hook if present */

      _executeHook('beforeSanitizeAttributes', currentNode, null);
      var attributes = currentNode.attributes;
      /* Check if we have attributes; if not we might have a text node */

      if (!attributes) {
        return;
      }
      var hookEvent = {
        attrName: '',
        attrValue: '',
        keepAttr: true,
        allowedAttributes: ALLOWED_ATTR
      };
      l = attributes.length;
      /* Go backwards over all attributes; safely remove bad ones */

      while (l--) {
        attr = attributes[l];
        var _attr = attr,
          name = _attr.name,
          namespaceURI = _attr.namespaceURI;
        value = name === 'value' ? attr.value : stringTrim(attr.value);
        lcName = transformCaseFunc(name);
        /* Execute a hook if present */

        hookEvent.attrName = lcName;
        hookEvent.attrValue = value;
        hookEvent.keepAttr = true;
        hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set

        _executeHook('uponSanitizeAttribute', currentNode, hookEvent);
        value = hookEvent.attrValue;
        /* Did the hooks approve of the attribute? */

        if (hookEvent.forceKeepAttr) {
          continue;
        }
        /* Remove attribute */

        _removeAttribute(name, currentNode);
        /* Did the hooks approve of the attribute? */

        if (!hookEvent.keepAttr) {
          continue;
        }
        /* Work around a security issue in jQuery 3.0 */

        if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
          _removeAttribute(name, currentNode);
          continue;
        }
        /* Sanitize attribute content to be template-safe */

        if (SAFE_FOR_TEMPLATES) {
          value = stringReplace(value, MUSTACHE_EXPR$1, ' ');
          value = stringReplace(value, ERB_EXPR$1, ' ');
          value = stringReplace(value, TMPLIT_EXPR$1, ' ');
        }
        /* Is `value` valid for this attribute? */

        var lcTag = transformCaseFunc(currentNode.nodeName);
        if (!_isValidAttribute(lcTag, lcName, value)) {
          continue;
        }
        /* Full DOM Clobbering protection via namespace isolation,
         * Prefix id and name attributes with `user-content-`
         */

        if (SANITIZE_NAMED_PROPS && (lcName === 'id' || lcName === 'name')) {
          // Remove the attribute with this value
          _removeAttribute(name, currentNode); // Prefix the value and later re-create the attribute with the sanitized value

          value = SANITIZE_NAMED_PROPS_PREFIX + value;
        }
        /* Handle attributes that require Trusted Types */

        if (trustedTypesPolicy && _typeof(trustedTypes) === 'object' && typeof trustedTypes.getAttributeType === 'function') {
          if (namespaceURI) ;else {
            switch (trustedTypes.getAttributeType(lcTag, lcName)) {
              case 'TrustedHTML':
                {
                  value = trustedTypesPolicy.createHTML(value);
                  break;
                }
              case 'TrustedScriptURL':
                {
                  value = trustedTypesPolicy.createScriptURL(value);
                  break;
                }
            }
          }
        }
        /* Handle invalid data-* attribute set by try-catching it */

        try {
          if (namespaceURI) {
            currentNode.setAttributeNS(namespaceURI, name, value);
          } else {
            /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
            currentNode.setAttribute(name, value);
          }
          arrayPop(DOMPurify.removed);
        } catch (_) {}
      }
      /* Execute a hook if present */

      _executeHook('afterSanitizeAttributes', currentNode, null);
    };
    /**
     * _sanitizeShadowDOM
     *
     * @param  {DocumentFragment} fragment to iterate over recursively
     */

    var _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
      var shadowNode;
      var shadowIterator = _createIterator(fragment);
      /* Execute a hook if present */

      _executeHook('beforeSanitizeShadowDOM', fragment, null);
      while (shadowNode = shadowIterator.nextNode()) {
        /* Execute a hook if present */
        _executeHook('uponSanitizeShadowNode', shadowNode, null);
        /* Sanitize tags and elements */

        if (_sanitizeElements(shadowNode)) {
          continue;
        }
        /* Deep shadow DOM detected */

        if (shadowNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(shadowNode.content);
        }
        /* Check attributes, sanitize if necessary */

        _sanitizeAttributes(shadowNode);
      }
      /* Execute a hook if present */

      _executeHook('afterSanitizeShadowDOM', fragment, null);
    };
    /**
     * Sanitize
     * Public method providing core sanitation functionality
     *
     * @param {String|Node} dirty string or DOM node
     * @param {Object} configuration object
     */
    // eslint-disable-next-line complexity

    DOMPurify.sanitize = function (dirty) {
      var cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var body;
      var importedNode;
      var currentNode;
      var oldNode;
      var returnNode;
      /* Make sure we have a string to sanitize.
        DO NOT return early, as this will return the wrong type if
        the user has requested a DOM object rather than a string */

      IS_EMPTY_INPUT = !dirty;
      if (IS_EMPTY_INPUT) {
        dirty = '<!-->';
      }
      /* Stringify, in case dirty is an object */

      if (typeof dirty !== 'string' && !_isNode(dirty)) {
        if (typeof dirty.toString === 'function') {
          dirty = dirty.toString();
          if (typeof dirty !== 'string') {
            throw typeErrorCreate('dirty is not a string, aborting');
          }
        } else {
          throw typeErrorCreate('toString is not a function');
        }
      }
      /* Check we can run. Otherwise fall back or ignore */

      if (!DOMPurify.isSupported) {
        if (_typeof(window.toStaticHTML) === 'object' || typeof window.toStaticHTML === 'function') {
          if (typeof dirty === 'string') {
            return window.toStaticHTML(dirty);
          }
          if (_isNode(dirty)) {
            return window.toStaticHTML(dirty.outerHTML);
          }
        }
        return dirty;
      }
      /* Assign config vars */

      if (!SET_CONFIG) {
        _parseConfig(cfg);
      }
      /* Clean up removed elements */

      DOMPurify.removed = [];
      /* Check if dirty is correctly typed for IN_PLACE */

      if (typeof dirty === 'string') {
        IN_PLACE = false;
      }
      if (IN_PLACE) {
        /* Do some early pre-sanitization to avoid unsafe root nodes */
        if (dirty.nodeName) {
          var tagName = transformCaseFunc(dirty.nodeName);
          if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
            throw typeErrorCreate('root node is forbidden and cannot be sanitized in-place');
          }
        }
      } else if (dirty instanceof Node) {
        /* If dirty is a DOM element, append to an empty document to avoid
           elements being stripped by the parser */
        body = _initDocument('<!---->');
        importedNode = body.ownerDocument.importNode(dirty, true);
        if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
          /* Node is already a body, use as is */
          body = importedNode;
        } else if (importedNode.nodeName === 'HTML') {
          body = importedNode;
        } else {
          // eslint-disable-next-line unicorn/prefer-dom-node-append
          body.appendChild(importedNode);
        }
      } else {
        /* Exit directly if we have nothing to do */
        if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT &&
        // eslint-disable-next-line unicorn/prefer-includes
        dirty.indexOf('<') === -1) {
          return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
        }
        /* Initialize the document to work on */

        body = _initDocument(dirty);
        /* Check we have a DOM node from the data */

        if (!body) {
          return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : '';
        }
      }
      /* Remove first element node (ours) if FORCE_BODY is set */

      if (body && FORCE_BODY) {
        _forceRemove(body.firstChild);
      }
      /* Get node iterator */

      var nodeIterator = _createIterator(IN_PLACE ? dirty : body);
      /* Now start iterating over the created document */

      while (currentNode = nodeIterator.nextNode()) {
        /* Fix IE's strange behavior with manipulated textNodes #89 */
        if (currentNode.nodeType === 3 && currentNode === oldNode) {
          continue;
        }
        /* Sanitize tags and elements */

        if (_sanitizeElements(currentNode)) {
          continue;
        }
        /* Shadow DOM detected, sanitize it */

        if (currentNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(currentNode.content);
        }
        /* Check attributes, sanitize if necessary */

        _sanitizeAttributes(currentNode);
        oldNode = currentNode;
      }
      oldNode = null;
      /* If we sanitized `dirty` in-place, return it. */

      if (IN_PLACE) {
        return dirty;
      }
      /* Return sanitized string or DOM */

      if (RETURN_DOM) {
        if (RETURN_DOM_FRAGMENT) {
          returnNode = createDocumentFragment.call(body.ownerDocument);
          while (body.firstChild) {
            // eslint-disable-next-line unicorn/prefer-dom-node-append
            returnNode.appendChild(body.firstChild);
          }
        } else {
          returnNode = body;
        }
        if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmod) {
          /*
            AdoptNode() is not used because internal state is not reset
            (e.g. the past names map of a HTMLFormElement), this is safe
            in theory but we would rather not risk another attack vector.
            The state that is cloned by importNode() is explicitly defined
            by the specs.
          */
          returnNode = importNode.call(originalDocument, returnNode, true);
        }
        return returnNode;
      }
      var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
      /* Serialize doctype if allowed */

      if (WHOLE_DOCUMENT && ALLOWED_TAGS['!doctype'] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
        serializedHTML = '<!DOCTYPE ' + body.ownerDocument.doctype.name + '>\n' + serializedHTML;
      }
      /* Sanitize final string template-safe */

      if (SAFE_FOR_TEMPLATES) {
        serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR$1, ' ');
        serializedHTML = stringReplace(serializedHTML, ERB_EXPR$1, ' ');
        serializedHTML = stringReplace(serializedHTML, TMPLIT_EXPR$1, ' ');
      }
      return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
    };
    /**
     * Public method to set the configuration once
     * setConfig
     *
     * @param {Object} cfg configuration object
     */

    DOMPurify.setConfig = function (cfg) {
      _parseConfig(cfg);
      SET_CONFIG = true;
    };
    /**
     * Public method to remove the configuration
     * clearConfig
     *
     */

    DOMPurify.clearConfig = function () {
      CONFIG = null;
      SET_CONFIG = false;
    };
    /**
     * Public method to check if an attribute value is valid.
     * Uses last set config, if any. Otherwise, uses config defaults.
     * isValidAttribute
     *
     * @param  {string} tag Tag name of containing element.
     * @param  {string} attr Attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
     */

    DOMPurify.isValidAttribute = function (tag, attr, value) {
      /* Initialize shared config vars if necessary. */
      if (!CONFIG) {
        _parseConfig({});
      }
      var lcTag = transformCaseFunc(tag);
      var lcName = transformCaseFunc(attr);
      return _isValidAttribute(lcTag, lcName, value);
    };
    /**
     * AddHook
     * Public method to add DOMPurify hooks
     *
     * @param {String} entryPoint entry point for the hook to add
     * @param {Function} hookFunction function to execute
     */

    DOMPurify.addHook = function (entryPoint, hookFunction) {
      if (typeof hookFunction !== 'function') {
        return;
      }
      hooks[entryPoint] = hooks[entryPoint] || [];
      arrayPush(hooks[entryPoint], hookFunction);
    };
    /**
     * RemoveHook
     * Public method to remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if more are present)
     *
     * @param {String} entryPoint entry point for the hook to remove
     * @return {Function} removed(popped) hook
     */

    DOMPurify.removeHook = function (entryPoint) {
      if (hooks[entryPoint]) {
        return arrayPop(hooks[entryPoint]);
      }
    };
    /**
     * RemoveHooks
     * Public method to remove all DOMPurify hooks at a given entryPoint
     *
     * @param  {String} entryPoint entry point for the hooks to remove
     */

    DOMPurify.removeHooks = function (entryPoint) {
      if (hooks[entryPoint]) {
        hooks[entryPoint] = [];
      }
    };
    /**
     * RemoveAllHooks
     * Public method to remove all DOMPurify hooks
     *
     */

    DOMPurify.removeAllHooks = function () {
      hooks = {};
    };
    return DOMPurify;
  }
  var purify = createDOMPurify();
  return purify;
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uLi9zcmMvdGFncy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2F0dHJzLmpzIiwid2VicGFjazovLy8uLi9zcmMvcmVnZXhwLmpzIiwid2VicGFjazovLy8uLi9zcmMvcHVyaWZ5LmpzIl0sIm5hbWVzIjpbImhhc093blByb3BlcnR5IiwiT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJpc0Zyb3plbiIsImdldFByb3RvdHlwZU9mIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZnJlZXplIiwic2VhbCIsImNyZWF0ZSIsIl9yZWYiLCJSZWZsZWN0IiwiYXBwbHkiLCJjb25zdHJ1Y3QiLCJmdW4iLCJ0aGlzVmFsdWUiLCJhcmdzIiwieCIsIkZ1bmMiLCJfY29uc3RydWN0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiYXJyYXlGb3JFYWNoIiwidW5hcHBseSIsIkFycmF5IiwicHJvdG90eXBlIiwiZm9yRWFjaCIsImFycmF5UG9wIiwicG9wIiwiYXJyYXlQdXNoIiwicHVzaCIsInN0cmluZ1RvTG93ZXJDYXNlIiwiU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJzdHJpbmdUb1N0cmluZyIsInRvU3RyaW5nIiwic3RyaW5nTWF0Y2giLCJtYXRjaCIsInN0cmluZ1JlcGxhY2UiLCJyZXBsYWNlIiwic3RyaW5nSW5kZXhPZiIsImluZGV4T2YiLCJzdHJpbmdUcmltIiwidHJpbSIsInJlZ0V4cFRlc3QiLCJSZWdFeHAiLCJ0ZXN0IiwidHlwZUVycm9yQ3JlYXRlIiwidW5jb25zdHJ1Y3QiLCJUeXBlRXJyb3IiLCJmdW5jIiwidGhpc0FyZyIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJfa2V5IiwiX2xlbjIiLCJfa2V5MiIsImFkZFRvU2V0Iiwic2V0IiwiYXJyYXkiLCJ0cmFuc2Zvcm1DYXNlRnVuYyIsIl90cmFuc2Zvcm1DYXNlRnVuYyIsImwiLCJlbGVtZW50IiwibGNFbGVtZW50IiwiY2xvbmUiLCJvYmplY3QiLCJuZXdPYmplY3QiLCJwcm9wZXJ0eSIsImxvb2t1cEdldHRlciIsInByb3AiLCJkZXNjIiwiZ2V0IiwidmFsdWUiLCJmYWxsYmFja1ZhbHVlIiwiY29uc29sZSIsIndhcm4iLCJodG1sJDEiLCJzdmckMSIsInN2Z0ZpbHRlcnMiLCJzdmdEaXNhbGxvd2VkIiwibWF0aE1sJDEiLCJtYXRoTWxEaXNhbGxvd2VkIiwidGV4dCIsImh0bWwiLCJzdmciLCJtYXRoTWwiLCJ4bWwiLCJNVVNUQUNIRV9FWFBSIiwiRVJCX0VYUFIiLCJUTVBMSVRfRVhQUiIsIkRBVEFfQVRUUiIsIkFSSUFfQVRUUiIsIklTX0FMTE9XRURfVVJJIiwiSVNfU0NSSVBUX09SX0RBVEEiLCJBVFRSX1dISVRFU1BBQ0UiLCJET0NUWVBFX05BTUUiLCJnZXRHbG9iYWwiLCJ3aW5kb3ciLCJfY3JlYXRlVHJ1c3RlZFR5cGVzUG9saWN5IiwidHJ1c3RlZFR5cGVzIiwiZG9jdW1lbnQiLCJfdHlwZW9mIiwiY3JlYXRlUG9saWN5Iiwic3VmZml4IiwiQVRUUl9OQU1FIiwiY3VycmVudFNjcmlwdCIsImhhc0F0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsInBvbGljeU5hbWUiLCJjcmVhdGVIVE1MIiwiY3JlYXRlU2NyaXB0VVJMIiwic2NyaXB0VXJsIiwiXyIsImNyZWF0ZURPTVB1cmlmeSIsInVuZGVmaW5lZCIsIkRPTVB1cmlmeSIsInJvb3QiLCJ2ZXJzaW9uIiwicmVtb3ZlZCIsIm5vZGVUeXBlIiwiaXNTdXBwb3J0ZWQiLCJvcmlnaW5hbERvY3VtZW50IiwiRG9jdW1lbnRGcmFnbWVudCIsIkhUTUxUZW1wbGF0ZUVsZW1lbnQiLCJOb2RlIiwiRWxlbWVudCIsIk5vZGVGaWx0ZXIiLCJfd2luZG93JE5hbWVkTm9kZU1hcCIsIk5hbWVkTm9kZU1hcCIsIk1vek5hbWVkQXR0ck1hcCIsIkhUTUxGb3JtRWxlbWVudCIsIkRPTVBhcnNlciIsIkVsZW1lbnRQcm90b3R5cGUiLCJjbG9uZU5vZGUiLCJnZXROZXh0U2libGluZyIsImdldENoaWxkTm9kZXMiLCJnZXRQYXJlbnROb2RlIiwidGVtcGxhdGUiLCJjcmVhdGVFbGVtZW50IiwiY29udGVudCIsIm93bmVyRG9jdW1lbnQiLCJ0cnVzdGVkVHlwZXNQb2xpY3kiLCJlbXB0eUhUTUwiLCJfZG9jdW1lbnQiLCJpbXBsZW1lbnRhdGlvbiIsImNyZWF0ZU5vZGVJdGVyYXRvciIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImltcG9ydE5vZGUiLCJkb2N1bWVudE1vZGUiLCJob29rcyIsImNyZWF0ZUhUTUxEb2N1bWVudCIsIk1VU1RBQ0hFX0VYUFIkMSIsIkVSQl9FWFBSJDEiLCJUTVBMSVRfRVhQUiQxIiwiREFUQV9BVFRSJDEiLCJBUklBX0FUVFIkMSIsIklTX1NDUklQVF9PUl9EQVRBJDEiLCJBVFRSX1dISVRFU1BBQ0UkMSIsIklTX0FMTE9XRURfVVJJJDEiLCJBTExPV0VEX1RBR1MiLCJERUZBVUxUX0FMTE9XRURfVEFHUyIsImNvbmNhdCIsIkFMTE9XRURfQVRUUiIsIkRFRkFVTFRfQUxMT1dFRF9BVFRSIiwiQ1VTVE9NX0VMRU1FTlRfSEFORExJTkciLCJ0YWdOYW1lQ2hlY2siLCJ3cml0YWJsZSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJhdHRyaWJ1dGVOYW1lQ2hlY2siLCJhbGxvd0N1c3RvbWl6ZWRCdWlsdEluRWxlbWVudHMiLCJGT1JCSURfVEFHUyIsIkZPUkJJRF9BVFRSIiwiQUxMT1dfQVJJQV9BVFRSIiwiQUxMT1dfREFUQV9BVFRSIiwiQUxMT1dfVU5LTk9XTl9QUk9UT0NPTFMiLCJBTExPV19TRUxGX0NMT1NFX0lOX0FUVFIiLCJTQUZFX0ZPUl9URU1QTEFURVMiLCJXSE9MRV9ET0NVTUVOVCIsIlNFVF9DT05GSUciLCJGT1JDRV9CT0RZIiwiUkVUVVJOX0RPTSIsIlJFVFVSTl9ET01fRlJBR01FTlQiLCJSRVRVUk5fVFJVU1RFRF9UWVBFIiwiU0FOSVRJWkVfRE9NIiwiU0FOSVRJWkVfTkFNRURfUFJPUFMiLCJTQU5JVElaRV9OQU1FRF9QUk9QU19QUkVGSVgiLCJLRUVQX0NPTlRFTlQiLCJJTl9QTEFDRSIsIlVTRV9QUk9GSUxFUyIsIkZPUkJJRF9DT05URU5UUyIsIkRFRkFVTFRfRk9SQklEX0NPTlRFTlRTIiwiREFUQV9VUklfVEFHUyIsIkRFRkFVTFRfREFUQV9VUklfVEFHUyIsIlVSSV9TQUZFX0FUVFJJQlVURVMiLCJERUZBVUxUX1VSSV9TQUZFX0FUVFJJQlVURVMiLCJNQVRITUxfTkFNRVNQQUNFIiwiU1ZHX05BTUVTUEFDRSIsIkhUTUxfTkFNRVNQQUNFIiwiTkFNRVNQQUNFIiwiSVNfRU1QVFlfSU5QVVQiLCJBTExPV0VEX05BTUVTUEFDRVMiLCJERUZBVUxUX0FMTE9XRURfTkFNRVNQQUNFUyIsIlBBUlNFUl9NRURJQV9UWVBFIiwiU1VQUE9SVEVEX1BBUlNFUl9NRURJQV9UWVBFUyIsIkRFRkFVTFRfUEFSU0VSX01FRElBX1RZUEUiLCJDT05GSUciLCJmb3JtRWxlbWVudCIsImlzUmVnZXhPckZ1bmN0aW9uIiwidGVzdFZhbHVlIiwiRnVuY3Rpb24iLCJfcGFyc2VDb25maWciLCJjZmciLCJBRERfVVJJX1NBRkVfQVRUUiIsIkFERF9EQVRBX1VSSV9UQUdTIiwiQUxMT1dFRF9VUklfUkVHRVhQIiwiQUREX1RBR1MiLCJBRERfQVRUUiIsInRhYmxlIiwidGJvZHkiLCJNQVRITUxfVEVYVF9JTlRFR1JBVElPTl9QT0lOVFMiLCJIVE1MX0lOVEVHUkFUSU9OX1BPSU5UUyIsIkNPTU1PTl9TVkdfQU5EX0hUTUxfRUxFTUVOVFMiLCJBTExfU1ZHX1RBR1MiLCJBTExfTUFUSE1MX1RBR1MiLCJfY2hlY2tWYWxpZE5hbWVzcGFjZSIsInBhcmVudCIsInRhZ05hbWUiLCJuYW1lc3BhY2VVUkkiLCJwYXJlbnRUYWdOYW1lIiwiQm9vbGVhbiIsIl9mb3JjZVJlbW92ZSIsIm5vZGUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJvdXRlckhUTUwiLCJyZW1vdmUiLCJfcmVtb3ZlQXR0cmlidXRlIiwibmFtZSIsImF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZU5vZGUiLCJmcm9tIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiX2luaXREb2N1bWVudCIsImRpcnR5IiwiZG9jIiwibGVhZGluZ1doaXRlc3BhY2UiLCJtYXRjaGVzIiwiZGlydHlQYXlsb2FkIiwicGFyc2VGcm9tU3RyaW5nIiwiZG9jdW1lbnRFbGVtZW50IiwiY3JlYXRlRG9jdW1lbnQiLCJpbm5lckhUTUwiLCJib2R5IiwiaW5zZXJ0QmVmb3JlIiwiY3JlYXRlVGV4dE5vZGUiLCJjaGlsZE5vZGVzIiwiY2FsbCIsIl9jcmVhdGVJdGVyYXRvciIsIlNIT1dfRUxFTUVOVCIsIlNIT1dfQ09NTUVOVCIsIlNIT1dfVEVYVCIsIl9pc0Nsb2JiZXJlZCIsImVsbSIsIm5vZGVOYW1lIiwidGV4dENvbnRlbnQiLCJhdHRyaWJ1dGVzIiwiaGFzQ2hpbGROb2RlcyIsIl9pc05vZGUiLCJfZXhlY3V0ZUhvb2siLCJlbnRyeVBvaW50IiwiY3VycmVudE5vZGUiLCJkYXRhIiwiaG9vayIsIl9zYW5pdGl6ZUVsZW1lbnRzIiwiYWxsb3dlZFRhZ3MiLCJmaXJzdEVsZW1lbnRDaGlsZCIsIl9iYXNpY0N1c3RvbUVsZW1lbnRUZXN0IiwiY2hpbGRDb3VudCIsImkiLCJfaXNWYWxpZEF0dHJpYnV0ZSIsImxjVGFnIiwibGNOYW1lIiwiX3Nhbml0aXplQXR0cmlidXRlcyIsImF0dHIiLCJob29rRXZlbnQiLCJhdHRyTmFtZSIsImF0dHJWYWx1ZSIsImtlZXBBdHRyIiwiYWxsb3dlZEF0dHJpYnV0ZXMiLCJfYXR0ciIsImZvcmNlS2VlcEF0dHIiLCJnZXRBdHRyaWJ1dGVUeXBlIiwic2V0QXR0cmlidXRlTlMiLCJfc2FuaXRpemVTaGFkb3dET00iLCJmcmFnbWVudCIsInNoYWRvd05vZGUiLCJzaGFkb3dJdGVyYXRvciIsIm5leHROb2RlIiwic2FuaXRpemUiLCJpbXBvcnRlZE5vZGUiLCJvbGROb2RlIiwicmV0dXJuTm9kZSIsInRvU3RhdGljSFRNTCIsImFwcGVuZENoaWxkIiwiZmlyc3RDaGlsZCIsIm5vZGVJdGVyYXRvciIsInNoYWRvd3Jvb3QiLCJzaGFkb3dyb290bW9kIiwic2VyaWFsaXplZEhUTUwiLCJkb2N0eXBlIiwic2V0Q29uZmlnIiwiY2xlYXJDb25maWciLCJpc1ZhbGlkQXR0cmlidXRlIiwidGFnIiwiYWRkSG9vayIsImhvb2tGdW5jdGlvbiIsInJlbW92ZUhvb2siLCJyZW1vdmVIb29rcyIsInJlbW92ZUFsbEhvb2tzIiwicHVyaWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFBLElBQ0VBLGNBREYsR0FNSUMsTUFOSixDQUNFRCxjQURGO0lBRUVFLGNBRkYsR0FNSUQsTUFOSixDQUVFQyxjQUZGO0lBR0VDLFFBSEYsR0FNSUYsTUFOSixDQUdFRSxRQUhGO0lBSUVDLGNBSkYsR0FNSUgsTUFOSixDQUlFRyxjQUpGO0lBS0VDLHdCQUxGLEdBTUlKLE1BTkosQ0FLRUksd0JBTEY7RUFRQSxJQUFNQyxNQUFOLEdBQStCTCxNQUEvQixDQUFNSyxNQUFOO0lBQWNDLElBQWQsR0FBK0JOLE1BQS9CLENBQWNNLElBQWQ7SUFBb0JDLE1BQXBCLEdBQStCUCxNQUEvQixDQUFvQk8sTUFBcEI7O0VBQ0EsSUFBQUMsSUFBQSxHQUEyQixPQUFPQyxPQUFQLEtBQW1CLFdBQW5CLElBQWtDQSxPQUE3RDtJQUFNQyxLQUFOLEdBQUFGLElBQUEsQ0FBTUUsS0FBTjtJQUFhQyxTQUFiLEdBQUFILElBQUEsQ0FBYUcsU0FBYjtFQUVBLElBQUksQ0FBQ0QsS0FBTCxFQUFZO0lBQ1ZBLEtBQUssR0FBRyxTQUFVQSxNQUFBRSxHQUFWLEVBQWVDLFNBQWYsRUFBMEJDLElBQTFCLEVBQWdDO01BQ3RDLE9BQU9GLEdBQUcsQ0FBQ0YsS0FBSixDQUFVRyxTQUFWLEVBQXFCQyxJQUFyQixDQUFQO0lBQ0QsQ0FG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QjFILEtBQUssQ0FBQzBILFVBQUQsQ0FBTCxJQUFxQixFQUF6QztNQUNBclAsU0FBUyxDQUFDMkgsS0FBSyxDQUFDMEgsVUFBRCxDQUFOLEVBQW9COEMsWUFBcEIsQ0FBVDtJQUNELENBUEQ7SUFTQTs7Ozs7Ozs7O0lBUUEzTSxTQUFTLENBQUM0TSxVQUFWLEdBQXVCLFVBQVUvQyxVQUFWLEVBQXNCO01BQzNDLElBQUkxSCxLQUFLLENBQUMwSCxVQUFELENBQVQsRUFBdUI7UUFDckIsT0FBT3ZQLFFBQVEsQ0FBQzZILEtBQUssQ0FBQzBILFVBQUQsQ0FBTixDQUFmO01BQ0Q7SUFDRixDQUpEO0lBTUE7Ozs7Ozs7SUFNQTdKLFNBQVMsQ0FBQzZNLFdBQVYsR0FBd0IsVUFBVWhELFVBQVYsRUFBc0I7TUFDNUMsSUFBSTFILEtBQUssQ0FBQzBILFVBQUQsQ0FBVCxFQUF1QjtRQUNyQjFILEtBQUssQ0FBQzBILFVBQUQsQ0FBTCxHQUFvQixFQUFwQjtNQUNEO0lBQ0YsQ0FKRDtJQU1BOzs7Ozs7SUFLQTdKLFNBQVMsQ0FBQzhNLGNBQVYsR0FBMkIsWUFBWTtNQUNyQzNLLEtBQUssR0FBRyxFQUFSO0lBQ0QsQ0FGRDtJQUlBLE9BQU9uQyxTQUFQO0VBQ0Q7RUFFRCxJQUFBK00sTUFBQSxHQUFlak4sZUFBZSxFQUE5QiIsImZpbGUiOiIyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtcbiAgaGFzT3duUHJvcGVydHksXG4gIHNldFByb3RvdHlwZU9mLFxuICBpc0Zyb3plbixcbiAgZ2V0UHJvdG90eXBlT2YsXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbn0gPSBPYmplY3Q7XG5cbmxldCB7IGZyZWV6ZSwgc2VhbCwgY3JlYXRlIH0gPSBPYmplY3Q7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0c1xubGV0IHsgYXBwbHksIGNvbnN0cnVjdCB9ID0gdHlwZW9mIFJlZmxlY3QgIT09ICd1bmRlZmluZWQnICYmIFJlZmxlY3Q7XG5cbmlmICghYXBwbHkpIHtcbiAgYXBwbHkgPSBmdW5jdGlvbiAoZnVuLCB0aGlzVmFsdWUsIGFyZ3MpIHtcbiAgICByZXR1cm4gZnVuLmFwcGx5KHRoaXNWYWx1ZSwgYXJncyk7XG4gIH07XG59XG5cbmlmICghZnJlZXplKSB7XG4gIGZyZWV6ZSA9IGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHg7XG4gIH07XG59XG5cbmlmICghc2VhbCkge1xuICBzZWFsID0gZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geDtcbiAgfTtcbn1cblxuaWYgKCFjb25zdHJ1Y3QpIHtcbiAgY29uc3RydWN0ID0gZnVuY3Rpb24gKEZ1bmMsIGFyZ3MpIHtcbiAgICByZXR1cm4gbmV3IEZ1bmMoLi4uYXJncyk7XG4gIH07XG59XG5cbmNvbnN0IGFycmF5Rm9yRWFjaCA9IHVuYXBwbHkoQXJyYXkucHJvdG90eXBlLmZvckVhY2gpO1xuY29uc3QgYXJyYXlJbmRleE9mID0gdW5hcHBseShBcnJheS5wcm90b3R5cGUuaW5kZXhPZik7XG5jb25zdCBhcnJheVBvcCA9IHVuYXBwbHkoQXJyYXkucHJvdG90eXBlLnBvcCk7XG5jb25zdCBhcnJheVB1c2ggPSB1bmFwcGx5KEFycmF5LnByb3RvdHlwZS5wdXNoKTtcbmNvbnN0IGFycmF5U2xpY2UgPSB1bmFwcGx5KEFycmF5LnByb3RvdHlwZS5zbGljZSk7XG5cbmNvbnN0IHN0cmluZ1RvTG93ZXJDYXNlID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLnRvTG93ZXJDYXNlKTtcbmNvbnN0IHN0cmluZ1RvU3RyaW5nID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLnRvU3RyaW5nKTtcbmNvbnN0IHN0cmluZ01hdGNoID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLm1hdGNoKTtcbmNvbnN0IHN0cmluZ1JlcGxhY2UgPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUucmVwbGFjZSk7XG5jb25zdCBzdHJpbmdJbmRleE9mID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLmluZGV4T2YpO1xuY29uc3Qgc3RyaW5nVHJpbSA9IHVuYXBwbHkoU3RyaW5nLnByb3RvdHlwZS50cmltKTtcblxuY29uc3QgcmVnRXhwVGVzdCA9IHVuYXBwbHkoUmVnRXhwLnByb3RvdHlwZS50ZXN0KTtcblxuY29uc3QgdHlwZUVycm9yQ3JlYXRlID0gdW5jb25zdHJ1Y3QoVHlwZUVycm9yKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVuYXBwbHkoZnVuYykge1xuICByZXR1cm4gKHRoaXNBcmcsIC4uLmFyZ3MpID0+IGFwcGx5KGZ1bmMsIHRoaXNBcmcsIGFyZ3MpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5jb25zdHJ1Y3QoZnVuYykge1xuICByZXR1cm4gKC4uLmFyZ3MpID0+IGNvbnN0cnVjdChmdW5jLCBhcmdzKTtcbn1cblxuLyogQWRkIHByb3BlcnRpZXMgdG8gYSBsb29rdXAgdGFibGUgKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb1NldChzZXQsIGFycmF5LCB0cmFuc2Zvcm1DYXNlRnVuYykge1xuICB0cmFuc2Zvcm1DYXNlRnVuYyA9IHRyYW5zZm9ybUNhc2VGdW5jID8/IHN0cmluZ1RvTG93ZXJDYXNlO1xuICBpZiAoc2V0UHJvdG90eXBlT2YpIHtcbiAgICAvLyBNYWtlICdpbicgYW5kIHRydXRoeSBjaGVja3MgbGlrZSBCb29sZWFuKHNldC5jb25zdHJ1Y3RvcilcbiAgICAvLyBpbmRlcGVuZGVudCBvZiBhbnkgcHJvcGVydGllcyBkZWZpbmVkIG9uIE9iamVjdC5wcm90b3R5cGUuXG4gICAgLy8gUHJldmVudCBwcm90b3R5cGUgc2V0dGVycyBmcm9tIGludGVyY2VwdGluZyBzZXQgYXMgYSB0aGlzIHZhbHVlLlxuICAgIHNldFByb3RvdHlwZU9mKHNldCwgbnVsbCk7XG4gIH1cblxuICBsZXQgbCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGwtLSkge1xuICAgIGxldCBlbGVtZW50ID0gYXJyYXlbbF07XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgbGNFbGVtZW50ID0gdHJhbnNmb3JtQ2FzZUZ1bmMoZWxlbWVudCk7XG4gICAgICBpZiAobGNFbGVtZW50ICE9PSBlbGVtZW50KSB7XG4gICAgICAgIC8vIENvbmZpZyBwcmVzZXRzIChlLmcuIHRhZ3MuanMsIGF0dHJzLmpzKSBhcmUgaW1tdXRhYmxlLlxuICAgICAgICBpZiAoIWlzRnJvemVuKGFycmF5KSkge1xuICAgICAgICAgIGFycmF5W2xdID0gbGNFbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudCA9IGxjRWxlbWVudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRbZWxlbWVudF0gPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHNldDtcbn1cblxuLyogU2hhbGxvdyBjbG9uZSBhbiBvYmplY3QgKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShvYmplY3QpIHtcbiAgY29uc3QgbmV3T2JqZWN0ID0gY3JlYXRlKG51bGwpO1xuXG4gIGxldCBwcm9wZXJ0eTtcbiAgZm9yIChwcm9wZXJ0eSBpbiBvYmplY3QpIHtcbiAgICBpZiAoYXBwbHkoaGFzT3duUHJvcGVydHksIG9iamVjdCwgW3Byb3BlcnR5XSkgPT09IHRydWUpIHtcbiAgICAgIG5ld09iamVjdFtwcm9wZXJ0eV0gPSBvYmplY3RbcHJvcGVydHldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdPYmplY3Q7XG59XG5cbi8qIElFMTAgZG9lc24ndCBzdXBwb3J0IF9fbG9va3VwR2V0dGVyX18gc28gbGV0cydcbiAqIHNpbXVsYXRlIGl0LiBJdCBhbHNvIGF1dG9tYXRpY2FsbHkgY2hlY2tzXG4gKiBpZiB0aGUgcHJvcCBpcyBmdW5jdGlvbiBvciBnZXR0ZXIgYW5kIGJlaGF2ZXNcbiAqIGFjY29yZGluZ2x5LiAqL1xuZnVuY3Rpb24gbG9va3VwR2V0dGVyKG9iamVjdCwgcHJvcCkge1xuICB3aGlsZSAob2JqZWN0ICE9PSBudWxsKSB7XG4gICAgY29uc3QgZGVzYyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3ApO1xuICAgIGlmIChkZXNjKSB7XG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIHVuYXBwbHkoZGVzYy5nZXQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGRlc2MudmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHVuYXBwbHkoZGVzYy52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZhbGxiYWNrVmFsdWUoZWxlbWVudCkge1xuICAgIGNvbnNvbGUud2FybignZmFsbGJhY2sgdmFsdWUgZm9yJywgZWxlbWVudCk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gZmFsbGJhY2tWYWx1ZTtcbn1cblxuZXhwb3J0IHtcbiAgLy8gQXJyYXlcbiAgYXJyYXlGb3JFYWNoLFxuICBhcnJheUluZGV4T2YsXG4gIGFycmF5UG9wLFxuICBhcnJheVB1c2gsXG4gIGFycmF5U2xpY2UsXG4gIC8vIE9iamVjdFxuICBmcmVlemUsXG4gIGdldFByb3RvdHlwZU9mLFxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIGhhc093blByb3BlcnR5LFxuICBpc0Zyb3plbixcbiAgc2V0UHJvdG90eXBlT2YsXG4gIHNlYWwsXG4gIC8vIFJlZ0V4cFxuICByZWdFeHBUZXN0LFxuICAvLyBTdHJpbmdcbiAgc3RyaW5nSW5kZXhPZixcbiAgc3RyaW5nTWF0Y2gsXG4gIHN0cmluZ1JlcGxhY2UsXG4gIHN0cmluZ1RvTG93ZXJDYXNlLFxuICBzdHJpbmdUb1N0cmluZyxcbiAgc3RyaW5nVHJpbSxcbiAgLy8gRXJyb3JzXG4gIHR5cGVFcnJvckNyZWF0ZSxcbiAgLy8gT3RoZXJcbiAgbG9va3VwR2V0dGVyLFxufTtcbiIsImltcG9ydCB7IGZyZWV6ZSB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG5leHBvcnQgY29uc3QgaHRtbCA9IGZyZWV6ZShbXG4gICdhJyxcbiAgJ2FiYnInLFxuICAnYWNyb255bScsXG4gICdhZGRyZXNzJyxcbiAgJ2FyZWEnLFxuICAnYXJ0aWNsZScsXG4gICdhc2lkZScsXG4gICdhdWRpbycsXG4gICdiJyxcbiAgJ2JkaScsXG4gICdiZG8nLFxuICAnYmlnJyxcbiAgJ2JsaW5rJyxcbiAgJ2Jsb2NrcXVvdGUnLFxuICAnYm9keScsXG4gICdicicsXG4gICdidXR0b24nLFxuICAnY2FudmFzJyxcbiAgJ2NhcHRpb24nLFxuICAnY2VudGVyJyxcbiAgJ2NpdGUnLFxuICAnY29kZScsXG4gICdjb2wnLFxuICAnY29sZ3JvdXAnLFxuICAnY29udGVudCcsXG4gICdkYXRhJyxcbiAgJ2RhdGFsaXN0JyxcbiAgJ2RkJyxcbiAgJ2RlY29yYXRvcicsXG4gICdkZWwnLFxuICAnZGV0YWlscycsXG4gICdkZm4nLFxuICAnZGlhbG9nJyxcbiAgJ2RpcicsXG4gICdkaXYnLFxuICAnZGwnLFxuICAnZHQnLFxuICAnZWxlbWVudCcsXG4gICdlbScsXG4gICdmaWVsZHNldCcsXG4gICdmaWdjYXB0aW9uJyxcbiAgJ2ZpZ3VyZScsXG4gICdmb250JyxcbiAgJ2Zvb3RlcicsXG4gICdmb3JtJyxcbiAgJ2gxJyxcbiAgJ2gyJyxcbiAgJ2gzJyxcbiAgJ2g0JyxcbiAgJ2g1JyxcbiAgJ2g2JyxcbiAgJ2hlYWQnLFxuICAnaGVhZGVyJyxcbiAgJ2hncm91cCcsXG4gICdocicsXG4gICdodG1sJyxcbiAgJ2knLFxuICAnaW1nJyxcbiAgJ2lucHV0JyxcbiAgJ2lucycsXG4gICdrYmQnLFxuICAnbGFiZWwnLFxuICAnbGVnZW5kJyxcbiAgJ2xpJyxcbiAgJ21haW4nLFxuICAnbWFwJyxcbiAgJ21hcmsnLFxuICAnbWFycXVlZScsXG4gICdtZW51JyxcbiAgJ21lbnVpdGVtJyxcbiAgJ21ldGVyJyxcbiAgJ25hdicsXG4gICdub2JyJyxcbiAgJ29sJyxcbiAgJ29wdGdyb3VwJyxcbiAgJ29wdGlvbicsXG4gICdvdXRwdXQnLFxuICAncCcsXG4gICdwaWN0dXJlJyxcbiAgJ3ByZScsXG4gICdwcm9ncmVzcycsXG4gICdxJyxcbiAgJ3JwJyxcbiAgJ3J0JyxcbiAgJ3J1YnknLFxuICAncycsXG4gICdzYW1wJyxcbiAgJ3NlY3Rpb24nLFxuICAnc2VsZWN0JyxcbiAgJ3NoYWRvdycsXG4gICdzbWFsbCcsXG4gICdzb3VyY2UnLFxuICAnc3BhY2VyJyxcbiAgJ3NwYW4nLFxuICAnc3RyaWtlJyxcbiAgJ3N0cm9uZycsXG4gICdzdHlsZScsXG4gICdzdWInLFxuICAnc3VtbWFyeScsXG4gICdzdXAnLFxuICAndGFibGUnLFxuICAndGJvZHknLFxuICAndGQnLFxuICAndGVtcGxhdGUnLFxuICAndGV4dGFyZWEnLFxuICAndGZvb3QnLFxuICAndGgnLFxuICAndGhlYWQnLFxuICAndGltZScsXG4gICd0cicsXG4gICd0cmFjaycsXG4gICd0dCcsXG4gICd1JyxcbiAgJ3VsJyxcbiAgJ3ZhcicsXG4gICd2aWRlbycsXG4gICd3YnInLFxuXSk7XG5cbi8vIFNWR1xuZXhwb3J0IGNvbnN0IHN2ZyA9IGZyZWV6ZShbXG4gICdzdmcnLFxuICAnYScsXG4gICdhbHRnbHlwaCcsXG4gICdhbHRnbHlwaGRlZicsXG4gICdhbHRnbHlwaGl0ZW0nLFxuICAnYW5pbWF0ZWNvbG9yJyxcbiAgJ2FuaW1hdGVtb3Rpb24nLFxuICAnYW5pbWF0ZXRyYW5zZm9ybScsXG4gICdjaXJjbGUnLFxuICAnY2xpcHBhdGgnLFxuICAnZGVmcycsXG4gICdkZXNjJyxcbiAgJ2VsbGlwc2UnLFxuICAnZmlsdGVyJyxcbiAgJ2ZvbnQnLFxuICAnZycsXG4gICdnbHlwaCcsXG4gICdnbHlwaHJlZicsXG4gICdoa2VybicsXG4gICdpbWFnZScsXG4gICdsaW5lJyxcbiAgJ2xpbmVhcmdyYWRpZW50JyxcbiAgJ21hcmtlcicsXG4gICdtYXNrJyxcbiAgJ21ldGFkYXRhJyxcbiAgJ21wYXRoJyxcbiAgJ3BhdGgnLFxuICAncGF0dGVybicsXG4gICdwb2x5Z29uJyxcbiAgJ3BvbHlsaW5lJyxcbiAgJ3JhZGlhbGdyYWRpZW50JyxcbiAgJ3JlY3QnLFxuICAnc3RvcCcsXG4gICdzdHlsZScsXG4gICdzd2l0Y2gnLFxuICAnc3ltYm9sJyxcbiAgJ3RleHQnLFxuICAndGV4dHBhdGgnLFxuICAndGl0bGUnLFxuICAndHJlZicsXG4gICd0c3BhbicsXG4gICd2aWV3JyxcbiAgJ3ZrZXJuJyxcbl0pO1xuXG5leHBvcnQgY29uc3Qgc3ZnRmlsdGVycyA9IGZyZWV6ZShbXG4gICdmZUJsZW5kJyxcbiAgJ2ZlQ29sb3JNYXRyaXgnLFxuICAnZmVDb21wb25lbnRUcmFuc2ZlcicsXG4gICdmZUNvbXBvc2l0ZScsXG4gICdmZUNvbnZvbHZlTWF0cml4JyxcbiAgJ2ZlRGlmZnVzZUxpZ2h0aW5nJyxcbiAgJ2ZlRGlzcGxhY2VtZW50TWFwJyxcbiAgJ2ZlRGlzdGFudExpZ2h0JyxcbiAgJ2ZlRmxvb2QnLFxuICAnZmVGdW5jQScsXG4gICdmZUZ1bmNCJyxcbiAgJ2ZlRnVuY0cnLFxuICAnZmVGdW5jUicsXG4gICdmZUdhdXNzaWFuQmx1cicsXG4gICdmZUltYWdlJyxcbiAgJ2ZlTWVyZ2UnLFxuICAnZmVNZXJnZU5vZGUnLFxuICAnZmVNb3JwaG9sb2d5JyxcbiAgJ2ZlT2Zmc2V0JyxcbiAgJ2ZlUG9pbnRMaWdodCcsXG4gICdmZVNwZWN1bGFyTGlnaHRpbmcnLFxuICAnZmVTcG90TGlnaHQnLFxuICAnZmVUaWxlJyxcbiAgJ2ZlVHVyYnVsZW5jZScsXG5dKTtcblxuLy8gTGlzdCBvZiBTVkcgZWxlbWVudHMgdGhhdCBhcmUgZGlzYWxsb3dlZCBieSBkZWZhdWx0LlxuLy8gV2Ugc3RpbGwgbmVlZCB0byBrbm93IHRoZW0gc28gdGhhdCB3ZSBjYW4gZG8gbmFtZXNwYWNlXG4vLyBjaGVja3MgcHJvcGVybHkgaW4gY2FzZSBvbmUgd2FudHMgdG8gYWRkIHRoZW0gdG9cbi8vIGFsbG93LWxpc3QuXG5leHBvcnQgY29uc3Qgc3ZnRGlzYWxsb3dlZCA9IGZyZWV6ZShbXG4gICdhbmltYXRlJyxcbiAgJ2NvbG9yLXByb2ZpbGUnLFxuICAnY3Vyc29yJyxcbiAgJ2Rpc2NhcmQnLFxuICAnZmVkcm9wc2hhZG93JyxcbiAgJ2ZvbnQtZmFjZScsXG4gICdmb250LWZhY2UtZm9ybWF0JyxcbiAgJ2ZvbnQtZmFjZS1uYW1lJyxcbiAgJ2ZvbnQtZmFjZS1zcmMnLFxuICAnZm9udC1mYWNlLXVyaScsXG4gICdmb3JlaWdub2JqZWN0JyxcbiAgJ2hhdGNoJyxcbiAgJ2hhdGNocGF0aCcsXG4gICdtZXNoJyxcbiAgJ21lc2hncmFkaWVudCcsXG4gICdtZXNocGF0Y2gnLFxuICAnbWVzaHJvdycsXG4gICdtaXNzaW5nLWdseXBoJyxcbiAgJ3NjcmlwdCcsXG4gICdzZXQnLFxuICAnc29saWRjb2xvcicsXG4gICd1bmtub3duJyxcbiAgJ3VzZScsXG5dKTtcblxuZXhwb3J0IGNvbnN0IG1hdGhNbCA9IGZyZWV6ZShbXG4gICdtYXRoJyxcbiAgJ21lbmNsb3NlJyxcbiAgJ21lcnJvcicsXG4gICdtZmVuY2VkJyxcbiAgJ21mcmFjJyxcbiAgJ21nbHlwaCcsXG4gICdtaScsXG4gICdtbGFiZWxlZHRyJyxcbiAgJ21tdWx0aXNjcmlwdHMnLFxuICAnbW4nLFxuICAnbW8nLFxuICAnbW92ZXInLFxuICAnbXBhZGRlZCcsXG4gICdtcGhhbnRvbScsXG4gICdtcm9vdCcsXG4gICdtcm93JyxcbiAgJ21zJyxcbiAgJ21zcGFjZScsXG4gICdtc3FydCcsXG4gICdtc3R5bGUnLFxuICAnbXN1YicsXG4gICdtc3VwJyxcbiAgJ21zdWJzdXAnLFxuICAnbXRhYmxlJyxcbiAgJ210ZCcsXG4gICdtdGV4dCcsXG4gICdtdHInLFxuICAnbXVuZGVyJyxcbiAgJ211bmRlcm92ZXInLFxuXSk7XG5cbi8vIFNpbWlsYXJseSB0byBTVkcsIHdlIHdhbnQgdG8ga25vdyBhbGwgTWF0aE1MIGVsZW1lbnRzLFxuLy8gZXZlbiB0aG9zZSB0aGF0IHdlIGRpc2FsbG93IGJ5IGRlZmF1bHQuXG5leHBvcnQgY29uc3QgbWF0aE1sRGlzYWxsb3dlZCA9IGZyZWV6ZShbXG4gICdtYWN0aW9uJyxcbiAgJ21hbGlnbmdyb3VwJyxcbiAgJ21hbGlnbm1hcmsnLFxuICAnbWxvbmdkaXYnLFxuICAnbXNjYXJyaWVzJyxcbiAgJ21zY2FycnknLFxuICAnbXNncm91cCcsXG4gICdtc3RhY2snLFxuICAnbXNsaW5lJyxcbiAgJ21zcm93JyxcbiAgJ3NlbWFudGljcycsXG4gICdhbm5vdGF0aW9uJyxcbiAgJ2Fubm90YXRpb24teG1sJyxcbiAgJ21wcmVzY3JpcHRzJyxcbiAgJ25vbmUnLFxuXSk7XG5cbmV4cG9ydCBjb25zdCB0ZXh0ID0gZnJlZXplKFsnI3RleHQnXSk7XG4iLCJpbXBvcnQgeyBmcmVlemUgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuZXhwb3J0IGNvbnN0IGh0bWwgPSBmcmVlemUoW1xuICAnYWNjZXB0JyxcbiAgJ2FjdGlvbicsXG4gICdhbGlnbicsXG4gICdhbHQnLFxuICAnYXV0b2NhcGl0YWxpemUnLFxuICAnYXV0b2NvbXBsZXRlJyxcbiAgJ2F1dG9waWN0dXJlaW5waWN0dXJlJyxcbiAgJ2F1dG9wbGF5JyxcbiAgJ2JhY2tncm91bmQnLFxuICAnYmdjb2xvcicsXG4gICdib3JkZXInLFxuICAnY2FwdHVyZScsXG4gICdjZWxscGFkZGluZycsXG4gICdjZWxsc3BhY2luZycsXG4gICdjaGVja2VkJyxcbiAgJ2NpdGUnLFxuICAnY2xhc3MnLFxuICAnY2xlYXInLFxuICAnY29sb3InLFxuICAnY29scycsXG4gICdjb2xzcGFuJyxcbiAgJ2NvbnRyb2xzJyxcbiAgJ2NvbnRyb2xzbGlzdCcsXG4gICdjb29yZHMnLFxuICAnY3Jvc3NvcmlnaW4nLFxuICAnZGF0ZXRpbWUnLFxuICAnZGVjb2RpbmcnLFxuICAnZGVmYXVsdCcsXG4gICdkaXInLFxuICAnZGlzYWJsZWQnLFxuICAnZGlzYWJsZXBpY3R1cmVpbnBpY3R1cmUnLFxuICAnZGlzYWJsZXJlbW90ZXBsYXliYWNrJyxcbiAgJ2Rvd25sb2FkJyxcbiAgJ2RyYWdnYWJsZScsXG4gICdlbmN0eXBlJyxcbiAgJ2VudGVya2V5aGludCcsXG4gICdmYWNlJyxcbiAgJ2ZvcicsXG4gICdoZWFkZXJzJyxcbiAgJ2hlaWdodCcsXG4gICdoaWRkZW4nLFxuICAnaGlnaCcsXG4gICdocmVmJyxcbiAgJ2hyZWZsYW5nJyxcbiAgJ2lkJyxcbiAgJ2lucHV0bW9kZScsXG4gICdpbnRlZ3JpdHknLFxuICAnaXNtYXAnLFxuICAna2luZCcsXG4gICdsYWJlbCcsXG4gICdsYW5nJyxcbiAgJ2xpc3QnLFxuICAnbG9hZGluZycsXG4gICdsb29wJyxcbiAgJ2xvdycsXG4gICdtYXgnLFxuICAnbWF4bGVuZ3RoJyxcbiAgJ21lZGlhJyxcbiAgJ21ldGhvZCcsXG4gICdtaW4nLFxuICAnbWlubGVuZ3RoJyxcbiAgJ211bHRpcGxlJyxcbiAgJ211dGVkJyxcbiAgJ25hbWUnLFxuICAnbm9uY2UnLFxuICAnbm9zaGFkZScsXG4gICdub3ZhbGlkYXRlJyxcbiAgJ25vd3JhcCcsXG4gICdvcGVuJyxcbiAgJ29wdGltdW0nLFxuICAncGF0dGVybicsXG4gICdwbGFjZWhvbGRlcicsXG4gICdwbGF5c2lubGluZScsXG4gICdwb3N0ZXInLFxuICAncHJlbG9hZCcsXG4gICdwdWJkYXRlJyxcbiAgJ3JhZGlvZ3JvdXAnLFxuICAncmVhZG9ubHknLFxuICAncmVsJyxcbiAgJ3JlcXVpcmVkJyxcbiAgJ3JldicsXG4gICdyZXZlcnNlZCcsXG4gICdyb2xlJyxcbiAgJ3Jvd3MnLFxuICAncm93c3BhbicsXG4gICdzcGVsbGNoZWNrJyxcbiAgJ3Njb3BlJyxcbiAgJ3NlbGVjdGVkJyxcbiAgJ3NoYXBlJyxcbiAgJ3NpemUnLFxuICAnc2l6ZXMnLFxuICAnc3BhbicsXG4gICdzcmNsYW5nJyxcbiAgJ3N0YXJ0JyxcbiAgJ3NyYycsXG4gICdzcmNzZXQnLFxuICAnc3RlcCcsXG4gICdzdHlsZScsXG4gICdzdW1tYXJ5JyxcbiAgJ3RhYmluZGV4JyxcbiAgJ3RpdGxlJyxcbiAgJ3RyYW5zbGF0ZScsXG4gICd0eXBlJyxcbiAgJ3VzZW1hcCcsXG4gICd2YWxpZ24nLFxuICAndmFsdWUnLFxuICAnd2lkdGgnLFxuICAneG1sbnMnLFxuICAnc2xvdCcsXG5dKTtcblxuZXhwb3J0IGNvbnN0IHN2ZyA9IGZyZWV6ZShbXG4gICdhY2NlbnQtaGVpZ2h0JyxcbiAgJ2FjY3VtdWxhdGUnLFxuICAnYWRkaXRpdmUnLFxuICAnYWxpZ25tZW50LWJhc2VsaW5lJyxcbiAgJ2FzY2VudCcsXG4gICdhdHRyaWJ1dGVuYW1lJyxcbiAgJ2F0dHJpYnV0ZXR5cGUnLFxuICAnYXppbXV0aCcsXG4gICdiYXNlZnJlcXVlbmN5JyxcbiAgJ2Jhc2VsaW5lLXNoaWZ0JyxcbiAgJ2JlZ2luJyxcbiAgJ2JpYXMnLFxuICAnYnknLFxuICAnY2xhc3MnLFxuICAnY2xpcCcsXG4gICdjbGlwcGF0aHVuaXRzJyxcbiAgJ2NsaXAtcGF0aCcsXG4gICdjbGlwLXJ1bGUnLFxuICAnY29sb3InLFxuICAnY29sb3ItaW50ZXJwb2xhdGlvbicsXG4gICdjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnMnLFxuICAnY29sb3ItcHJvZmlsZScsXG4gICdjb2xvci1yZW5kZXJpbmcnLFxuICAnY3gnLFxuICAnY3knLFxuICAnZCcsXG4gICdkeCcsXG4gICdkeScsXG4gICdkaWZmdXNlY29uc3RhbnQnLFxuICAnZGlyZWN0aW9uJyxcbiAgJ2Rpc3BsYXknLFxuICAnZGl2aXNvcicsXG4gICdkdXInLFxuICAnZWRnZW1vZGUnLFxuICAnZWxldmF0aW9uJyxcbiAgJ2VuZCcsXG4gICdmaWxsJyxcbiAgJ2ZpbGwtb3BhY2l0eScsXG4gICdmaWxsLXJ1bGUnLFxuICAnZmlsdGVyJyxcbiAgJ2ZpbHRlcnVuaXRzJyxcbiAgJ2Zsb29kLWNvbG9yJyxcbiAgJ2Zsb29kLW9wYWNpdHknLFxuICAnZm9udC1mYW1pbHknLFxuICAnZm9udC1zaXplJyxcbiAgJ2ZvbnQtc2l6ZS1hZGp1c3QnLFxuICAnZm9udC1zdHJldGNoJyxcbiAgJ2ZvbnQtc3R5bGUnLFxuICAnZm9udC12YXJpYW50JyxcbiAgJ2ZvbnQtd2VpZ2h0JyxcbiAgJ2Z4JyxcbiAgJ2Z5JyxcbiAgJ2cxJyxcbiAgJ2cyJyxcbiAgJ2dseXBoLW5hbWUnLFxuICAnZ2x5cGhyZWYnLFxuICAnZ3JhZGllbnR1bml0cycsXG4gICdncmFkaWVudHRyYW5zZm9ybScsXG4gICdoZWlnaHQnLFxuICAnaHJlZicsXG4gICdpZCcsXG4gICdpbWFnZS1yZW5kZXJpbmcnLFxuICAnaW4nLFxuICAnaW4yJyxcbiAgJ2snLFxuICAnazEnLFxuICAnazInLFxuICAnazMnLFxuICAnazQnLFxuICAna2VybmluZycsXG4gICdrZXlwb2ludHMnLFxuICAna2V5c3BsaW5lcycsXG4gICdrZXl0aW1lcycsXG4gICdsYW5nJyxcbiAgJ2xlbmd0aGFkanVzdCcsXG4gICdsZXR0ZXItc3BhY2luZycsXG4gICdrZXJuZWxtYXRyaXgnLFxuICAna2VybmVsdW5pdGxlbmd0aCcsXG4gICdsaWdodGluZy1jb2xvcicsXG4gICdsb2NhbCcsXG4gICdtYXJrZXItZW5kJyxcbiAgJ21hcmtlci1taWQnLFxuICAnbWFya2VyLXN0YXJ0JyxcbiAgJ21hcmtlcmhlaWdodCcsXG4gICdtYXJrZXJ1bml0cycsXG4gICdtYXJrZXJ3aWR0aCcsXG4gICdtYXNrY29udGVudHVuaXRzJyxcbiAgJ21hc2t1bml0cycsXG4gICdtYXgnLFxuICAnbWFzaycsXG4gICdtZWRpYScsXG4gICdtZXRob2QnLFxuICAnbW9kZScsXG4gICdtaW4nLFxuICAnbmFtZScsXG4gICdudW1vY3RhdmVzJyxcbiAgJ29mZnNldCcsXG4gICdvcGVyYXRvcicsXG4gICdvcGFjaXR5JyxcbiAgJ29yZGVyJyxcbiAgJ29yaWVudCcsXG4gICdvcmllbnRhdGlvbicsXG4gICdvcmlnaW4nLFxuICAnb3ZlcmZsb3cnLFxuICAncGFpbnQtb3JkZXInLFxuICAncGF0aCcsXG4gICdwYXRobGVuZ3RoJyxcbiAgJ3BhdHRlcm5jb250ZW50dW5pdHMnLFxuICAncGF0dGVybnRyYW5zZm9ybScsXG4gICdwYXR0ZXJudW5pdHMnLFxuICAncG9pbnRzJyxcbiAgJ3ByZXNlcnZlYWxwaGEnLFxuICAncHJlc2VydmVhc3BlY3RyYXRpbycsXG4gICdwcmltaXRpdmV1bml0cycsXG4gICdyJyxcbiAgJ3J4JyxcbiAgJ3J5JyxcbiAgJ3JhZGl1cycsXG4gICdyZWZ4JyxcbiAgJ3JlZnknLFxuICAncmVwZWF0Y291bnQnLFxuICAncmVwZWF0ZHVyJyxcbiAgJ3Jlc3RhcnQnLFxuICAncmVzdWx0JyxcbiAgJ3JvdGF0ZScsXG4gICdzY2FsZScsXG4gICdzZWVkJyxcbiAgJ3NoYXBlLXJlbmRlcmluZycsXG4gICdzcGVjdWxhcmNvbnN0YW50JyxcbiAgJ3NwZWN1bGFyZXhwb25lbnQnLFxuICAnc3ByZWFkbWV0aG9kJyxcbiAgJ3N0YXJ0b2Zmc2V0JyxcbiAgJ3N0ZGRldmlhdGlvbicsXG4gICdzdGl0Y2h0aWxlcycsXG4gICdzdG9wLWNvbG9yJyxcbiAgJ3N0b3Atb3BhY2l0eScsXG4gICdzdHJva2UtZGFzaGFycmF5JyxcbiAgJ3N0cm9rZS1kYXNob2Zmc2V0JyxcbiAgJ3N0cm9rZS1saW5lY2FwJyxcbiAgJ3N0cm9rZS1saW5lam9pbicsXG4gICdzdHJva2UtbWl0ZXJsaW1pdCcsXG4gICdzdHJva2Utb3BhY2l0eScsXG4gICdzdHJva2UnLFxuICAnc3Ryb2tlLXdpZHRoJyxcbiAgJ3N0eWxlJyxcbiAgJ3N1cmZhY2VzY2FsZScsXG4gICdzeXN0ZW1sYW5ndWFnZScsXG4gICd0YWJpbmRleCcsXG4gICd0YXJnZXR4JyxcbiAgJ3RhcmdldHknLFxuICAndHJhbnNmb3JtJyxcbiAgJ3RyYW5zZm9ybS1vcmlnaW4nLFxuICAndGV4dC1hbmNob3InLFxuICAndGV4dC1kZWNvcmF0aW9uJyxcbiAgJ3RleHQtcmVuZGVyaW5nJyxcbiAgJ3RleHRsZW5ndGgnLFxuICAndHlwZScsXG4gICd1MScsXG4gICd1MicsXG4gICd1bmljb2RlJyxcbiAgJ3ZhbHVlcycsXG4gICd2aWV3Ym94JyxcbiAgJ3Zpc2liaWxpdHknLFxuICAndmVyc2lvbicsXG4gICd2ZXJ0LWFkdi15JyxcbiAgJ3ZlcnQtb3JpZ2luLXgnLFxuICAndmVydC1vcmlnaW4teScsXG4gICd3aWR0aCcsXG4gICd3b3JkLXNwYWNpbmcnLFxuICAnd3JhcCcsXG4gICd3cml0aW5nLW1vZGUnLFxuICAneGNoYW5uZWxzZWxlY3RvcicsXG4gICd5Y2hhbm5lbHNlbGVjdG9yJyxcbiAgJ3gnLFxuICAneDEnLFxuICAneDInLFxuICAneG1sbnMnLFxuICAneScsXG4gICd5MScsXG4gICd5MicsXG4gICd6JyxcbiAgJ3pvb21hbmRwYW4nLFxuXSk7XG5cbmV4cG9ydCBjb25zdCBtYXRoTWwgPSBmcmVlemUoW1xuICAnYWNjZW50JyxcbiAgJ2FjY2VudHVuZGVyJyxcbiAgJ2FsaWduJyxcbiAgJ2JldmVsbGVkJyxcbiAgJ2Nsb3NlJyxcbiAgJ2NvbHVtbnNhbGlnbicsXG4gICdjb2x1bW5saW5lcycsXG4gICdjb2x1bW5zcGFuJyxcbiAgJ2Rlbm9tYWxpZ24nLFxuICAnZGVwdGgnLFxuICAnZGlyJyxcbiAgJ2Rpc3BsYXknLFxuICAnZGlzcGxheXN0eWxlJyxcbiAgJ2VuY29kaW5nJyxcbiAgJ2ZlbmNlJyxcbiAgJ2ZyYW1lJyxcbiAgJ2hlaWdodCcsXG4gICdocmVmJyxcbiAgJ2lkJyxcbiAgJ2xhcmdlb3AnLFxuICAnbGVuZ3RoJyxcbiAgJ2xpbmV0aGlja25lc3MnLFxuICAnbHNwYWNlJyxcbiAgJ2xxdW90ZScsXG4gICdtYXRoYmFja2dyb3VuZCcsXG4gICdtYXRoY29sb3InLFxuICAnbWF0aHNpemUnLFxuICAnbWF0aHZhcmlhbnQnLFxuICAnbWF4c2l6ZScsXG4gICdtaW5zaXplJyxcbiAgJ21vdmFibGVsaW1pdHMnLFxuICAnbm90YXRpb24nLFxuICAnbnVtYWxpZ24nLFxuICAnb3BlbicsXG4gICdyb3dhbGlnbicsXG4gICdyb3dsaW5lcycsXG4gICdyb3dzcGFjaW5nJyxcbiAgJ3Jvd3NwYW4nLFxuICAncnNwYWNlJyxcbiAgJ3JxdW90ZScsXG4gICdzY3JpcHRsZXZlbCcsXG4gICdzY3JpcHRtaW5zaXplJyxcbiAgJ3NjcmlwdHNpemVtdWx0aXBsaWVyJyxcbiAgJ3NlbGVjdGlvbicsXG4gICdzZXBhcmF0b3InLFxuICAnc2VwYXJhdG9ycycsXG4gICdzdHJldGNoeScsXG4gICdzdWJzY3JpcHRzaGlmdCcsXG4gICdzdXBzY3JpcHRzaGlmdCcsXG4gICdzeW1tZXRyaWMnLFxuICAndm9mZnNldCcsXG4gICd3aWR0aCcsXG4gICd4bWxucycsXG5dKTtcblxuZXhwb3J0IGNvbnN0IHhtbCA9IGZyZWV6ZShbXG4gICd4bGluazpocmVmJyxcbiAgJ3htbDppZCcsXG4gICd4bGluazp0aXRsZScsXG4gICd4bWw6c3BhY2UnLFxuICAneG1sbnM6eGxpbmsnLFxuXSk7XG4iLCJpbXBvcnQgeyBzZWFsIH0gZnJvbSAnLi91dGlscy5qcyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL2JldHRlci1yZWdleFxuZXhwb3J0IGNvbnN0IE1VU1RBQ0hFX0VYUFIgPSBzZWFsKC9cXHtcXHtbXFx3XFxXXSp8W1xcd1xcV10qXFx9XFx9L2dtKTsgLy8gU3BlY2lmeSB0ZW1wbGF0ZSBkZXRlY3Rpb24gcmVnZXggZm9yIFNBRkVfRk9SX1RFTVBMQVRFUyBtb2RlXG5leHBvcnQgY29uc3QgRVJCX0VYUFIgPSBzZWFsKC88JVtcXHdcXFddKnxbXFx3XFxXXSolPi9nbSk7XG5leHBvcnQgY29uc3QgVE1QTElUX0VYUFIgPSBzZWFsKC9cXCR7W1xcd1xcV10qfS9nbSk7XG5leHBvcnQgY29uc3QgREFUQV9BVFRSID0gc2VhbCgvXmRhdGEtW1xcLVxcdy5cXHUwMEI3LVxcdUZGRkZdLyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbmV4cG9ydCBjb25zdCBBUklBX0FUVFIgPSBzZWFsKC9eYXJpYS1bXFwtXFx3XSskLyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbmV4cG9ydCBjb25zdCBJU19BTExPV0VEX1VSSSA9IHNlYWwoXG4gIC9eKD86KD86KD86ZnxodCl0cHM/fG1haWx0b3x0ZWx8Y2FsbHRvfGNpZHx4bXBwKTp8W15hLXpdfFthLXorLlxcLV0rKD86W15hLXorLlxcLTpdfCQpKS9pIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbik7XG5leHBvcnQgY29uc3QgSVNfU0NSSVBUX09SX0RBVEEgPSBzZWFsKC9eKD86XFx3K3NjcmlwdHxkYXRhKTovaSk7XG5leHBvcnQgY29uc3QgQVRUUl9XSElURVNQQUNFID0gc2VhbChcbiAgL1tcXHUwMDAwLVxcdTAwMjBcXHUwMEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwLVxcdTIwMjlcXHUyMDVGXFx1MzAwMF0vZyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnRyb2wtcmVnZXhcbik7XG5leHBvcnQgY29uc3QgRE9DVFlQRV9OQU1FID0gc2VhbCgvXmh0bWwkL2kpO1xuIiwiaW1wb3J0ICogYXMgVEFHUyBmcm9tICcuL3RhZ3MuanMnO1xuaW1wb3J0ICogYXMgQVRUUlMgZnJvbSAnLi9hdHRycy5qcyc7XG5pbXBvcnQgKiBhcyBFWFBSRVNTSU9OUyBmcm9tICcuL3JlZ2V4cC5qcyc7XG5pbXBvcnQge1xuICBhZGRUb1NldCxcbiAgY2xvbmUsXG4gIGZyZWV6ZSxcbiAgYXJyYXlGb3JFYWNoLFxuICBhcnJheVBvcCxcbiAgYXJyYXlQdXNoLFxuICBzdHJpbmdNYXRjaCxcbiAgc3RyaW5nUmVwbGFjZSxcbiAgc3RyaW5nVG9Mb3dlckNhc2UsXG4gIHN0cmluZ1RvU3RyaW5nLFxuICBzdHJpbmdJbmRleE9mLFxuICBzdHJpbmdUcmltLFxuICByZWdFeHBUZXN0LFxuICB0eXBlRXJyb3JDcmVhdGUsXG4gIGxvb2t1cEdldHRlcixcbn0gZnJvbSAnLi91dGlscy5qcyc7XG5cbmNvbnN0IGdldEdsb2JhbCA9ICgpID0+ICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiB3aW5kb3cpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuby1vcCBwb2xpY3kgZm9yIGludGVybmFsIHVzZSBvbmx5LlxuICogRG9uJ3QgZXhwb3J0IHRoaXMgZnVuY3Rpb24gb3V0c2lkZSB0aGlzIG1vZHVsZSFcbiAqIEBwYXJhbSB7P1RydXN0ZWRUeXBlUG9saWN5RmFjdG9yeX0gdHJ1c3RlZFR5cGVzIFRoZSBwb2xpY3kgZmFjdG9yeS5cbiAqIEBwYXJhbSB7RG9jdW1lbnR9IGRvY3VtZW50IFRoZSBkb2N1bWVudCBvYmplY3QgKHRvIGRldGVybWluZSBwb2xpY3kgbmFtZSBzdWZmaXgpXG4gKiBAcmV0dXJuIHs/VHJ1c3RlZFR5cGVQb2xpY3l9IFRoZSBwb2xpY3kgY3JlYXRlZCAob3IgbnVsbCwgaWYgVHJ1c3RlZCBUeXBlc1xuICogYXJlIG5vdCBzdXBwb3J0ZWQpLlxuICovXG5jb25zdCBfY3JlYXRlVHJ1c3RlZFR5cGVzUG9saWN5ID0gZnVuY3Rpb24gKHRydXN0ZWRUeXBlcywgZG9jdW1lbnQpIHtcbiAgaWYgKFxuICAgIHR5cGVvZiB0cnVzdGVkVHlwZXMgIT09ICdvYmplY3QnIHx8XG4gICAgdHlwZW9mIHRydXN0ZWRUeXBlcy5jcmVhdGVQb2xpY3kgIT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBBbGxvdyB0aGUgY2FsbGVycyB0byBjb250cm9sIHRoZSB1bmlxdWUgcG9saWN5IG5hbWVcbiAgLy8gYnkgYWRkaW5nIGEgZGF0YS10dC1wb2xpY3ktc3VmZml4IHRvIHRoZSBzY3JpcHQgZWxlbWVudCB3aXRoIHRoZSBET01QdXJpZnkuXG4gIC8vIFBvbGljeSBjcmVhdGlvbiB3aXRoIGR1cGxpY2F0ZSBuYW1lcyB0aHJvd3MgaW4gVHJ1c3RlZCBUeXBlcy5cbiAgbGV0IHN1ZmZpeCA9IG51bGw7XG4gIGNvbnN0IEFUVFJfTkFNRSA9ICdkYXRhLXR0LXBvbGljeS1zdWZmaXgnO1xuICBpZiAoXG4gICAgZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJlxuICAgIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuaGFzQXR0cmlidXRlKEFUVFJfTkFNRSlcbiAgKSB7XG4gICAgc3VmZml4ID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5nZXRBdHRyaWJ1dGUoQVRUUl9OQU1FKTtcbiAgfVxuXG4gIGNvbnN0IHBvbGljeU5hbWUgPSAnZG9tcHVyaWZ5JyArIChzdWZmaXggPyAnIycgKyBzdWZmaXggOiAnJyk7XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gdHJ1c3RlZFR5cGVzLmNyZWF0ZVBvbGljeShwb2xpY3lOYW1lLCB7XG4gICAgICBjcmVhdGVIVE1MKGh0bWwpIHtcbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgICB9LFxuICAgICAgY3JlYXRlU2NyaXB0VVJMKHNjcmlwdFVybCkge1xuICAgICAgICByZXR1cm4gc2NyaXB0VXJsO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoXykge1xuICAgIC8vIFBvbGljeSBjcmVhdGlvbiBmYWlsZWQgKG1vc3QgbGlrZWx5IGFub3RoZXIgRE9NUHVyaWZ5IHNjcmlwdCBoYXNcbiAgICAvLyBhbHJlYWR5IHJ1bikuIFNraXAgY3JlYXRpbmcgdGhlIHBvbGljeSwgYXMgdGhpcyB3aWxsIG9ubHkgY2F1c2UgZXJyb3JzXG4gICAgLy8gaWYgVFQgYXJlIGVuZm9yY2VkLlxuICAgIGNvbnNvbGUud2FybihcbiAgICAgICdUcnVzdGVkVHlwZXMgcG9saWN5ICcgKyBwb2xpY3lOYW1lICsgJyBjb3VsZCBub3QgYmUgY3JlYXRlZC4nXG4gICAgKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuZnVuY3Rpb24gY3JlYXRlRE9NUHVyaWZ5KHdpbmRvdyA9IGdldEdsb2JhbCgpKSB7XG4gIGNvbnN0IERPTVB1cmlmeSA9IChyb290KSA9PiBjcmVhdGVET01QdXJpZnkocm9vdCk7XG5cbiAgLyoqXG4gICAqIFZlcnNpb24gbGFiZWwsIGV4cG9zZWQgZm9yIGVhc2llciBjaGVja3NcbiAgICogaWYgRE9NUHVyaWZ5IGlzIHVwIHRvIGRhdGUgb3Igbm90XG4gICAqL1xuICBET01QdXJpZnkudmVyc2lvbiA9IFZFUlNJT047XG5cbiAgLyoqXG4gICAqIEFycmF5IG9mIGVsZW1lbnRzIHRoYXQgRE9NUHVyaWZ5IHJlbW92ZWQgZHVyaW5nIHNhbml0YXRpb24uXG4gICAqIEVtcHR5IGlmIG5vdGhpbmcgd2FzIHJlbW92ZWQuXG4gICAqL1xuICBET01QdXJpZnkucmVtb3ZlZCA9IFtdO1xuXG4gIGlmICghd2luZG93IHx8ICF3aW5kb3cuZG9jdW1lbnQgfHwgd2luZG93LmRvY3VtZW50Lm5vZGVUeXBlICE9PSA5KSB7XG4gICAgLy8gTm90IHJ1bm5pbmcgaW4gYSBicm93c2VyLCBwcm92aWRlIGEgZmFjdG9yeSBmdW5jdGlvblxuICAgIC8vIHNvIHRoYXQgeW91IGNhbiBwYXNzIHlvdXIgb3duIFdpbmRvd1xuICAgIERPTVB1cmlmeS5pc1N1cHBvcnRlZCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIERPTVB1cmlmeTtcbiAgfVxuXG4gIGNvbnN0IG9yaWdpbmFsRG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQ7XG5cbiAgbGV0IHsgZG9jdW1lbnQgfSA9IHdpbmRvdztcbiAgY29uc3Qge1xuICAgIERvY3VtZW50RnJhZ21lbnQsXG4gICAgSFRNTFRlbXBsYXRlRWxlbWVudCxcbiAgICBOb2RlLFxuICAgIEVsZW1lbnQsXG4gICAgTm9kZUZpbHRlcixcbiAgICBOYW1lZE5vZGVNYXAgPSB3aW5kb3cuTmFtZWROb2RlTWFwIHx8IHdpbmRvdy5Nb3pOYW1lZEF0dHJNYXAsXG4gICAgSFRNTEZvcm1FbGVtZW50LFxuICAgIERPTVBhcnNlcixcbiAgICB0cnVzdGVkVHlwZXMsXG4gIH0gPSB3aW5kb3c7XG5cbiAgY29uc3QgRWxlbWVudFByb3RvdHlwZSA9IEVsZW1lbnQucHJvdG90eXBlO1xuXG4gIGNvbnN0IGNsb25lTm9kZSA9IGxvb2t1cEdldHRlcihFbGVtZW50UHJvdG90eXBlLCAnY2xvbmVOb2RlJyk7XG4gIGNvbnN0IGdldE5leHRTaWJsaW5nID0gbG9va3VwR2V0dGVyKEVsZW1lbnRQcm90b3R5cGUsICduZXh0U2libGluZycpO1xuICBjb25zdCBnZXRDaGlsZE5vZGVzID0gbG9va3VwR2V0dGVyKEVsZW1lbnRQcm90b3R5cGUsICdjaGlsZE5vZGVzJyk7XG4gIGNvbnN0IGdldFBhcmVudE5vZGUgPSBsb29rdXBHZXR0ZXIoRWxlbWVudFByb3RvdHlwZSwgJ3BhcmVudE5vZGUnKTtcblxuICAvLyBBcyBwZXIgaXNzdWUgIzQ3LCB0aGUgd2ViLWNvbXBvbmVudHMgcmVnaXN0cnkgaXMgaW5oZXJpdGVkIGJ5IGFcbiAgLy8gbmV3IGRvY3VtZW50IGNyZWF0ZWQgdmlhIGNyZWF0ZUhUTUxEb2N1bWVudC4gQXMgcGVyIHRoZSBzcGVjXG4gIC8vIChodHRwOi8vdzNjLmdpdGh1Yi5pby93ZWJjb21wb25lbnRzL3NwZWMvY3VzdG9tLyNjcmVhdGluZy1hbmQtcGFzc2luZy1yZWdpc3RyaWVzKVxuICAvLyBhIG5ldyBlbXB0eSByZWdpc3RyeSBpcyB1c2VkIHdoZW4gY3JlYXRpbmcgYSB0ZW1wbGF0ZSBjb250ZW50cyBvd25lclxuICAvLyBkb2N1bWVudCwgc28gd2UgdXNlIHRoYXQgYXMgb3VyIHBhcmVudCBkb2N1bWVudCB0byBlbnN1cmUgbm90aGluZ1xuICAvLyBpcyBpbmhlcml0ZWQuXG4gIGlmICh0eXBlb2YgSFRNTFRlbXBsYXRlRWxlbWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICBpZiAodGVtcGxhdGUuY29udGVudCAmJiB0ZW1wbGF0ZS5jb250ZW50Lm93bmVyRG9jdW1lbnQpIHtcbiAgICAgIGRvY3VtZW50ID0gdGVtcGxhdGUuY29udGVudC5vd25lckRvY3VtZW50O1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRydXN0ZWRUeXBlc1BvbGljeSA9IF9jcmVhdGVUcnVzdGVkVHlwZXNQb2xpY3koXG4gICAgdHJ1c3RlZFR5cGVzLFxuICAgIG9yaWdpbmFsRG9jdW1lbnRcbiAgKTtcbiAgY29uc3QgZW1wdHlIVE1MID0gdHJ1c3RlZFR5cGVzUG9saWN5ID8gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwoJycpIDogJyc7XG5cbiAgY29uc3Qge1xuICAgIGltcGxlbWVudGF0aW9uLFxuICAgIGNyZWF0ZU5vZGVJdGVyYXRvcixcbiAgICBjcmVhdGVEb2N1bWVudEZyYWdtZW50LFxuICAgIGdldEVsZW1lbnRzQnlUYWdOYW1lLFxuICB9ID0gZG9jdW1lbnQ7XG4gIGNvbnN0IHsgaW1wb3J0Tm9kZSB9ID0gb3JpZ2luYWxEb2N1bWVudDtcblxuICBsZXQgZG9jdW1lbnRNb2RlID0ge307XG4gIHRyeSB7XG4gICAgZG9jdW1lbnRNb2RlID0gY2xvbmUoZG9jdW1lbnQpLmRvY3VtZW50TW9kZSA/IGRvY3VtZW50LmRvY3VtZW50TW9kZSA6IHt9O1xuICB9IGNhdGNoIChfKSB7fVxuXG4gIGxldCBob29rcyA9IHt9O1xuXG4gIC8qKlxuICAgKiBFeHBvc2Ugd2hldGhlciB0aGlzIGJyb3dzZXIgc3VwcG9ydHMgcnVubmluZyB0aGUgZnVsbCBET01QdXJpZnkuXG4gICAqL1xuICBET01QdXJpZnkuaXNTdXBwb3J0ZWQgPVxuICAgIHR5cGVvZiBnZXRQYXJlbnROb2RlID09PSAnZnVuY3Rpb24nICYmXG4gICAgaW1wbGVtZW50YXRpb24gJiZcbiAgICBpbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQgIT09IHVuZGVmaW5lZCAmJlxuICAgIGRvY3VtZW50TW9kZSAhPT0gOTtcblxuICBjb25zdCB7XG4gICAgTVVTVEFDSEVfRVhQUixcbiAgICBFUkJfRVhQUixcbiAgICBUTVBMSVRfRVhQUixcbiAgICBEQVRBX0FUVFIsXG4gICAgQVJJQV9BVFRSLFxuICAgIElTX1NDUklQVF9PUl9EQVRBLFxuICAgIEFUVFJfV0hJVEVTUEFDRSxcbiAgfSA9IEVYUFJFU1NJT05TO1xuXG4gIGxldCB7IElTX0FMTE9XRURfVVJJIH0gPSBFWFBSRVNTSU9OUztcblxuICAvKipcbiAgICogV2UgY29uc2lkZXIgdGhlIGVsZW1lbnRzIGFuZCBhdHRyaWJ1dGVzIGJlbG93IHRvIGJlIHNhZmUuIElkZWFsbHlcbiAgICogZG9uJ3QgYWRkIGFueSBuZXcgb25lcyBidXQgZmVlbCBmcmVlIHRvIHJlbW92ZSB1bndhbnRlZCBvbmVzLlxuICAgKi9cblxuICAvKiBhbGxvd2VkIGVsZW1lbnQgbmFtZXMgKi9cbiAgbGV0IEFMTE9XRURfVEFHUyA9IG51bGw7XG4gIGNvbnN0IERFRkFVTFRfQUxMT1dFRF9UQUdTID0gYWRkVG9TZXQoe30sIFtcbiAgICAuLi5UQUdTLmh0bWwsXG4gICAgLi4uVEFHUy5zdmcsXG4gICAgLi4uVEFHUy5zdmdGaWx0ZXJzLFxuICAgIC4uLlRBR1MubWF0aE1sLFxuICAgIC4uLlRBR1MudGV4dCxcbiAgXSk7XG5cbiAgLyogQWxsb3dlZCBhdHRyaWJ1dGUgbmFtZXMgKi9cbiAgbGV0IEFMTE9XRURfQVRUUiA9IG51bGw7XG4gIGNvbnN0IERFRkFVTFRfQUxMT1dFRF9BVFRSID0gYWRkVG9TZXQoe30sIFtcbiAgICAuLi5BVFRSUy5odG1sLFxuICAgIC4uLkFUVFJTLnN2ZyxcbiAgICAuLi5BVFRSUy5tYXRoTWwsXG4gICAgLi4uQVRUUlMueG1sLFxuICBdKTtcblxuICAvKlxuICAgKiBDb25maWd1cmUgaG93IERPTVBVcmlmeSBzaG91bGQgaGFuZGxlIGN1c3RvbSBlbGVtZW50cyBhbmQgdGhlaXIgYXR0cmlidXRlcyBhcyB3ZWxsIGFzIGN1c3RvbWl6ZWQgYnVpbHQtaW4gZWxlbWVudHMuXG4gICAqIEBwcm9wZXJ0eSB7UmVnRXhwfEZ1bmN0aW9ufG51bGx9IHRhZ05hbWVDaGVjayBvbmUgb2YgW251bGwsIHJlZ2V4UGF0dGVybiwgcHJlZGljYXRlXS4gRGVmYXVsdDogYG51bGxgIChkaXNhbGxvdyBhbnkgY3VzdG9tIGVsZW1lbnRzKVxuICAgKiBAcHJvcGVydHkge1JlZ0V4cHxGdW5jdGlvbnxudWxsfSBhdHRyaWJ1dGVOYW1lQ2hlY2sgb25lIG9mIFtudWxsLCByZWdleFBhdHRlcm4sIHByZWRpY2F0ZV0uIERlZmF1bHQ6IGBudWxsYCAoZGlzYWxsb3cgYW55IGF0dHJpYnV0ZXMgbm90IG9uIHRoZSBhbGxvdyBsaXN0KVxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGFsbG93Q3VzdG9taXplZEJ1aWx0SW5FbGVtZW50cyBhbGxvdyBjdXN0b20gZWxlbWVudHMgZGVyaXZlZCBmcm9tIGJ1aWx0LWlucyBpZiB0aGV5IHBhc3MgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrLiBEZWZhdWx0OiBgZmFsc2VgLlxuICAgKi9cbiAgbGV0IENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HID0gT2JqZWN0LnNlYWwoXG4gICAgT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgICB0YWdOYW1lQ2hlY2s6IHtcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgfSxcbiAgICAgIGF0dHJpYnV0ZU5hbWVDaGVjazoge1xuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICB9LFxuICAgICAgYWxsb3dDdXN0b21pemVkQnVpbHRJbkVsZW1lbnRzOiB7XG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH0pXG4gICk7XG5cbiAgLyogRXhwbGljaXRseSBmb3JiaWRkZW4gdGFncyAob3ZlcnJpZGVzIEFMTE9XRURfVEFHUy9BRERfVEFHUykgKi9cbiAgbGV0IEZPUkJJRF9UQUdTID0gbnVsbDtcblxuICAvKiBFeHBsaWNpdGx5IGZvcmJpZGRlbiBhdHRyaWJ1dGVzIChvdmVycmlkZXMgQUxMT1dFRF9BVFRSL0FERF9BVFRSKSAqL1xuICBsZXQgRk9SQklEX0FUVFIgPSBudWxsO1xuXG4gIC8qIERlY2lkZSBpZiBBUklBIGF0dHJpYnV0ZXMgYXJlIG9rYXkgKi9cbiAgbGV0IEFMTE9XX0FSSUFfQVRUUiA9IHRydWU7XG5cbiAgLyogRGVjaWRlIGlmIGN1c3RvbSBkYXRhIGF0dHJpYnV0ZXMgYXJlIG9rYXkgKi9cbiAgbGV0IEFMTE9XX0RBVEFfQVRUUiA9IHRydWU7XG5cbiAgLyogRGVjaWRlIGlmIHVua25vd24gcHJvdG9jb2xzIGFyZSBva2F5ICovXG4gIGxldCBBTExPV19VTktOT1dOX1BST1RPQ09MUyA9IGZhbHNlO1xuXG4gIC8qIERlY2lkZSBpZiBzZWxmLWNsb3NpbmcgdGFncyBpbiBhdHRyaWJ1dGVzIGFyZSBhbGxvd2VkLlxuICAgKiBVc3VhbGx5IHJlbW92ZWQgZHVlIHRvIGEgbVhTUyBpc3N1ZSBpbiBqUXVlcnkgMy4wICovXG4gIGxldCBBTExPV19TRUxGX0NMT1NFX0lOX0FUVFIgPSB0cnVlO1xuXG4gIC8qIE91dHB1dCBzaG91bGQgYmUgc2FmZSBmb3IgY29tbW9uIHRlbXBsYXRlIGVuZ2luZXMuXG4gICAqIFRoaXMgbWVhbnMsIERPTVB1cmlmeSByZW1vdmVzIGRhdGEgYXR0cmlidXRlcywgbXVzdGFjaGVzIGFuZCBFUkJcbiAgICovXG4gIGxldCBTQUZFX0ZPUl9URU1QTEFURVMgPSBmYWxzZTtcblxuICAvKiBEZWNpZGUgaWYgZG9jdW1lbnQgd2l0aCA8aHRtbD4uLi4gc2hvdWxkIGJlIHJldHVybmVkICovXG4gIGxldCBXSE9MRV9ET0NVTUVOVCA9IGZhbHNlO1xuXG4gIC8qIFRyYWNrIHdoZXRoZXIgY29uZmlnIGlzIGFscmVhZHkgc2V0IG9uIHRoaXMgaW5zdGFuY2Ugb2YgRE9NUHVyaWZ5LiAqL1xuICBsZXQgU0VUX0NPTkZJRyA9IGZhbHNlO1xuXG4gIC8qIERlY2lkZSBpZiBhbGwgZWxlbWVudHMgKGUuZy4gc3R5bGUsIHNjcmlwdCkgbXVzdCBiZSBjaGlsZHJlbiBvZlxuICAgKiBkb2N1bWVudC5ib2R5LiBCeSBkZWZhdWx0LCBicm93c2VycyBtaWdodCBtb3ZlIHRoZW0gdG8gZG9jdW1lbnQuaGVhZCAqL1xuICBsZXQgRk9SQ0VfQk9EWSA9IGZhbHNlO1xuXG4gIC8qIERlY2lkZSBpZiBhIERPTSBgSFRNTEJvZHlFbGVtZW50YCBzaG91bGQgYmUgcmV0dXJuZWQsIGluc3RlYWQgb2YgYSBodG1sXG4gICAqIHN0cmluZyAob3IgYSBUcnVzdGVkSFRNTCBvYmplY3QgaWYgVHJ1c3RlZCBUeXBlcyBhcmUgc3VwcG9ydGVkKS5cbiAgICogSWYgYFdIT0xFX0RPQ1VNRU5UYCBpcyBlbmFibGVkIGEgYEhUTUxIdG1sRWxlbWVudGAgd2lsbCBiZSByZXR1cm5lZCBpbnN0ZWFkXG4gICAqL1xuICBsZXQgUkVUVVJOX0RPTSA9IGZhbHNlO1xuXG4gIC8qIERlY2lkZSBpZiBhIERPTSBgRG9jdW1lbnRGcmFnbWVudGAgc2hvdWxkIGJlIHJldHVybmVkLCBpbnN0ZWFkIG9mIGEgaHRtbFxuICAgKiBzdHJpbmcgIChvciBhIFRydXN0ZWRIVE1MIG9iamVjdCBpZiBUcnVzdGVkIFR5cGVzIGFyZSBzdXBwb3J0ZWQpICovXG4gIGxldCBSRVRVUk5fRE9NX0ZSQUdNRU5UID0gZmFsc2U7XG5cbiAgLyogVHJ5IHRvIHJldHVybiBhIFRydXN0ZWQgVHlwZSBvYmplY3QgaW5zdGVhZCBvZiBhIHN0cmluZywgcmV0dXJuIGEgc3RyaW5nIGluXG4gICAqIGNhc2UgVHJ1c3RlZCBUeXBlcyBhcmUgbm90IHN1cHBvcnRlZCAgKi9cbiAgbGV0IFJFVFVSTl9UUlVTVEVEX1RZUEUgPSBmYWxzZTtcblxuICAvKiBPdXRwdXQgc2hvdWxkIGJlIGZyZWUgZnJvbSBET00gY2xvYmJlcmluZyBhdHRhY2tzP1xuICAgKiBUaGlzIHNhbml0aXplcyBtYXJrdXBzIG5hbWVkIHdpdGggY29sbGlkaW5nLCBjbG9iYmVyYWJsZSBidWlsdC1pbiBET00gQVBJcy5cbiAgICovXG4gIGxldCBTQU5JVElaRV9ET00gPSB0cnVlO1xuXG4gIC8qIEFjaGlldmUgZnVsbCBET00gQ2xvYmJlcmluZyBwcm90ZWN0aW9uIGJ5IGlzb2xhdGluZyB0aGUgbmFtZXNwYWNlIG9mIG5hbWVkXG4gICAqIHByb3BlcnRpZXMgYW5kIEpTIHZhcmlhYmxlcywgbWl0aWdhdGluZyBhdHRhY2tzIHRoYXQgYWJ1c2UgdGhlIEhUTUwvRE9NIHNwZWMgcnVsZXMuXG4gICAqXG4gICAqIEhUTUwvRE9NIHNwZWMgcnVsZXMgdGhhdCBlbmFibGUgRE9NIENsb2JiZXJpbmc6XG4gICAqICAgLSBOYW1lZCBBY2Nlc3Mgb24gV2luZG93ICjCpzcuMy4zKVxuICAgKiAgIC0gRE9NIFRyZWUgQWNjZXNzb3JzICjCpzMuMS41KVxuICAgKiAgIC0gRm9ybSBFbGVtZW50IFBhcmVudC1DaGlsZCBSZWxhdGlvbnMgKMKnNC4xMC4zKVxuICAgKiAgIC0gSWZyYW1lIHNyY2RvYyAvIE5lc3RlZCBXaW5kb3dQcm94aWVzICjCpzQuOC41KVxuICAgKiAgIC0gSFRNTENvbGxlY3Rpb24gKMKnNC4yLjEwLjIpXG4gICAqXG4gICAqIE5hbWVzcGFjZSBpc29sYXRpb24gaXMgaW1wbGVtZW50ZWQgYnkgcHJlZml4aW5nIGBpZGAgYW5kIGBuYW1lYCBhdHRyaWJ1dGVzXG4gICAqIHdpdGggYSBjb25zdGFudCBzdHJpbmcsIGkuZS4sIGB1c2VyLWNvbnRlbnQtYFxuICAgKi9cbiAgbGV0IFNBTklUSVpFX05BTUVEX1BST1BTID0gZmFsc2U7XG4gIGNvbnN0IFNBTklUSVpFX05BTUVEX1BST1BTX1BSRUZJWCA9ICd1c2VyLWNvbnRlbnQtJztcblxuICAvKiBLZWVwIGVsZW1lbnQgY29udGVudCB3aGVuIHJlbW92aW5nIGVsZW1lbnQ/ICovXG4gIGxldCBLRUVQX0NPTlRFTlQgPSB0cnVlO1xuXG4gIC8qIElmIGEgYE5vZGVgIGlzIHBhc3NlZCB0byBzYW5pdGl6ZSgpLCB0aGVuIHBlcmZvcm1zIHNhbml0aXphdGlvbiBpbi1wbGFjZSBpbnN0ZWFkXG4gICAqIG9mIGltcG9ydGluZyBpdCBpbnRvIGEgbmV3IERvY3VtZW50IGFuZCByZXR1cm5pbmcgYSBzYW5pdGl6ZWQgY29weSAqL1xuICBsZXQgSU5fUExBQ0UgPSBmYWxzZTtcblxuICAvKiBBbGxvdyB1c2FnZSBvZiBwcm9maWxlcyBsaWtlIGh0bWwsIHN2ZyBhbmQgbWF0aE1sICovXG4gIGxldCBVU0VfUFJPRklMRVMgPSB7fTtcblxuICAvKiBUYWdzIHRvIGlnbm9yZSBjb250ZW50IG9mIHdoZW4gS0VFUF9DT05URU5UIGlzIHRydWUgKi9cbiAgbGV0IEZPUkJJRF9DT05URU5UUyA9IG51bGw7XG4gIGNvbnN0IERFRkFVTFRfRk9SQklEX0NPTlRFTlRTID0gYWRkVG9TZXQoe30sIFtcbiAgICAnYW5ub3RhdGlvbi14bWwnLFxuICAgICdhdWRpbycsXG4gICAgJ2NvbGdyb3VwJyxcbiAgICAnZGVzYycsXG4gICAgJ2ZvcmVpZ25vYmplY3QnLFxuICAgICdoZWFkJyxcbiAgICAnaWZyYW1lJyxcbiAgICAnbWF0aCcsXG4gICAgJ21pJyxcbiAgICAnbW4nLFxuICAgICdtbycsXG4gICAgJ21zJyxcbiAgICAnbXRleHQnLFxuICAgICdub2VtYmVkJyxcbiAgICAnbm9mcmFtZXMnLFxuICAgICdub3NjcmlwdCcsXG4gICAgJ3BsYWludGV4dCcsXG4gICAgJ3NjcmlwdCcsXG4gICAgJ3N0eWxlJyxcbiAgICAnc3ZnJyxcbiAgICAndGVtcGxhdGUnLFxuICAgICd0aGVhZCcsXG4gICAgJ3RpdGxlJyxcbiAgICAndmlkZW8nLFxuICAgICd4bXAnLFxuICBdKTtcblxuICAvKiBUYWdzIHRoYXQgYXJlIHNhZmUgZm9yIGRhdGE6IFVSSXMgKi9cbiAgbGV0IERBVEFfVVJJX1RBR1MgPSBudWxsO1xuICBjb25zdCBERUZBVUxUX0RBVEFfVVJJX1RBR1MgPSBhZGRUb1NldCh7fSwgW1xuICAgICdhdWRpbycsXG4gICAgJ3ZpZGVvJyxcbiAgICAnaW1nJyxcbiAgICAnc291cmNlJyxcbiAgICAnaW1hZ2UnLFxuICAgICd0cmFjaycsXG4gIF0pO1xuXG4gIC8qIEF0dHJpYnV0ZXMgc2FmZSBmb3IgdmFsdWVzIGxpa2UgXCJqYXZhc2NyaXB0OlwiICovXG4gIGxldCBVUklfU0FGRV9BVFRSSUJVVEVTID0gbnVsbDtcbiAgY29uc3QgREVGQVVMVF9VUklfU0FGRV9BVFRSSUJVVEVTID0gYWRkVG9TZXQoe30sIFtcbiAgICAnYWx0JyxcbiAgICAnY2xhc3MnLFxuICAgICdmb3InLFxuICAgICdpZCcsXG4gICAgJ2xhYmVsJyxcbiAgICAnbmFtZScsXG4gICAgJ3BhdHRlcm4nLFxuICAgICdwbGFjZWhvbGRlcicsXG4gICAgJ3JvbGUnLFxuICAgICdzdW1tYXJ5JyxcbiAgICAndGl0bGUnLFxuICAgICd2YWx1ZScsXG4gICAgJ3N0eWxlJyxcbiAgICAneG1sbnMnLFxuICBdKTtcblxuICBjb25zdCBNQVRITUxfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUwnO1xuICBjb25zdCBTVkdfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbiAgY29uc3QgSFRNTF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCc7XG4gIC8qIERvY3VtZW50IG5hbWVzcGFjZSAqL1xuICBsZXQgTkFNRVNQQUNFID0gSFRNTF9OQU1FU1BBQ0U7XG4gIGxldCBJU19FTVBUWV9JTlBVVCA9IGZhbHNlO1xuXG4gIC8qIEFsbG93ZWQgWEhUTUwrWE1MIG5hbWVzcGFjZXMgKi9cbiAgbGV0IEFMTE9XRURfTkFNRVNQQUNFUyA9IG51bGw7XG4gIGNvbnN0IERFRkFVTFRfQUxMT1dFRF9OQU1FU1BBQ0VTID0gYWRkVG9TZXQoXG4gICAge30sXG4gICAgW01BVEhNTF9OQU1FU1BBQ0UsIFNWR19OQU1FU1BBQ0UsIEhUTUxfTkFNRVNQQUNFXSxcbiAgICBzdHJpbmdUb1N0cmluZ1xuICApO1xuXG4gIC8qIFBhcnNpbmcgb2Ygc3RyaWN0IFhIVE1MIGRvY3VtZW50cyAqL1xuICBsZXQgUEFSU0VSX01FRElBX1RZUEU7XG4gIGNvbnN0IFNVUFBPUlRFRF9QQVJTRVJfTUVESUFfVFlQRVMgPSBbJ2FwcGxpY2F0aW9uL3hodG1sK3htbCcsICd0ZXh0L2h0bWwnXTtcbiAgY29uc3QgREVGQVVMVF9QQVJTRVJfTUVESUFfVFlQRSA9ICd0ZXh0L2h0bWwnO1xuICBsZXQgdHJhbnNmb3JtQ2FzZUZ1bmM7XG5cbiAgLyogS2VlcCBhIHJlZmVyZW5jZSB0byBjb25maWcgdG8gcGFzcyB0byBob29rcyAqL1xuICBsZXQgQ09ORklHID0gbnVsbDtcblxuICAvKiBJZGVhbGx5LCBkbyBub3QgdG91Y2ggYW55dGhpbmcgYmVsb3cgdGhpcyBsaW5lICovXG4gIC8qIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gKi9cblxuICBjb25zdCBmb3JtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICBjb25zdCBpc1JlZ2V4T3JGdW5jdGlvbiA9IGZ1bmN0aW9uICh0ZXN0VmFsdWUpIHtcbiAgICByZXR1cm4gdGVzdFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwIHx8IHRlc3RWYWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xuICB9O1xuXG4gIC8qKlxuICAgKiBfcGFyc2VDb25maWdcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBjZmcgb3B0aW9uYWwgY29uZmlnIGxpdGVyYWxcbiAgICovXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG4gIGNvbnN0IF9wYXJzZUNvbmZpZyA9IGZ1bmN0aW9uIChjZmcpIHtcbiAgICBpZiAoQ09ORklHICYmIENPTkZJRyA9PT0gY2ZnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyogU2hpZWxkIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGZyb20gdGFtcGVyaW5nICovXG4gICAgaWYgKCFjZmcgfHwgdHlwZW9mIGNmZyAhPT0gJ29iamVjdCcpIHtcbiAgICAgIGNmZyA9IHt9O1xuICAgIH1cblxuICAgIC8qIFNoaWVsZCBjb25maWd1cmF0aW9uIG9iamVjdCBmcm9tIHByb3RvdHlwZSBwb2xsdXRpb24gKi9cbiAgICBjZmcgPSBjbG9uZShjZmcpO1xuXG4gICAgUEFSU0VSX01FRElBX1RZUEUgPVxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLWluY2x1ZGVzXG4gICAgICBTVVBQT1JURURfUEFSU0VSX01FRElBX1RZUEVTLmluZGV4T2YoY2ZnLlBBUlNFUl9NRURJQV9UWVBFKSA9PT0gLTFcbiAgICAgICAgPyAoUEFSU0VSX01FRElBX1RZUEUgPSBERUZBVUxUX1BBUlNFUl9NRURJQV9UWVBFKVxuICAgICAgICA6IChQQVJTRVJfTUVESUFfVFlQRSA9IGNmZy5QQVJTRVJfTUVESUFfVFlQRSk7XG5cbiAgICAvLyBIVE1MIHRhZ3MgYW5kIGF0dHJpYnV0ZXMgYXJlIG5vdCBjYXNlLXNlbnNpdGl2ZSwgY29udmVydGluZyB0byBsb3dlcmNhc2UuIEtlZXBpbmcgWEhUTUwgYXMgaXMuXG4gICAgdHJhbnNmb3JtQ2FzZUZ1bmMgPVxuICAgICAgUEFSU0VSX01FRElBX1RZUEUgPT09ICdhcHBsaWNhdGlvbi94aHRtbCt4bWwnXG4gICAgICAgID8gc3RyaW5nVG9TdHJpbmdcbiAgICAgICAgOiBzdHJpbmdUb0xvd2VyQ2FzZTtcblxuICAgIC8qIFNldCBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgKi9cbiAgICBBTExPV0VEX1RBR1MgPVxuICAgICAgJ0FMTE9XRURfVEFHUycgaW4gY2ZnXG4gICAgICAgID8gYWRkVG9TZXQoe30sIGNmZy5BTExPV0VEX1RBR1MsIHRyYW5zZm9ybUNhc2VGdW5jKVxuICAgICAgICA6IERFRkFVTFRfQUxMT1dFRF9UQUdTO1xuICAgIEFMTE9XRURfQVRUUiA9XG4gICAgICAnQUxMT1dFRF9BVFRSJyBpbiBjZmdcbiAgICAgICAgPyBhZGRUb1NldCh7fSwgY2ZnLkFMTE9XRURfQVRUUiwgdHJhbnNmb3JtQ2FzZUZ1bmMpXG4gICAgICAgIDogREVGQVVMVF9BTExPV0VEX0FUVFI7XG4gICAgQUxMT1dFRF9OQU1FU1BBQ0VTID1cbiAgICAgICdBTExPV0VEX05BTUVTUEFDRVMnIGluIGNmZ1xuICAgICAgICA/IGFkZFRvU2V0KHt9LCBjZmcuQUxMT1dFRF9OQU1FU1BBQ0VTLCBzdHJpbmdUb1N0cmluZylcbiAgICAgICAgOiBERUZBVUxUX0FMTE9XRURfTkFNRVNQQUNFUztcbiAgICBVUklfU0FGRV9BVFRSSUJVVEVTID1cbiAgICAgICdBRERfVVJJX1NBRkVfQVRUUicgaW4gY2ZnXG4gICAgICAgID8gYWRkVG9TZXQoXG4gICAgICAgICAgICBjbG9uZShERUZBVUxUX1VSSV9TQUZFX0FUVFJJQlVURVMpLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGluZGVudFxuICAgICAgICAgICAgY2ZnLkFERF9VUklfU0FGRV9BVFRSLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGluZGVudFxuICAgICAgICAgICAgdHJhbnNmb3JtQ2FzZUZ1bmMgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbmRlbnRcbiAgICAgICAgICApIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW5kZW50XG4gICAgICAgIDogREVGQVVMVF9VUklfU0FGRV9BVFRSSUJVVEVTO1xuICAgIERBVEFfVVJJX1RBR1MgPVxuICAgICAgJ0FERF9EQVRBX1VSSV9UQUdTJyBpbiBjZmdcbiAgICAgICAgPyBhZGRUb1NldChcbiAgICAgICAgICAgIGNsb25lKERFRkFVTFRfREFUQV9VUklfVEFHUyksIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW5kZW50XG4gICAgICAgICAgICBjZmcuQUREX0RBVEFfVVJJX1RBR1MsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW5kZW50XG4gICAgICAgICAgICB0cmFuc2Zvcm1DYXNlRnVuYyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGluZGVudFxuICAgICAgICAgICkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbmRlbnRcbiAgICAgICAgOiBERUZBVUxUX0RBVEFfVVJJX1RBR1M7XG4gICAgRk9SQklEX0NPTlRFTlRTID1cbiAgICAgICdGT1JCSURfQ09OVEVOVFMnIGluIGNmZ1xuICAgICAgICA/IGFkZFRvU2V0KHt9LCBjZmcuRk9SQklEX0NPTlRFTlRTLCB0cmFuc2Zvcm1DYXNlRnVuYylcbiAgICAgICAgOiBERUZBVUxUX0ZPUkJJRF9DT05URU5UUztcbiAgICBGT1JCSURfVEFHUyA9XG4gICAgICAnRk9SQklEX1RBR1MnIGluIGNmZ1xuICAgICAgICA/IGFkZFRvU2V0KHt9LCBjZmcuRk9SQklEX1RBR1MsIHRyYW5zZm9ybUNhc2VGdW5jKVxuICAgICAgICA6IHt9O1xuICAgIEZPUkJJRF9BVFRSID1cbiAgICAgICdGT1JCSURfQVRUUicgaW4gY2ZnXG4gICAgICAgID8gYWRkVG9TZXQoe30sIGNmZy5GT1JCSURfQVRUUiwgdHJhbnNmb3JtQ2FzZUZ1bmMpXG4gICAgICAgIDoge307XG4gICAgVVNFX1BST0ZJTEVTID0gJ1VTRV9QUk9GSUxFUycgaW4gY2ZnID8gY2ZnLlVTRV9QUk9GSUxFUyA6IGZhbHNlO1xuICAgIEFMTE9XX0FSSUFfQVRUUiA9IGNmZy5BTExPV19BUklBX0FUVFIgIT09IGZhbHNlOyAvLyBEZWZhdWx0IHRydWVcbiAgICBBTExPV19EQVRBX0FUVFIgPSBjZmcuQUxMT1dfREFUQV9BVFRSICE9PSBmYWxzZTsgLy8gRGVmYXVsdCB0cnVlXG4gICAgQUxMT1dfVU5LTk9XTl9QUk9UT0NPTFMgPSBjZmcuQUxMT1dfVU5LTk9XTl9QUk9UT0NPTFMgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICBBTExPV19TRUxGX0NMT1NFX0lOX0FUVFIgPSBjZmcuQUxMT1dfU0VMRl9DTE9TRV9JTl9BVFRSICE9PSBmYWxzZTsgLy8gRGVmYXVsdCB0cnVlXG4gICAgU0FGRV9GT1JfVEVNUExBVEVTID0gY2ZnLlNBRkVfRk9SX1RFTVBMQVRFUyB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgIFdIT0xFX0RPQ1VNRU5UID0gY2ZnLldIT0xFX0RPQ1VNRU5UIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgUkVUVVJOX0RPTSA9IGNmZy5SRVRVUk5fRE9NIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgUkVUVVJOX0RPTV9GUkFHTUVOVCA9IGNmZy5SRVRVUk5fRE9NX0ZSQUdNRU5UIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgUkVUVVJOX1RSVVNURURfVFlQRSA9IGNmZy5SRVRVUk5fVFJVU1RFRF9UWVBFIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgRk9SQ0VfQk9EWSA9IGNmZy5GT1JDRV9CT0RZIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgU0FOSVRJWkVfRE9NID0gY2ZnLlNBTklUSVpFX0RPTSAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuICAgIFNBTklUSVpFX05BTUVEX1BST1BTID0gY2ZnLlNBTklUSVpFX05BTUVEX1BST1BTIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgS0VFUF9DT05URU5UID0gY2ZnLktFRVBfQ09OVEVOVCAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuICAgIElOX1BMQUNFID0gY2ZnLklOX1BMQUNFIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgSVNfQUxMT1dFRF9VUkkgPSBjZmcuQUxMT1dFRF9VUklfUkVHRVhQIHx8IElTX0FMTE9XRURfVVJJO1xuICAgIE5BTUVTUEFDRSA9IGNmZy5OQU1FU1BBQ0UgfHwgSFRNTF9OQU1FU1BBQ0U7XG4gICAgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcgPSBjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcgfHwge307XG4gICAgaWYgKFxuICAgICAgY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HICYmXG4gICAgICBpc1JlZ2V4T3JGdW5jdGlvbihjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrKVxuICAgICkge1xuICAgICAgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrID1cbiAgICAgICAgY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjaztcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcgJiZcbiAgICAgIGlzUmVnZXhPckZ1bmN0aW9uKGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2spXG4gICAgKSB7XG4gICAgICBDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2sgPVxuICAgICAgICBjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORyAmJlxuICAgICAgdHlwZW9mIGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORy5hbGxvd0N1c3RvbWl6ZWRCdWlsdEluRWxlbWVudHMgPT09XG4gICAgICAgICdib29sZWFuJ1xuICAgICkge1xuICAgICAgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYWxsb3dDdXN0b21pemVkQnVpbHRJbkVsZW1lbnRzID1cbiAgICAgICAgY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmFsbG93Q3VzdG9taXplZEJ1aWx0SW5FbGVtZW50cztcbiAgICB9XG5cbiAgICBpZiAoU0FGRV9GT1JfVEVNUExBVEVTKSB7XG4gICAgICBBTExPV19EQVRBX0FUVFIgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoUkVUVVJOX0RPTV9GUkFHTUVOVCkge1xuICAgICAgUkVUVVJOX0RPTSA9IHRydWU7XG4gICAgfVxuXG4gICAgLyogUGFyc2UgcHJvZmlsZSBpbmZvICovXG4gICAgaWYgKFVTRV9QUk9GSUxFUykge1xuICAgICAgQUxMT1dFRF9UQUdTID0gYWRkVG9TZXQoe30sIFsuLi5UQUdTLnRleHRdKTtcbiAgICAgIEFMTE9XRURfQVRUUiA9IFtdO1xuICAgICAgaWYgKFVTRV9QUk9GSUxFUy5odG1sID09PSB0cnVlKSB7XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgVEFHUy5odG1sKTtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBBVFRSUy5odG1sKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFVTRV9QUk9GSUxFUy5zdmcgPT09IHRydWUpIHtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBUQUdTLnN2Zyk7XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgQVRUUlMuc3ZnKTtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBBVFRSUy54bWwpO1xuICAgICAgfVxuXG4gICAgICBpZiAoVVNFX1BST0ZJTEVTLnN2Z0ZpbHRlcnMgPT09IHRydWUpIHtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBUQUdTLnN2Z0ZpbHRlcnMpO1xuICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIEFUVFJTLnN2Zyk7XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgQVRUUlMueG1sKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFVTRV9QUk9GSUxFUy5tYXRoTWwgPT09IHRydWUpIHtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBUQUdTLm1hdGhNbCk7XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgQVRUUlMubWF0aE1sKTtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBBVFRSUy54bWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIE1lcmdlIGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyAqL1xuICAgIGlmIChjZmcuQUREX1RBR1MpIHtcbiAgICAgIGlmIChBTExPV0VEX1RBR1MgPT09IERFRkFVTFRfQUxMT1dFRF9UQUdTKSB7XG4gICAgICAgIEFMTE9XRURfVEFHUyA9IGNsb25lKEFMTE9XRURfVEFHUyk7XG4gICAgICB9XG5cbiAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgY2ZnLkFERF9UQUdTLCB0cmFuc2Zvcm1DYXNlRnVuYyk7XG4gICAgfVxuXG4gICAgaWYgKGNmZy5BRERfQVRUUikge1xuICAgICAgaWYgKEFMTE9XRURfQVRUUiA9PT0gREVGQVVMVF9BTExPV0VEX0FUVFIpIHtcbiAgICAgICAgQUxMT1dFRF9BVFRSID0gY2xvbmUoQUxMT1dFRF9BVFRSKTtcbiAgICAgIH1cblxuICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBjZmcuQUREX0FUVFIsIHRyYW5zZm9ybUNhc2VGdW5jKTtcbiAgICB9XG5cbiAgICBpZiAoY2ZnLkFERF9VUklfU0FGRV9BVFRSKSB7XG4gICAgICBhZGRUb1NldChVUklfU0FGRV9BVFRSSUJVVEVTLCBjZmcuQUREX1VSSV9TQUZFX0FUVFIsIHRyYW5zZm9ybUNhc2VGdW5jKTtcbiAgICB9XG5cbiAgICBpZiAoY2ZnLkZPUkJJRF9DT05URU5UUykge1xuICAgICAgaWYgKEZPUkJJRF9DT05URU5UUyA9PT0gREVGQVVMVF9GT1JCSURfQ09OVEVOVFMpIHtcbiAgICAgICAgRk9SQklEX0NPTlRFTlRTID0gY2xvbmUoRk9SQklEX0NPTlRFTlRTKTtcbiAgICAgIH1cblxuICAgICAgYWRkVG9TZXQoRk9SQklEX0NPTlRFTlRTLCBjZmcuRk9SQklEX0NPTlRFTlRTLCB0cmFuc2Zvcm1DYXNlRnVuYyk7XG4gICAgfVxuXG4gICAgLyogQWRkICN0ZXh0IGluIGNhc2UgS0VFUF9DT05URU5UIGlzIHNldCB0byB0cnVlICovXG4gICAgaWYgKEtFRVBfQ09OVEVOVCkge1xuICAgICAgQUxMT1dFRF9UQUdTWycjdGV4dCddID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKiBBZGQgaHRtbCwgaGVhZCBhbmQgYm9keSB0byBBTExPV0VEX1RBR1MgaW4gY2FzZSBXSE9MRV9ET0NVTUVOVCBpcyB0cnVlICovXG4gICAgaWYgKFdIT0xFX0RPQ1VNRU5UKSB7XG4gICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIFsnaHRtbCcsICdoZWFkJywgJ2JvZHknXSk7XG4gICAgfVxuXG4gICAgLyogQWRkIHRib2R5IHRvIEFMTE9XRURfVEFHUyBpbiBjYXNlIHRhYmxlcyBhcmUgcGVybWl0dGVkLCBzZWUgIzI4NiwgIzM2NSAqL1xuICAgIGlmIChBTExPV0VEX1RBR1MudGFibGUpIHtcbiAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgWyd0Ym9keSddKTtcbiAgICAgIGRlbGV0ZSBGT1JCSURfVEFHUy50Ym9keTtcbiAgICB9XG5cbiAgICAvLyBQcmV2ZW50IGZ1cnRoZXIgbWFuaXB1bGF0aW9uIG9mIGNvbmZpZ3VyYXRpb24uXG4gICAgLy8gTm90IGF2YWlsYWJsZSBpbiBJRTgsIFNhZmFyaSA1LCBldGMuXG4gICAgaWYgKGZyZWV6ZSkge1xuICAgICAgZnJlZXplKGNmZyk7XG4gICAgfVxuXG4gICAgQ09ORklHID0gY2ZnO1xuICB9O1xuXG4gIGNvbnN0IE1BVEhNTF9URVhUX0lOVEVHUkFUSU9OX1BPSU5UUyA9IGFkZFRvU2V0KHt9LCBbXG4gICAgJ21pJyxcbiAgICAnbW8nLFxuICAgICdtbicsXG4gICAgJ21zJyxcbiAgICAnbXRleHQnLFxuICBdKTtcblxuICBjb25zdCBIVE1MX0lOVEVHUkFUSU9OX1BPSU5UUyA9IGFkZFRvU2V0KHt9LCBbXG4gICAgJ2ZvcmVpZ25vYmplY3QnLFxuICAgICdkZXNjJyxcbiAgICAndGl0bGUnLFxuICAgICdhbm5vdGF0aW9uLXhtbCcsXG4gIF0pO1xuXG4gIC8vIENlcnRhaW4gZWxlbWVudHMgYXJlIGFsbG93ZWQgaW4gYm90aCBTVkcgYW5kIEhUTUxcbiAgLy8gbmFtZXNwYWNlLiBXZSBuZWVkIHRvIHNwZWNpZnkgdGhlbSBleHBsaWNpdGx5XG4gIC8vIHNvIHRoYXQgdGhleSBkb24ndCBnZXQgZXJyb25lb3VzbHkgZGVsZXRlZCBmcm9tXG4gIC8vIEhUTUwgbmFtZXNwYWNlLlxuICBjb25zdCBDT01NT05fU1ZHX0FORF9IVE1MX0VMRU1FTlRTID0gYWRkVG9TZXQoe30sIFtcbiAgICAndGl0bGUnLFxuICAgICdzdHlsZScsXG4gICAgJ2ZvbnQnLFxuICAgICdhJyxcbiAgICAnc2NyaXB0JyxcbiAgXSk7XG5cbiAgLyogS2VlcCB0cmFjayBvZiBhbGwgcG9zc2libGUgU1ZHIGFuZCBNYXRoTUwgdGFnc1xuICAgKiBzbyB0aGF0IHdlIGNhbiBwZXJmb3JtIHRoZSBuYW1lc3BhY2UgY2hlY2tzXG4gICAqIGNvcnJlY3RseS4gKi9cbiAgY29uc3QgQUxMX1NWR19UQUdTID0gYWRkVG9TZXQoe30sIFRBR1Muc3ZnKTtcbiAgYWRkVG9TZXQoQUxMX1NWR19UQUdTLCBUQUdTLnN2Z0ZpbHRlcnMpO1xuICBhZGRUb1NldChBTExfU1ZHX1RBR1MsIFRBR1Muc3ZnRGlzYWxsb3dlZCk7XG5cbiAgY29uc3QgQUxMX01BVEhNTF9UQUdTID0gYWRkVG9TZXQoe30sIFRBR1MubWF0aE1sKTtcbiAgYWRkVG9TZXQoQUxMX01BVEhNTF9UQUdTLCBUQUdTLm1hdGhNbERpc2FsbG93ZWQpO1xuXG4gIC8qKlxuICAgKlxuICAgKlxuICAgKiBAcGFyYW0gIHtFbGVtZW50fSBlbGVtZW50IGEgRE9NIGVsZW1lbnQgd2hvc2UgbmFtZXNwYWNlIGlzIGJlaW5nIGNoZWNrZWRcbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybiBmYWxzZSBpZiB0aGUgZWxlbWVudCBoYXMgYVxuICAgKiAgbmFtZXNwYWNlIHRoYXQgYSBzcGVjLWNvbXBsaWFudCBwYXJzZXIgd291bGQgbmV2ZXJcbiAgICogIHJldHVybi4gUmV0dXJuIHRydWUgb3RoZXJ3aXNlLlxuICAgKi9cbiAgY29uc3QgX2NoZWNrVmFsaWROYW1lc3BhY2UgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIGxldCBwYXJlbnQgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuXG4gICAgLy8gSW4gSlNET00sIGlmIHdlJ3JlIGluc2lkZSBzaGFkb3cgRE9NLCB0aGVuIHBhcmVudE5vZGVcbiAgICAvLyBjYW4gYmUgbnVsbC4gV2UganVzdCBzaW11bGF0ZSBwYXJlbnQgaW4gdGhpcyBjYXNlLlxuICAgIGlmICghcGFyZW50IHx8ICFwYXJlbnQudGFnTmFtZSkge1xuICAgICAgcGFyZW50ID0ge1xuICAgICAgICBuYW1lc3BhY2VVUkk6IE5BTUVTUEFDRSxcbiAgICAgICAgdGFnTmFtZTogJ3RlbXBsYXRlJyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgdGFnTmFtZSA9IHN0cmluZ1RvTG93ZXJDYXNlKGVsZW1lbnQudGFnTmFtZSk7XG4gICAgY29uc3QgcGFyZW50VGFnTmFtZSA9IHN0cmluZ1RvTG93ZXJDYXNlKHBhcmVudC50YWdOYW1lKTtcblxuICAgIGlmICghQUxMT1dFRF9OQU1FU1BBQ0VTW2VsZW1lbnQubmFtZXNwYWNlVVJJXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50Lm5hbWVzcGFjZVVSSSA9PT0gU1ZHX05BTUVTUEFDRSkge1xuICAgICAgLy8gVGhlIG9ubHkgd2F5IHRvIHN3aXRjaCBmcm9tIEhUTUwgbmFtZXNwYWNlIHRvIFNWR1xuICAgICAgLy8gaXMgdmlhIDxzdmc+LiBJZiBpdCBoYXBwZW5zIHZpYSBhbnkgb3RoZXIgdGFnLCB0aGVuXG4gICAgICAvLyBpdCBzaG91bGQgYmUga2lsbGVkLlxuICAgICAgaWYgKHBhcmVudC5uYW1lc3BhY2VVUkkgPT09IEhUTUxfTkFNRVNQQUNFKSB7XG4gICAgICAgIHJldHVybiB0YWdOYW1lID09PSAnc3ZnJztcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIG9ubHkgd2F5IHRvIHN3aXRjaCBmcm9tIE1hdGhNTCB0byBTVkcgaXMgdmlhYFxuICAgICAgLy8gc3ZnIGlmIHBhcmVudCBpcyBlaXRoZXIgPGFubm90YXRpb24teG1sPiBvciBNYXRoTUxcbiAgICAgIC8vIHRleHQgaW50ZWdyYXRpb24gcG9pbnRzLlxuICAgICAgaWYgKHBhcmVudC5uYW1lc3BhY2VVUkkgPT09IE1BVEhNTF9OQU1FU1BBQ0UpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICB0YWdOYW1lID09PSAnc3ZnJyAmJlxuICAgICAgICAgIChwYXJlbnRUYWdOYW1lID09PSAnYW5ub3RhdGlvbi14bWwnIHx8XG4gICAgICAgICAgICBNQVRITUxfVEVYVF9JTlRFR1JBVElPTl9QT0lOVFNbcGFyZW50VGFnTmFtZV0pXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIFdlIG9ubHkgYWxsb3cgZWxlbWVudHMgdGhhdCBhcmUgZGVmaW5lZCBpbiBTVkdcbiAgICAgIC8vIHNwZWMuIEFsbCBvdGhlcnMgYXJlIGRpc2FsbG93ZWQgaW4gU1ZHIG5hbWVzcGFjZS5cbiAgICAgIHJldHVybiBCb29sZWFuKEFMTF9TVkdfVEFHU1t0YWdOYW1lXSk7XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQubmFtZXNwYWNlVVJJID09PSBNQVRITUxfTkFNRVNQQUNFKSB7XG4gICAgICAvLyBUaGUgb25seSB3YXkgdG8gc3dpdGNoIGZyb20gSFRNTCBuYW1lc3BhY2UgdG8gTWF0aE1MXG4gICAgICAvLyBpcyB2aWEgPG1hdGg+LiBJZiBpdCBoYXBwZW5zIHZpYSBhbnkgb3RoZXIgdGFnLCB0aGVuXG4gICAgICAvLyBpdCBzaG91bGQgYmUga2lsbGVkLlxuICAgICAgaWYgKHBhcmVudC5uYW1lc3BhY2VVUkkgPT09IEhUTUxfTkFNRVNQQUNFKSB7XG4gICAgICAgIHJldHVybiB0YWdOYW1lID09PSAnbWF0aCc7XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBvbmx5IHdheSB0byBzd2l0Y2ggZnJvbSBTVkcgdG8gTWF0aE1MIGlzIHZpYVxuICAgICAgLy8gPG1hdGg+IGFuZCBIVE1MIGludGVncmF0aW9uIHBvaW50c1xuICAgICAgaWYgKHBhcmVudC5uYW1lc3BhY2VVUkkgPT09IFNWR19OQU1FU1BBQ0UpIHtcbiAgICAgICAgcmV0dXJuIHRhZ05hbWUgPT09ICdtYXRoJyAmJiBIVE1MX0lOVEVHUkFUSU9OX1BPSU5UU1twYXJlbnRUYWdOYW1lXTtcbiAgICAgIH1cblxuICAgICAgLy8gV2Ugb25seSBhbGxvdyBlbGVtZW50cyB0aGF0IGFyZSBkZWZpbmVkIGluIE1hdGhNTFxuICAgICAgLy8gc3BlYy4gQWxsIG90aGVycyBhcmUgZGlzYWxsb3dlZCBpbiBNYXRoTUwgbmFtZXNwYWNlLlxuICAgICAgcmV0dXJuIEJvb2xlYW4oQUxMX01BVEhNTF9UQUdTW3RhZ05hbWVdKTtcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudC5uYW1lc3BhY2VVUkkgPT09IEhUTUxfTkFNRVNQQUNFKSB7XG4gICAgICAvLyBUaGUgb25seSB3YXkgdG8gc3dpdGNoIGZyb20gU1ZHIHRvIEhUTUwgaXMgdmlhXG4gICAgICAvLyBIVE1MIGludGVncmF0aW9uIHBvaW50cywgYW5kIGZyb20gTWF0aE1MIHRvIEhUTUxcbiAgICAgIC8vIGlzIHZpYSBNYXRoTUwgdGV4dCBpbnRlZ3JhdGlvbiBwb2ludHNcbiAgICAgIGlmIChcbiAgICAgICAgcGFyZW50Lm5hbWVzcGFjZVVSSSA9PT0gU1ZHX05BTUVTUEFDRSAmJlxuICAgICAgICAhSFRNTF9JTlRFR1JBVElPTl9QT0lOVFNbcGFyZW50VGFnTmFtZV1cbiAgICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgcGFyZW50Lm5hbWVzcGFjZVVSSSA9PT0gTUFUSE1MX05BTUVTUEFDRSAmJlxuICAgICAgICAhTUFUSE1MX1RFWFRfSU5URUdSQVRJT05fUE9JTlRTW3BhcmVudFRhZ05hbWVdXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBXZSBkaXNhbGxvdyB0YWdzIHRoYXQgYXJlIHNwZWNpZmljIGZvciBNYXRoTUxcbiAgICAgIC8vIG9yIFNWRyBhbmQgc2hvdWxkIG5ldmVyIGFwcGVhciBpbiBIVE1MIG5hbWVzcGFjZVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgIUFMTF9NQVRITUxfVEFHU1t0YWdOYW1lXSAmJlxuICAgICAgICAoQ09NTU9OX1NWR19BTkRfSFRNTF9FTEVNRU5UU1t0YWdOYW1lXSB8fCAhQUxMX1NWR19UQUdTW3RhZ05hbWVdKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBGb3IgWEhUTUwgYW5kIFhNTCBkb2N1bWVudHMgdGhhdCBzdXBwb3J0IGN1c3RvbSBuYW1lc3BhY2VzXG4gICAgaWYgKFxuICAgICAgUEFSU0VSX01FRElBX1RZUEUgPT09ICdhcHBsaWNhdGlvbi94aHRtbCt4bWwnICYmXG4gICAgICBBTExPV0VEX05BTUVTUEFDRVNbZWxlbWVudC5uYW1lc3BhY2VVUkldXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBUaGUgY29kZSBzaG91bGQgbmV2ZXIgcmVhY2ggdGhpcyBwbGFjZSAodGhpcyBtZWFuc1xuICAgIC8vIHRoYXQgdGhlIGVsZW1lbnQgc29tZWhvdyBnb3QgbmFtZXNwYWNlIHRoYXQgaXMgbm90XG4gICAgLy8gSFRNTCwgU1ZHLCBNYXRoTUwgb3IgYWxsb3dlZCB2aWEgQUxMT1dFRF9OQU1FU1BBQ0VTKS5cbiAgICAvLyBSZXR1cm4gZmFsc2UganVzdCBpbiBjYXNlLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogX2ZvcmNlUmVtb3ZlXG4gICAqXG4gICAqIEBwYXJhbSAge05vZGV9IG5vZGUgYSBET00gbm9kZVxuICAgKi9cbiAgY29uc3QgX2ZvcmNlUmVtb3ZlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBhcnJheVB1c2goRE9NUHVyaWZ5LnJlbW92ZWQsIHsgZWxlbWVudDogbm9kZSB9KTtcbiAgICB0cnkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLWRvbS1ub2RlLXJlbW92ZVxuICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5vZGUub3V0ZXJIVE1MID0gZW1wdHlIVE1MO1xuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBub2RlLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogX3JlbW92ZUF0dHJpYnV0ZVxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWUgYW4gQXR0cmlidXRlIG5hbWVcbiAgICogQHBhcmFtICB7Tm9kZX0gbm9kZSBhIERPTSBub2RlXG4gICAqL1xuICBjb25zdCBfcmVtb3ZlQXR0cmlidXRlID0gZnVuY3Rpb24gKG5hbWUsIG5vZGUpIHtcbiAgICB0cnkge1xuICAgICAgYXJyYXlQdXNoKERPTVB1cmlmeS5yZW1vdmVkLCB7XG4gICAgICAgIGF0dHJpYnV0ZTogbm9kZS5nZXRBdHRyaWJ1dGVOb2RlKG5hbWUpLFxuICAgICAgICBmcm9tOiBub2RlLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgYXJyYXlQdXNoKERPTVB1cmlmeS5yZW1vdmVkLCB7XG4gICAgICAgIGF0dHJpYnV0ZTogbnVsbCxcbiAgICAgICAgZnJvbTogbm9kZSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXG4gICAgLy8gV2Ugdm9pZCBhdHRyaWJ1dGUgdmFsdWVzIGZvciB1bnJlbW92YWJsZSBcImlzXCJcIiBhdHRyaWJ1dGVzXG4gICAgaWYgKG5hbWUgPT09ICdpcycgJiYgIUFMTE9XRURfQVRUUltuYW1lXSkge1xuICAgICAgaWYgKFJFVFVSTl9ET00gfHwgUkVUVVJOX0RPTV9GUkFHTUVOVCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9mb3JjZVJlbW92ZShub2RlKTtcbiAgICAgICAgfSBjYXRjaCAoXykge31cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgJycpO1xuICAgICAgICB9IGNhdGNoIChfKSB7fVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogX2luaXREb2N1bWVudFxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGRpcnR5IGEgc3RyaW5nIG9mIGRpcnR5IG1hcmt1cFxuICAgKiBAcmV0dXJuIHtEb2N1bWVudH0gYSBET00sIGZpbGxlZCB3aXRoIHRoZSBkaXJ0eSBtYXJrdXBcbiAgICovXG4gIGNvbnN0IF9pbml0RG9jdW1lbnQgPSBmdW5jdGlvbiAoZGlydHkpIHtcbiAgICAvKiBDcmVhdGUgYSBIVE1MIGRvY3VtZW50ICovXG4gICAgbGV0IGRvYztcbiAgICBsZXQgbGVhZGluZ1doaXRlc3BhY2U7XG5cbiAgICBpZiAoRk9SQ0VfQk9EWSkge1xuICAgICAgZGlydHkgPSAnPHJlbW92ZT48L3JlbW92ZT4nICsgZGlydHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qIElmIEZPUkNFX0JPRFkgaXNuJ3QgdXNlZCwgbGVhZGluZyB3aGl0ZXNwYWNlIG5lZWRzIHRvIGJlIHByZXNlcnZlZCBtYW51YWxseSAqL1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IHN0cmluZ01hdGNoKGRpcnR5LCAvXltcXHJcXG5cXHQgXSsvKTtcbiAgICAgIGxlYWRpbmdXaGl0ZXNwYWNlID0gbWF0Y2hlcyAmJiBtYXRjaGVzWzBdO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIFBBUlNFUl9NRURJQV9UWVBFID09PSAnYXBwbGljYXRpb24veGh0bWwreG1sJyAmJlxuICAgICAgTkFNRVNQQUNFID09PSBIVE1MX05BTUVTUEFDRVxuICAgICkge1xuICAgICAgLy8gUm9vdCBvZiBYSFRNTCBkb2MgbXVzdCBjb250YWluIHhtbG5zIGRlY2xhcmF0aW9uIChzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3hodG1sMS9ub3JtYXRpdmUuaHRtbCNzdHJpY3QpXG4gICAgICBkaXJ0eSA9XG4gICAgICAgICc8aHRtbCB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIj48aGVhZD48L2hlYWQ+PGJvZHk+JyArXG4gICAgICAgIGRpcnR5ICtcbiAgICAgICAgJzwvYm9keT48L2h0bWw+JztcbiAgICB9XG5cbiAgICBjb25zdCBkaXJ0eVBheWxvYWQgPSB0cnVzdGVkVHlwZXNQb2xpY3lcbiAgICAgID8gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwoZGlydHkpXG4gICAgICA6IGRpcnR5O1xuICAgIC8qXG4gICAgICogVXNlIHRoZSBET01QYXJzZXIgQVBJIGJ5IGRlZmF1bHQsIGZhbGxiYWNrIGxhdGVyIGlmIG5lZWRzIGJlXG4gICAgICogRE9NUGFyc2VyIG5vdCB3b3JrIGZvciBzdmcgd2hlbiBoYXMgbXVsdGlwbGUgcm9vdCBlbGVtZW50LlxuICAgICAqL1xuICAgIGlmIChOQU1FU1BBQ0UgPT09IEhUTUxfTkFNRVNQQUNFKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGRpcnR5UGF5bG9hZCwgUEFSU0VSX01FRElBX1RZUEUpO1xuICAgICAgfSBjYXRjaCAoXykge31cbiAgICB9XG5cbiAgICAvKiBVc2UgY3JlYXRlSFRNTERvY3VtZW50IGluIGNhc2UgRE9NUGFyc2VyIGlzIG5vdCBhdmFpbGFibGUgKi9cbiAgICBpZiAoIWRvYyB8fCAhZG9jLmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgZG9jID0gaW1wbGVtZW50YXRpb24uY3JlYXRlRG9jdW1lbnQoTkFNRVNQQUNFLCAndGVtcGxhdGUnLCBudWxsKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRvYy5kb2N1bWVudEVsZW1lbnQuaW5uZXJIVE1MID0gSVNfRU1QVFlfSU5QVVRcbiAgICAgICAgICA/IGVtcHR5SFRNTFxuICAgICAgICAgIDogZGlydHlQYXlsb2FkO1xuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAvLyBTeW50YXggZXJyb3IgaWYgZGlydHlQYXlsb2FkIGlzIGludmFsaWQgeG1sXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYm9keSA9IGRvYy5ib2R5IHx8IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICBpZiAoZGlydHkgJiYgbGVhZGluZ1doaXRlc3BhY2UpIHtcbiAgICAgIGJvZHkuaW5zZXJ0QmVmb3JlKFxuICAgICAgICBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsZWFkaW5nV2hpdGVzcGFjZSksXG4gICAgICAgIGJvZHkuY2hpbGROb2Rlc1swXSB8fCBudWxsXG4gICAgICApO1xuICAgIH1cblxuICAgIC8qIFdvcmsgb24gd2hvbGUgZG9jdW1lbnQgb3IganVzdCBpdHMgYm9keSAqL1xuICAgIGlmIChOQU1FU1BBQ0UgPT09IEhUTUxfTkFNRVNQQUNFKSB7XG4gICAgICByZXR1cm4gZ2V0RWxlbWVudHNCeVRhZ05hbWUuY2FsbChcbiAgICAgICAgZG9jLFxuICAgICAgICBXSE9MRV9ET0NVTUVOVCA/ICdodG1sJyA6ICdib2R5J1xuICAgICAgKVswXTtcbiAgICB9XG5cbiAgICByZXR1cm4gV0hPTEVfRE9DVU1FTlQgPyBkb2MuZG9jdW1lbnRFbGVtZW50IDogYm9keTtcbiAgfTtcblxuICAvKipcbiAgICogX2NyZWF0ZUl0ZXJhdG9yXG4gICAqXG4gICAqIEBwYXJhbSAge0RvY3VtZW50fSByb290IGRvY3VtZW50L2ZyYWdtZW50IHRvIGNyZWF0ZSBpdGVyYXRvciBmb3JcbiAgICogQHJldHVybiB7SXRlcmF0b3J9IGl0ZXJhdG9yIGluc3RhbmNlXG4gICAqL1xuICBjb25zdCBfY3JlYXRlSXRlcmF0b3IgPSBmdW5jdGlvbiAocm9vdCkge1xuICAgIHJldHVybiBjcmVhdGVOb2RlSXRlcmF0b3IuY2FsbChcbiAgICAgIHJvb3Qub3duZXJEb2N1bWVudCB8fCByb290LFxuICAgICAgcm9vdCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gICAgICBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCB8IE5vZGVGaWx0ZXIuU0hPV19DT01NRU5UIHwgTm9kZUZpbHRlci5TSE9XX1RFWFQsXG4gICAgICBudWxsLFxuICAgICAgZmFsc2VcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBfaXNDbG9iYmVyZWRcbiAgICpcbiAgICogQHBhcmFtICB7Tm9kZX0gZWxtIGVsZW1lbnQgdG8gY2hlY2sgZm9yIGNsb2JiZXJpbmcgYXR0YWNrc1xuICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGNsb2JiZXJlZCwgZmFsc2UgaWYgc2FmZVxuICAgKi9cbiAgY29uc3QgX2lzQ2xvYmJlcmVkID0gZnVuY3Rpb24gKGVsbSkge1xuICAgIHJldHVybiAoXG4gICAgICBlbG0gaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQgJiZcbiAgICAgICh0eXBlb2YgZWxtLm5vZGVOYW1lICE9PSAnc3RyaW5nJyB8fFxuICAgICAgICB0eXBlb2YgZWxtLnRleHRDb250ZW50ICE9PSAnc3RyaW5nJyB8fFxuICAgICAgICB0eXBlb2YgZWxtLnJlbW92ZUNoaWxkICE9PSAnZnVuY3Rpb24nIHx8XG4gICAgICAgICEoZWxtLmF0dHJpYnV0ZXMgaW5zdGFuY2VvZiBOYW1lZE5vZGVNYXApIHx8XG4gICAgICAgIHR5cGVvZiBlbG0ucmVtb3ZlQXR0cmlidXRlICE9PSAnZnVuY3Rpb24nIHx8XG4gICAgICAgIHR5cGVvZiBlbG0uc2V0QXR0cmlidXRlICE9PSAnZnVuY3Rpb24nIHx8XG4gICAgICAgIHR5cGVvZiBlbG0ubmFtZXNwYWNlVVJJICE9PSAnc3RyaW5nJyB8fFxuICAgICAgICB0eXBlb2YgZWxtLmluc2VydEJlZm9yZSAhPT0gJ2Z1bmN0aW9uJyB8fFxuICAgICAgICB0eXBlb2YgZWxtLmhhc0NoaWxkTm9kZXMgIT09ICdmdW5jdGlvbicpXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogX2lzTm9kZVxuICAgKlxuICAgKiBAcGFyYW0gIHtOb2RlfSBvYmogb2JqZWN0IHRvIGNoZWNrIHdoZXRoZXIgaXQncyBhIERPTSBub2RlXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaXMgb2JqZWN0IGlzIGEgRE9NIG5vZGVcbiAgICovXG4gIGNvbnN0IF9pc05vZGUgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBOb2RlID09PSAnb2JqZWN0J1xuICAgICAgPyBvYmplY3QgaW5zdGFuY2VvZiBOb2RlXG4gICAgICA6IG9iamVjdCAmJlxuICAgICAgICAgIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgdHlwZW9mIG9iamVjdC5ub2RlVHlwZSA9PT0gJ251bWJlcicgJiZcbiAgICAgICAgICB0eXBlb2Ygb2JqZWN0Lm5vZGVOYW1lID09PSAnc3RyaW5nJztcbiAgfTtcblxuICAvKipcbiAgICogX2V4ZWN1dGVIb29rXG4gICAqIEV4ZWN1dGUgdXNlciBjb25maWd1cmFibGUgaG9va3NcbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBlbnRyeVBvaW50ICBOYW1lIG9mIHRoZSBob29rJ3MgZW50cnkgcG9pbnRcbiAgICogQHBhcmFtICB7Tm9kZX0gY3VycmVudE5vZGUgbm9kZSB0byB3b3JrIG9uIHdpdGggdGhlIGhvb2tcbiAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIGFkZGl0aW9uYWwgaG9vayBwYXJhbWV0ZXJzXG4gICAqL1xuICBjb25zdCBfZXhlY3V0ZUhvb2sgPSBmdW5jdGlvbiAoZW50cnlQb2ludCwgY3VycmVudE5vZGUsIGRhdGEpIHtcbiAgICBpZiAoIWhvb2tzW2VudHJ5UG9pbnRdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYXJyYXlGb3JFYWNoKGhvb2tzW2VudHJ5UG9pbnRdLCAoaG9vaykgPT4ge1xuICAgICAgaG9vay5jYWxsKERPTVB1cmlmeSwgY3VycmVudE5vZGUsIGRhdGEsIENPTkZJRyk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIF9zYW5pdGl6ZUVsZW1lbnRzXG4gICAqXG4gICAqIEBwcm90ZWN0IG5vZGVOYW1lXG4gICAqIEBwcm90ZWN0IHRleHRDb250ZW50XG4gICAqIEBwcm90ZWN0IHJlbW92ZUNoaWxkXG4gICAqXG4gICAqIEBwYXJhbSAgIHtOb2RlfSBjdXJyZW50Tm9kZSB0byBjaGVjayBmb3IgcGVybWlzc2lvbiB0byBleGlzdFxuICAgKiBAcmV0dXJuICB7Qm9vbGVhbn0gdHJ1ZSBpZiBub2RlIHdhcyBraWxsZWQsIGZhbHNlIGlmIGxlZnQgYWxpdmVcbiAgICovXG4gIGNvbnN0IF9zYW5pdGl6ZUVsZW1lbnRzID0gZnVuY3Rpb24gKGN1cnJlbnROb2RlKSB7XG4gICAgbGV0IGNvbnRlbnQ7XG5cbiAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgX2V4ZWN1dGVIb29rKCdiZWZvcmVTYW5pdGl6ZUVsZW1lbnRzJywgY3VycmVudE5vZGUsIG51bGwpO1xuXG4gICAgLyogQ2hlY2sgaWYgZWxlbWVudCBpcyBjbG9iYmVyZWQgb3IgY2FuIGNsb2JiZXIgKi9cbiAgICBpZiAoX2lzQ2xvYmJlcmVkKGN1cnJlbnROb2RlKSkge1xuICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qIENoZWNrIGlmIHRhZ25hbWUgY29udGFpbnMgVW5pY29kZSAqL1xuICAgIGlmIChyZWdFeHBUZXN0KC9bXFx1MDA4MC1cXHVGRkZGXS8sIGN1cnJlbnROb2RlLm5vZGVOYW1lKSkge1xuICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qIE5vdyBsZXQncyBjaGVjayB0aGUgZWxlbWVudCdzIHR5cGUgYW5kIG5hbWUgKi9cbiAgICBjb25zdCB0YWdOYW1lID0gdHJhbnNmb3JtQ2FzZUZ1bmMoY3VycmVudE5vZGUubm9kZU5hbWUpO1xuXG4gICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuICAgIF9leGVjdXRlSG9vaygndXBvblNhbml0aXplRWxlbWVudCcsIGN1cnJlbnROb2RlLCB7XG4gICAgICB0YWdOYW1lLFxuICAgICAgYWxsb3dlZFRhZ3M6IEFMTE9XRURfVEFHUyxcbiAgICB9KTtcblxuICAgIC8qIERldGVjdCBtWFNTIGF0dGVtcHRzIGFidXNpbmcgbmFtZXNwYWNlIGNvbmZ1c2lvbiAqL1xuICAgIGlmIChcbiAgICAgIGN1cnJlbnROb2RlLmhhc0NoaWxkTm9kZXMoKSAmJlxuICAgICAgIV9pc05vZGUoY3VycmVudE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQpICYmXG4gICAgICAoIV9pc05vZGUoY3VycmVudE5vZGUuY29udGVudCkgfHxcbiAgICAgICAgIV9pc05vZGUoY3VycmVudE5vZGUuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZCkpICYmXG4gICAgICByZWdFeHBUZXN0KC88Wy9cXHddL2csIGN1cnJlbnROb2RlLmlubmVySFRNTCkgJiZcbiAgICAgIHJlZ0V4cFRlc3QoLzxbL1xcd10vZywgY3VycmVudE5vZGUudGV4dENvbnRlbnQpXG4gICAgKSB7XG4gICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyogTWl0aWdhdGUgYSBwcm9ibGVtIHdpdGggdGVtcGxhdGVzIGluc2lkZSBzZWxlY3QgKi9cbiAgICBpZiAoXG4gICAgICB0YWdOYW1lID09PSAnc2VsZWN0JyAmJlxuICAgICAgcmVnRXhwVGVzdCgvPHRlbXBsYXRlL2ksIGN1cnJlbnROb2RlLmlubmVySFRNTClcbiAgICApIHtcbiAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKiBSZW1vdmUgZWxlbWVudCBpZiBhbnl0aGluZyBmb3JiaWRzIGl0cyBwcmVzZW5jZSAqL1xuICAgIGlmICghQUxMT1dFRF9UQUdTW3RhZ05hbWVdIHx8IEZPUkJJRF9UQUdTW3RhZ05hbWVdKSB7XG4gICAgICAvKiBDaGVjayBpZiB3ZSBoYXZlIGEgY3VzdG9tIGVsZW1lbnQgdG8gaGFuZGxlICovXG4gICAgICBpZiAoIUZPUkJJRF9UQUdTW3RhZ05hbWVdICYmIF9iYXNpY0N1c3RvbUVsZW1lbnRUZXN0KHRhZ05hbWUpKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgaW5zdGFuY2VvZiBSZWdFeHAgJiZcbiAgICAgICAgICByZWdFeHBUZXN0KENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjaywgdGFnTmFtZSlcbiAgICAgICAgKVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayBpbnN0YW5jZW9mIEZ1bmN0aW9uICYmXG4gICAgICAgICAgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrKHRhZ05hbWUpXG4gICAgICAgIClcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8qIEtlZXAgY29udGVudCBleGNlcHQgZm9yIGJhZC1saXN0ZWQgZWxlbWVudHMgKi9cbiAgICAgIGlmIChLRUVQX0NPTlRFTlQgJiYgIUZPUkJJRF9DT05URU5UU1t0YWdOYW1lXSkge1xuICAgICAgICBjb25zdCBwYXJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShjdXJyZW50Tm9kZSkgfHwgY3VycmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlcyA9IGdldENoaWxkTm9kZXMoY3VycmVudE5vZGUpIHx8IGN1cnJlbnROb2RlLmNoaWxkTm9kZXM7XG5cbiAgICAgICAgaWYgKGNoaWxkTm9kZXMgJiYgcGFyZW50Tm9kZSkge1xuICAgICAgICAgIGNvbnN0IGNoaWxkQ291bnQgPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgICAgICAgIGZvciAobGV0IGkgPSBjaGlsZENvdW50IC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgICBjbG9uZU5vZGUoY2hpbGROb2Rlc1tpXSwgdHJ1ZSksXG4gICAgICAgICAgICAgIGdldE5leHRTaWJsaW5nKGN1cnJlbnROb2RlKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qIENoZWNrIHdoZXRoZXIgZWxlbWVudCBoYXMgYSB2YWxpZCBuYW1lc3BhY2UgKi9cbiAgICBpZiAoY3VycmVudE5vZGUgaW5zdGFuY2VvZiBFbGVtZW50ICYmICFfY2hlY2tWYWxpZE5hbWVzcGFjZShjdXJyZW50Tm9kZSkpIHtcbiAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKiBNYWtlIHN1cmUgdGhhdCBvbGRlciBicm93c2VycyBkb24ndCBnZXQgZmFsbGJhY2stdGFnIG1YU1MgKi9cbiAgICBpZiAoXG4gICAgICAodGFnTmFtZSA9PT0gJ25vc2NyaXB0JyB8fFxuICAgICAgICB0YWdOYW1lID09PSAnbm9lbWJlZCcgfHxcbiAgICAgICAgdGFnTmFtZSA9PT0gJ25vZnJhbWVzJykgJiZcbiAgICAgIHJlZ0V4cFRlc3QoLzxcXC9ubyhzY3JpcHR8ZW1iZWR8ZnJhbWVzKS9pLCBjdXJyZW50Tm9kZS5pbm5lckhUTUwpXG4gICAgKSB7XG4gICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyogU2FuaXRpemUgZWxlbWVudCBjb250ZW50IHRvIGJlIHRlbXBsYXRlLXNhZmUgKi9cbiAgICBpZiAoU0FGRV9GT1JfVEVNUExBVEVTICYmIGN1cnJlbnROb2RlLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAvKiBHZXQgdGhlIGVsZW1lbnQncyB0ZXh0IGNvbnRlbnQgKi9cbiAgICAgIGNvbnRlbnQgPSBjdXJyZW50Tm9kZS50ZXh0Q29udGVudDtcbiAgICAgIGNvbnRlbnQgPSBzdHJpbmdSZXBsYWNlKGNvbnRlbnQsIE1VU1RBQ0hFX0VYUFIsICcgJyk7XG4gICAgICBjb250ZW50ID0gc3RyaW5nUmVwbGFjZShjb250ZW50LCBFUkJfRVhQUiwgJyAnKTtcbiAgICAgIGNvbnRlbnQgPSBzdHJpbmdSZXBsYWNlKGNvbnRlbnQsIFRNUExJVF9FWFBSLCAnICcpO1xuICAgICAgaWYgKGN1cnJlbnROb2RlLnRleHRDb250ZW50ICE9PSBjb250ZW50KSB7XG4gICAgICAgIGFycmF5UHVzaChET01QdXJpZnkucmVtb3ZlZCwgeyBlbGVtZW50OiBjdXJyZW50Tm9kZS5jbG9uZU5vZGUoKSB9KTtcbiAgICAgICAgY3VycmVudE5vZGUudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICBfZXhlY3V0ZUhvb2soJ2FmdGVyU2FuaXRpemVFbGVtZW50cycsIGN1cnJlbnROb2RlLCBudWxsKTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogX2lzVmFsaWRBdHRyaWJ1dGVcbiAgICpcbiAgICogQHBhcmFtICB7c3RyaW5nfSBsY1RhZyBMb3dlcmNhc2UgdGFnIG5hbWUgb2YgY29udGFpbmluZyBlbGVtZW50LlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGxjTmFtZSBMb3dlcmNhc2UgYXR0cmlidXRlIG5hbWUuXG4gICAqIEBwYXJhbSAge3N0cmluZ30gdmFsdWUgQXR0cmlidXRlIHZhbHVlLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSBSZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyB2YWxpZCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbiAgY29uc3QgX2lzVmFsaWRBdHRyaWJ1dGUgPSBmdW5jdGlvbiAobGNUYWcsIGxjTmFtZSwgdmFsdWUpIHtcbiAgICAvKiBNYWtlIHN1cmUgYXR0cmlidXRlIGNhbm5vdCBjbG9iYmVyICovXG4gICAgaWYgKFxuICAgICAgU0FOSVRJWkVfRE9NICYmXG4gICAgICAobGNOYW1lID09PSAnaWQnIHx8IGxjTmFtZSA9PT0gJ25hbWUnKSAmJlxuICAgICAgKHZhbHVlIGluIGRvY3VtZW50IHx8IHZhbHVlIGluIGZvcm1FbGVtZW50KVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qIEFsbG93IHZhbGlkIGRhdGEtKiBhdHRyaWJ1dGVzOiBBdCBsZWFzdCBvbmUgY2hhcmFjdGVyIGFmdGVyIFwiLVwiXG4gICAgICAgIChodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9kb20uaHRtbCNlbWJlZGRpbmctY3VzdG9tLW5vbi12aXNpYmxlLWRhdGEtd2l0aC10aGUtZGF0YS0qLWF0dHJpYnV0ZXMpXG4gICAgICAgIFhNTC1jb21wYXRpYmxlIChodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbmZyYXN0cnVjdHVyZS5odG1sI3htbC1jb21wYXRpYmxlIGFuZCBodHRwOi8vd3d3LnczLm9yZy9UUi94bWwvI2QwZTgwNClcbiAgICAgICAgV2UgZG9uJ3QgbmVlZCB0byBjaGVjayB0aGUgdmFsdWU7IGl0J3MgYWx3YXlzIFVSSSBzYWZlLiAqL1xuICAgIGlmIChcbiAgICAgIEFMTE9XX0RBVEFfQVRUUiAmJlxuICAgICAgIUZPUkJJRF9BVFRSW2xjTmFtZV0gJiZcbiAgICAgIHJlZ0V4cFRlc3QoREFUQV9BVFRSLCBsY05hbWUpXG4gICAgKSB7XG4gICAgICAvLyBUaGlzIGF0dHJpYnV0ZSBpcyBzYWZlXG4gICAgfSBlbHNlIGlmIChBTExPV19BUklBX0FUVFIgJiYgcmVnRXhwVGVzdChBUklBX0FUVFIsIGxjTmFtZSkpIHtcbiAgICAgIC8vIFRoaXMgYXR0cmlidXRlIGlzIHNhZmVcbiAgICAgIC8qIE90aGVyd2lzZSwgY2hlY2sgdGhlIG5hbWUgaXMgcGVybWl0dGVkICovXG4gICAgfSBlbHNlIGlmICghQUxMT1dFRF9BVFRSW2xjTmFtZV0gfHwgRk9SQklEX0FUVFJbbGNOYW1lXSkge1xuICAgICAgaWYgKFxuICAgICAgICAvLyBGaXJzdCBjb25kaXRpb24gZG9lcyBhIHZlcnkgYmFzaWMgY2hlY2sgaWYgYSkgaXQncyBiYXNpY2FsbHkgYSB2YWxpZCBjdXN0b20gZWxlbWVudCB0YWduYW1lIEFORFxuICAgICAgICAvLyBiKSBpZiB0aGUgdGFnTmFtZSBwYXNzZXMgd2hhdGV2ZXIgdGhlIHVzZXIgaGFzIGNvbmZpZ3VyZWQgZm9yIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVja1xuICAgICAgICAvLyBhbmQgYykgaWYgdGhlIGF0dHJpYnV0ZSBuYW1lIHBhc3NlcyB3aGF0ZXZlciB0aGUgdXNlciBoYXMgY29uZmlndXJlZCBmb3IgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrXG4gICAgICAgIChfYmFzaWNDdXN0b21FbGVtZW50VGVzdChsY1RhZykgJiZcbiAgICAgICAgICAoKENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayBpbnN0YW5jZW9mIFJlZ0V4cCAmJlxuICAgICAgICAgICAgcmVnRXhwVGVzdChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2ssIGxjVGFnKSkgfHxcbiAgICAgICAgICAgIChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJlxuICAgICAgICAgICAgICBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sobGNUYWcpKSkgJiZcbiAgICAgICAgICAoKENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjayBpbnN0YW5jZW9mIFJlZ0V4cCAmJlxuICAgICAgICAgICAgcmVnRXhwVGVzdChDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2ssIGxjTmFtZSkpIHx8XG4gICAgICAgICAgICAoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrIGluc3RhbmNlb2YgRnVuY3Rpb24gJiZcbiAgICAgICAgICAgICAgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrKGxjTmFtZSkpKSkgfHxcbiAgICAgICAgLy8gQWx0ZXJuYXRpdmUsIHNlY29uZCBjb25kaXRpb24gY2hlY2tzIGlmIGl0J3MgYW4gYGlzYC1hdHRyaWJ1dGUsIEFORFxuICAgICAgICAvLyB0aGUgdmFsdWUgcGFzc2VzIHdoYXRldmVyIHRoZSB1c2VyIGhhcyBjb25maWd1cmVkIGZvciBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2tcbiAgICAgICAgKGxjTmFtZSA9PT0gJ2lzJyAmJlxuICAgICAgICAgIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmFsbG93Q3VzdG9taXplZEJ1aWx0SW5FbGVtZW50cyAmJlxuICAgICAgICAgICgoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrIGluc3RhbmNlb2YgUmVnRXhwICYmXG4gICAgICAgICAgICByZWdFeHBUZXN0KENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjaywgdmFsdWUpKSB8fFxuICAgICAgICAgICAgKENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayBpbnN0YW5jZW9mIEZ1bmN0aW9uICYmXG4gICAgICAgICAgICAgIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayh2YWx1ZSkpKSlcbiAgICAgICkge1xuICAgICAgICAvLyBJZiB1c2VyIGhhcyBzdXBwbGllZCBhIHJlZ2V4cCBvciBmdW5jdGlvbiBpbiBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2ssIHdlIG5lZWQgdG8gYWxzbyBhbGxvdyBkZXJpdmVkIGN1c3RvbSBlbGVtZW50cyB1c2luZyB0aGUgc2FtZSB0YWdOYW1lIHRlc3QuXG4gICAgICAgIC8vIEFkZGl0aW9uYWxseSwgd2UgbmVlZCB0byBhbGxvdyBhdHRyaWJ1dGVzIHBhc3NpbmcgdGhlIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjayB1c2VyIGhhcyBjb25maWd1cmVkLCBhcyBjdXN0b20gZWxlbWVudHMgY2FuIGRlZmluZSB0aGVzZSBhdCB0aGVpciBvd24gZGlzY3JldGlvbi5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8qIENoZWNrIHZhbHVlIGlzIHNhZmUuIEZpcnN0LCBpcyBhdHRyIGluZXJ0PyBJZiBzbywgaXMgc2FmZSAqL1xuICAgIH0gZWxzZSBpZiAoVVJJX1NBRkVfQVRUUklCVVRFU1tsY05hbWVdKSB7XG4gICAgICAvLyBUaGlzIGF0dHJpYnV0ZSBpcyBzYWZlXG4gICAgICAvKiBDaGVjayBubyBzY3JpcHQsIGRhdGEgb3IgdW5rbm93biBwb3NzaWJseSB1bnNhZmUgVVJJXG4gICAgICAgIHVubGVzcyB3ZSBrbm93IFVSSSB2YWx1ZXMgYXJlIHNhZmUgZm9yIHRoYXQgYXR0cmlidXRlICovXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHJlZ0V4cFRlc3QoSVNfQUxMT1dFRF9VUkksIHN0cmluZ1JlcGxhY2UodmFsdWUsIEFUVFJfV0hJVEVTUEFDRSwgJycpKVxuICAgICkge1xuICAgICAgLy8gVGhpcyBhdHRyaWJ1dGUgaXMgc2FmZVxuICAgICAgLyogS2VlcCBpbWFnZSBkYXRhIFVSSXMgYWxpdmUgaWYgc3JjL3hsaW5rOmhyZWYgaXMgYWxsb3dlZCAqL1xuICAgICAgLyogRnVydGhlciBwcmV2ZW50IGdhZGdldCBYU1MgZm9yIGR5bmFtaWNhbGx5IGJ1aWx0IHNjcmlwdCB0YWdzICovXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIChsY05hbWUgPT09ICdzcmMnIHx8IGxjTmFtZSA9PT0gJ3hsaW5rOmhyZWYnIHx8IGxjTmFtZSA9PT0gJ2hyZWYnKSAmJlxuICAgICAgbGNUYWcgIT09ICdzY3JpcHQnICYmXG4gICAgICBzdHJpbmdJbmRleE9mKHZhbHVlLCAnZGF0YTonKSA9PT0gMCAmJlxuICAgICAgREFUQV9VUklfVEFHU1tsY1RhZ11cbiAgICApIHtcbiAgICAgIC8vIFRoaXMgYXR0cmlidXRlIGlzIHNhZmVcbiAgICAgIC8qIEFsbG93IHVua25vd24gcHJvdG9jb2xzOiBUaGlzIHByb3ZpZGVzIHN1cHBvcnQgZm9yIGxpbmtzIHRoYXRcbiAgICAgICAgYXJlIGhhbmRsZWQgYnkgcHJvdG9jb2wgaGFuZGxlcnMgd2hpY2ggbWF5IGJlIHVua25vd24gYWhlYWQgb2ZcbiAgICAgICAgdGltZSwgZS5nLiBmYjosIHNwb3RpZnk6ICovXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIEFMTE9XX1VOS05PV05fUFJPVE9DT0xTICYmXG4gICAgICAhcmVnRXhwVGVzdChJU19TQ1JJUFRfT1JfREFUQSwgc3RyaW5nUmVwbGFjZSh2YWx1ZSwgQVRUUl9XSElURVNQQUNFLCAnJykpXG4gICAgKSB7XG4gICAgICAvLyBUaGlzIGF0dHJpYnV0ZSBpcyBzYWZlXG4gICAgICAvKiBDaGVjayBmb3IgYmluYXJ5IGF0dHJpYnV0ZXMgKi9cbiAgICB9IGVsc2UgaWYgKHZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEJpbmFyeSBhdHRyaWJ1dGVzIGFyZSBzYWZlIGF0IHRoaXMgcG9pbnRcbiAgICAgIC8qIEFueXRoaW5nIGVsc2UsIHByZXN1bWUgdW5zYWZlLCBkbyBub3QgYWRkIGl0IGJhY2sgKi9cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvKipcbiAgICogX2Jhc2ljQ3VzdG9tRWxlbWVudENoZWNrXG4gICAqIGNoZWNrcyBpZiBhdCBsZWFzdCBvbmUgZGFzaCBpcyBpbmNsdWRlZCBpbiB0YWdOYW1lLCBhbmQgaXQncyBub3QgdGhlIGZpcnN0IGNoYXJcbiAgICogZm9yIG1vcmUgc29waGlzdGljYXRlZCBjaGVja2luZyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy92YWxpZGF0ZS1lbGVtZW50LW5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRhZ05hbWUgbmFtZSBvZiB0aGUgdGFnIG9mIHRoZSBub2RlIHRvIHNhbml0aXplXG4gICAqL1xuICBjb25zdCBfYmFzaWNDdXN0b21FbGVtZW50VGVzdCA9IGZ1bmN0aW9uICh0YWdOYW1lKSB7XG4gICAgcmV0dXJuIHRhZ05hbWUuaW5kZXhPZignLScpID4gMDtcbiAgfTtcblxuICAvKipcbiAgICogX3Nhbml0aXplQXR0cmlidXRlc1xuICAgKlxuICAgKiBAcHJvdGVjdCBhdHRyaWJ1dGVzXG4gICAqIEBwcm90ZWN0IG5vZGVOYW1lXG4gICAqIEBwcm90ZWN0IHJlbW92ZUF0dHJpYnV0ZVxuICAgKiBAcHJvdGVjdCBzZXRBdHRyaWJ1dGVcbiAgICpcbiAgICogQHBhcmFtICB7Tm9kZX0gY3VycmVudE5vZGUgdG8gc2FuaXRpemVcbiAgICovXG4gIGNvbnN0IF9zYW5pdGl6ZUF0dHJpYnV0ZXMgPSBmdW5jdGlvbiAoY3VycmVudE5vZGUpIHtcbiAgICBsZXQgYXR0cjtcbiAgICBsZXQgdmFsdWU7XG4gICAgbGV0IGxjTmFtZTtcbiAgICBsZXQgbDtcbiAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgX2V4ZWN1dGVIb29rKCdiZWZvcmVTYW5pdGl6ZUF0dHJpYnV0ZXMnLCBjdXJyZW50Tm9kZSwgbnVsbCk7XG5cbiAgICBjb25zdCB7IGF0dHJpYnV0ZXMgfSA9IGN1cnJlbnROb2RlO1xuXG4gICAgLyogQ2hlY2sgaWYgd2UgaGF2ZSBhdHRyaWJ1dGVzOyBpZiBub3Qgd2UgbWlnaHQgaGF2ZSBhIHRleHQgbm9kZSAqL1xuICAgIGlmICghYXR0cmlidXRlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGhvb2tFdmVudCA9IHtcbiAgICAgIGF0dHJOYW1lOiAnJyxcbiAgICAgIGF0dHJWYWx1ZTogJycsXG4gICAgICBrZWVwQXR0cjogdHJ1ZSxcbiAgICAgIGFsbG93ZWRBdHRyaWJ1dGVzOiBBTExPV0VEX0FUVFIsXG4gICAgfTtcbiAgICBsID0gYXR0cmlidXRlcy5sZW5ndGg7XG5cbiAgICAvKiBHbyBiYWNrd2FyZHMgb3ZlciBhbGwgYXR0cmlidXRlczsgc2FmZWx5IHJlbW92ZSBiYWQgb25lcyAqL1xuICAgIHdoaWxlIChsLS0pIHtcbiAgICAgIGF0dHIgPSBhdHRyaWJ1dGVzW2xdO1xuICAgICAgY29uc3QgeyBuYW1lLCBuYW1lc3BhY2VVUkkgfSA9IGF0dHI7XG4gICAgICB2YWx1ZSA9IG5hbWUgPT09ICd2YWx1ZScgPyBhdHRyLnZhbHVlIDogc3RyaW5nVHJpbShhdHRyLnZhbHVlKTtcbiAgICAgIGxjTmFtZSA9IHRyYW5zZm9ybUNhc2VGdW5jKG5hbWUpO1xuXG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICBob29rRXZlbnQuYXR0ck5hbWUgPSBsY05hbWU7XG4gICAgICBob29rRXZlbnQuYXR0clZhbHVlID0gdmFsdWU7XG4gICAgICBob29rRXZlbnQua2VlcEF0dHIgPSB0cnVlO1xuICAgICAgaG9va0V2ZW50LmZvcmNlS2VlcEF0dHIgPSB1bmRlZmluZWQ7IC8vIEFsbG93cyBkZXZlbG9wZXJzIHRvIHNlZSB0aGlzIGlzIGEgcHJvcGVydHkgdGhleSBjYW4gc2V0XG4gICAgICBfZXhlY3V0ZUhvb2soJ3Vwb25TYW5pdGl6ZUF0dHJpYnV0ZScsIGN1cnJlbnROb2RlLCBob29rRXZlbnQpO1xuICAgICAgdmFsdWUgPSBob29rRXZlbnQuYXR0clZhbHVlO1xuICAgICAgLyogRGlkIHRoZSBob29rcyBhcHByb3ZlIG9mIHRoZSBhdHRyaWJ1dGU/ICovXG4gICAgICBpZiAoaG9va0V2ZW50LmZvcmNlS2VlcEF0dHIpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8qIFJlbW92ZSBhdHRyaWJ1dGUgKi9cbiAgICAgIF9yZW1vdmVBdHRyaWJ1dGUobmFtZSwgY3VycmVudE5vZGUpO1xuXG4gICAgICAvKiBEaWQgdGhlIGhvb2tzIGFwcHJvdmUgb2YgdGhlIGF0dHJpYnV0ZT8gKi9cbiAgICAgIGlmICghaG9va0V2ZW50LmtlZXBBdHRyKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvKiBXb3JrIGFyb3VuZCBhIHNlY3VyaXR5IGlzc3VlIGluIGpRdWVyeSAzLjAgKi9cbiAgICAgIGlmICghQUxMT1dfU0VMRl9DTE9TRV9JTl9BVFRSICYmIHJlZ0V4cFRlc3QoL1xcLz4vaSwgdmFsdWUpKSB7XG4gICAgICAgIF9yZW1vdmVBdHRyaWJ1dGUobmFtZSwgY3VycmVudE5vZGUpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLyogU2FuaXRpemUgYXR0cmlidXRlIGNvbnRlbnQgdG8gYmUgdGVtcGxhdGUtc2FmZSAqL1xuICAgICAgaWYgKFNBRkVfRk9SX1RFTVBMQVRFUykge1xuICAgICAgICB2YWx1ZSA9IHN0cmluZ1JlcGxhY2UodmFsdWUsIE1VU1RBQ0hFX0VYUFIsICcgJyk7XG4gICAgICAgIHZhbHVlID0gc3RyaW5nUmVwbGFjZSh2YWx1ZSwgRVJCX0VYUFIsICcgJyk7XG4gICAgICAgIHZhbHVlID0gc3RyaW5nUmVwbGFjZSh2YWx1ZSwgVE1QTElUX0VYUFIsICcgJyk7XG4gICAgICB9XG5cbiAgICAgIC8qIElzIGB2YWx1ZWAgdmFsaWQgZm9yIHRoaXMgYXR0cmlidXRlPyAqL1xuICAgICAgY29uc3QgbGNUYWcgPSB0cmFuc2Zvcm1DYXNlRnVuYyhjdXJyZW50Tm9kZS5ub2RlTmFtZSk7XG4gICAgICBpZiAoIV9pc1ZhbGlkQXR0cmlidXRlKGxjVGFnLCBsY05hbWUsIHZhbHVlKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLyogRnVsbCBET00gQ2xvYmJlcmluZyBwcm90ZWN0aW9uIHZpYSBuYW1lc3BhY2UgaXNvbGF0aW9uLFxuICAgICAgICogUHJlZml4IGlkIGFuZCBuYW1lIGF0dHJpYnV0ZXMgd2l0aCBgdXNlci1jb250ZW50LWBcbiAgICAgICAqL1xuICAgICAgaWYgKFNBTklUSVpFX05BTUVEX1BST1BTICYmIChsY05hbWUgPT09ICdpZCcgfHwgbGNOYW1lID09PSAnbmFtZScpKSB7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgYXR0cmlidXRlIHdpdGggdGhpcyB2YWx1ZVxuICAgICAgICBfcmVtb3ZlQXR0cmlidXRlKG5hbWUsIGN1cnJlbnROb2RlKTtcblxuICAgICAgICAvLyBQcmVmaXggdGhlIHZhbHVlIGFuZCBsYXRlciByZS1jcmVhdGUgdGhlIGF0dHJpYnV0ZSB3aXRoIHRoZSBzYW5pdGl6ZWQgdmFsdWVcbiAgICAgICAgdmFsdWUgPSBTQU5JVElaRV9OQU1FRF9QUk9QU19QUkVGSVggKyB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgLyogSGFuZGxlIGF0dHJpYnV0ZXMgdGhhdCByZXF1aXJlIFRydXN0ZWQgVHlwZXMgKi9cbiAgICAgIGlmIChcbiAgICAgICAgdHJ1c3RlZFR5cGVzUG9saWN5ICYmXG4gICAgICAgIHR5cGVvZiB0cnVzdGVkVHlwZXMgPT09ICdvYmplY3QnICYmXG4gICAgICAgIHR5cGVvZiB0cnVzdGVkVHlwZXMuZ2V0QXR0cmlidXRlVHlwZSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChuYW1lc3BhY2VVUkkpIHtcbiAgICAgICAgICAvKiBOYW1lc3BhY2VzIGFyZSBub3QgeWV0IHN1cHBvcnRlZCwgc2VlIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTEzMDUyOTMgKi9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzd2l0Y2ggKHRydXN0ZWRUeXBlcy5nZXRBdHRyaWJ1dGVUeXBlKGxjVGFnLCBsY05hbWUpKSB7XG4gICAgICAgICAgICBjYXNlICdUcnVzdGVkSFRNTCc6IHtcbiAgICAgICAgICAgICAgdmFsdWUgPSB0cnVzdGVkVHlwZXNQb2xpY3kuY3JlYXRlSFRNTCh2YWx1ZSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlICdUcnVzdGVkU2NyaXB0VVJMJzoge1xuICAgICAgICAgICAgICB2YWx1ZSA9IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVTY3JpcHRVUkwodmFsdWUpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyogSGFuZGxlIGludmFsaWQgZGF0YS0qIGF0dHJpYnV0ZSBzZXQgYnkgdHJ5LWNhdGNoaW5nIGl0ICovXG4gICAgICB0cnkge1xuICAgICAgICBpZiAobmFtZXNwYWNlVVJJKSB7XG4gICAgICAgICAgY3VycmVudE5vZGUuc2V0QXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLyogRmFsbGJhY2sgdG8gc2V0QXR0cmlidXRlKCkgZm9yIGJyb3dzZXItdW5yZWNvZ25pemVkIG5hbWVzcGFjZXMgZS5nLiBcIngtc2NoZW1hXCIuICovXG4gICAgICAgICAgY3VycmVudE5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFycmF5UG9wKERPTVB1cmlmeS5yZW1vdmVkKTtcbiAgICAgIH0gY2F0Y2ggKF8pIHt9XG4gICAgfVxuXG4gICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuICAgIF9leGVjdXRlSG9vaygnYWZ0ZXJTYW5pdGl6ZUF0dHJpYnV0ZXMnLCBjdXJyZW50Tm9kZSwgbnVsbCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIF9zYW5pdGl6ZVNoYWRvd0RPTVxuICAgKlxuICAgKiBAcGFyYW0gIHtEb2N1bWVudEZyYWdtZW50fSBmcmFnbWVudCB0byBpdGVyYXRlIG92ZXIgcmVjdXJzaXZlbHlcbiAgICovXG4gIGNvbnN0IF9zYW5pdGl6ZVNoYWRvd0RPTSA9IGZ1bmN0aW9uIChmcmFnbWVudCkge1xuICAgIGxldCBzaGFkb3dOb2RlO1xuICAgIGNvbnN0IHNoYWRvd0l0ZXJhdG9yID0gX2NyZWF0ZUl0ZXJhdG9yKGZyYWdtZW50KTtcblxuICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICBfZXhlY3V0ZUhvb2soJ2JlZm9yZVNhbml0aXplU2hhZG93RE9NJywgZnJhZ21lbnQsIG51bGwpO1xuXG4gICAgd2hpbGUgKChzaGFkb3dOb2RlID0gc2hhZG93SXRlcmF0b3IubmV4dE5vZGUoKSkpIHtcbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICAgIF9leGVjdXRlSG9vaygndXBvblNhbml0aXplU2hhZG93Tm9kZScsIHNoYWRvd05vZGUsIG51bGwpO1xuXG4gICAgICAvKiBTYW5pdGl6ZSB0YWdzIGFuZCBlbGVtZW50cyAqL1xuICAgICAgaWYgKF9zYW5pdGl6ZUVsZW1lbnRzKHNoYWRvd05vZGUpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvKiBEZWVwIHNoYWRvdyBET00gZGV0ZWN0ZWQgKi9cbiAgICAgIGlmIChzaGFkb3dOb2RlLmNvbnRlbnQgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICAgIF9zYW5pdGl6ZVNoYWRvd0RPTShzaGFkb3dOb2RlLmNvbnRlbnQpO1xuICAgICAgfVxuXG4gICAgICAvKiBDaGVjayBhdHRyaWJ1dGVzLCBzYW5pdGl6ZSBpZiBuZWNlc3NhcnkgKi9cbiAgICAgIF9zYW5pdGl6ZUF0dHJpYnV0ZXMoc2hhZG93Tm9kZSk7XG4gICAgfVxuXG4gICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuICAgIF9leGVjdXRlSG9vaygnYWZ0ZXJTYW5pdGl6ZVNoYWRvd0RPTScsIGZyYWdtZW50LCBudWxsKTtcbiAgfTtcblxuICAvKipcbiAgICogU2FuaXRpemVcbiAgICogUHVibGljIG1ldGhvZCBwcm92aWRpbmcgY29yZSBzYW5pdGF0aW9uIGZ1bmN0aW9uYWxpdHlcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd8Tm9kZX0gZGlydHkgc3RyaW5nIG9yIERPTSBub2RlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbiAgRE9NUHVyaWZ5LnNhbml0aXplID0gZnVuY3Rpb24gKGRpcnR5LCBjZmcgPSB7fSkge1xuICAgIGxldCBib2R5O1xuICAgIGxldCBpbXBvcnRlZE5vZGU7XG4gICAgbGV0IGN1cnJlbnROb2RlO1xuICAgIGxldCBvbGROb2RlO1xuICAgIGxldCByZXR1cm5Ob2RlO1xuICAgIC8qIE1ha2Ugc3VyZSB3ZSBoYXZlIGEgc3RyaW5nIHRvIHNhbml0aXplLlxuICAgICAgRE8gTk9UIHJldHVybiBlYXJseSwgYXMgdGhpcyB3aWxsIHJldHVybiB0aGUgd3JvbmcgdHlwZSBpZlxuICAgICAgdGhlIHVzZXIgaGFzIHJlcXVlc3RlZCBhIERPTSBvYmplY3QgcmF0aGVyIHRoYW4gYSBzdHJpbmcgKi9cbiAgICBJU19FTVBUWV9JTlBVVCA9ICFkaXJ0eTtcbiAgICBpZiAoSVNfRU1QVFlfSU5QVVQpIHtcbiAgICAgIGRpcnR5ID0gJzwhLS0+JztcbiAgICB9XG5cbiAgICAvKiBTdHJpbmdpZnksIGluIGNhc2UgZGlydHkgaXMgYW4gb2JqZWN0ICovXG4gICAgaWYgKHR5cGVvZiBkaXJ0eSAhPT0gJ3N0cmluZycgJiYgIV9pc05vZGUoZGlydHkpKSB7XG4gICAgICBpZiAodHlwZW9mIGRpcnR5LnRvU3RyaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGRpcnR5ID0gZGlydHkudG9TdHJpbmcoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBkaXJ0eSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyB0eXBlRXJyb3JDcmVhdGUoJ2RpcnR5IGlzIG5vdCBhIHN0cmluZywgYWJvcnRpbmcnKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgdHlwZUVycm9yQ3JlYXRlKCd0b1N0cmluZyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIENoZWNrIHdlIGNhbiBydW4uIE90aGVyd2lzZSBmYWxsIGJhY2sgb3IgaWdub3JlICovXG4gICAgaWYgKCFET01QdXJpZnkuaXNTdXBwb3J0ZWQpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIHdpbmRvdy50b1N0YXRpY0hUTUwgPT09ICdvYmplY3QnIHx8XG4gICAgICAgIHR5cGVvZiB3aW5kb3cudG9TdGF0aWNIVE1MID09PSAnZnVuY3Rpb24nXG4gICAgICApIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkaXJ0eSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm4gd2luZG93LnRvU3RhdGljSFRNTChkaXJ0eSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX2lzTm9kZShkaXJ0eSkpIHtcbiAgICAgICAgICByZXR1cm4gd2luZG93LnRvU3RhdGljSFRNTChkaXJ0eS5vdXRlckhUTUwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkaXJ0eTtcbiAgICB9XG5cbiAgICAvKiBBc3NpZ24gY29uZmlnIHZhcnMgKi9cbiAgICBpZiAoIVNFVF9DT05GSUcpIHtcbiAgICAgIF9wYXJzZUNvbmZpZyhjZmcpO1xuICAgIH1cblxuICAgIC8qIENsZWFuIHVwIHJlbW92ZWQgZWxlbWVudHMgKi9cbiAgICBET01QdXJpZnkucmVtb3ZlZCA9IFtdO1xuXG4gICAgLyogQ2hlY2sgaWYgZGlydHkgaXMgY29ycmVjdGx5IHR5cGVkIGZvciBJTl9QTEFDRSAqL1xuICAgIGlmICh0eXBlb2YgZGlydHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICBJTl9QTEFDRSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChJTl9QTEFDRSkge1xuICAgICAgLyogRG8gc29tZSBlYXJseSBwcmUtc2FuaXRpemF0aW9uIHRvIGF2b2lkIHVuc2FmZSByb290IG5vZGVzICovXG4gICAgICBpZiAoZGlydHkubm9kZU5hbWUpIHtcbiAgICAgICAgY29uc3QgdGFnTmFtZSA9IHRyYW5zZm9ybUNhc2VGdW5jKGRpcnR5Lm5vZGVOYW1lKTtcbiAgICAgICAgaWYgKCFBTExPV0VEX1RBR1NbdGFnTmFtZV0gfHwgRk9SQklEX1RBR1NbdGFnTmFtZV0pIHtcbiAgICAgICAgICB0aHJvdyB0eXBlRXJyb3JDcmVhdGUoXG4gICAgICAgICAgICAncm9vdCBub2RlIGlzIGZvcmJpZGRlbiBhbmQgY2Fubm90IGJlIHNhbml0aXplZCBpbi1wbGFjZSdcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkaXJ0eSBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgIC8qIElmIGRpcnR5IGlzIGEgRE9NIGVsZW1lbnQsIGFwcGVuZCB0byBhbiBlbXB0eSBkb2N1bWVudCB0byBhdm9pZFxuICAgICAgICAgZWxlbWVudHMgYmVpbmcgc3RyaXBwZWQgYnkgdGhlIHBhcnNlciAqL1xuICAgICAgYm9keSA9IF9pbml0RG9jdW1lbnQoJzwhLS0tLT4nKTtcbiAgICAgIGltcG9ydGVkTm9kZSA9IGJvZHkub3duZXJEb2N1bWVudC5pbXBvcnROb2RlKGRpcnR5LCB0cnVlKTtcbiAgICAgIGlmIChpbXBvcnRlZE5vZGUubm9kZVR5cGUgPT09IDEgJiYgaW1wb3J0ZWROb2RlLm5vZGVOYW1lID09PSAnQk9EWScpIHtcbiAgICAgICAgLyogTm9kZSBpcyBhbHJlYWR5IGEgYm9keSwgdXNlIGFzIGlzICovXG4gICAgICAgIGJvZHkgPSBpbXBvcnRlZE5vZGU7XG4gICAgICB9IGVsc2UgaWYgKGltcG9ydGVkTm9kZS5ub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgICAgIGJvZHkgPSBpbXBvcnRlZE5vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItZG9tLW5vZGUtYXBwZW5kXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoaW1wb3J0ZWROb2RlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLyogRXhpdCBkaXJlY3RseSBpZiB3ZSBoYXZlIG5vdGhpbmcgdG8gZG8gKi9cbiAgICAgIGlmIChcbiAgICAgICAgIVJFVFVSTl9ET00gJiZcbiAgICAgICAgIVNBRkVfRk9SX1RFTVBMQVRFUyAmJlxuICAgICAgICAhV0hPTEVfRE9DVU1FTlQgJiZcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLWluY2x1ZGVzXG4gICAgICAgIGRpcnR5LmluZGV4T2YoJzwnKSA9PT0gLTFcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdHJ1c3RlZFR5cGVzUG9saWN5ICYmIFJFVFVSTl9UUlVTVEVEX1RZUEVcbiAgICAgICAgICA/IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVIVE1MKGRpcnR5KVxuICAgICAgICAgIDogZGlydHk7XG4gICAgICB9XG5cbiAgICAgIC8qIEluaXRpYWxpemUgdGhlIGRvY3VtZW50IHRvIHdvcmsgb24gKi9cbiAgICAgIGJvZHkgPSBfaW5pdERvY3VtZW50KGRpcnR5KTtcblxuICAgICAgLyogQ2hlY2sgd2UgaGF2ZSBhIERPTSBub2RlIGZyb20gdGhlIGRhdGEgKi9cbiAgICAgIGlmICghYm9keSkge1xuICAgICAgICByZXR1cm4gUkVUVVJOX0RPTSA/IG51bGwgOiBSRVRVUk5fVFJVU1RFRF9UWVBFID8gZW1wdHlIVE1MIDogJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogUmVtb3ZlIGZpcnN0IGVsZW1lbnQgbm9kZSAob3VycykgaWYgRk9SQ0VfQk9EWSBpcyBzZXQgKi9cbiAgICBpZiAoYm9keSAmJiBGT1JDRV9CT0RZKSB7XG4gICAgICBfZm9yY2VSZW1vdmUoYm9keS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICAvKiBHZXQgbm9kZSBpdGVyYXRvciAqL1xuICAgIGNvbnN0IG5vZGVJdGVyYXRvciA9IF9jcmVhdGVJdGVyYXRvcihJTl9QTEFDRSA/IGRpcnR5IDogYm9keSk7XG5cbiAgICAvKiBOb3cgc3RhcnQgaXRlcmF0aW5nIG92ZXIgdGhlIGNyZWF0ZWQgZG9jdW1lbnQgKi9cbiAgICB3aGlsZSAoKGN1cnJlbnROb2RlID0gbm9kZUl0ZXJhdG9yLm5leHROb2RlKCkpKSB7XG4gICAgICAvKiBGaXggSUUncyBzdHJhbmdlIGJlaGF2aW9yIHdpdGggbWFuaXB1bGF0ZWQgdGV4dE5vZGVzICM4OSAqL1xuICAgICAgaWYgKGN1cnJlbnROb2RlLm5vZGVUeXBlID09PSAzICYmIGN1cnJlbnROb2RlID09PSBvbGROb2RlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvKiBTYW5pdGl6ZSB0YWdzIGFuZCBlbGVtZW50cyAqL1xuICAgICAgaWYgKF9zYW5pdGl6ZUVsZW1lbnRzKGN1cnJlbnROb2RlKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLyogU2hhZG93IERPTSBkZXRlY3RlZCwgc2FuaXRpemUgaXQgKi9cbiAgICAgIGlmIChjdXJyZW50Tm9kZS5jb250ZW50IGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkge1xuICAgICAgICBfc2FuaXRpemVTaGFkb3dET00oY3VycmVudE5vZGUuY29udGVudCk7XG4gICAgICB9XG5cbiAgICAgIC8qIENoZWNrIGF0dHJpYnV0ZXMsIHNhbml0aXplIGlmIG5lY2Vzc2FyeSAqL1xuICAgICAgX3Nhbml0aXplQXR0cmlidXRlcyhjdXJyZW50Tm9kZSk7XG5cbiAgICAgIG9sZE5vZGUgPSBjdXJyZW50Tm9kZTtcbiAgICB9XG5cbiAgICBvbGROb2RlID0gbnVsbDtcblxuICAgIC8qIElmIHdlIHNhbml0aXplZCBgZGlydHlgIGluLXBsYWNlLCByZXR1cm4gaXQuICovXG4gICAgaWYgKElOX1BMQUNFKSB7XG4gICAgICByZXR1cm4gZGlydHk7XG4gICAgfVxuXG4gICAgLyogUmV0dXJuIHNhbml0aXplZCBzdHJpbmcgb3IgRE9NICovXG4gICAgaWYgKFJFVFVSTl9ET00pIHtcbiAgICAgIGlmIChSRVRVUk5fRE9NX0ZSQUdNRU5UKSB7XG4gICAgICAgIHJldHVybk5vZGUgPSBjcmVhdGVEb2N1bWVudEZyYWdtZW50LmNhbGwoYm9keS5vd25lckRvY3VtZW50KTtcblxuICAgICAgICB3aGlsZSAoYm9keS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLWRvbS1ub2RlLWFwcGVuZFxuICAgICAgICAgIHJldHVybk5vZGUuYXBwZW5kQ2hpbGQoYm9keS5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuTm9kZSA9IGJvZHk7XG4gICAgICB9XG5cbiAgICAgIGlmIChBTExPV0VEX0FUVFIuc2hhZG93cm9vdCB8fCBBTExPV0VEX0FUVFIuc2hhZG93cm9vdG1vZCkge1xuICAgICAgICAvKlxuICAgICAgICAgIEFkb3B0Tm9kZSgpIGlzIG5vdCB1c2VkIGJlY2F1c2UgaW50ZXJuYWwgc3RhdGUgaXMgbm90IHJlc2V0XG4gICAgICAgICAgKGUuZy4gdGhlIHBhc3QgbmFtZXMgbWFwIG9mIGEgSFRNTEZvcm1FbGVtZW50KSwgdGhpcyBpcyBzYWZlXG4gICAgICAgICAgaW4gdGhlb3J5IGJ1dCB3ZSB3b3VsZCByYXRoZXIgbm90IHJpc2sgYW5vdGhlciBhdHRhY2sgdmVjdG9yLlxuICAgICAgICAgIFRoZSBzdGF0ZSB0aGF0IGlzIGNsb25lZCBieSBpbXBvcnROb2RlKCkgaXMgZXhwbGljaXRseSBkZWZpbmVkXG4gICAgICAgICAgYnkgdGhlIHNwZWNzLlxuICAgICAgICAqL1xuICAgICAgICByZXR1cm5Ob2RlID0gaW1wb3J0Tm9kZS5jYWxsKG9yaWdpbmFsRG9jdW1lbnQsIHJldHVybk5vZGUsIHRydWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmV0dXJuTm9kZTtcbiAgICB9XG5cbiAgICBsZXQgc2VyaWFsaXplZEhUTUwgPSBXSE9MRV9ET0NVTUVOVCA/IGJvZHkub3V0ZXJIVE1MIDogYm9keS5pbm5lckhUTUw7XG5cbiAgICAvKiBTZXJpYWxpemUgZG9jdHlwZSBpZiBhbGxvd2VkICovXG4gICAgaWYgKFxuICAgICAgV0hPTEVfRE9DVU1FTlQgJiZcbiAgICAgIEFMTE9XRURfVEFHU1snIWRvY3R5cGUnXSAmJlxuICAgICAgYm9keS5vd25lckRvY3VtZW50ICYmXG4gICAgICBib2R5Lm93bmVyRG9jdW1lbnQuZG9jdHlwZSAmJlxuICAgICAgYm9keS5vd25lckRvY3VtZW50LmRvY3R5cGUubmFtZSAmJlxuICAgICAgcmVnRXhwVGVzdChFWFBSRVNTSU9OUy5ET0NUWVBFX05BTUUsIGJvZHkub3duZXJEb2N1bWVudC5kb2N0eXBlLm5hbWUpXG4gICAgKSB7XG4gICAgICBzZXJpYWxpemVkSFRNTCA9XG4gICAgICAgICc8IURPQ1RZUEUgJyArIGJvZHkub3duZXJEb2N1bWVudC5kb2N0eXBlLm5hbWUgKyAnPlxcbicgKyBzZXJpYWxpemVkSFRNTDtcbiAgICB9XG5cbiAgICAvKiBTYW5pdGl6ZSBmaW5hbCBzdHJpbmcgdGVtcGxhdGUtc2FmZSAqL1xuICAgIGlmIChTQUZFX0ZPUl9URU1QTEFURVMpIHtcbiAgICAgIHNlcmlhbGl6ZWRIVE1MID0gc3RyaW5nUmVwbGFjZShzZXJpYWxpemVkSFRNTCwgTVVTVEFDSEVfRVhQUiwgJyAnKTtcbiAgICAgIHNlcmlhbGl6ZWRIVE1MID0gc3RyaW5nUmVwbGFjZShzZXJpYWxpemVkSFRNTCwgRVJCX0VYUFIsICcgJyk7XG4gICAgICBzZXJpYWxpemVkSFRNTCA9IHN0cmluZ1JlcGxhY2Uoc2VyaWFsaXplZEhUTUwsIFRNUExJVF9FWFBSLCAnICcpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVzdGVkVHlwZXNQb2xpY3kgJiYgUkVUVVJOX1RSVVNURURfVFlQRVxuICAgICAgPyB0cnVzdGVkVHlwZXNQb2xpY3kuY3JlYXRlSFRNTChzZXJpYWxpemVkSFRNTClcbiAgICAgIDogc2VyaWFsaXplZEhUTUw7XG4gIH07XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBtZXRob2QgdG8gc2V0IHRoZSBjb25maWd1cmF0aW9uIG9uY2VcbiAgICogc2V0Q29uZmlnXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICovXG4gIERPTVB1cmlmeS5zZXRDb25maWcgPSBmdW5jdGlvbiAoY2ZnKSB7XG4gICAgX3BhcnNlQ29uZmlnKGNmZyk7XG4gICAgU0VUX0NPTkZJRyA9IHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBtZXRob2QgdG8gcmVtb3ZlIHRoZSBjb25maWd1cmF0aW9uXG4gICAqIGNsZWFyQ29uZmlnXG4gICAqXG4gICAqL1xuICBET01QdXJpZnkuY2xlYXJDb25maWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgQ09ORklHID0gbnVsbDtcbiAgICBTRVRfQ09ORklHID0gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBtZXRob2QgdG8gY2hlY2sgaWYgYW4gYXR0cmlidXRlIHZhbHVlIGlzIHZhbGlkLlxuICAgKiBVc2VzIGxhc3Qgc2V0IGNvbmZpZywgaWYgYW55LiBPdGhlcndpc2UsIHVzZXMgY29uZmlnIGRlZmF1bHRzLlxuICAgKiBpc1ZhbGlkQXR0cmlidXRlXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gdGFnIFRhZyBuYW1lIG9mIGNvbnRhaW5pbmcgZWxlbWVudC5cbiAgICogQHBhcmFtICB7c3RyaW5nfSBhdHRyIEF0dHJpYnV0ZSBuYW1lLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHZhbHVlIEF0dHJpYnV0ZSB2YWx1ZS5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIGB2YWx1ZWAgaXMgdmFsaWQuIE90aGVyd2lzZSwgcmV0dXJucyBmYWxzZS5cbiAgICovXG4gIERPTVB1cmlmeS5pc1ZhbGlkQXR0cmlidXRlID0gZnVuY3Rpb24gKHRhZywgYXR0ciwgdmFsdWUpIHtcbiAgICAvKiBJbml0aWFsaXplIHNoYXJlZCBjb25maWcgdmFycyBpZiBuZWNlc3NhcnkuICovXG4gICAgaWYgKCFDT05GSUcpIHtcbiAgICAgIF9wYXJzZUNvbmZpZyh7fSk7XG4gICAgfVxuXG4gICAgY29uc3QgbGNUYWcgPSB0cmFuc2Zvcm1DYXNlRnVuYyh0YWcpO1xuICAgIGNvbnN0IGxjTmFtZSA9IHRyYW5zZm9ybUNhc2VGdW5jKGF0dHIpO1xuICAgIHJldHVybiBfaXNWYWxpZEF0dHJpYnV0ZShsY1RhZywgbGNOYW1lLCB2YWx1ZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZEhvb2tcbiAgICogUHVibGljIG1ldGhvZCB0byBhZGQgRE9NUHVyaWZ5IGhvb2tzXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlbnRyeVBvaW50IGVudHJ5IHBvaW50IGZvciB0aGUgaG9vayB0byBhZGRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaG9va0Z1bmN0aW9uIGZ1bmN0aW9uIHRvIGV4ZWN1dGVcbiAgICovXG4gIERPTVB1cmlmeS5hZGRIb29rID0gZnVuY3Rpb24gKGVudHJ5UG9pbnQsIGhvb2tGdW5jdGlvbikge1xuICAgIGlmICh0eXBlb2YgaG9va0Z1bmN0aW9uICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaG9va3NbZW50cnlQb2ludF0gPSBob29rc1tlbnRyeVBvaW50XSB8fCBbXTtcbiAgICBhcnJheVB1c2goaG9va3NbZW50cnlQb2ludF0sIGhvb2tGdW5jdGlvbik7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZUhvb2tcbiAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgYSBET01QdXJpZnkgaG9vayBhdCBhIGdpdmVuIGVudHJ5UG9pbnRcbiAgICogKHBvcHMgaXQgZnJvbSB0aGUgc3RhY2sgb2YgaG9va3MgaWYgbW9yZSBhcmUgcHJlc2VudClcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVudHJ5UG9pbnQgZW50cnkgcG9pbnQgZm9yIHRoZSBob29rIHRvIHJlbW92ZVxuICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gcmVtb3ZlZChwb3BwZWQpIGhvb2tcbiAgICovXG4gIERPTVB1cmlmeS5yZW1vdmVIb29rID0gZnVuY3Rpb24gKGVudHJ5UG9pbnQpIHtcbiAgICBpZiAoaG9va3NbZW50cnlQb2ludF0pIHtcbiAgICAgIHJldHVybiBhcnJheVBvcChob29rc1tlbnRyeVBvaW50XSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmVIb29rc1xuICAgKiBQdWJsaWMgbWV0aG9kIHRvIHJlbW92ZSBhbGwgRE9NUHVyaWZ5IGhvb2tzIGF0IGEgZ2l2ZW4gZW50cnlQb2ludFxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGVudHJ5UG9pbnQgZW50cnkgcG9pbnQgZm9yIHRoZSBob29rcyB0byByZW1vdmVcbiAgICovXG4gIERPTVB1cmlmeS5yZW1vdmVIb29rcyA9IGZ1bmN0aW9uIChlbnRyeVBvaW50KSB7XG4gICAgaWYgKGhvb2tzW2VudHJ5UG9pbnRdKSB7XG4gICAgICBob29rc1tlbnRyeVBvaW50XSA9IFtdO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlQWxsSG9va3NcbiAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgYWxsIERPTVB1cmlmeSBob29rc1xuICAgKlxuICAgKi9cbiAgRE9NUHVyaWZ5LnJlbW92ZUFsbEhvb2tzID0gZnVuY3Rpb24gKCkge1xuICAgIGhvb2tzID0ge307XG4gIH07XG5cbiAgcmV0dXJuIERPTVB1cmlmeTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRE9NUHVyaWZ5KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9