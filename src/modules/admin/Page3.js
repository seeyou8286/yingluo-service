import React from 'react';

class Page3 extends React.Component {
    // 这个语法确保了 `this` 绑定在  handleClick 中
    // 这里只是一个测试
    handleClick = () => {
      console.log('this is:', this);
      console.log('this is:', "test");
    }
   
    render() {
      return (
        <button onClick={this.handleClick}>
          Page 3
        </button>
      );
    }
  }
export default Page3;