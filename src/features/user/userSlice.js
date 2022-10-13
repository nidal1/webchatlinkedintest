import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName: (state, action) => {
        state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUserName } = userSlice.actions

export default userSlice.reducer