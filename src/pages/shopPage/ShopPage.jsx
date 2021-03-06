import React from 'react';
import PreviewCollection from '../../components/previewCollection/PreviewCollection';

import SHOP_DATA from './shopData.js'; 

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state
        return (
            <div className="shopPage">
                {
                    collections.map(({id, ...otherCollectionsProps}) => (
                        <PreviewCollection key={id} {...otherCollectionsProps} /> // previewCollection componenet
                    ))
                }
            </div>
        ) 
    }
}

export default ShopPage;