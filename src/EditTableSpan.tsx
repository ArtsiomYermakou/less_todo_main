import React, {ChangeEvent, useState} from "react";
import {TextField} from "@material-ui/core";

type EditTableSpanType = {
    title: string
    saveTitle: (newTitle: string) => void
}

export function EditTableSpan(props: EditTableSpanType) {
    let [editMode, setEditMode] = useState(false)
    let [title, setTitle] = useState(props.title)

    const onEditMode = () => {
        setEditMode(true)
    }
    const offEditMode = () => {
        if (title.trim()) {
            props.saveTitle(title)
        } else {
            setTitle(props.title)
        }
        setEditMode(false)
    }

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }


    return (
        editMode ?
                <TextField
                    variant={"outlined"}
                    value={title}
                    autoFocus={true}
                    onBlur={offEditMode}
                    onChange={changeTitle}
                />
            : <span onDoubleClick={onEditMode}>{props.title}</span>
    )
}