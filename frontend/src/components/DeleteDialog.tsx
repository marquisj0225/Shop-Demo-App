import React from 'react';

import {Box, Button, Dialog, DialogActions, DialogTitle, DialogContentText, DialogContent} from '@mui/material';


export default function DeleteDialog({open, onCancel, onConfirm}) {


    return (
        <Dialog open={open} onClose={onCancel} fullWidth>
            <DialogTitle>Delete Item ?</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to delete this item? This can not be undone.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancel} color="primary" variant="text">
                    Cancel
                </Button>
                <Button color="primary" variant="contained" onClick={onConfirm}>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
}
