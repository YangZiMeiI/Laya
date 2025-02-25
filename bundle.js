"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // src/Main.ts
  var { regClass, property } = Laya;
  var Main = class extends Laya.Script {
    onStart() {
      console.log("Game start");
      console.log(this.startBtn.name);
      if (this.startBtn) {
        console.log("Game");
        this.startBtn.on("click", this, this.onButtonClick);
      }
    }
    onButtonClick() {
      console.log("MP4");
      this.video.visible = true;
      this.video.play();
    }
  };
  __decorateClass([
    property({ type: Laya.Image })
  ], Main.prototype, "startBtn", 2);
  __decorateClass([
    property({ type: Laya.VideoNode })
  ], Main.prototype, "video", 2);
  Main = __decorateClass([
    regClass("e60XQm7tTY2BwFAdxb8D1g")
  ], Main);
})();
