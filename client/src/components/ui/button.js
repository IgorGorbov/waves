import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({ type, title, linkTo, addStyles }) => {
  const getButton = () => {
    let template = '';

    switch (type) {
      case 'default':
        template = (
          <Link className="link_default" to={linkTo} {...addStyles}>
            {title}
          </Link>
        );
        break;

      default:
        template = '';
    }

    return template;
  };

  return <div className="my_link">{getButton()}</div>;
};
