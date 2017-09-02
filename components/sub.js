import React,{ Component } from 'react'

// UI component
export  default class Sub extends Component {
  render() {
    const { value, onDoubleClick } = this.props;
    return (
      <div>
        <span>{value}</span>
        <button onClick={onDoubleClick}>Double</button>
      </div>
    )
  }
}
