import { ActuatorType } from 'klf-200-api';
import VeluxDriver from '../../lib/VeluxDriver';

module.exports = class WindowOpenerDriver extends VeluxDriver {
  constructor() {
    super('Window', ActuatorType.WindowOpener, true);
  }
};
