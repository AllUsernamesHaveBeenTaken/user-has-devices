export default interface IUserHasDevices {
    getDevices: () => MediaDeviceInfo[];
    getSupportedConstraints: () => MediaTrackSupportedConstraints;
    getUserMedia: (constraints: MediaStreamConstraints) => Promise<MediaStream[]>;
}
