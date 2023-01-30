import { useState } from 'react';

export const useUserId = (initialValue = 1) => {
  const [userId, setUserId] = useState(initialValue);

  return {
    userId,
    setUserId,
  }
}