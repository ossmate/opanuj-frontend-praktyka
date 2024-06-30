import { useCallback, useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

const API_URL = '/api/data/users?timeout=10000';

const getUsersRequest = async (controller: AbortController) => {
  const response = await fetch(API_URL, {
    signal: controller.signal,
  })

  if (!response.ok) {
    throw new Error('An error occurred while fetching users from API!')
  }

  const data = await response.json()

  return data;
}

export const useGetUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [timeoutError, setTimeoutError] = useState<boolean>(false);

  const fetchUsers = useCallback(async () => {
    setTimeoutError(false);

    const controller = new AbortController();

    const timeoutId = setTimeout(() => {
      controller.abort();
      setTimeoutError(true);
    }, 5000);

    try {
      console.info('Request triggered!');
      const data = await getUsersRequest(controller);
      clearTimeout(timeoutId);
      setUsers(data);
    } catch (error: any) {
      clearTimeout(timeoutId);
      if (error.name === 'AbortError') {
        console.info('Request aborted due to timeout');
        setTimeoutError(true);
      } else {
        console.error('Error occurred:', error.message);
      }
    }
  }, []);


    useEffect(() => {
      fetchUsers()
    }, [])

    return { users, isTimeoutError: timeoutError, refetchUsers: fetchUsers }
}