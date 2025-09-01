import { ActuatorType } from 'klf-200-api';
import VeluxDriver from '../../lib/VeluxDriver';

module.exports = class AwningDriver extends VeluxDriver {
  constructor() {
    super('Awning', ActuatorType.Awning);
  }
};
