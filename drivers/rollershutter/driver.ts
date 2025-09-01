import { ActuatorType } from 'klf-200-api';
import VeluxDriver from '../../lib/VeluxDriver';

module.exports = class RollerShutterDriver extends VeluxDriver {
  constructor() {
    super('RollerShutter', ActuatorType.RollerShutter);
  }
};
