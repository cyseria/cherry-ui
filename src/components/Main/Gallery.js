import React, { Component } from 'react';
import {Button} from 'antd';
import {withRouter} from "react-router-dom";

class Gallery extends Component {
    showDetailPage = (name) => {
        this.props.history.push(
            '/detail?name=' + name
        );
    }
    render() {
        const { galleryList } = this.props;
        return (
            <div className="list">
                <h3>共 {galleryList.length} 个脚手架</h3>
                <ul className="list-contennt">
                    {galleryList.map(item => (
                        <li className="list-item" key={item.name}>
                            <h4 className="list-item__title">{item.name}</h4>
                            <div className="list-item__desc">{item.description}</div>
                            <div>tags: {item.tags.join(', ')}</div>
                            <div className="list-item__operate">
                                <Button icon="home" target="_blank" onClick={this.showDetailPage.bind(this, item.name)}>主页</Button>
                                <Button icon="download" href={item.url + '/archive/master.zip'}>下载</Button>
                            </div>
                        </li>
                    ))}

                </ul>
            </div>
        );
    }
}

export default withRouter(Gallery);