import React from 'react';
import UserLayout from '../../hoc/user';
import { Button } from '../../components/ui/button';

const UserDashboard = () => {
  return (
    <UserLayout>
      <div className="user_nfo_panel">
        <h1>User information</h1>
        <div>
          <span>name</span>
          <span>lastname</span>
          <span>email</span>
        </div>
        <Button
          type="default"
          title="Edit account info"
          linkTo="/user/profile"
        />
      </div>

      <div className="user_nfo_panel">
        <h2>History purchases</h2>

        <div className="user_product_block_wrapper">history</div>
      </div>
    </UserLayout>
  );
};

export default UserDashboard;
