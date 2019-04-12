import React, { Component } from 'react'
import './ProductCard.css'
class ProductCard extends Component{
    render(){
        const { image, name, quantity, price } = this.props.data;
        return(
            <div className="item-card">
                <div className="img-container">
                    <img className="product-img" src={image} alt={name}/>
                </div>
                <h3>{name}</h3>
                <div className="product-price">Price: &#8377;{price}</div>
                {quantity > 0 ?
                    <div className="product-in-stock">In Stock: {quantity}</div>
                    : <div className="product-out-stock">Out Of Stock: 0</div>}
                <button className="AddToCartButton">ADD TO CART</button>

            </div>
        )
    }
}

export default ProductCard;