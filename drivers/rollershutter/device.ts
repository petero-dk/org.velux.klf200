
import VeluxDevice from '../../lib/VeluxDevice';

module.exports = class RollerShutterDevice extends VeluxDevice {
  async onInit() {
    this.deviceTypeName = 'RollerShutter';
    this.supportsRainSensor = false;
    await super.onInit();
  }

  /*

  only for subtype 1:
  MP Position of shutter
  FP1 Speed of shutter
  FP2 speed of slats during orientation
  FP3 orientation of slats

  */
};
