import { TextField } from '@mui/material';
import React from 'react';
import { searchUserById } from 'features/api/user/searchUser';

export const UserSearchByIdField = ({ userId, setUserId, setUsers }: any) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      searchUserById(userId).then((res: any) => {
        setUsers(res);
      });
    }
  };

  const handleChange = (event: any) => {
    setUserId(event.target.value);
  };

  const handleBlur = () => {
    searchUserById(userId).then((res: any) => {
      setUsers(res);
    });
  };

  return (
    <TextField
      id="outlined-search"
      label="Поиск по ID"
      type="search"
      onChange={handleChange}
      onKeyDown={handleKeyPress}
      onBlur={handleBlur}
      placeholder="ID"
    />
  );
};
