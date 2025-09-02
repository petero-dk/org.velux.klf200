
import VeluxDevice from '../../lib/VeluxDevice';

module.exports = class GarageOpenerDevice extends VeluxDevice {
  async onInit() {
    this.deviceTypeName = 'GarageOpener';
    this.supportsRainSensor = false;
    await super.onInit();
  }
};
