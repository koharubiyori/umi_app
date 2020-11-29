import { BasicLayoutProps, Settings as LayoutSettings } from '@ant-design/pro-layout';
import React from 'react';

// 保持这个布局组件的纯粹性，不要添加和布局无关的东西！
export const layout = (
  initialState: InitialState,
): BasicLayoutProps & { childrenRender?: (dom: JSX.Element) => React.ReactNode } => {
  return {
    // rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    // footerRender: () => <Footer />,
    menuHeaderRender: undefined,
    menu: {
      locale: false
    }
  };
};

interface InitialState {
  userName: string
}

// 全局初始数据
export async function getInitialState(): Promise<InitialState> {
  return {
    userName: 'xxx',
  };
}
