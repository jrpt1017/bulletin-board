import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Button, TextField } from '@mui/material';

const Article = (props) => {
  const [isEditMode, setIsEditMode] = React.useState(false);

  const { title, content, date, articles, setArticles, id } = props;
  const [articleTitle, setarticleTitle] = useState(title)
  const [articleContent, setarticleContent] = useState(content);

  const handleEditClick = () => {
    setIsEditMode(true);
  }

  const handleDelete = () => {
    const articleCopy = [...articles];
    const updatedArticles = articleCopy.filter((item) => {
      return item.id !== id;
    })
    setArticles(updatedArticles)
  };

  const handleEditTitleChange = (e) => {
    const { value } = e.target.value;
    setarticleTitle(value);
  }

  const handleEditContentChange = (e) => {
    const { value } = e.target.value;
    setarticleContent(value);
  }

  const handleOnUpdate = () => {
    const itemToUpdate = articles.findIndex((item) => {
      return item.id === id;
    });
    const articleCopy = [...articles];
    articleCopy[itemToUpdate].title = articleTitle;
    articleCopy[itemToUpdate].content = articleContent;

    setIsEditMode(false);
  };

  return (
    <Box display="flex" fullWidth>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <TextField value={articleTitle} disabled={isEditMode === false} onChange={(e) => { return handleEditTitleChange(e) }} />
        </AccordionSummary>
        <AccordionDetails>
          <TextField value={articleContent} disabled={isEditMode === false} onChange={(e) => { return handleEditContentChange(e) }} />
          <Typography>Date posted: {date}</Typography>
          <Button variant="contained" onClick={handleEditClick} disabled={isEditMode === true}>Edit</Button>
          <Button variant="outlined" onClick={handleDelete}>Delete</Button>
          {isEditMode === true && <Button variant="outlined" onClick={handleOnUpdate}>Update</Button>}
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default Article
