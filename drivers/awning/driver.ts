
import { ActuatorType } from 'klf-200-api';
import VeluxDriver from '../../lib/VeluxDriver';

module.exports = class AwningDriver extends VeluxDriver {
  async onInit() {
    this.deviceTypeName = 'Awning';
    this.actuatorType = ActuatorType.Awning;
    this.supportsRainSensor = false;
    await super.onInit();
  }
};
