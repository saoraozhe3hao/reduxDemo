import { connect } from 'react-redux'
import Right from '../components/right'

// Action
const decreaseAction = { type: 'decrease' };

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.right.count
  }
}

// Map dispatch function to component props
function mapDispatchToProps(dispatch) {
  return {
    onDecreaseClick: () => dispatch(decreaseAction)
  }
}

// Connected Component
const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Right);

export default Container
