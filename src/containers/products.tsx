import React, {Component} from 'react';
import {render} from 'react-dom';
import * as ProductHelper from '../helpers/ProductHelper'

interface ProductsState  {
  products: Product[]
}
interface Product {
  name: string;
  price: number;
}


class Products extends Component<{}, ProductsState> {

  constructor(props: object) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount () {
    let promise = ProductHelper.getProducts();
    let _this = this;
    promise.then(products => {
      console.log(products);
      _this.setState({products:products})
    })
  }

  render () {
    console.log(this.state);
    let products = this.state.products || [];
    let preparedProducts = products.map(( product )=>{
      return (
        <div>
          <span>{product.name}</span>
          <span>{product.price}</span>

        </div>
      )
    })
    return (
      <div>
        {preparedProducts}
      </div>

    )
  }

}

export default Products;