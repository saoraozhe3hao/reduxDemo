// 这里传入的state 实际是 根state.leftSub
export default function leftSub(state = { count: 1 }, action) {
  const count = state.count;
  switch (action.type) {
    case 'double':
      return {count: count * 2};
    default:    // case 未命中时，需要把state原封不动返回
      return state
  }
}