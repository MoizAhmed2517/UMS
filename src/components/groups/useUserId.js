import { useState } from 'react';

export const useUserId = (initialValue = 2) => {
  const [userId, setUserId] = useState(initialValue);

  return {
    userId,
    setUserId,
  }
}