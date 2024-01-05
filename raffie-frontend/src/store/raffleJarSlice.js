import { createSlice } from '@reduxjs/toolkit'

export const raffleJarSlice = createSlice({
  name: 'raffleJar',
  initialState: {
      entries: [],
      max: 0,
      chosenEntry: '',
      entryType: 'Names'
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
        },
        changeEntryType: (state, action) => {
            state.entryType = action.payload
        }
  }
})

// Action creators are generated for each case reducer function
export const { addEntry, resetJar, pickEntry, changeEntryType } = raffleJarSlice.actions

export default raffleJarSlice.reducer