import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    list: [],
    modalVisibleUpdate: false,
    selectIdEdit: null,
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
      };
      state.list.push(newTodo);
    },

    updateTodo: (state, action) => {
      const index = state.list.findIndex(todo => todo.id === action.payload.id);
      state.list[index].title = action.payload.title;
    },

    updateModal: (state, action) => {
      return {
        ...state,
        modalVisibleUpdate: action.payload.modalVisibleUpdate,
        selectIdEdit: action.payload.selectIdEdit,
      };
    },

    removeTodo: (state, action) => {
      return {
        ...state,
        list: state.list.filter(todo => todo.id !== action.payload.id),
      };
    },
  },
});

export const {addTodo, updateTodo, removeTodo, updateModal} = todoSlice.actions;

export default todoSlice.reducer;
