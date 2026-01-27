"use strict";
(() => {
  // exception/ThrowException.ts
  function throwException(condition, message) {
    if (condition) {
      return;
    }
    throw new Error(message);
  }

  // executor/Executor.ts
  var Executor = class {
  };
})();
//# sourceMappingURL=browser_foundation.js.map
