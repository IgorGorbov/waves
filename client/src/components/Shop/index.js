import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBrands, getWoods } from '../../actions/products';
import Page from '../ui/pageTop';
import CollapseCheckbox from '../ui/CollapseCheckbox';
import CollapseRadio from '../ui/radio';

import { frets, price } from '../../utils/misc';

class Shop extends Component {
  state = {
    grid: false,
    limit: 6,
    skip: 0,
    filters: {
      brand: [],
      frets: [],
      wood: [],
      price: [],
    },
  };

  componentDidMount = () => {
    this.props.getBrands();
    this.props.getWoods();
  };

  handlePrice = value => {
    const data = price;
    let arr = [];

    for (let key in data) {
      if (data[key]._id === parseInt(value, 10)) {
        arr = data[key].array;
      }
    }

    return arr;
  };

  handleFilters = (filters, category) => {
    const newFilters = { ...this.state.filters };
    newFilters[category] = filters;

    if (category === 'price') {
      let priceValue = this.handlePrice(filters);
      newFilters[category] = priceValue;
    }

    this.setState({
      filters: newFilters,
    });
  };

  render() {
    const { products } = this.props;
    return (
      <div>
        <Page title="Browse Products" />
        <div className="container">
          <div className="shop_wrapper">
            <div className="left">
              <CollapseCheckbox
                initState={true}
                title="Brands"
                list={products.brands}
                handleFilters={filters => this.handleFilters(filters, 'brand')}
              />
              <CollapseCheckbox
                initState={false}
                title="Frets"
                list={frets}
                handleFilters={filters => this.handleFilters(filters, 'frets')}
              />
              <CollapseCheckbox
                initState={true}
                title="Woods"
                list={products.woods}
                handleFilters={filters => this.handleFilters(filters, 'woods')}
              />

              <CollapseRadio
                initState={true}
                list={price}
                title="Price"
                handleFilters={filters => this.handleFilters(filters, 'price')}
              />
            </div>
            <div className="right">right</div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = {
  getBrands,
  getWoods,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
