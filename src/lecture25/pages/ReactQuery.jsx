import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useUser } from '@hooks/useUser';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// pages/ReactQuery.jsx

export default function ReactQuery() {
  const [maxId, setMaxId] = useState(0);
  
  // main.js에서 생성한 queryClient 컨텍스트 가져오기
  const queryClient = useQueryClient();

  const { isLoading, data, isError, error, refetch } = useUser();

  useEffect(() => {
    if (data?.length > 0) {
      const maxIdFromData = data.reduce((max, person) => Math.max(max, person.id), 0);
      setMaxId(maxIdFromData);
    }
  }, [data]);
  
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

  function handleCreateUser() {
    const newId = maxId + 1;
    mutate({id : newId, 
            name: 'kim', 
            country: 'korea', 
            lang: 'react'});
    setMaxId(newId); // maxId 업데이트

  }

  // console.log(`isLoading: ${isLoading}, data: ${data}, isError: ${isError}, error: ${error}`);


  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

    return (
      <main className='container'>
        <h2>React Query page</h2>
        <button type='button' className='btn' onClick={refetch}>데이터 재요청</button>
        <ul className='list'>
          {data?.map((person) => (
            <li key={person.id}>
              <Link to={`/react-query/${person.id}`}>이름 : {person.name} || 국가 : {person.country} || 개발 언어 : {person.lang}</Link>
            </li>
          ))}
        </ul>
        <button onClick={handleCreateUser} className='btn' type='button'>데이터 추가</button>
      </main>
    );


  }