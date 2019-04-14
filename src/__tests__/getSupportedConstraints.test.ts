import { UserHasDevices } from '../UserHasDevicesClass';

const Devices = new UserHasDevices();

test('getSupportedConstraints', async () => {
    const supportedConstraints = await navigator.mediaDevices.getSupportedConstraints();
    expect(Devices.getSupportedConstraints()).toEqual(supportedConstraints);
});
