import { TextField } from '@mui/material';
import React from 'react';
import { searchUserById } from 'features/api/user/searchUser';

export const UserSearchField = ({
  searchParam,
  setSearchParam,
  setUsers,
  searchType,
}: any) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      searchUserById(searchParam, searchType).then((res: any) => {
        setUsers(res);
      });
    }
  };

  const handleChange = (event: any) => {
    setSearchParam(event.target.value);
  };

  const handleBlur = () => {
    searchUserById(searchParam, searchType).then((res: any) => {
      setUsers(res);
    });
  };

  return (
    <TextField
      id="outlined-search"
      type="search"
      onChange={handleChange}
      onKeyDown={handleKeyPress}
      onBlur={handleBlur}
    />
  );
};
