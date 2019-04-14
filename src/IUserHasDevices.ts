export default interface IUserHasDevices {
    getDevices: () => MediaDeviceInfo[];
    getSupportedConstraints: () => MediaTrackSupportedConstraints;
}
