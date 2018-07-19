import React from 'react';
// import "babel-polyfill";
//componentFactory is a function,Components can be loaded asynchronously,
//import方法会返回一个promise,promise完成后会resolve一个对象 {default:组件}
export default function (componentFactory) {
  class AsyncComponent extends React.Component {
    constructor() {
      super();
      this.state = {component: null};
    }

    async componentDidMount() {
      let {default: component} = await componentFactory();
      this.setState({component});
    }

    render() {
      let Comp = this.state.component;
      return Comp ? <Comp {...this.props}/> : null;
    }
  }

  return AsyncComponent;
}
