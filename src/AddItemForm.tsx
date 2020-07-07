import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button, IconButton, TextField} from "@material-ui/core";
import {AddBox} from "@material-ui/icons";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export function AddItemForm(props: AddItemFormPropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const onAddItemClick = () => {
        if (title.trim() !== "") {
            props.addItem(title);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            onAddItemClick();
        }
    }

    return <div>
        <TextField
            variant={"outlined"}
            value={title}
            onChange={onChangeHandler}
            onKeyPress={onKeyPressHandler}
            error={!!error}
            label={"Title"}
            helperText={error}
            // className={error ? "error" : ""}
        />
        {/*<input*/}
        {/*    value={title}*/}
        {/*    onChange={onChangeHandler}*/}
        {/*    onKeyPress={onKeyPressHandler}*/}
        {/*    className={error ? "error" : ""}*/}
        {/*/>*/}
        <IconButton onClick={onAddItemClick} color={"primary"}>
            <AddBox/>
        </IconButton>
        {/*<Button onClick={onAddItemClick} variant={"contained"} color={"primary"}>+</Button>*/}
        {/*<button onClick={onAddItemClick}>+</button>*/}
        {/*{error && <div className="error-message">{error}</div>}*/}
    </div>
}
