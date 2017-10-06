import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import CategoryList from './CategoryList';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 30,
    },
    innerTypeItem: {
        margin: 'auto',
    },
    paperRoot: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
    }),
});

class CategoryComponent extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={8} classes={{
                        typeItem: classes.innerTypeItem,
                    }}>
                        <Typography type='headline' component='h1'>
                            Categories
                        </Typography>

                        <Typography type='body2' component='p'>
                            All the categories are listed bellow.
                        </Typography>

                        <Paper className={classes.paperRoot} elevation={4}>
                            <CategoryList />
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

CategoryComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CategoryComponent);