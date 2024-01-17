// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as ImportHooks from "./ImportHooks.res.js";
import * as ImportHookDefault from "./ImportHookDefault.res.js";

function Hooks(Props) {
  var vehicle = Props.vehicle;
  var match = React.useState(function (param) {
        return 0;
      });
  var setCount = match[1];
  var count = match[0];
  return React.createElement("div", undefined, React.createElement("p", undefined, "Hooks example " + (vehicle.name + (" clicked " + (String(count) + " times")))), React.createElement("button", {
                  onClick: (function (param) {
                      Curry._1(setCount, (function (param) {
                              return count + 1 | 0;
                            }));
                    })
                }, "Click me"), React.createElement(ImportHooks.make, {
                  person: {
                    name: "Mary",
                    age: 71
                  },
                  children: null,
                  renderMe: (function (x) {
                      return x.randomString;
                    })
                }, "child1", "child2"), React.createElement(ImportHookDefault.make, {
                  person: {
                    name: "DefaultImport",
                    age: 42
                  },
                  children: null,
                  renderMe: (function (x) {
                      return x.randomString;
                    })
                }, "child1", "child2"));
}

function Hooks$Another$anotherComponent(Props) {
  var vehicle = Props.vehicle;
  var callback = Props.callback;
  Curry._1(callback, undefined);
  return React.createElement("div", undefined, "Another Hook " + vehicle.name);
}

var Another = {
  anotherComponent: Hooks$Another$anotherComponent
};

function Hooks$Inner(Props) {
  var vehicle = Props.vehicle;
  return React.createElement("div", undefined, "Another Hook " + vehicle.name);
}

function Hooks$Inner$Another$anotherComponent(Props) {
  var vehicle = Props.vehicle;
  return React.createElement("div", undefined, "Another Hook " + vehicle.name);
}

var Another$1 = {
  anotherComponent: Hooks$Inner$Another$anotherComponent
};

function Hooks$Inner$Inner2(Props) {
  var vehicle = Props.vehicle;
  return React.createElement("div", undefined, "Another Hook " + vehicle.name);
}

function Hooks$Inner$Inner2$Another$anotherComponent(Props) {
  var vehicle = Props.vehicle;
  return React.createElement("div", undefined, "Another Hook " + vehicle.name);
}

var Another$2 = {
  anotherComponent: Hooks$Inner$Inner2$Another$anotherComponent
};

var Inner2 = {
  make: Hooks$Inner$Inner2,
  Another: Another$2
};

var Inner = {
  make: Hooks$Inner,
  Another: Another$1,
  Inner2: Inner2
};

function Hooks$NoProps(Props) {
  return React.createElement("div", undefined, null);
}

var NoProps = {
  make: Hooks$NoProps
};

function functionWithRenamedArgs(_to, _Type, cb) {
  Curry._1(cb, _to);
  return _to.name + _Type.name;
}

function Hooks$WithRename$componentWithRenamedArgs(Props) {
  var _to = Props._to;
  var _Type = Props._Type;
  var cb = Props.cb;
  Curry._1(cb, _to);
  return _to.name + _Type.name;
}

var WithRename = {
  componentWithRenamedArgs: Hooks$WithRename$componentWithRenamedArgs
};

function makeWithRef(vehicle) {
  return function (ref) {
    if (ref == null) {
      return null;
    } else {
      return React.createElement("button", {
                  ref: ref
                }, vehicle.name);
    }
  };
}

function Hooks$WithRef$makeWithRef(Props) {
  return makeWithRef(Props.vehicle);
}

var WithRef = {
  makeWithRef: Hooks$WithRef$makeWithRef
};

var testForwardRef = React.forwardRef(function (param, param$1) {
      return makeWithRef(param.vehicle)(param$1);
    });

var input = React.forwardRef(function (Props, param) {
      var partial_arg = Props.r;
      return React.createElement("div", {
                  ref: param
                }, partial_arg.x);
    });

var ForwardRef = {
  input: input
};

function Hooks$Poly$polymorphicComponent(Props) {
  var param = Props.p;
  return param[0].name;
}

var Poly = {
  polymorphicComponent: Hooks$Poly$polymorphicComponent
};

function Hooks$Fun$functionReturningReactElement(Props) {
  return Props.name;
}

var Fun = {
  functionReturningReactElement: Hooks$Fun$functionReturningReactElement
};

function Hooks$RenderPropRequiresConversion(Props) {
  var renderVehicle = Props.renderVehicle;
  return Curry._1(renderVehicle, {
              vehicle: {
                name: "Car"
              },
              number: 42
            });
}

var RenderPropRequiresConversion = {
  make: Hooks$RenderPropRequiresConversion
};

function Hooks$WithChildren$aComponentWithChildren(Props) {
  var vehicle = Props.vehicle;
  var children = Props.children;
  return React.createElement("div", undefined, "Another Hook " + vehicle.name, React.createElement("div", undefined, children));
}

var WithChildren = {
  aComponentWithChildren: Hooks$WithChildren$aComponentWithChildren
};

function Hooks$DD(Props) {
  var name = Props.name;
  return name;
}

var DD = {
  make: Hooks$DD
};

var make = Hooks;

var $$default = Hooks;

export {
  make ,
  $$default as default,
  Another ,
  Inner ,
  NoProps ,
  functionWithRenamedArgs ,
  WithRename ,
  WithRef ,
  testForwardRef ,
  ForwardRef ,
  Poly ,
  Fun ,
  RenderPropRequiresConversion ,
  WithChildren ,
  DD ,
}
/* testForwardRef Not a pure module */