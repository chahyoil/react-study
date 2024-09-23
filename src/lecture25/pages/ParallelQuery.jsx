// pages/ParallelQuery.jsx
import { useQuery } from '@tanstack/react-query';

export default function ParallelQuery() {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['getUser'],
    queryFn: () => fetch('/people').then((res) => res.json()),
  });

  // 변수명이 동일하므로 별칭으로 구조분해
  const {
    isLoading: productLoading,
    data: productData,
    isError: productIsError,
    error: productError,
  } = useQuery({
    queryKey: ['getProduct'],
    queryFn: () => fetch('/product').then((res) => res.json()),
  });

  if (isLoading || productLoading) return <>Loading...</>;
  if (isError) return <>{error.message}</>;
  if (productIsError) return <>{productError.message}</>;

  return (
    <div className="parallel_query">
      <h2>Parallel Query page</h2>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>
            {user.name} {user.country} {user.lang}
          </li>
        ))}
      </ul>
      <ul>
        {productData?.map((product) => (
          <li key={product.id}>
            {product.name} {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}