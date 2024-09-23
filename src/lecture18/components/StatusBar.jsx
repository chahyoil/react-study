import { useOnlineStatus } from '../hooks/useOnlineStatus';
import styles from './statusBar.module.css';

export function StatusBar() {
  const isOnline = useOnlineStatus();

  return (
  <div className={styles.wrap}>
    <p>{isOnline ? '✅ 온라인' : '❌ 오프라인'}</p>
  </div>
  );
}