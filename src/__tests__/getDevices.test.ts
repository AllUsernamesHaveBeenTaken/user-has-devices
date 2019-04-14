import { UserHasDevices } from '../UserHasDevicesClass';

const Devices = new UserHasDevices();

test('getDevices', async () => {
    const enumeratedevices = await navigator.mediaDevices.enumerateDevices();
    expect(Devices.getDevices()).toHaveLength(enumeratedevices.length);
});
