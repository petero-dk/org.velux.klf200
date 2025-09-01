import Homey from 'homey';
import { Product, RunStatus } from 'klf-200-api';
import VeluxHandler from '../../VeluxHandler';

const VeluxApp = require('../../app');

module.exports = class VenetianBlindDevice extends Homey.Device {

  private product: Product | undefined;

  /**
   * onInit is called when the device is initialized.
   */
  async onInit() {
    this.log('Velux VenetianBlind has been initialized');

    const app = this.homey.app as InstanceType<typeof VeluxApp>;
    const { veluxHandler } = app;

    const data = this.getData();
    this.product = veluxHandler?.getProductByNodeID(data.id);

    this.log('Associated product', this.product?.Name);

    this.product?.propertyChangedEvent.on((property) => {
      this.log('Property changed', property.propertyName, property.propertyValue);

      switch (property.propertyName) {
        case 'CurrentPosition':
          this.log('Setting value', 'windowcoverings_set', property.propertyValue);
          this.setCapabilityValue('windowcoverings_set', property.propertyValue).catch(this.error);
          break;
        case 'RunStatus':
          this.setCapabilityValue('alarm_running', property.propertyValue !== RunStatus.ExecutionCompleted).catch(this.error);
          break;
        default:
          break;
      }
    });

    this.registerCapabilityListener('windowcoverings_set', async (value) => {
      this.log('Setting value', 'windowcoverings_set', value);
      await this.product?.setTargetPositionAsync(value as number);
    });
  }

  /**
   * onAdded is called when the user adds the device, called just after pairing.
   */
  async onAdded() {
    this.log('Velux VenetianBlind has been added');
  }

  /**
   * onSettings is called when the user updates the device's settings.
   * @param {object} event the onSettings event data
   * @param {object} event.oldSettings The old settings object
   * @param {object} event.newSettings The new settings object
   * @param {string[]} event.changedKeys An array of keys changed since the previous version
   * @returns {Promise<string|void>} return a custom message that will be displayed
   */
  async onSettings({
    oldSettings,
    newSettings,
    changedKeys,
  }: {
    oldSettings: { [key: string]: boolean | string | number | undefined | null };
    newSettings: { [key: string]: boolean | string | number | undefined | null };
    changedKeys: string[];
  }): Promise<string | void> {
    this.log('Velux VenetianBlind settings where changed');
  }

  /**
   * onRenamed is called when the user updates the device's name.
   * This method can be used this to synchronise the name to the device.
   * @param {string} name The new name
   */
  async onRenamed(name: string) {
    this.log('Velux VenetianBlind was renamed');
  }

  /**
   * onDeleted is called when the user deleted the device.
   */
  async onDeleted() {
    this.log('Velux VenetianBlind has been deleted');
  }

};
