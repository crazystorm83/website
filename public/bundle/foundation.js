"use strict";
(() => {
  // utils/createUID.ts
  var UIdMap = /* @__PURE__ */ new Map();
  function createNodeSequentialUID() {
    const uidKey = "node";
    return createSequentialUID(uidKey);
  }
  function createElementSequentialUID() {
    const uidKey = "element";
    return createSequentialUID(uidKey);
  }
  function createEditorSequentialUID() {
    const uidKey = "editor";
    return createSequentialUID(uidKey);
  }
  function createSequentialUID(uidKey) {
    const uid = UIdMap.get(uidKey) ?? 1;
    UIdMap.set(uidKey, uid + 1);
    return `${uidKey}-${uid}`;
  }
})();
//# sourceMappingURL=foundation.js.map
