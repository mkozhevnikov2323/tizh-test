import { searchUserByDate } from 'features/api/user/searchUser';
import { DateField } from 'shared/ui/DateField';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import './userSearch.scss';

export const UserSearchFieldByDate = ({ setUsers }: any) => {
  const [birthdateStart, setBirthdateStart] = useState('');
  const [birthdateEnd, setBirthdateEnd] = useState('');

  const prepareDate = (date: any): string => {
    const searchDate = dayjs(date).format('DD.MM.YYYY');
    return searchDate === 'Invalid Date' ? '' : searchDate;
  };

  const search = () =>
    searchUserByDate(birthdateStart, birthdateEnd)
      .then((res: any) => {
        setUsers(res);
      })
      .catch((err: any) => console.log('err', err));

  useEffect(() => {
    search();
  }, [birthdateStart, birthdateEnd]);

  const handleFirstDateChange = (date: any) => {
    setBirthdateStart(prepareDate(date));
  };

  const handleSecondDateChange = (date: any) => {
    setBirthdateEnd(prepareDate(date));
  };

  return (
    <div className="userSearch">
      <DateField
        className="userSearch__date-field"
        onChange={handleFirstDateChange}
      />
      <DateField
        className="userSearch__date-field"
        onChange={handleSecondDateChange}
      />
    </div>
  );
};
