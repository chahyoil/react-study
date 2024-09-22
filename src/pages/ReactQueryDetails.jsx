// pages/ReactQueryDetails.jsx
import { useParams } from 'react-router-dom';
import { useUserId } from '@/hooks/useUserId';
import { Link } from 'react-router-dom';

export default function ReactQueryDetails() {
  // url에서 파라메터 가져오기
  const { userId } = useParams();
  // userId로 데이터 요청
  const { isLoading, isError, error, data } = useUserId(userId);
  console.log(data, '===');

  if (isLoading) return <>Loading...</>;

  if (isError) return <>{error.message}</>;

  return (
    <>
      {data[0] && (
        <div>
          {/* data배열 첫번째 요소의 객체사용 */}
          <p>ID : {data[0].id}</p>
          <p>NAME : {data[0].name}</p>
          <p>COTUNTRY : {data[0].country}</p>
          <Link className='btn' to={`/react-query`}>목록으로</Link>
        </div>
      )}
    </>
  );
}