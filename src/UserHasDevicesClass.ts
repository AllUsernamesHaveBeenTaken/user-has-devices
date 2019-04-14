import IUserHasDevices from './IUserHasDevices';

export class UserHasDevices implements IUserHasDevices {
    private devices: MediaDeviceInfo[] = [];

    constructor() {
        this.initialize();
    }

    public getDevices = (): MediaDeviceInfo[] => {
        return this.devices;
    };

    private initialize = async (): Promise<void> => {
        this.devices = await this.getAllAvailavbleDevice();
    };

    private getAllAvailavbleDevice = async (): Promise<MediaDeviceInfo[]> => {
        const tempDevices: MediaDeviceInfo[] = [];
        const enumerateDevices = await navigator.mediaDevices.enumerateDevices()
        enumerateDevices.map((device: MediaDeviceInfo) => {
            tempDevices.push(device);
        });

        return tempDevices;
    };
}
