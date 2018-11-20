(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.EGovJSBase = {})));
}(this, (function (exports) { 'use strict';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var hasOwnProperty = {}.hasOwnProperty;
var _has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var _fails = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});

var _isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function (it) {
  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var document = _global.document;
// typeof document.createElement is 'object' in old IE
var is = _isObject(document) && _isObject(document.createElement);
var _domCreate = function (it) {
  return is ? document.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function (it, S) {
  if (!_isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP$1 = Object.defineProperty;

var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  _anObject(O);
  P = _toPrimitive(P, true);
  _anObject(Attributes);
  if (_ie8DomDefine) try {
    return dP$1(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp = {
	f: f
};

var _propertyDesc = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _hide = _descriptors ? function (object, key, value) {
  return _objectDp.f(object, key, _propertyDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var id = 0;
var px = Math.random();
var _uid = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var _redefine = createCommonjsModule(function (module) {
var SRC = _uid('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

_core.inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === _global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    _hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    _hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});
});

var _aFunction = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding

var _ctx = function (fn, that, length) {
  _aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var PROTOTYPE$1 = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE$1];
  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
  var expProto = exports[PROTOTYPE$1] || (exports[PROTOTYPE$1] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
    // extend global
    if (target) _redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) _hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
_global.core = _core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
var _export = $export;

var _meta = createCommonjsModule(function (module) {
var META = _uid('meta');


var setDesc = _objectDp.f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !_fails(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!_has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!_has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};
});

var SHARED = '__core-js_shared__';
var store = _global[SHARED] || (_global[SHARED] = {});
var _shared = function (key) {
  return store[key] || (store[key] = {});
};

var _wks = createCommonjsModule(function (module) {
var store = _shared('wks');

var Symbol = _global.Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
};

$exports.store = store;
});

var def = _objectDp.f;

var TAG = _wks('toStringTag');

var _setToStringTag = function (it, tag, stat) {
  if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

var f$1 = _wks;

var _wksExt = {
	f: f$1
};

var _library = false;

var defineProperty = _objectDp.f;
var _wksDefine = function (name) {
  var $Symbol = _core.Symbol || (_core.Symbol = _library ? {} : _global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: _wksExt.f(name) });
};

var toString = {}.toString;

var _cof = function (it) {
  return toString.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings

// eslint-disable-next-line no-prototype-builtins
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return _cof(it) == 'String' ? it.split('') : Object(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

// to indexed object, toObject with fallback for non-array-like ES3 strings


var _toIobject = function (it) {
  return _iobject(_defined(it));
};

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.1.15 ToLength

var min = Math.min;
var _toLength = function (it) {
  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;
var _toAbsoluteIndex = function (index, length) {
  index = _toInteger(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes



var _arrayIncludes = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = _toIobject($this);
    var length = _toLength(O.length);
    var index = _toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var shared = _shared('keys');

var _sharedKey = function (key) {
  return shared[key] || (shared[key] = _uid(key));
};

var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO = _sharedKey('IE_PROTO');

var _objectKeysInternal = function (object, names) {
  var O = _toIobject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (_has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)



var _objectKeys = Object.keys || function keys(O) {
  return _objectKeysInternal(O, _enumBugKeys);
};

var f$2 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$2
};

var f$3 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$3
};

// all enumerable object keys, includes symbols



var _enumKeys = function (it) {
  var result = _objectKeys(it);
  var getSymbols = _objectGops.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = _objectPie.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

// 7.2.2 IsArray(argument)

var _isArray = Array.isArray || function isArray(arg) {
  return _cof(arg) == 'Array';
};

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  _anObject(O);
  var keys = _objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
  return O;
};

var document$1 = _global.document;
var _html = document$1 && document$1.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



var IE_PROTO$1 = _sharedKey('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE$2 = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe');
  var i = _enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE$2][_enumBugKeys[i]];
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE$2] = _anObject(O);
    result = new Empty();
    Empty[PROTOTYPE$2] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = createDict();
  return Properties === undefined ? result : _objectDps(result, Properties);
};

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

var f$5 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return _objectKeysInternal(O, hiddenKeys);
};

var _objectGopn = {
	f: f$5
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

var gOPN$1 = _objectGopn.f;
var toString$1 = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN$1(it);
  } catch (e) {
    return windowNames.slice();
  }
};

var f$4 = function getOwnPropertyNames(it) {
  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN$1(_toIobject(it));
};

var _objectGopnExt = {
	f: f$4
};

var gOPD$1 = Object.getOwnPropertyDescriptor;

var f$6 = _descriptors ? gOPD$1 : function getOwnPropertyDescriptor(O, P) {
  O = _toIobject(O);
  P = _toPrimitive(P, true);
  if (_ie8DomDefine) try {
    return gOPD$1(O, P);
  } catch (e) { /* empty */ }
  if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
};

var _objectGopd = {
	f: f$6
};

// ECMAScript 6 symbols shim





var META = _meta.KEY;


















var gOPD = _objectGopd.f;
var dP = _objectDp.f;
var gOPN = _objectGopnExt.f;
var $Symbol = _global.Symbol;
var $JSON = _global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = _wks('_hidden');
var TO_PRIMITIVE = _wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = _shared('symbol-registry');
var AllSymbols = _shared('symbols');
var OPSymbols = _shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = _global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = _descriptors && _fails(function () {
  return _objectCreate(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  _anObject(it);
  key = _toPrimitive(key, true);
  _anObject(D);
  if (_has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!_has(it, HIDDEN)) dP(it, HIDDEN, _propertyDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  _anObject(it);
  var keys = _enumKeys(P = _toIobject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = _toPrimitive(key, true));
  if (this === ObjectProto && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
  return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = _toIobject(it);
  key = _toPrimitive(key, true);
  if (it === ObjectProto && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(_toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : _toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, _propertyDesc(1, value));
    };
    if (_descriptors && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  _redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  _objectGopd.f = $getOwnPropertyDescriptor;
  _objectDp.f = $defineProperty;
  _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
  _objectPie.f = $propertyIsEnumerable;
  _objectGops.f = $getOwnPropertySymbols;

  if (_descriptors && !_library) {
    _redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  _wksExt.f = function (name) {
    return wrap(_wks(name));
  };
}

_export(_export.G + _export.W + _export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)_wks(es6Symbols[j++]);

for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) _wksDefine(wellKnownSymbols[k++]);

_export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return _has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

_export(_export.S + _export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !_isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
_setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
_setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
_setToStringTag(_global.JSON, 'JSON', true);

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
_export(_export.S, 'Object', { create: _objectCreate });

// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
_export(_export.S + _export.F * !_descriptors, 'Object', { defineProperty: _objectDp.f });

// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
_export(_export.S + _export.F * !_descriptors, 'Object', { defineProperties: _objectDps });

// most Object methods by ES6 should accept primitives



var _objectSap = function (KEY, exec) {
  var fn = (_core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  _export(_export.S + _export.F * _fails(function () { fn(1); }), 'Object', exp);
};

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)

var $getOwnPropertyDescriptor$1 = _objectGopd.f;

_objectSap('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor$1(_toIobject(it), key);
  };
});

// 7.1.13 ToObject(argument)

var _toObject = function (it) {
  return Object(_defined(it));
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


var IE_PROTO$2 = _sharedKey('IE_PROTO');
var ObjectProto$1 = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function (O) {
  O = _toObject(O);
  if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto$1 : null;
};

// 19.1.2.9 Object.getPrototypeOf(O)



_objectSap('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return _objectGpo(_toObject(it));
  };
});

// 19.1.2.14 Object.keys(O)



_objectSap('keys', function () {
  return function keys(it) {
    return _objectKeys(_toObject(it));
  };
});

// 19.1.2.7 Object.getOwnPropertyNames(O)
_objectSap('getOwnPropertyNames', function () {
  return _objectGopnExt.f;
});

// 19.1.2.5 Object.freeze(O)

var meta = _meta.onFreeze;

_objectSap('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && _isObject(it) ? $freeze(meta(it)) : it;
  };
});

// 19.1.2.17 Object.seal(O)

var meta$1 = _meta.onFreeze;

_objectSap('seal', function ($seal) {
  return function seal(it) {
    return $seal && _isObject(it) ? $seal(meta$1(it)) : it;
  };
});

// 19.1.2.15 Object.preventExtensions(O)

var meta$2 = _meta.onFreeze;

_objectSap('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && _isObject(it) ? $preventExtensions(meta$2(it)) : it;
  };
});

// 19.1.2.12 Object.isFrozen(O)


_objectSap('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return _isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});

// 19.1.2.13 Object.isSealed(O)


_objectSap('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return _isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});

// 19.1.2.11 Object.isExtensible(O)


_objectSap('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return _isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

// 19.1.2.1 Object.assign(target, source, ...)





var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || _fails(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = _toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = _objectGops.f;
  var isEnum = _objectPie.f;
  while (aLen > index) {
    var S = _iobject(arguments[index++]);
    var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;

// 19.1.3.1 Object.assign(target, source)


_export(_export.S + _export.F, 'Object', { assign: _objectAssign });

// 7.2.9 SameValue(x, y)
var _sameValue = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

// 19.1.3.10 Object.is(value1, value2)

_export(_export.S, 'Object', { is: _sameValue });

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */


var check = function (O, proto) {
  _anObject(O);
  if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
var _setProto = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

// 19.1.3.19 Object.setPrototypeOf(O, proto)

_export(_export.S, 'Object', { setPrototypeOf: _setProto.set });

// getting tag from 19.1.3.6 Object.prototype.toString()

var TAG$1 = _wks('toStringTag');
// ES3 wrong here
var ARG = _cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

var _classof = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
    // builtinTag case
    : ARG ? _cof(O)
    // ES3 arguments fallback
    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

// 19.1.3.6 Object.prototype.toString()

var test = {};
test[_wks('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  _redefine(Object.prototype, 'toString', function toString() {
    return '[object ' + _classof(this) + ']';
  }, true);
}

/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
// evergreen browsers need this
// import 'core-js/es6/reflect';
// import 'core-js/es7/reflect';
var localizationTable = {
    en: {
        "My Profile": "My Profile",
        "AccessData": "Account Credentials",
        "Delegations": "Delegations",
        "MyRepresentatives": "Representatives",
        "Work for someone else": "Work for someone else",
        "DelegationNotAvailableInService": "not available for this service",
        "NoDelegations": "you don't have any delegations",
        "NewDelegationLinkText": "New Delegation",
        "WorkForMe": "Work for me",
        "wordFor": "on behalf of",
        "PossibleDelegations": "Possible Delegations"
    },
    de: {
        "My Profile": "Mein Profil",
        "AccessData": "Zugangsdaten",
        "Delegations": "Vertretungen",
        "MyRepresentatives": "Vertreter",
        "Work for someone else": "Für jemand anderen arbeiten",
        "DelegationNotAvailableInService": "für diesen Dienst nicht verfügbar",
        "NoDelegations": "Sie haben keine Vertretungen",
        "NewDelegationLinkText": "Neue Vertretung beantragen",
        "WorkForMe": "Für mich arbeiten",
        "wordFor": "im Namen von",
        "PossibleDelegations": "Mögliche Vertretungen"
    },
    it: {
        "My Profile": "Mio profilo",
        "AccessData": "Dati d'accesso",
        "Delegations": "Deleghe",
        "MyRepresentatives": "Rappresentanti",
        "Work for someone else": "Lavorare per qualcun altro",
        "DelegationNotAvailableInService": "non disponibile per questo servizio",
        "NoDelegations": "non ha ancora nessuna delega",
        "NewDelegationLinkText": "Richiesta nuova delega",
        "WorkForMe": "Lavorare per me stesso",
        "wordFor": "a nome di",
        "PossibleDelegations": "Deleghe possibili"
    }
};
function translate(lang, key) {
    var language = lang.toLowerCase();
    return localizationTable[language][key] || '[' + key + ']';
}
var UIService = (function () {
    function UIService(user, egovAuthOptions) {
        this.user = user;
        // calculate the language to be used
        var lang = 'de';
        if (egovAuthOptions.language) {
            lang = egovAuthOptions.language;
        }
        else if (user && user.language) {
            lang = user.language;
        }
        this.lang = lang;
    }
    UIService.prototype.getCurrentLang = function () {
        return this.lang;
    };
    UIService.prototype.translate = function (key) {
        return translate(this.lang, key);
    };
    UIService.prototype.resolveDelegationLinkText = function (delegation) {
        var represented = delegation.represented;
        if (represented.id === this.user.owner.id) {
            return translate(this.lang, 'WorkForMe');
        }
        else if (represented.naturalPerson) {
            return represented.naturalPerson.firstname + " " + represented.naturalPerson.lastname;
        }
        else if (represented.juristicPerson) {
            return this.returnLocalized(represented.juristicPerson.nameDe, represented.juristicPerson.nameIt);
        }
        return '(unable to determine link text)';
    };
    UIService.prototype.resolveDelegationDisplayName = function () {
        var activeDelegation = this.user.activeDelegation;
        if (activeDelegation) {
            return this.resolveDelegationLinkText(activeDelegation);
        }
        return '(unable to determine delegation name)';
    };
    UIService.prototype.ellipsis = function (text, maxLength) {
        if (text) {
            if (typeof maxLength === 'undefined') {
                maxLength = 9000; //a large number
            }
            if (text.length <= maxLength)
                return text;
            var xMaxFit = maxLength - 3;
            var xTruncateAt = text.lastIndexOf(' ', xMaxFit);
            if (xTruncateAt == -1 || xTruncateAt < maxLength / 2)
                xTruncateAt = xMaxFit;
            return text.substr(0, xTruncateAt) + "...";
        }
        else {
            return text;
        }
    };
    UIService.prototype.returnLocalized = function (german, italian, english) {
        if (italian === void 0) { italian = german; }
        if (english === void 0) { english = german; }
        if (this.lang.toUpperCase() === 'IT') {
            return italian;
        }
        else if (this.lang.toUpperCase() === 'EN') {
            return english;
        }
        else {
            return german;
        }
    };
    return UIService;
}());
var HttpHandler = (function () {
    function HttpHandler() {
    }
    HttpHandler.handleAjaxRequest = function (user, xhr) {
        if (!xhr) {
            throw 'You have to pass in a valid XHR object.';
        }
        if (user.sessionInfo && user.sessionInfo.currentRepresentedId) {
            xhr.setRequestHeader('client-currentRepresentedId', user.sessionInfo.currentRepresentedId);
        }
        if (user && user.language) {
            xhr.setRequestHeader('current-language', user.language);
        }
    };
    HttpHandler.handleAjaxResponse = function (egovAuthOptions, xhr) {
        if (!xhr) {
            throw 'You have to pass in a valid XHR object.';
        }
        if (this._isNullOrUndefined(xhr.status)) {
            throw 'You have to pass in a valid XHR object having a status property.';
        }
        if (this._isNullOrUndefined(xhr.url)) {
            throw 'You have to pass in a valid XHR object having a url property containing the request Url.';
        }
        if (!xhr.getResponseHeader && typeof xhr.getResponseHeader === 'function') {
            throw 'You have to pass in a valid XHR object having a getResponseHeader(key) function.';
        }
        if (!xhr.getResponseBody && typeof xhr.getResponseBody === 'function') {
            throw 'You have to pass in a valid XHR object having a getResponseBody() function.';
        }
        if (xhr.status === 401 || xhr.status === 403) {
            /*
                      If we are in here and the response came from the authentication library
                      we should have received a response object of the following form:
                          {
                              code: string;
                              redirectUrl: string;
                              message: string;
                          }
      
                      where the `code` property can be of the following:
                          - PROFILE_INCOMPLETE
                          - DELEGATION_NOT_VALID
                          - AUTH_TYPE_NOT_SUPPORTED
                  */
            var responseBody = xhr.getResponseBody();
            if (responseBody && responseBody.redirectUrl) {
                var redirectUrl = responseBody.redirectUrl;
                if (redirectUrl.includes(this.REDIRECTURL_PLACEHOLDER)) {
                    redirectUrl = redirectUrl.replace(this.REDIRECTURL_PLACEHOLDER, encodeURIComponent(this._retrieveCurrentWindowUrl()));
                }
                if (responseBody.message && responseBody.message !== '') {
                    if (egovAuthOptions.callbacks && egovAuthOptions.callbacks.notifyUser) {
                        egovAuthOptions.callbacks.notifyUser(responseBody);
                    }
                    else {
                        console.warn('Missing callbacks: { notifyUser: (options) => { ... } } function. You should inform the user about what is going on! (redirecting silently..)');
                        this._redirect(redirectUrl);
                    }
                }
                else {
                    this._redirect(redirectUrl);
                }
            }
        }
    };
    HttpHandler._redirect = function (url) {
        window.location.href = url;
    };
    HttpHandler._retrieveCurrentWindowUrl = function () {
        return window.location.href;
    };
    HttpHandler._isNullOrUndefined = function (obj) {
        return obj === null || typeof obj === 'undefined';
    };
    return HttpHandler;
}());
HttpHandler.REDIRECTURL_PLACEHOLDER = '{URLENCODED_TARGET}';
var AuthSession = (function () {
    function AuthSession(user, egovAuthOptions, authUrls, httpBackend) {
        this.user = user;
        this.egovAuthOptions = egovAuthOptions;
        this.authUrls = authUrls;
        this.httpBackend = httpBackend;
        this.sessionAuthenticated = false;
        this.REDIRECTURL_PLACEHOLDER = '{URLENCODED_TARGET}';
        // set defaults
        this.egovAuthOptions = egovAuthOptions || {};
        // this.egovAuthOptions.changeDelegationUrl = egovAuthOptions.changeDelegationUrl || this.egovAuthOptions.userUrl;
        this.sessionAuthenticated = user.isAuthenticated;
        this.userInterfaceService = new UIService(user, egovAuthOptions);
    }
    Object.defineProperty(AuthSession.prototype, "uiService", {
        get: function () {
            return this.userInterfaceService;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthSession.prototype, "isAuthenticated", {
        get: function () {
            return this.sessionAuthenticated;
        },
        enumerable: true,
        configurable: true
    });
    AuthSession.prototype.changeDelegation = function (newRepresentedId) {
        if (this.egovAuthOptions &&
            this.egovAuthOptions.events &&
            this.egovAuthOptions.events.changeDelegation) {
            // user has full control, has to do the callback himself
            var delegation = this.user.getDelegation(parseInt(newRepresentedId));
            if (delegation) {
                return this.egovAuthOptions.events.changeDelegation(delegation);
            }
            else {
                throw "Delegation with id " + newRepresentedId + " not found.";
            }
        }
        else {
            return this.httpBackend.execute({
                method: 'POST',
                url: this.authUrls.getChangeDelegationUrl(),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                // data: `newDelegationId=${newRepresentedId}`
                data: JSON.stringify({
                    newRepresentedId: newRepresentedId
                })
            });
        }
        // what if this fails????
    };
    AuthSession.prototype.restartApplication = function () {
        window.location.reload();
    };
    AuthSession.prototype.handleAjaxRequest = function (xhr) {
        HttpHandler.handleAjaxRequest(this.user, xhr);
    };
    /**
       * @deprecated use HttpHandler.handleAjaxResponse instead
       *
       */
    AuthSession.prototype.handleAjaxResponse = function (xhr) {
        HttpHandler.handleAjaxResponse(this.egovAuthOptions, xhr);
    };
    AuthSession.prototype._redirect = function (url) {
        window.location.href = url;
    };
    AuthSession.prototype._retrieveCurrentWindowUrl = function () {
        return window.location.href;
    };
    AuthSession.prototype._isNullOrUndefined = function (obj) {
        return obj === null || typeof obj === 'undefined';
    };
    return AuthSession;
}());
var User = (function () {
    function User(properties) {
        if (properties) {
            // copy properties over
            for (var key in properties) {
                if (properties.hasOwnProperty(key)) {
                    this[key] = properties[key];
                }
            }
            // if (properties.roles) {
            // 	this.roles = properties.roles;
            // 	this.functions = getDistinctFunctions(properties.roles);
            // }
        }
        this.delegations = this.delegations || [];
    }
    Object.defineProperty(User.prototype, "displayName", {
        get: function () {
            if (this.owner && this.owner.firstname && this.owner.lastname) {
                return this.owner.firstname + " " + this.owner.lastname;
            }
            else {
                return this.username;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "activeDelegation", {
        get: function () {
            for (var i = 0; i < this.delegations.length; i++) {
                if (this.sessionInfo && this.delegations[i].represented.id === this.sessionInfo.currentRepresentedId) {
                    return this.delegations[i];
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "isAuthenticated", {
        get: function () {
            return this.sessionInfo !== null && typeof (this.sessionInfo) !== 'undefined';
        },
        set: function (value) {
            // just a dummy one...as we ignore the isAuthenticated property from the server
            this._dummyValue = value;
        },
        enumerable: true,
        configurable: true
    });
    User.prototype.hasRole = function (name) {
        if (this.currentAccreditations) {
            for (var _i = 0, _a = this.currentAccreditations; _i < _a.length; _i++) {
                var accreditation = _a[_i];
                if (accreditation.qualification && accreditation.qualification.uid === name) {
                    return true;
                }
            }
        }
        return false;
    };
    User.prototype.getDelegation = function (id) {
        if (this.delegations) {
            var foundDelegation_1 = null;
            this.delegations.forEach(function (delegation) {
                if (delegation.represented.id === id) {
                    // we found the delegation
                    foundDelegation_1 = delegation;
                    return;
                }
            });
            return foundDelegation_1;
        }
        return null;
    };
    User.prototype.hasDelegationChanged = function (newRepresentedId) {
        return this.sessionInfo.currentRepresentedId !== newRepresentedId;
    };
    return User;
}());
var HttpBackend = (function () {
    function HttpBackend(ajaxLib) {
        this.ajaxLib = ajaxLib;
    }
    HttpBackend.prototype.execute = function (ajaxOptions) {
        return this.ajaxLib(ajaxOptions).then(function (userObject) {
            var resultObj = userObject;
            // watch out, if the actual response data is wrapped inside
            // the data property (i.e. with Angular's $http)
            if (userObject.data) {
                resultObj = userObject.data;
            }
            return new User(resultObj);
        });
    };
    return HttpBackend;
}());
var AuthenticationUrls = (function () {
    function AuthenticationUrls(envDetector, egovConfig) {
        this.envDetector = envDetector;
        this.egovConfig = egovConfig;
        this.apiPrefix = '/iamauth';
        this.protocol = 'https';
        if (!envDetector) {
            throw 'You have to pass in a valid class that implements the IEnvironmentDetector interface.';
        }
        // set default api prefix to emptystring
        if (egovConfig) {
            var prefix = this._resolveString(egovConfig.apiPrefix);
            if (prefix !== null) {
                this.apiPrefix = prefix;
            }
        }
        this.protocol = envDetector.getProtocol();
    }
    /**
     * Returns the url for fetching the user
     */
    AuthenticationUrls.prototype.getCurrentUserUrl = function () {
        if (this.egovConfig) {
            var config = this._resolveString(this.egovConfig.userUrl);
            if (config !== null) {
                return config;
            }
        }
        return this.apiPrefix + "/user/current";
    };
    /**
     * Get the url of the login page
     * @param backUrl - the url to redirect back to again
     */
    AuthenticationUrls.prototype.getLoginPageUrl = function (backUrl) {
        if (this.egovConfig) {
            var config = this._resolveString(this.egovConfig.loginUrl);
            if (config !== null) {
                return config;
            }
        }
        if (!backUrl) {
            backUrl = this.envDetector.getCurrentWindowUrl();
        }
        return this.apiPrefix + "/login?target=" + encodeURIComponent(backUrl);
    };
    AuthenticationUrls.prototype.getLogoutPageUrl = function (backUrl) {
        if (this.egovConfig) {
            var config = this._resolveString(this.egovConfig.logoutUrl);
            if (config !== null) {
                return config;
            }
        }
        if (!backUrl) {
            backUrl = this.envDetector.getCurrentWindowUrl();
        }
        return this.apiPrefix + "/logout?target=" + encodeURIComponent(backUrl);
    };
    /**
     * returns the url pointing to the profile homepage, where the user can see
     * and modify his profile.
     */
    AuthenticationUrls.prototype.getProfilePageUrl = function () {
        if (this.egovConfig) {
            var config = this._resolveString(this.egovConfig.myProfileUrl);
            if (config !== null) {
                return config;
            }
        }
        var envPrefix = this.envDetector.getEnvironmentPrefix();
        if (envPrefix !== '') {
            envPrefix += '-';
        }
        return this.protocol + "://" + envPrefix + "iam.civis.bz.it/api/appurls/MyProfile";
    };
    AuthenticationUrls.prototype.getNewDelegationRequestUrl = function (backUrl) {
        if (this.egovConfig) {
            var config = this._resolveString(this.egovConfig.newDelegationUrl);
            if (config !== null) {
                return config;
            }
        }
        if (!backUrl) {
            backUrl = this.envDetector.getCurrentWindowUrl();
        }
        return this.apiPrefix + "/requestDelegation?target=" + encodeURIComponent(backUrl);
    };
    AuthenticationUrls.prototype.getChangeDelegationUrl = function () {
        if (this.egovConfig) {
            var config = this._resolveString(this.egovConfig.changeDelegationUrl);
            if (config !== null) {
                return config;
            }
        }
        return this.apiPrefix + "/user/current";
    };
    AuthenticationUrls.prototype.getAccessDataUrl = function () {
        var envPrefix = this.envDetector.getEnvironmentPrefix();
        if (envPrefix !== '') {
            envPrefix += '-';
        }
        return this.protocol + "://" + envPrefix + "iam.civis.bz.it/api/appurls/MyCredentials";
    };
    AuthenticationUrls.prototype.getDelegationsUrl = function () {
        var envPrefix = this.envDetector.getEnvironmentPrefix();
        if (envPrefix !== '') {
            envPrefix += '-';
        }
        return this.protocol + "://" + envPrefix + "iam.civis.bz.it/api/appurls/MyDelegations";
    };
    AuthenticationUrls.prototype.getCurrentDelegationProfileUrl = function () {
        var envPrefix = this.envDetector.getEnvironmentPrefix();
        if (envPrefix !== '') {
            envPrefix += '-';
        }
        return this.protocol + "://" + envPrefix + "iam.civis.bz.it/api/appurls/CurrentDelegationProfile";
    };
    AuthenticationUrls.prototype.getRepresentativesUrl = function () {
        var envPrefix = this.envDetector.getEnvironmentPrefix();
        if (envPrefix !== '') {
            envPrefix += '-';
        }
        return this.protocol + "://" + envPrefix + "iam.civis.bz.it/api/appurls/CurrentDelegationRepresentatives";
    };
    AuthenticationUrls.prototype._resolveString = function (param) {
        if (param) {
            if (typeof param === 'function') {
                return param(this.envDetector.getEnvironmentPrefix());
            }
            else {
                // must be a string
                return param;
            }
        }
        else {
            return null;
        }
    };
    return AuthenticationUrls;
}());
var EnvironmentDetector = (function () {
    function EnvironmentDetector(prefix, isHttps) {
        this.protocol = 'https';
        if (prefix) {
            this.envPrefix = prefix;
        }
        if (isHttps === false) {
            this.protocol = 'http';
        }
    }
    /**
     * Returns the current environment prefix, which is either 'dev', 'test', 'demo', 'prod'.
     */
    EnvironmentDetector.prototype.getEnvironmentPrefix = function () {
        var environment = ''; // equals to prod
        if (this.envPrefix) {
            environment = this.envPrefix;
        }
        else {
            var url = this.getCurrentWindowUrl();
            if (url.indexOf('dev') !== -1 || url.indexOf('localhost') !== -1) {
                environment = 'dev';
            }
            if (url.indexOf('test') !== -1) {
                environment = 'test';
            }
            if (url.indexOf('demo') !== -1) {
                environment = 'demo';
            }
        }
        return environment;
    };
    /**
     * Returns the current
     */
    EnvironmentDetector.prototype.getProtocol = function () {
        var protocol;
        if (this.protocol) {
            protocol = this.protocol;
        }
        else {
            var tmpProtocol = (window && window.location.protocol);
            // we get 'https:', or 'http:' and should get rid of the colon
            if (tmpProtocol) {
                protocol = tmpProtocol.replace(':', '');
            }
        }
        return protocol;
    };
    /**
     * Returns the current url.
     */
    EnvironmentDetector.prototype.getCurrentWindowUrl = function () {
        return window.location.href;
    };
    return EnvironmentDetector;
}());
var Authentication = (function () {
    function Authentication() {
    }
    /**
       * Configure the authentication library with the different available options
       *
       * @param {EgovAuthConfiguration} configuration The configuration options
       */
    Authentication.configure = function (configuration) {
        Authentication.isConfigured = true;
        Authentication.configuration = configuration;
        var envDetector = new EnvironmentDetector(configuration.environment, configuration.isHttps);
        this.authUrls = new AuthenticationUrls(envDetector, configuration);
    };
    Authentication.isAuthenticated = function () {
        return Authentication.authSession && Authentication.authSession.isAuthenticated;
    };
    /**
       * Returns the authentication configuration
       */
    Authentication.getConfiguration = function () {
        return Authentication.configuration;
    };
    Authentication.onSessionCreated = function (cb) {
        this.sessionCreatedCb = cb;
    };
    Authentication.getAuthSession = function () {
        return this.authSession;
    };
    Authentication.handleAjaxResponse = function (xhr) {
        var config = Authentication.configuration;
        HttpHandler.handleAjaxResponse(config, xhr);
    };
    Authentication.getUrls = function () {
        return this.authUrls;
    };
    Authentication.getCurrent = function (options) {
        var _this = this;
        // cannot add Promise as it causes compilation errors in jsui -> try later
        if (!Authentication.isConfigured) {
            throw new Error('Not configured, please invoke .configure(..) first');
        }
        if (!Authentication.configuration.httpLibrary) {
            throw new Error('No ajax library configured. Set the according property "httpLibrary"');
        }
        var httpBackend = new HttpBackend(Authentication.configuration.httpLibrary);
        var ajaxOptions = Object.assign({}, {
            url: this.getUrls().getCurrentUserUrl(),
            method: 'GET'
        }, options);
        return httpBackend.execute(ajaxOptions).then(function (userProps) {
            var user = new User(userProps);
            Authentication.authSession = new AuthSession(user, Authentication.configuration, _this.authUrls, httpBackend);
            if (_this.sessionCreatedCb) {
                _this.sessionCreatedCb(Authentication.authSession);
            }
            return user;
        });
    };
    /**
       * Manually initialize a new session by simply passing in the user object
       */
    Authentication.initWithUser = function (user) {
        if (!Authentication.isConfigured) {
            throw new Error('Not configured, please invoke .configure(..) first');
        }
        var httpBackend = new HttpBackend(Authentication.configuration.httpLibrary);
        Authentication.authSession = new AuthSession(new User(user), Authentication.configuration, this.authUrls, httpBackend);
    };
    return Authentication;
}());

exports.Authentication = Authentication;
exports.AuthSession = AuthSession;
exports.AuthenticationUrls = AuthenticationUrls;
exports.User = User;
exports.translate = translate;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=js-egov-authentication.umd.js.map
