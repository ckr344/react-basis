import React from 'react';
import Article from './Article';
import * as FooBar from './components/FooBar';
import Hoge from './components/Hoge'

const Blog = () => {
  // クラスなのでconstructorで初期化が必要
  // constructor(props) {
    // super(props);
    // this.state = {
    //   isPublished: false,
    //   count: 0
    // }
  // }
  // 上記のように書くことで下記のthis.propsが使えるようになる

  // // ライフサイクル用のもの
  // componentDidMount() {
  //   // ボタンがクリックされたらいいねをカウントアップする
  //   document.getElementById('counter').addEventListener( 'click', this.countUp )
  // }

  // componentDidUpdate() {
  //   // カウントが10以上だったら0に戻す
  //   if (this.state.count >= 10) {
  //     this.setState({ count: 0 }) 
  //   }
  // }

  // componentWillUnmount() {
  //   document.getElementById('counter').removeEventListener( 'click', this.countUp )
  // }

  // // 公開状態を反転させる関数
  // togglePublished = () => {
  //   this.setState({
  //     isPublished: !this.state.isPublished
  //   })
  //   // !は反転させるという意味
  // };

  // いいね数
  // countUp = () => {
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // }



  return (
    <React.Fragment>
      {/* 子コンポーネントに引き渡したい場合は、toggle={() => this.togglePublished()}　という風に関数型にする必要がある */}
      <Article 
        title={"React"} 
        // isPublished={this.state.isPublished} 
        // toggle={() => this.togglePublished()}
        // count={this.state.count}
      />
      <FooBar.Foo />
      <FooBar.Bar />
      <Hoge />
    </React.Fragment>
  )
}

export default Blog

