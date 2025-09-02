
import VeluxDevice from '../../lib/VeluxDevice';

module.exports = class RollerShutterDevice extends VeluxDevice {
  async onInit() {
    this.deviceTypeName = 'RollerShutter';
    this.supportsRainSensor = false;
    await super.onInit();
  }
};
