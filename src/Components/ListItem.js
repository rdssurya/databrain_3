import React from 'react';

const ListItem = ({id, username}) => {
  return (
    <ul>
        <li>Id: {id}</li>
        <li>Username: {username}</li>
    </ul>
  )
}

export default ListItem;