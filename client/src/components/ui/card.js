import React, { Component } from 'react';
import { Button } from './button';

const NOT_IMAGE = '/images/image_not_availble.png';

export default class Card extends Component {
  renderCardImage = images => {
    if (images.length) {
      return images[0].url;
    }

    return NOT_IMAGE;
  };
  render() {
    const { grid, images, brand, name, price, _id, description } = this.props;
    return (
      <div className={`card_item_wrapper ${grid}`}>
        <div
          className="image"
          style={{
            background: `url(${this.renderCardImage(images)}) no-repeat`,
          }}
        />
        <div className="action_container">
          <div className="tags">
            <div className="brand">{brand.name}</div>
            <div className="name">{name}</div>
            <div className="price">${price}</div>
          </div>

          {grid ? (
            <div className="description">
              <p>{description}</p>
            </div>
          ) : null}
          <div className="actions">
            <div className="button_wrapp">
              <Button
                type="default"
                altClass="card_link"
                title="View propduct"
                linkTo={`/product/${_id}`}
                addStyles={{ margin: '10px 0 0 0' }}
              />
            </div>
            <div className="button_wrapp">
              <Button
                type="bag_link"
                runAction={() => {
                  console.log('added to card');
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
