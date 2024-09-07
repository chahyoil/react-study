import { useOnlineStatus } from '../hooks/useOnlineStatus';

export function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSave() {
    console.log('✅ 진행상황 저장됨');
  }

  return (
    <button type="button" disabled={!isOnline} onClick={handleSave}>
      {isOnline ? '✅ 저장' : '❌ 재연결 중...'}
    </button>
  );
}
