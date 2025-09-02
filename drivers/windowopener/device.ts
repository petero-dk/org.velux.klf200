import VeluxDevice from '../../lib/VeluxDevice';

module.exports = class WindowOpenerDevice extends VeluxDevice {

  async onInit() {
    this.deviceTypeName = 'Window';
    this.supportsRainSensor = true;
    await super.onInit();
  }
};
