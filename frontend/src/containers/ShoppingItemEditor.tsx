import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import {addItem, closeEditor, updateItem} from '../store/actions';

const mapStateToProps = (state) => {
    return {open: state.editor.open, item: state.editor.selectedItem};
};

function ShoppingItemEditor({open, item, dispatch}) {

    const [nameValue, setNameValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');
    const [quantityValue, setQuantityValue] = useState(-1);

    const isCreateMode = !item;

    useEffect(() => {
        if (item) {
            setNameValue(item.name);
            setDescriptionValue(item.description);
            setQuantityValue(item.quantity);
        }
    }, [item]);


    const handleAddItemAction = () => {
        const _item = {...item, name: nameValue, description: descriptionValue, quantity: quantityValue};
        dispatch(isCreateMode ? addItem(_item) : updateItem(_item));
        clearFields();
    };

    const handleCancelAction = () => {
        dispatch(closeEditor());
        clearFields();
    };

    const clearFields = () => {
        setNameValue('');
        setDescriptionValue('');
        setQuantityValue(-1);
    };


    return (
        <Drawer anchor={'right'} open={open}>
            <Container sx={{width: '600px', paddingTop: '15px'}}>
                <Stack spacing={3}>
                    <Box>
                        <Box sx={{typography: 'h6'}}>{isCreateMode ? 'Add an item' : 'Edit an item'}</Box>
                        <Box
                            sx={{typography: 'subtitle1'}}>{isCreateMode ? 'Add your new item below' : 'Edit your item below'}</Box>
                    </Box>
                    <FormControl fullWidth>
                        <TextField label="Item Name" variant="outlined" value={nameValue}
                                   onChange={(e) => setNameValue(e.target.value)}/>
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField label="Description" multiline rows={4} variant="outlined" value={descriptionValue}
                                   onChange={(e) => setDescriptionValue(e.target.value)}/>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="select-label">How many ?</InputLabel>
                        <Select label="How many ?" labelId="select-label" value={quantityValue}
                                onChange={(e) => setQuantityValue(e.target.value as number)}>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>

                <Box sx={{position: 'absolute', bottom: '2rem', right: '1rem'}}>
                    <ButtonGroup variant="contained">
                        <Button variant="outlined" onClick={() => handleCancelAction()}>Cancel</Button>
                        <Button onClick={() => handleAddItemAction()}>{isCreateMode ? 'Add' : 'Save'} Task</Button>
                    </ButtonGroup>
                </Box>
            </Container>

        </Drawer>
    );
}

export default connect(mapStateToProps)(ShoppingItemEditor);