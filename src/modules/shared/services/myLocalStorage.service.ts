import { type ObjectValuesInfer } from '@/shared/utils';

import { type LocalStorageService } from './localStorage.interface';

export const localStorageKeys = {
	themeColor: '[THEME]_COLOR_SCHEME',
	bookmark: '[BOOKMARK]_CHAPTER',
} as const;

export type LocalStorageKeys = ObjectValuesInfer<typeof localStorageKeys>;

export function MyLocalStorageService(): LocalStorageService {
	return {
		save: <Value>(key: LocalStorageKeys, value: Value): void => {
			const _value: string =
				typeof value !== 'string' ? JSON.stringify(value) : value;

			window.localStorage.setItem(key, _value);
		},

		find: <T extends string>(key: LocalStorageKeys): T | undefined => {
			const value = window.localStorage.getItem(key);

			return value as T;
		},

		remove: key => {
			window.localStorage.remove(key);
		},
	};
}
