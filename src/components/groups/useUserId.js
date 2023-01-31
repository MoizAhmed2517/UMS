import { useState } from 'react';

export const useUserId = (initialValue = 0) => {
  const [userId, setUserId] = useState(initialValue);

  return {
    userId,
    setUserId,
  }
}