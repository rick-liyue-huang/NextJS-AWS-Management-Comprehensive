import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface InitialStateProps {
    isSidebarCollapsed: boolean
    isDarkMode: boolean
}

const initialState: InitialStateProps = {
    isSidebarCollapsed: false,
    isDarkMode: false,
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
            state.isSidebarCollapsed = action.payload
        },
        setIsDarkMode: (state, action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload
        },
    },
})

export const { setIsDarkMode, setIsSidebarCollapsed } = globalSlice.actions
export default globalSlice.reducer
