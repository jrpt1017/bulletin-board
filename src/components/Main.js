import React from 'react';
import { v4 as uuid } from 'uuid';
import { Box, AppBar, Toolbar, Button } from '@mui/material';
import { getCurrentDate } from '../utils';
import CreateModal from './CreateModal';
import Article from './Article';

const Main = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [articles, setArticles] = React.useState([{
    id: uuid(),
    title: 'Sports',
    content: 'Test content',
    date: getCurrentDate(),
  }])

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" onClick={handleOpen}>Create Article</Button>
          </Toolbar>
        </AppBar>
      </Box>

      <CreateModal handleOpen={handleOpen} handleClose={handleClose} open={open} articles={articles} setArticles={setArticles} />

      <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" gap="20px">
        {articles.map((data) => {
          return (<Article {...data} articles={articles} setArticles={setArticles} />)
        })}
      </Box>
    </>
  )
}

export default Main
