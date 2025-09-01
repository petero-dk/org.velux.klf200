import VeluxDevice from '../../lib/VeluxDevice';

module.exports = class WindowOpenerDevice extends VeluxDevice {
  constructor() {
    super('Window', true);
  }
};
