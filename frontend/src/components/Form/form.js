import React, { useState } from "react";
import useStyles from './style';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";

const Form = ()=> {

    const [postData, setPostData] = useState({
            creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: '',
    });

    const classes =useStyles();
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData));

    }
    return (
        <>
            <Paper className={classes.paper}>
                <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                    <Typography varient="h6"> Creating Posts </Typography>
                    <TextField name="creator" varient="outline" lable="creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                    <TextField name="title" varient="outline" lable="title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                    <TextField name="message" varient="outline" lable="message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                    <TextField name="tags" varient="outline" lable="tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
                    <div className={classes.fileInput}>
                        <FileBase  type="file" multiple={false} onDone ={({base64}) => setPostData({ ...postData, selectedFile: base64 })} />
                    </div>
                    <Button className={classes.buttonSubmit} varient="containt" type="submit"> Click On  </Button>
                    
                </form>
            </Paper>
        </>
    )
}

export default Form;