// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Caml_array = require("../../lib/js/caml_array.js");
var Caml_option = require("../../lib/js/caml_option.js");

function classify(x) {
  if (x === "A" && typeof x !== "number") {
    return "A";
  } else if (typeof x === "number") {
    return "An integer";
  } else {
    return "A string" + x;
  }
}

function classify2(x) {
  if (typeof x === "string") {
    return "A string" + x;
  } else {
    return "A float";
  }
}

function cls(x) {
  if (typeof x !== "object") {
    if (x === "One") {
      return "one";
    } else {
      return "two";
    }
  } else {
    return "object" + x.y;
  }
}

var ListWithTuples = {};

var ListWithObjects = {};

function tuplesToObjects(l) {
  if (l === undefined) {
    return null;
  } else {
    return {
            hd: l[0],
            tl: tuplesToObjects(l[1])
          };
  }
}

var l1 = [
  1,
  [
    2,
    [
      3,
      undefined
    ]
  ]
];

var l2 = tuplesToObjects(l1);

console.log("l1", l1);

console.log("l2", l2);

function isTrue(x) {
  if (typeof x !== "object") {
    return true;
  } else {
    return x.flag;
  }
}

var Truthy = {
  isTrue: isTrue
};

function classify$1(x) {
  if (x === null || typeof x !== "object") {
    if (x === null) {
      return "null";
    } else {
      return "undefined";
    }
  } else {
    return "object" + x.name;
  }
}

var TwoObjects = {
  classify: classify$1
};

function classify$2(x) {
  if (x === "A" || x === "B") {
    if (x === "A") {
      return "a";
    } else {
      return "b";
    }
  }
  console.log(x);
  return "Unknown";
}

var Unknown = {
  classify: classify$2
};

function classify$3(x) {
  if (typeof x !== "object" && typeof x !== "number" && (x === "C" || x === "B" || x === "A" || x === "D")) {
    switch (x) {
      case "A" :
          return "a";
      case "B" :
          return "b";
      case "C" :
          return "c";
      case "D" :
          return "d";
      
    }
  } else {
    switch (typeof x) {
      case "string" :
          return "string";
      case "number" :
          return "int";
      case "object" :
          return "Object" + x.name;
      
    }
  }
}

var MultipleBlocks = {
  classify: classify$3
};

function classify$4(x) {
  switch (typeof x) {
    case "string" :
        return "string";
    case "number" :
        return "int";
    case "object" :
        return "Object" + x.name;
    
  }
}

var OnlyBlocks = {
  classify: classify$4
};

function classify$5(x) {
  if (Array.isArray(x)) {
    return "array";
  }
  switch (typeof x) {
    case "string" :
        return "string";
    case "number" :
        return "int";
    case "object" :
        return "Object" + x.name;
    
  }
}

var WithArray = {
  classify: classify$5
};

function classify$6(x) {
  if (!Array.isArray(x) && (x === null || typeof x !== "object") && typeof x !== "number" && typeof x !== "string") {
    switch (x) {
      case false :
          return "JSONFalse";
      case true :
          return "JSONTrue";
      case null :
          return "JSONNull";
      
    }
  } else {
    if (Array.isArray(x)) {
      return {
              TAG: "JSONArray",
              _0: x
            };
    }
    switch (typeof x) {
      case "string" :
          return {
                  TAG: "JSONString",
                  _0: x
                };
      case "number" :
          return {
                  TAG: "JSONNumber",
                  _0: x
                };
      case "object" :
          return {
                  TAG: "JSONObject",
                  _0: x
                };
      
    }
  }
}

var Json = {
  classify: classify$6
};

function check(s, y) {
  if (s === "B") {
    return 42;
  }
  var x = s[0];
  if (x === "B") {
    return 42;
  }
  var tmp = s[1];
  if (tmp === "B" && x !== y) {
    return 41;
  } else {
    return 42;
  }
}

var TrickyNested = {
  check: check
};

function checkEnum(e) {
  if (!(e === "Two" || e === "One" || e === "Three")) {
    return "Something else..." + e;
  }
  switch (e) {
    case "One" :
        return "One!";
    case "Two" :
        return "Two";
    case "Three" :
        return "Threeeee";
    
  }
}

var OverlapString = {
  checkEnum: checkEnum
};

function checkEnum$1(e) {
  if (!(e === "Two" || e === 1.0 || e === "Three")) {
    return "Something else...";
  }
  switch (e) {
    case 1.0 :
        return "One!";
    case "Two" :
        return "Two";
    case "Three" :
        return "Threeeee";
    
  }
}

var OverlapNumber = {
  checkEnum: checkEnum$1
};

function checkEnum$2(e) {
  if (!(e === null || typeof e !== "object")) {
    return "Object...";
  }
  switch (e) {
    case null :
        return "One!";
    case "Two" :
        return "Two";
    case "Three" :
        return "Threeeee";
    
  }
}

var OverlapObject = {
  checkEnum: checkEnum$2
};

function classify$7(v) {
  if (Array.isArray(v)) {
    return Caml_array.get(v, 0);
  } else {
    return v.x;
  }
}

var RecordIsObject = {
  classify: classify$7
};

function classify$8(v) {
  if (typeof v === "object" && !Array.isArray(v)) {
    return v.x;
  } else {
    return Caml_array.get(v, 0);
  }
}

var ArrayAndObject = {
  classify: classify$8
};

function testHasNull(x) {
  return x;
}

function testHasUndefined(x) {
  return Caml_option.some(x);
}

function untaggedWithOptionPayload(x) {
  return Caml_option.some(x);
}

function untaggedWithIntPayload(x) {
  return x;
}

function untaggedInlineNoOptions(x) {
  return x;
}

function untaggedInlineUnaryWihtExplicitOption(x) {
  return Caml_option.some(x);
}

function untaggedInlineUnaryWihtImplicitOption(x) {
  return Caml_option.some(x);
}

function untaggedInlineMultinaryOption(x) {
  return x;
}

var OptionUnboxingHeuristic = {
  testHasNull: testHasNull,
  testHasUndefined: testHasUndefined,
  untaggedWithOptionPayload: untaggedWithOptionPayload,
  untaggedWithIntPayload: untaggedWithIntPayload,
  untaggedInlineNoOptions: untaggedInlineNoOptions,
  untaggedInlineUnaryWihtExplicitOption: untaggedInlineUnaryWihtExplicitOption,
  untaggedInlineUnaryWihtImplicitOption: untaggedInlineUnaryWihtImplicitOption,
  untaggedInlineMultinaryOption: untaggedInlineMultinaryOption
};

function classify$9(v) {
  if (Array.isArray(v)) {
    return Caml_array.get(v, 0);
  }
  switch (typeof v) {
    case "object" :
        return v.x;
    case "function" :
        return v(3);
    
  }
}

var ff = (function (x) {
    return x + 1 | 0;
  });

var TestFunctionCase = {
  classify: classify$9,
  ff: ff
};

var someJson = '[{"name": "Haan"}, {"name": "Mr"}, false]';

function check$1(s) {
  if (!Array.isArray(s) && (s === null || typeof s !== "object") && typeof s !== "number" && typeof s !== "string") {
    console.log("Nope...");
    return ;
  }
  if (Array.isArray(s)) {
    if (s.length !== 3) {
      console.log("Nope...");
      return ;
    }
    var match = s[0];
    if (match === true) {
      var match$1 = s[1];
      if (match$1 === false) {
        var match$2 = s[2];
        if (!Array.isArray(match$2) && (match$2 === null || typeof match$2 !== "object") && typeof match$2 !== "number" && typeof match$2 !== "string") {
          console.log("Nope...");
          return ;
        }
        if (Array.isArray(match$2)) {
          if (match$2.length !== 2) {
            console.log("Nope...");
            return ;
          }
          var match$3 = match$2[0];
          if (!Array.isArray(match$3) && (match$3 === null || typeof match$3 !== "object") && typeof match$3 !== "number" && typeof match$3 !== "string") {
            console.log("Nope...");
            return ;
          }
          if (typeof match$3 === "string" && match$3 === "My name is") {
            var match$4 = match$2[1];
            if (!Array.isArray(match$4) && (match$4 === null || typeof match$4 !== "object") && typeof match$4 !== "number" && typeof match$4 !== "string") {
              console.log("Nope...");
              return ;
            }
            if (typeof match$4 === "number") {
              if (match$4 !== 10) {
                console.log("Nope...");
              } else {
                console.log("yup");
              }
              return ;
            }
            console.log("Nope...");
            return ;
          } else {
            console.log("Nope...");
            return ;
          }
        } else {
          console.log("Nope...");
          return ;
        }
      } else {
        console.log("Nope...");
        return ;
      }
    } else {
      console.log("Nope...");
      return ;
    }
  } else {
    console.log("Nope...");
    return ;
  }
}

var ComplexPattern = {
  someJson: someJson,
  check: check$1
};

var i = 42;

var i2 = 42.5;

var s = "abc";

var s2 = "abc";

var w = {
  x: 10,
  y: ""
};

exports.i = i;
exports.i2 = i2;
exports.s = s;
exports.s2 = s2;
exports.classify = classify;
exports.classify2 = classify2;
exports.w = w;
exports.cls = cls;
exports.ListWithTuples = ListWithTuples;
exports.ListWithObjects = ListWithObjects;
exports.tuplesToObjects = tuplesToObjects;
exports.l1 = l1;
exports.l2 = l2;
exports.Truthy = Truthy;
exports.TwoObjects = TwoObjects;
exports.Unknown = Unknown;
exports.MultipleBlocks = MultipleBlocks;
exports.OnlyBlocks = OnlyBlocks;
exports.WithArray = WithArray;
exports.Json = Json;
exports.TrickyNested = TrickyNested;
exports.OverlapString = OverlapString;
exports.OverlapNumber = OverlapNumber;
exports.OverlapObject = OverlapObject;
exports.RecordIsObject = RecordIsObject;
exports.ArrayAndObject = ArrayAndObject;
exports.OptionUnboxingHeuristic = OptionUnboxingHeuristic;
exports.TestFunctionCase = TestFunctionCase;
exports.ComplexPattern = ComplexPattern;
/* l2 Not a pure module */
