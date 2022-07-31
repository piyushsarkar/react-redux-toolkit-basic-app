import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
  // **for single redux reducer (if we have only 1 slice)**
  // reducer: counterSlice.reducer,

  // **for multiple redux reducers**
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;

// import { createStore } from 'redux';
// const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return {
//         counter: state.counter + (action.amount ? action.amount : 1),
//         showCounter: state.showCounter,
//       };
//     case 'DECREMENT':
//       return {
//         counter: state.counter - 1,
//         showCounter: state.showCounter,
//       };
//     case 'TOGGLE':
//       return {
//         showCounter: !state.showCounter,
//         counter: state.counter,
//       };
//     default:
//       return state;
//   }
// };

// const store = createStore(counterReducer);

// export default store;
