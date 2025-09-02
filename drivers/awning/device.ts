
import VeluxDevice from '../../lib/VeluxDevice';

module.exports = class AwningDevice extends VeluxDevice {
  async onInit() {
    this.deviceTypeName = 'Awning';
    this.supportsRainSensor = false;
    await super.onInit();
  }
};
