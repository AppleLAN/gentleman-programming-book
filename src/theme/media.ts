import { mediaHelper } from 'src/utils/mediaHelper';

export const deviceSize = {
	xs: 480,
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
	xl2: 1440,
	xl3: 1920,
	// xl2: 1536,
} as const;

export type DeviceSize = keyof typeof deviceSize;

export const media = mediaHelper(deviceSize);
