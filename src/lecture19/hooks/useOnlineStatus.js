import {useState, useEffect} from 'react';

export function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const checkOnlineStatus = async () => {
      try {
        const response = await fetch("https://example.com/ping", {
          method: "GET",
          mode: "no-cors",
        });
        setIsOnline(response.ok || response.type === "opaque");
      } catch (error) {
        setIsOnline(false);
      }
    };

    // 10초마다 상태 체크
    const interval = setInterval(checkOnlineStatus, 10000);
    
    // 이벤트 리스너 추가
    window.addEventListener("online", checkOnlineStatus);
    window.addEventListener("offline", () => setIsOnline(false));

    return () => {
      clearInterval(interval);
      window.removeEventListener("online", checkOnlineStatus);
      window.removeEventListener("offline", () => setIsOnline(false));
    };
  }, []);

    return isOnline;
}