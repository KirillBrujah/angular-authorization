import { createReducer, on } from "@ngrx/store";
import { increment, reset } from "./counter.actions";


export interface CounterState {
    value: number;
}

export const initialState: CounterState = { value: 0 };

export const counterReducer = createReducer(
    initialState,
    on(increment, (state) => ({ value: state.value + 1, })),
    on(reset, (state) => ({ value: 0, })),
);