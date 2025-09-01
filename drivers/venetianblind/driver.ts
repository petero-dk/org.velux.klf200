import { ActuatorType } from 'klf-200-api';
import VeluxDriver from '../../lib/VeluxDriver';

module.exports = class VenetianBlindDriver extends VeluxDriver {
  constructor() {
    super('VenetianBlind', ActuatorType.VenetianBlind);
  }
};
