import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {IconButton, TextField} from "@material-ui/core";
import {AddBox} from "@material-ui/icons";

export type AddItemFormType = {
    addItem: (title: string) => void
}

export const AddItemForm = (props: AddItemFormType) => {


    let [title, setTitle] = useState<string>("")
    let [error, setError] = useState<string | null>(null)

    const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(null)
    }
    const onAddItemClick = () => {
        if (title.trim() !== '') {
            props.addItem(title);
        } else {
            setError("title is required")
        }
        setTitle("");
    }
    const onKeyPressItemTask = (e: KeyboardEvent) => {
        if (e.charCode === 13) {
            onAddItemClick()
        }
    }

    return (
        <div onBlur={() => {
            setError(null)
        }}>
            <TextField
                variant={"outlined"}
                value={title}
                onChange={onTitleChange}
                onKeyPress={onKeyPressItemTask}
                error={!!error}
                label={"Title"}
                helperText={error}
            />
            <IconButton
                color={"primary"}
                onClick={onAddItemClick}>
                <AddBox/>
            </IconButton>
        </div>
    )
}