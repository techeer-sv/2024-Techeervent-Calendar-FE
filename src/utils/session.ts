import { User } from '@/types/common';

export const session = {
  set: (key: string, value: User): void => {
    const serializedValue = JSON.stringify(value);
    sessionStorage.setItem(key, serializedValue);
  },

  get: <User>(key: string): User | null => {
    const serializedValue = sessionStorage.getItem(key);
    if (serializedValue) {
      try {
        return JSON.parse(serializedValue) as User;
      } catch {
        console.error(`Failed to parse sessionStorage value for key: ${key}`);
        return null;
      }
    }
    return null;
  },

  remove: (key: string): void => {
    sessionStorage.removeItem(key);
  },

  clear: (): void => {
    sessionStorage.clear();
  },
};
