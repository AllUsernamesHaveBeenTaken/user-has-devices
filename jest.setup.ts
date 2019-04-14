const mockMediaDevices= {
	enumerateDevices: async () => {
		return [
			{deviceId: "default", kind: "audioinput", label: "", groupId: "2418be7831f691f57674c0a02596f74d5a7838ed368db4ce51e73e16997aa20f"},
			{deviceId: "e08bb75673f61b97c33625e54cdd3e2626a09204f7e77253bf8db384a97d38bb", kind: "audioinput", label: "", groupId: "eac4af9f01f1afe052ce8178927df5ecda6dbe861c39a3c327682b24e2094fd4"},
			{deviceId: "63b9ef04a2058b41ab94d0cb3f10b25eeafc911bf7fc5e87ae16956466fb3c1c", kind: "audioinput", label: "", groupId: "2418be7831f691f57674c0a02596f74d5a7838ed368db4ce51e73e16997aa20f"},
			{deviceId: "2354c4d602691b4c30ec400a659bfa78c35336a77f4f4e3523b778e8a3f6665e", kind: "videoinput", label: "", groupId: "f8412b433a999b71bd65358735b62dbb16feffe57069bc9372162b6d34fa7c67"},
			{deviceId: "default", kind: "audiooutput", label: "", groupId: "2418be7831f691f57674c0a02596f74d5a7838ed368db4ce51e73e16997aa20f"},
			{deviceId: "dd15cc251e792753c3cbfa89f3604eea5acdde71d490995f4a13ab8ce8144dd2", kind: "audiooutput", label: "", groupId: "eac4af9f01f1afe052ce8178927df5ecda6dbe861c39a3c327682b24e2094fd4"},
			{deviceId: "24151060720366600ba2ee0ff3025e2d3c7f37d5350b7bec9690bf601ec6ed49", kind: "audiooutput", label: "", groupId: "2418be7831f691f57674c0a02596f74d5a7838ed368db4ce51e73e16997aa20f"}
		]
	},
	getSupportedConstraints: () => {
		return {
			aspectRatio: true,
			autoGainControl: true,
			brightness: true,
			channelCount: true,
			colorTemperature: true,
			contrast: true,
			deviceId: true,
			echoCancellation: true,
			exposureCompensation: true,
			exposureMode: true,
			exposureTime: true,
			facingMode: true,
			focusDistance: true,
			focusMode: true,
			frameRate: true,
			groupId: true,
			height: true,
			iso: true,
			latency: true,
			noiseSuppression: true,
			pointsOfInterest: true,
			resizeMode: true,
			sampleRate: true,
			sampleSize: true,
			saturation: true,
			sharpness: true,
			torch: true,
			volume: true,
			whiteBalanceMode: true,
			width: true,
			zoom: true
		}
	},
	getUserMedia: jest.fn()
}

global.navigator.mediaDevices = mockMediaDevices