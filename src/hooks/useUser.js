import { useQuery } from '@tanstack/react-query';

export function useUser() {
  return useQuery({
    queryKey: ['userInfo'],
    queryFn: () => fetch('/people').then((res) => res.json()),
    enabled: false,
  });
}