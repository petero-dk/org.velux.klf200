
import VeluxDevice from '../../lib/VeluxDevice';

module.exports = class VenetianBlindDevice extends VeluxDevice {
  async onInit() {
    this.deviceTypeName = 'VenetianBlind';
    this.supportsRainSensor = false;
    await super.onInit();
  }
};
