import { useOnlineStatus } from '../hooks/useOnlineStatus';

export function StatusBar() {
  const isOnline = useOnlineStatus();

  return <p>{isOnline ? '✅ 온라인' : '❌ 오프라인'}</p>;
}
