import React from 'react';



class Page2 extends React.Component {
    // 这个语法确保了 `this` 绑定在  handleClick 中
    // 这里只是一个测试
    handleClick = () => {
      global.constants.name = "Bob";
      console.log('this is:', global.constants.name);
      this.props.history.push('')
    }
   
    render() {
      return (
        // <button onClick={() => this.props.history.push('')}>
        <button onClick={() => this.handleClick()}>
          Click me
        </button>
      );
    }
  }
export default Page2;