export default class UIHandler {
  constructor(scene) {
    this.buidGameText = () => {
      scene.dealCards = scene.add
        .text(960, 445, "Deal Cards")
        .setFontSize(14)
        .setFontFamily("Trebuchet MS");
    };

    this.buildUI = () => {
      this.buidGameText();
    };
  }
}
