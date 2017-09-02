import React, { Component } from 'react'
import Sub from '../containers/sub'

// UI component
export  default class Left extends Component {
  render() {
    const { value, onIncreaseClick } = this.props;
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
          <Sub/>{/* 嵌套容器组件*/}
          {/* 容器组件嵌套，但对应的数据字段设计成平铺 (state.leftSub)，而不是嵌套（state.left.sub），使得对应的reducer能独立拆分，且避免数据层次太深 */}
      </div>
    )
  }
}
