import { ActuatorType } from 'klf-200-api';
import VeluxDriver from '../../lib/VeluxDriver';

module.exports = class WindowOpenerDriver extends VeluxDriver {

  async onInit() {
    this.deviceTypeName = 'Window';
    this.actuatorType = ActuatorType.WindowOpener;
    this.supportsRainSensor = true;
    super.onInit();
  }
  
};
