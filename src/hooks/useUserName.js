import { useQuery } from '@tanstack/react-query';

export function useUserName() {
  return useQuery({
    queryKey: ['userInfo'],
    queryFn: () => fetch('/people').then((res) => res.json()),
    select: (data) => {
      const userName = data?.map((user) => user.name);
      return userName;
    },
  });
}