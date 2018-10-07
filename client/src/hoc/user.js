import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  {
    name: 'My Acconunt',
    linkTo: '/user/dashboard',
  },
  {
    name: 'User information',
    linkTo: '/user/profile',
  },
  {
    name: 'My Cart',
    linkTo: '/user/cart',
  },
];

const UserLayout = props => {
  const generateLinks = links => {
    return links.map(link => <Link to={link.linkTo}>{link.name}</Link>);
  };

  return (
    <div className="container">
      <div className="user_container">
        <div className="user_left_nav">
          <h2>My account</h2>
          <div className="links">{generateLinks(links)}</div>
        </div>
        <div className="user_right">{props.children}</div>
      </div>
    </div>
  );
};

export default UserLayout;
