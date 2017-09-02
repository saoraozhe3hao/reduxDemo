import React,{ Component } from 'react'

// UI component
export  default class Right extends Component {
  render() {
    const { value, onDecreaseClick } = this.props;
    return (
      <div>
        <span>{value}</span>
        <button onClick={onDecreaseClick}>Decrease</button>
          {this.props.children}
      </div>
    )
  }
}
