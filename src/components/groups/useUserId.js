import { useState } from 'react';

export const useUserId = (initialValue = 2, initVal= 0) => {
  const [userId, setUserId] = useState(initialValue);
  const [searchUserId, setSearchUserId] = useState(initVal);

  return {
    userId,
    setUserId,
    searchUserId,
    setSearchUserId,
  }
}