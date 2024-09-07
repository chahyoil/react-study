import { useState } from 'react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import styles from "./saveButton.module.css"

export function SaveButton() {
  const [activeBtn, setActiveBtn] = useState(false);
  const isOnline = useOnlineStatus();

  function handleSave() {
    console.log('✅ 진행상황 저장됨');
    setActiveBtn(!activeBtn);
  }

  return (
  <>
    <hr />
    <div className={styles.wrap}>
      <button 
        className={`${styles.save_btn} ${activeBtn ? styles.active : ''}`}
        type="button" 
        disabled={!isOnline} 
        onClick={handleSave}>
        {isOnline ? '✅ 저장' : '❌ 재연결 중...'}
      </button>
      <p>진행사항 저장중입니다.</p>
    </div>
  </>
  );
}
