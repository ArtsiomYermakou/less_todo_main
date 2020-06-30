import React, {ChangeEvent, KeyboardEvent, useState} from 'react'

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

function AddItemForm(props: AddItemFormPropsType) {

    let [title, setTitle] = useState<string>("");
    let [error, setError] = useState<string|null>(null);

    const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null);
        setTitle(e.currentTarget.value);
    }

    const onAddItemClick = () => {
        if(title.trim() !== ""){
            props.addItem(title);
        } else {
            setError("Title is required")
        }
        setTitle("");
    }

    const onKeyPressAddItem = (e: KeyboardEvent) => {
        setError(null);
        if(e.charCode === 13){
            onAddItemClick()
        }
    }

    return (
        <div>
            <input
                type="text"
                value={title}
                onChange={onTitleChange}
                onKeyPress={onKeyPressAddItem}
                className={error ? "error" : ""}
            />

            <button onClick={onAddItemClick}>+</button>
            {error && <div className={"error-message"}>{error}</div>}

        </div>
    )
}

export default AddItemForm;