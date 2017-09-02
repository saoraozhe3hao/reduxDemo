import { connect } from 'react-redux'
import Left from '../components/left'

// Action
const increaseAction = { type: 'increase' };

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.left.count
  }
}

// Map dispatch function to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

// Connected Component
const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Left);

export default Container
