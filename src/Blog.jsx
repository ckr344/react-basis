import React from 'react';
import Article from './Article';

class Blog extends React.Component {
  // クラスなのでconstructorで初期化が必要
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
      order: 1
    }
  }
  // 上記のように書くことで下記のthis.propsが使えるようになる

  // 公開状態を反転させる関数
  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished
    })
    // !は反転させるという意味
  };


  render() {
    return (
      <React.Fragment>
        {/* 子コンポーネントに引き渡したい場合は、toggle={() => this.togglePublished()}　という風に関数型にする必要がある */}
        <Article title={"React"} isPublished={this.state.isPublished} toggle={() => this.togglePublished()} />
      </React.Fragment>
    )
  }
}

export default Blog

