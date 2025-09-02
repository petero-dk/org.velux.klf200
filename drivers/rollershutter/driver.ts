
import { ActuatorType } from 'klf-200-api';
import VeluxDriver from '../../lib/VeluxDriver';

module.exports = class RollerShutterDriver extends VeluxDriver {
  async onInit() {
    this.deviceTypeName = 'RollerShutter';
    this.actuatorType = ActuatorType.RollerShutter;
    this.supportsRainSensor = false;
    await super.onInit();
  }
};
