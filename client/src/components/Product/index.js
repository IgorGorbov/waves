import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageTop from '../ui/pageTop';
import { getProductDetail, getProductClear } from '../../actions/products';
import ProdInfo from './prodInfo';
import ProdImg from './prodImg';

class Product extends Component {
  componentDidMount = () => {
    const id = this.props.match.params.id;
    this.props.getProductDetail(id);
  };

  componentWillUnmount() {
    this.props.getProductClear();
  }

  addToCartHandler = id => {};

  render() {
    const { products } = this.props;
    return (
      <div>
        <PageTop title="Product detail" />

        <div className="container">
          {products.prodDetail ? (
            <div className="product_detail_wrapper">
              <div className="left">
                <div style={{ width: '500px' }}>
                  <ProdImg detail={products.prodDetail} />
                </div>
              </div>
              <div className="right">
                <ProdInfo
                  detail={products.prodDetail}
                  addToCart={id => this.addToCartHandler(id)}
                />
              </div>
            </div>
          ) : (
            'loading'
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = {
  getProductDetail,
  getProductClear,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
