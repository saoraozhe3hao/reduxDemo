import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import left from './left'
import right from './right'
import leftSub from './leftSub'

// combineReducers 被store调用，收到action，会依次调用 拆分的reducer ,直到传入的state与返回的state不一样
export default combineReducers({
  routing: routerReducer,
  left,
  right,
  leftSub  // 拆分的reducer得跟store数据的字段 同名
})