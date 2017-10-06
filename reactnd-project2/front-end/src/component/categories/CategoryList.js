import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import Icon from 'material-ui/Icon';

import { fetchCategoriesThunk } from '../../actions/CategoryAction';

const styles = theme => ({
    item: {
        display: 'flex',
        padding: 20,
    },
    iconRoot: {
        marginRight: 20,
    },
    text: {
        textDecoration: 'none',
        fontSize: 20,
        lineHeight: 1,
    },
});

class CategoryList extends Component {
    componentWillMount() {
        this.props.fetchCategories();
    }
    render() {
        const { categories, classes } = this.props;

        return (
            <div>
                {categories.map((cat, index) => (
                    <div key={index} className={classes.item}>
                        <Icon classes={{ root: classes.iconRoot }}>info</Icon>
                        <Link to={cat.path} className={classes.text}>
                            {cat.name}
                        </Link>
                    </div>
                ))}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategories: () => dispatch(fetchCategoriesThunk()),
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
    }
}

CategoryList.propTypes = {
    classes: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(CategoryList));