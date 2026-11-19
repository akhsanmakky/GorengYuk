import { Platform } from 'react-native';

// Warna utama aplikasi GorengYuk
export const COLORS = {
  background: '#FFFDF8',
  surface: '#FFFFFF',
  primary: '#FFD21F',
  text: '#171717',
  secondary: '#737373',
  border: '#E8E5DC',
  success: '#27AE60',
  danger: '#F04444',
};

// Warna untuk komponen bawaan Expo
export const Colors = {
  light: {
    text: '#171717',
    background: '#FFFDF8',
    tint: '#E3A900',
    icon: '#737373',
    tabIconDefault: '#737373',
    tabIconSelected: '#171717',
    textSecondary: '#737373',
    backgroundElement: '#F5F2EA',
    backgroundSelected: '#FFF0B3',
    border: '#E8E5DC',
    link: '#B8860B',
    linkPrimary: '#B8860B',
  },

  dark: {
    text: '#F5F5F5',
    background: '#171717',
    tint: '#FFD21F',
    icon: '#B3B3B3',
    tabIconDefault: '#B3B3B3',
    tabIconSelected: '#FFD21F',
    textSecondary: '#B3B3B3',
    backgroundElement: '#262626',
    backgroundSelected: '#49401F',
    border: '#404040',
    link: '#FFD21F',
    linkPrimary: '#FFD21F',
  },
};

// Font yang kompatibel dengan Android, iOS, dan web
export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },

  android: {
    sans: 'sans-serif',
    serif: 'serif',
    rounded: 'sans-serif-rounded',
    mono: 'monospace',
  },

  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
})!;

// Jarak dan ukuran komponen
export const Spacing = {
  one: 4,
  two: 8,
  three: 12,
  four: 16,
  five: 24,
  six: 32,
};

// Konfigurasi layout aplikasi
export const BottomTabInset = 64;

export const MaxContentWidth = 960;