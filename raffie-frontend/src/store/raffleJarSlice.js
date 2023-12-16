import { createSlice } from '@reduxjs/toolkit'

export const raffleJarSlice = createSlice({
  name: 'raffleJar',
  initialState: {
      entries: [],
      max: 0,
      chosenEntry: ''
  },
    reducers: {
        addEntry: (state, action) => {
            state.entries.push(action.payload)
        }, 
        resetJar: state => {
            state.entries = [];
            state.max = 0;
            state.chosenEntry = '';
        },
        pickEntry: state => {
            const random = Math.floor(Math.random() * state.entries.length);
            state.chosenEntry = state.entries[random]
        }
  }
})

// Action creators are generated for each case reducer function
export const { addEntry, resetJar, pickEntry } = raffleJarSlice.actions

export default raffleJarSlice.reducer