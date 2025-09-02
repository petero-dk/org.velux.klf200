import Homey from 'homey';
import { Product, ActuatorType } from 'klf-200-api';

const VeluxApp = require('../app');

export default class VeluxDriver extends Homey.Driver {
  public deviceTypeName: string | null = null;
  public actuatorType: ActuatorType | null = null;
  public supportsRainSensor: boolean = false;


  /**
   * onInit is called when the driver is initialized.
   */
  async onInit() {
    this.log(`${this.deviceTypeName} has been initialized`);
  }

  /**
   * onPairListDevices is called when a user is adding a device and the 'list_devices' view is called.
   * This should return an array with the data of devices that are available for pairing.
   */
  async onPairListDevices() {
    this.log(`${this.deviceTypeName} onPairListDevices called`);
    const app = this.homey.app as InstanceType<typeof VeluxApp>;
    const veluxHandler = app.veluxHandler;
    if (!veluxHandler) {
      throw new Error('VeluxHandler not initialized');
    }
    // Ensure products are loaded
    if (!veluxHandler.products) {
      await veluxHandler.connect();
    }
    return veluxHandler.products.Products.filter((product: Product) => product.TypeID === this.actuatorType).map((product: Product) => ({
      name: product.Name,
      data: {
        id: product.NodeID,
      },
      capabilities: this.getCapabilities(product),
    }));
  }

  private getCapabilities(product: Product): string[] {
    if (this.supportsRainSensor && product.SubType === 1) {
      return ['windowcoverings_set', 'alarm_raining', 'alarm_running'];
    }
    return ['windowcoverings_set', 'alarm_running'];
  }
}