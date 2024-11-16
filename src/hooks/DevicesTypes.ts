import { useMediaQuery } from 'react-responsive';

interface DeviceType {
  isMobile: boolean;
}

export function useDeviceType(): DeviceType {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return { isMobile };
}
