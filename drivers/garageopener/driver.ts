import { ActuatorType } from 'klf-200-api';
import VeluxDriver from '../../lib/VeluxDriver';

module.exports = class GarageOpenerDriver extends VeluxDriver {
  constructor() {
    super('GarageOpener', ActuatorType.GarageOpener);
  }
};
