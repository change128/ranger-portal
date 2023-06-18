import React, { PropsWithChildren } from 'react';
import { Card } from 'antd';

interface ITopic {
  question?: string;
  index?: number;
}

export const Topic: React.FC<PropsWithChildren<ITopic>> = ({
  question,
  children,
  index,
}) => {
  return <Card title={`题目${index + 1}-${question}`}>{children}</Card>;
};
