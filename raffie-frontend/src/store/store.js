import { configureStore } from '@reduxjs/toolkit'
import raffleJarSlice from './raffleJarSlice'
export default configureStore({
  reducer: {raffle: raffleJarSlice}
})