import { User } from '@/types/common';

type UserKey = keyof User;
type UserValueMap = {
  [K in keyof User]: User[K];
};

export const session = {
  set<K extends UserKey>(key: K, value: UserValueMap[K]): void {
    const serializedValue = JSON.stringify(value);
    sessionStorage.setItem(key, serializedValue);
  },

  get<K extends UserKey>(key: K): UserValueMap[K] | null {
    const serializedValue = sessionStorage.getItem(key);
    if (serializedValue) {
      try {
        return JSON.parse(serializedValue) as UserValueMap[K];
      } catch {
        return null;
      }
    }
    return null;
  },

  remove(key: UserKey): void {
    sessionStorage.removeItem(key);
  },

  clear(): void {
    sessionStorage.clear();
  },
};
