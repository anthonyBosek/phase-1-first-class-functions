function receivesAFunction(fn) {
  fn();
}

function returnsANamedFunction() {
  return function named() {
    console.log("named");
  };
}

function returnsAnAnonymousFunction() {
  return function () {
    console.log("anonymous");
  };
}
