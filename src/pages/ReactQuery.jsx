import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

// pages/ReactQuery.jsx

export default function ReactQuery() {
  // main.js에서 생성한 queryClient 컨텍스트 가져오기
  const queryClient = useQueryClient();
  
  const {isLoading, data, isError, error} = useQuery({
    queryKey: ['userInfo'],
    queryFn: () => fetch('/people').then((res) => res.json())
  });

  
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
        <ul className='list'>
          {data?.map((person) => (
            <li key={person.id}>이름 : {person.name} || 국가 : {person.country} || 개발 언어 : {person.lang}</li>
          ))}
        </ul>
        <button onClick={handleCreateUser} className='btn' type='button'>데이터 추가</button>
      </main>
    );


  }