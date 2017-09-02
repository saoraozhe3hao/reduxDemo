// 这里传入的state 实际是 根state.right
export default function right(state = { count: 0 }, action) {
  const count = state.count;
  switch (action.type) {
    case 'decrease':
      return {count: count - 1};
    default:
      return state
  }
}