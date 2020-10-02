import {appReducer, InitialStateType, setAppErrorAC, setAppStatusAC} from "./app-reducer";

let startState: InitialStateType

beforeEach(() => {
    startState = {
        status: "idle",
        error: null
    }
})

test('correct error message should be set', () => {
    const endState = appReducer(startState, setAppErrorAC("Some error"))
    expect(endState.error).toBe("Some error");
})

test('correct status should be set', () => {
    const endState = appReducer(startState, setAppStatusAC("loading"))
    expect(endState.status).toBe("loading");
})