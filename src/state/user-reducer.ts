type StateType = {
    age: number
    childrenCount: number
    name: string
}
type ActionType = {
    type: string
    [key: string]: any
}
// и инструкцию (action, тоже объект)
// согласно прописаному type в этом action (инструкции) я поменяю state
export const userReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'INCREMENT-AGE':
            let copyState = {...state}
            copyState.age = state.age + 1;
            return copyState;
        case 'INCREMENT-CHILDREN-COUNT':
            return {...state, childrenCount: state.childrenCount + 1}
        case 'CHANGE-NAME':
            return {...state, name: action.newName}
        default:
            throw new Error("I don't understand this type")
    }
}