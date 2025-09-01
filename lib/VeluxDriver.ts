import Homey from 'homey';
import { Product, ActuatorType } from 'klf-200-api';

const VeluxApp = require('../app');

export default class VeluxDriver extends Homey.Driver {
  private deviceTypeName: string;
  private actuatorType: ActuatorType;
  private supportsRainSensor: boolean;

  constructor(deviceTypeName: string, actuatorType: ActuatorType, supportsRainSensor: boolean = false) {
    super();
    this.deviceTypeName = deviceTypeName;
    this.actuatorType = actuatorType;
    this.supportsRainSensor = supportsRainSensor;
  }

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
    const { veluxHandler } = app;
    if (!veluxHandler) {
      throw new Error('VeluxHandler not initialized');
    }
    // Ensure products are loaded
    if (!(veluxHandler as unknown)['products']) {
      await veluxHandler.connect();
    }
    return (veluxHandler as unknown)['products'].Products.filter((product: Product) => product.TypeID === this.actuatorType).map((product: Product) => ({
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