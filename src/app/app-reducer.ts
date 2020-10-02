const InitialState: InitialStateType = {
    status: "loading",
    error: null
}

export const appReducer = (state: InitialStateType = InitialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "APP/SET-STATUS":
            return {...state, status: action.status}
        case "APP/SET-ERROR":
            return {...state, error: action.error}
        default:
            return {...state};
    }
}

export const setAppErrorAC = (error: string | null) => {
    return {type: "APP/SET-ERROR", error} as const;
}
export const setAppStatusAC = (status: RequestStatusType) => {
    return {type: "APP/SET-STATUS", status} as const;
}

export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed"

export type InitialStateType = {
    status: RequestStatusType
    error: string | null
}

export type setAppErrorActionType = ReturnType<typeof setAppErrorAC>
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>;

type ActionsType =
    | setAppErrorActionType
    | SetAppStatusActionType