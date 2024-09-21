import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useUserName } from '@/hooks/useUserName';

// pages/ReactQuery.jsx

export default function ReactQuery() {
  // main.js에서 생성한 queryClient 컨텍스트 가져오기
  const queryClient = useQueryClient();
  
  // const {isLoading, data, isError, error, refetch } = useQuery({
  //   queryKey: ['userInfo'],
  //   queryFn: () => fetch('/people').then((res) => res.json()),
  //   // gcTime: 5000,
  //   // staleTime기본값은 0이며, 서버의 데이터 변경사항을 실시간으로 감지하여 가져옴
  //   // 자주변경되지않는 데이터인 경우 시간을 늘려 서버요청을 줄여줌
  //   // staleTime: 5000,
  //   // 백그라운드에서 시간마다 데이터 주기적으로 요청(실시간 데이터)
  //   // refetchInterval: 2000,
  //   // refetchIntervalInBackground: true,
  //   enabled: false,
  //   // 사용할 데이터를 선택할 수 있다.
  //   // select: (data) => {
  //   //   const userName = data?.map((user) => user.name);
  //   //   return userName;
  //   // },

  //   //조건에 맞는 데이터만 선택할 수 있다.
  //   select: (data) => {
  //     const userName = data
  //       ?.filter((user) => user.lang === 'react')
  //       .map((user) => user.name);
  //     return userName;
  //   },
  // });

  const { isLoading, isFetching, data, isError, error, refetch } = useUserName();

  
  // 데이터 생성
  const { mutate } = useMutation({
    mutationFn: (user) =>

      fetch('/people', {
        method: 'POST',
        body: JSON.stringify(user),
      }),
    onSuccess: () => {
      // userInfo키의 데이터 초기화후 서버의 데이터 다시 가져옴
      queryClient.invalidateQueries({ queryKey: ['userInfo'] });
    },
  });

  const maxId = data ? data.reduce((max, person) => Math.max(max, person.id), 0) : 0;
  function handleCreateUser() {
    mutate({id : maxId + 1, 
            name: 'kim', 
            country: 'korea', 
            lang: 'react'});
  }

  // console.log(`isLoading: ${isLoading}, data: ${data}, isError: ${isError}, error: ${error}`);


  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

    return (
      <main className='container'>
        <h2>React Query page</h2>
        <button type='button' className='btn' onClick={refetch}>데이터 재요청</button>
        <ul className='list'>
          {/* {data?.map((person) => (
            <li key={person.id}>이름 : {person.name} || 국가 : {person.country} || 개발 언어 : {person.lang}</li>
          ))} */}

          {/* 옵셔널체이닝: 오류로 인해 data배열이 없을 경우 에러 방지 */}
          {data?.map((name) => (
            <li key={name}>이름: {name}</li>
          ))}
        </ul>
        <button onClick={handleCreateUser} className='btn' type='button'>데이터 추가</button>
      </main>
    );


  }