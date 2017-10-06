import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

const styles = theme => ({
    card: {
        minWidth: 275,
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
        color: theme.palette.text.secondary,
    },
    noDec: {
        display: 'flex',
        marginLeft: 'auto',
        textDecoration: 'none',
    },
});

class PostsList extends Component {
    convertTime = timestamp => (moment(timestamp).format('DD-MM-YYYY'));

    render() {
        const { posts, classes } = this.props;
        return (
            <Grid container spacing={24}>
                {posts.map((elem, index) => (
                    <Grid item xs={12} sm={6} md={6} key={index}>
                        <Card className={classes.card} >
                            <CardContent>
                                <Typography type="headline" component='h2'>
                                    {elem.title}
                                </Typography>
                                <Typography component="p" className={classes.title}>
                                    Submitted on {this.convertTime(elem.timestamp)} by {elem.author} to {elem.category} category.
                                </Typography>
                                <CardActions>
                                    <Link to={'/post/' + elem.id} className={classes.noDec}>
                                        <Button dense>Read more</Button>
                                    </Link>
                                </CardActions>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        );
    }
}

PostsList.propTypes = {
    posts: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostsList);