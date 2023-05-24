import api from '@/services/meta';
import { useEffect, useState } from 'react';
export const useUserInfo = (userId: number) => {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    (async (userId) => {
      try {
        const data = await api.UserController.queryUserInfoById({
          id: userId,
        });
        setUserInfo(data.data);
      } catch (e) {
        console.log(e);
      }
    })(userId);
  }, [userId]);
  return { userInfo };
};
