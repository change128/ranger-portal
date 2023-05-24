import React from 'react';
import { Layout, Popover } from 'antd';
import styles from './index.less';
import { useNavigate, useModel } from '@umijs/max';
import { Button } from 'antd';
import { redirect2login } from '@/utils';
import { WindowsOutlined } from '@ant-design/icons';
import { useUserInfo } from '@/utils/hooks';

export const CommonHeader: React.FC = () => {
  const navigate = useNavigate();
  const logout = () => {
    redirect2login();
  };
  const { initialState } = useModel('@@initialState');
  const { userInfo: userInfo } = useUserInfo(initialState?.userId as number);
  console.log('userInfo', userInfo);

  return (
    <Layout.Header className={styles['header-wrapper']}>
      <div className={styles['header-content']}>
        <div className={styles.logo}>
          <div>
            <WindowsOutlined
              style={{ fontSize: '20px', color: '#fff' }}
              onClick={() => {
                navigate('/dashboard');
              }}
            />
          </div>
        </div>
        <div></div>

        <div className={styles['user_info']}>
          <Popover
            content={
              <>
                <Button onClick={logout}>登出</Button>
              </>
            }
          >
            <div className={styles['user_name']}>{userInfo?.username}</div>
          </Popover>
        </div>
      </div>
    </Layout.Header>
  );
};
