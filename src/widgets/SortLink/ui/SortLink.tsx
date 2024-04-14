import { sortUsers } from 'features/api/user/sortUsers';
import React, { useState } from 'react';
import './SortLink.scss';

export const SortLink = ({ title, query, setUsers }: any) => {
  const [searchType, setSearchType] = useState('asc');
  const [clicked, setClicked] = useState(false);

  const handleSort = () => {
    setClicked(true);
    if (searchType === 'asc') {
      sortUsers(query)
        .then((res: any) => {
          setUsers(res);
        })
        .catch((err: any) => console.log('err', err));
      setSearchType('desc');
    } else {
      sortUsers(`-${query}`)
        .then((res: any) => {
          setUsers(res);
        })
        .catch((err: any) => console.log('err', err));
      setSearchType('asc');
    }
  };

  const getSortDirectionClass = () => {
    if (clicked) {
      return searchType === 'asc' ? 'desc' : 'asc';
    }
    return '';
  };

  return (
    <button
      type="button"
      className={`sortLink ${getSortDirectionClass()}`}
      onClick={handleSort}
    >
      {title}
    </button>
  );
};
