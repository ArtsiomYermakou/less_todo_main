import {AlertProps} from "@material-ui/lab";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {AppRootStateType} from "../../app/store";
import {setAppErrorAC} from "../../app/app-reducer";
import {Snackbar} from "@material-ui/core";
import MuiAlert  from '@material-ui/lab/Alert';


function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function ErrorSnackBar() {
    const error = useSelector<AppRootStateType, string | null>(state => state.app.error);
    const dispatch = useDispatch();

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(setAppErrorAC(null))
    };

    const isOpen = error !== null

    return (
        <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                {error}
            </Alert>
        </Snackbar>
    );
}