import { createSlice } from '@reduxjs/toolkit'

export const raffleJarSlice = createSlice({
  name: 'raffleJar',
  initialState: {
      entries: [],
      max: 0
  },
    reducers: {
        addEntry: (state, action) => {
            state.entries.push(action.payload)
        }, 
        resetJar: state => {
            state.entries = [];
            state.max = 0;
        }
  }
})

// Action creators are generated for each case reducer function
export const { addEntry, resetJar } = raffleJarSlice.actions

export default raffleJarSlice.reducer