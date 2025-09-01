import Homey from 'homey';
import { Product, ActuatorType } from 'klf-200-api';
import VeluxHandler from '../../VeluxHandler';

const VeluxApp = require('../../app');

module.exports = class VenetianBlindDriver extends Homey.Driver {

  /**
   * onInit is called when the driver is initialized.
   */
  async onInit() {
    this.log('VenetianBlind has been initialized');
  }

  /**
   * onPairListDevices is called when a user is adding a device and the 'list_devices' view is called.
   * This should return an array with the data of devices that are available for pairing.
   */
  async onPairListDevices() {
    this.log('VenetianBlind onPairListDevices called');
    const app = this.homey.app as InstanceType<typeof VeluxApp>;
    const { veluxHandler } = app;
    if (!veluxHandler) {
      throw new Error('VeluxHandler not initialized');
    }
    // Ensure products are loaded
    if (!(veluxHandler as any)['products']) {
      await veluxHandler.connect();
    }
    return (veluxHandler as any)['products'].Products.filter((product: Product) => product.TypeID === ActuatorType.VenetianBlind).map((product: Product) => ({
      name: product.Name,
      data: {
        id: product.NodeID,
      },
      capabilities: ['windowcoverings_set', 'alarm_running'],
    }));
  }

};
