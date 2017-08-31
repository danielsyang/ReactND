import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardHeader } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';

import bg from '../../img/bg.jpg';
import avatar from '../../img/mui.jpg';

import './navigation.css';

class AvatarComponent extends Component {
    getStyles = () => {
        return {
            overlayContent: {
                paddingTop: '0',
                background: 'none',
            },
        }
    }
    render() {
        const styles = this.getStyles();
        const contentStyle = styles.overlayContent;
        return (
            <Card>
                <CardMedia overlayContentStyle={contentStyle}
                    overlay={
                        <div>                            
                            <CardHeader
                                title="Udacity"
                                subtitle="Readable"
                                avatar={avatar}
                            />
                        </div>
                    }>
                    <img src={bg} alt="Background" />
                </CardMedia>
            </Card>
        );
    }
}

export default AvatarComponent;