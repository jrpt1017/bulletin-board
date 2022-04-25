import React, { useState } from 'react'
import { getCurrentDate } from '../utils'
import { v4 as uuid } from 'uuid';
import { Button, Modal, Box, Typography, TextField } from '@mui/material';

const style = {
  display: 'flex',
  flexWrap: 'wrap',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CreateModal = (props) => {
  const { handleClose, open, setArticles, articles } = props;
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleTitleChange = (e) => {
    const { value } = e.target
    setTitle(value)
  };

  const handleContentChange = (e) => {
    const { value } = e.target
    setContent(value)
  };

  const handleOnPost = () => {
    setArticles([...articles, {
      id: uuid(),
      title,
      content,
      date: getCurrentDate(),
    }])
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField label="Title" value={title} variant="outlined" onChange={(e) => { return handleTitleChange(e) }} />
          <TextField label="Content" value={content} variant="outlined" onChange={(e) => { return handleContentChange(e) }} />
          <Button variant="contained" onClick={handleOnPost}>Post</Button>
        </Box>
      </Modal>
    </div>
  )
};

export default CreateModal;