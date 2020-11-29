import path from 'path';

export default function chainWebpack(memo: any) {
  memo.module
    .rule('global-less')
      .test(/\.less$/)
      .exclude
        .add((/\.module\.less$/))
        .end()
      .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: path.resolve(__dirname, '../src/styles/global.less'),
        });
}
