import React, { Component } from 'react'
import Title from './Title';
import Product from "./Product";
import {ProductConsumer} from '../Context';
export default class ProductList extends Component {
    
    render() {
        return (
            <>
            <div className="py-5">
                <div className="container">
                    <Title name="our" title="products"/>

                    <div className="row">
                    <ProductConsumer>
                        {(value) => {
                           
                           return value.products.map(product => {
                            
                           return <Product key={product.id} product={product}></Product>
                           
                           });
                           
                        }}
                    </ProductConsumer>
                </div>
                    </div>
                    </div>
            </>
        )
    }
}
