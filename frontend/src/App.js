import React, { useEffect } from "react";
import { AppBar, Container, Grid, Grow, Typography } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import Form from "./components/Form/form";
import Posts from "./components/Posts/posts";
import useStyles from './style';
const App = () => {

    const classes =useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch]);
    return (
        <>
            <Container maxwidth="lg">
                <AppBar className={classes.AppBar} position="static" color="inherit">
                    <Typography className={classes.heading} varient="h2" align="center">
                        Posts
                    </Typography>
                    {/* <img className={classes.image} src={memories} alt="memories" width={160}/> */}
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={7}>
                           <Posts/>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                            <Form/>
                                </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </>
    );
}
export default App;