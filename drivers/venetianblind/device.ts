
import VeluxDevice from '../../lib/VeluxDevice';

module.exports = class VenetianBlindDevice extends VeluxDevice {
  async onInit() {
    this.deviceTypeName = 'VenetianBlind';
    this.supportsRainSensor = false;
    await super.onInit();
  }

  /*
  Internal Venetian blinds, Exterior Venetian blind and Louver blind slat angle is set by FP3.
  */
};
