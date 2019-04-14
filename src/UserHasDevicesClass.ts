import IUserHasDevices from './IUserHasDevices';

export class UserHasDevices implements IUserHasDevices {
    private devices: MediaDeviceInfo[] = [];
    private supportedConstraints: MediaTrackSupportedConstraints = {};
    private userMedia: MediaStream[] = [];

    constructor() {
        this.initialize();
    }

    public getDevices = (): MediaDeviceInfo[] => {
        return this.devices;
    };

    public getSupportedConstraints = (): MediaTrackSupportedConstraints => {
        return this.supportedConstraints;
    };

    public getUserMedia = async (constraints: MediaStreamConstraints): Promise<MediaStream[]> => {
        if (this.userMedia.length <= 0) {
            this.userMedia = await this.saveGetUserMedia(constraints);
        }

        return this.userMedia;
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
            console.error(error);
        }

        return tempDevices;
    };

    private initSupportedConstraints = (): MediaTrackSupportedConstraints => {
        let getSupportedConstraints: MediaTrackSupportedConstraints = {};
        try {
            getSupportedConstraints = navigator.mediaDevices.getSupportedConstraints();
        } catch (error) {
            console.error(error);
        }

        return getSupportedConstraints;
    };

    private saveGetUserMedia = async (constraints: MediaStreamConstraints): Promise<MediaStream[]> => {
        const getUserMedia: MediaStream[] = [];

        await navigator.mediaDevices
            .getUserMedia(constraints)
            .then((stream: MediaStream) => {
                getUserMedia.push(stream);
            })
            .catch(error => {
                console.error(error);
            });

        return getUserMedia;
    };
}
