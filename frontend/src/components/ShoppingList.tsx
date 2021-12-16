import React, {useState} from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import List from '@mui/material/List';
import Container from '@mui/material/Container';

import ShoppingListItem from './ShoppingListItem';
import ShoppingListAppBar from "./AppBar";
import DeleteDialog from "./DeleteDialog";

export default function ShoppingList({shoppingItems, isLoading, checkItem, openItemEditor, deleteItem}) {

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [itemToDelete, setItemToDelete] = useState();


    return (
        <div>
            <ShoppingListAppBar/>
            {isLoading && <CircularProgress/>}
            <Container sx={{width: '70%'}}>
                {shoppingItems.length !== 0 ? (
                        <>
                            <Grid container spacing={2} sx={{marginTop: '1.5rem', marginBottom: '0.5rem'}}>
                                <Grid item md={8}>
                                    <Typography variant="h6">
                                        Your Items
                                    </Typography>
                                </Grid>
                                <Grid item md={4}>
                                    <Button variant="contained" color="primary" onClick={() => openItemEditor()}
                                            sx={{float: 'right'}}>
                                        Add item
                                    </Button>
                                </Grid>
                            </Grid>

                            <List sx={{width: '100%', bgcolor: 'background.paper'}}>
                                {shoppingItems.map((item) => (
                                    <ShoppingListItem
                                        key={item.id}
                                        item={item}
                                        onCheck={() => checkItem(item.id)}
                                        onEdit={() => openItemEditor(item)}
                                        onDelete={() => {
                                            setItemToDelete(item);
                                            setOpenDeleteDialog(true);
                                        }}
                                    />
                                ))}
                            </List>
                        </>
                    )
                    : (
                        <>
                            <Box padding="2rem" textAlign="center" border="1px solid black">
                                <Typography variant="subtitle1" gutterBottom>Your shopping list is empty :(</Typography>
                                <Button variant="contained" color="primary" onClick={() => openItemEditor()}>
                                    Add your first item
                                </Button>
                            </Box>

                        </>
                    )

                }</Container>
            <DeleteDialog open={openDeleteDialog} onCancel={() => setOpenDeleteDialog(false)}
                          onConfirm={() => {
                              deleteItem(itemToDelete);
                              setOpenDeleteDialog(false);
                          }}/>
        </div>
    );
}