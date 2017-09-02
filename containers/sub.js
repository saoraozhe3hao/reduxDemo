import { connect } from 'react-redux'
import Sub from '../components/sub'

// Action
const doubleAction = { type: 'double' };

// 内层组件的props来自store 而不是 外层组件
function mapStateToProps(state) {
  return {
    value: state.leftSub.count
    // 内层组件对应的数据字段设计成平铺 (state.leftSub)，而不是嵌套（state.left.sub），使得对应的reducer能独立拆分，且避免数据层次太深
  }
}

// Map dispatch function to component props
function mapDispatchToProps(dispatch) {
  return {
    onDoubleClick: () => dispatch(doubleAction)
  }
}

// Connected Component
const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sub);

export default Container
