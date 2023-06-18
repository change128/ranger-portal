import React, { FC, PropsWithChildren } from 'react';

import { Form, FormProps } from 'antd';

export const CommonFormWrapper: FC<PropsWithChildren<FormProps>> = ({
  children,
  ...formProps
}) => {
  return <Form {...formProps}>{children}</Form>;
};
