import { configureStore } from "@reduxjs/toolkit"

export const makeStore = () => {
    const store = configureStore({
        reducer: {
        }
    })

    return store
}

export const appStore = makeStore()

export type RootState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch