import React, { Component } from 'react';
import { connect } from  'react-redux'
import ProductCard from '../ProductCard/ProductCard'
import './listing.css'

class Listing extends Component{
    render(){
        return(
            <div>
                <h2 className="product-list-heading">Product List</h2>
                <div className="product-list">
                {
                    this.props.productList.map(product => {
                        return(

                                <ProductCard
                                    data={product}
                                    key={product.id}
                                />

                        )
                    })
                }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        productList: state.listingReducer.productList
    }
}

export default connect( mapStateToProps, null )(Listing)