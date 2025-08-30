'use strict';

import Homey from 'homey';
import VeluxHandler from './VeluxHandler';
const { Log } = require('homey-log');

module.exports = class VeluxApp extends Homey.App {
  veluxHandler: VeluxHandler | null = null;
  homeyLog: any;

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.homeyLog = new Log({ homey: this.homey });
    this.log('VeluxApp has been initialized');
    try {
      this.veluxHandler = new VeluxHandler(this);
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
