import React from 'react';

const User = ({ id, name, email }) => {
  return (
    <tr>
      <td align='justify'>{id}</td>
      <td align='justify'>{name}</td>
      <td align='justify'>{email}</td>
    </tr>
  );
};

export default User;
