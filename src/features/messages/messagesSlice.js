import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setMessage: (state, action) => {
      const msg = action.payload
      
        state.value.push(msg)
        localStorage.setItem(
          "messages",
          JSON.stringify(state.value)
        );
    },
    setMessages: (state, action) => {
      
        state.value = [...action.payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { setMessage, setMessages } = messagesSlice.actions

export default messagesSlice.reducer