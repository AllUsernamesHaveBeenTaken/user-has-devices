import IUserHasDevices from './IUserHasDevices';

export class UserHasDevices implements IUserHasDevices {
    private devices: MediaDeviceInfo[] = [];
    private supportedConstraints: MediaTrackSupportedConstraints = {};

    constructor() {
        this.initialize();
    }

    public getDevices = (): MediaDeviceInfo[] => {
        return this.devices;
    };

    public getSupportedConstraints = (): MediaTrackSupportedConstraints => {
        return this.supportedConstraints;
    };

    private initialize = async (): Promise<void> => {
        this.devices = await this.initAllAvailavbleDevice();
        this.supportedConstraints = this.initSupportedConstraints();
    };

    private initAllAvailavbleDevice = async (): Promise<MediaDeviceInfo[]> => {
        const tempDevices: MediaDeviceInfo[] = [];
        try {
            const enumerateDevices = await navigator.mediaDevices.enumerateDevices();
            enumerateDevices.map((device: MediaDeviceInfo) => {
                tempDevices.push(device);
            });
        } catch (error) {
            console.error(error)
        }

        return tempDevices;
    };

    private initSupportedConstraints = (): MediaTrackSupportedConstraints => {
        let getSupportedConstraints: MediaTrackSupportedConstraints = {}
        try {
            getSupportedConstraints = navigator.mediaDevices.getSupportedConstraints();
        } catch (error) {
            console.error(error)
        }

        return getSupportedConstraints
    };
}
