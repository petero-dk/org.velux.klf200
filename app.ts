'use strict';

import Homey from 'homey';
import VeluxHandler from './VeluxHandler';

module.exports = class VeluxApp extends Homey.App {
  veluxHandler: VeluxHandler | null = null;

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('VeluxApp has been initialized');
    this.veluxHandler = new VeluxHandler(this);
    try {
      await this.veluxHandler.init();
      this.log('VeluxHandler initialized and keep-alive started');
    } catch (err) {
      this.log('VeluxHandler failed to initialize', err);
    }
  }

  async onUninit() {
    this.log('VeluxApp is being uninitialized');
    await this.veluxHandler?.stop();
  }
}
