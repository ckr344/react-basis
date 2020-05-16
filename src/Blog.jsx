import React from 'react';
import Article from './Article';

class Blog extends React.Component {
  // クラスなのでconstructorで初期化が必要
  constructor(props) {
    super(props);
  }
  // 上記のように書くことで下記のthis.propsが使えるようになる
  render() {
    const authorName = "344"
    return (
      <>
        <Article title={"React"}/>
        <Article title={"JXS"}/>
        <Article title={"環境構築"}/>
          {/* <Article
          title={"React"}
          title={"JXS"}
          title={"環境構築"}
          // order={3}
          // isPublished={true}
          // author={authorName}
        /> */}
      </>
    )
  }
}

export default Blog

