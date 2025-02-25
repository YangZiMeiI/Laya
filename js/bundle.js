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
      this.videoJianSheng = new Laya.VideoNode();
      this.videoJianSheng.load("resources/libai.mp4");
      this.videoJianSheng.pos(0, 0);
      this.videoJianSheng.width = 720;
      this.videoJianSheng.height = 1280;
      this.chouquImg = new Laya.Image();
      this.chouquImg.loadImage("resources/chouqu.png");
      this.chouquImg.pos(216, 875);
      this.chouquImg.width = 288;
      this.chouquImg.height = 183;
      Laya.stage.addChild(this.videoJianSheng);
      this.videoJianSheng.muted = true;
      this.videoJianSheng.videoTexture.on("ended", this, this.onVideoComplete);
      this.videoJianSheng.play();
    }
    onVideo() {
      this.videoJianSheng = new Laya.VideoNode();
      this.videoJianSheng.load("resources/libai.mp4");
      this.videoJianSheng.pos(0, 0);
      this.videoJianSheng.width = 720;
      this.videoJianSheng.height = 1280;
      Laya.stage.addChild(this.videoJianSheng);
      this.videoJianSheng.play();
    }
    onVideoComplete() {
      console.log("Video playback completed!");
      this.videoJianSheng.off("complete", this, this.onVideoComplete);
      Laya.stage.addChild(this.chouquImg);
      console.log(this.chouquImg);
      this.chouquImg.on("click", this, this.onChouQuClick);
    }
    onChouQuClick() {
      this.chouquImg.destroy();
      this.chouquImg = null;
      this.videoJianSheng.destroy();
      this.videoJianSheng = null;
      const min = 1;
      const max = 2;
      const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
      this.videoJianSheng = new Laya.VideoNode();
      if (randomInt == 1) {
        this.videoJianSheng.load("resources/chouka1.mp4");
      } else {
        this.videoJianSheng.load("resources/chouka2.mp4");
      }
      this.videoJianSheng.pos(0, 0);
      this.videoJianSheng.width = 720;
      this.videoJianSheng.height = 1280;
      this.videoJianSheng.videoTexture.on("ended", this, () => {
        this.textBaoCun = new Laya.TextArea();
        this.textBaoCun.pos(133, 1100);
        this.textBaoCun.width = 454;
        this.textBaoCun.height = 80;
        this.textBaoCun.fontSize = 40;
        this.textBaoCun.align = "center";
        this.textBaoCun.valign = "middle";
        this.textBaoCun.text = "是否保留本次卡牌？";
        this.textBaoCun.color = "#ffffff";
        this.textBaoCun.skin = "atlas/comp/textarea.png";
        Laya.stage.addChild(this.textBaoCun);
        this.yesBtn = new Laya.Button();
        this.yesBtn.pos(133, 1230);
        this.yesBtn.label = "是";
        this.yesBtn.width = 120;
        this.yesBtn.height = 40;
        this.yesBtn.skin = "atlas/comp/button.png";
        this.noBtn = new Laya.Button();
        this.noBtn.pos(467, 1230);
        this.noBtn.label = "否";
        this.noBtn.width = 120;
        this.noBtn.height = 40;
        this.noBtn.skin = "atlas/comp/button.png";
        Laya.stage.addChild(this.yesBtn);
        Laya.stage.addChild(this.noBtn);
        this.yesBtn.on("click", this, () => {
          this.videoJianSheng.off("complete", this);
          this.videoJianSheng.destroy();
          this.videoJianSheng = null;
          this.textBaoCun.destroy();
          this.textBaoCun = null;
          this.yesBtn.destroy();
          this.yesBtn = null;
          this.noBtn.destroy();
          this.noBtn = null;
        });
        this.noBtn.on("click", this, () => {
          this.videoJianSheng.off("complete", this);
          this.videoJianSheng.destroy();
          this.videoJianSheng = null;
          this.textBaoCun.destroy();
          this.textBaoCun = null;
          this.yesBtn.destroy();
          this.yesBtn = null;
          this.noBtn.destroy();
          this.noBtn = null;
        });
      });
      Laya.stage.addChild(this.videoJianSheng);
      this.videoJianSheng.play();
    }
  };
  __decorateClass([
    property({ type: Laya.Image })
  ], Main.prototype, "startImg", 2);
  Main = __decorateClass([
    regClass("e60XQm7tTY2BwFAdxb8D1g")
  ], Main);
})();
