import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import classes from './index.less';

export interface Props {

}

type FinalProps = Props

function HomePage(props: FinalProps) {

  return (
    <PageContainer>
      <div className={classes.test}>content</div>
    </PageContainer>
  )
}

export default HomePage