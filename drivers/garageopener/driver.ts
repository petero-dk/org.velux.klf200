
import { ActuatorType } from 'klf-200-api';
import VeluxDriver from '../../lib/VeluxDriver';

module.exports = class GarageOpenerDriver extends VeluxDriver {
  async onInit() {
    this.deviceTypeName = 'GarageOpener';
    this.actuatorType = ActuatorType.GarageOpener;
    this.supportsRainSensor = false;
    await super.onInit();
  }
};
