// 这里传入的state 实际是 根state.left
export default function left(state = { count: 0 }, action) {
  const count = state.count;
  switch (action.type) {
    case 'increase':
      return {count: count + 1};
    default:    // case 未命中时，需要把state原封不动返回
      return state
  }
}