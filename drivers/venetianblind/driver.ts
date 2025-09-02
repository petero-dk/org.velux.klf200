
import { ActuatorType } from 'klf-200-api';
import VeluxDriver from '../../lib/VeluxDriver';

module.exports = class VenetianBlindDriver extends VeluxDriver {
  async onInit() {
    this.deviceTypeName = 'VenetianBlind';
    this.actuatorType = ActuatorType.VenetianBlind;
    this.supportsRainSensor = false;
    await super.onInit();
  }
};
