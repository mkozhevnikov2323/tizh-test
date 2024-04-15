import { Checkbox, FormControlLabel } from '@mui/material';
import { searchUserByFood } from 'features/api/user/searchUser';
import { useEffect } from 'react';
import Select from 'react-select';

export const SelectField = ({
  setSelectedOptions,
  selectedOptions,
  fieldType,
  setUsers,
  selectedOptionValues,
  ...field
}: any) => {
  const options = [
    { value: '1', label: 'Морковка' },
    { value: '2', label: 'Капуста' },
    { value: '3', label: 'Свекла' },
    { value: '4', label: 'Редиска' },
    { value: '5', label: 'Сосиска' },
    { value: '6', label: 'Пирожок' },
  ];

  if (fieldType === 'search') {
    useEffect(() => {
      searchUserByFood(selectedOptionValues)
        .then((res: any) => {
          setUsers(res);
        })
        .catch((err: any) => console.log('err', err));
    }, [selectedOptionValues]);
  }

  const handleSelectAll = () => {
    setSelectedOptions(options);
  };

  const handleClearSelection = () => {
    setSelectedOptions([]);
  };

  const handleSelectChange = (selectedOptions: any) => {
    setSelectedOptions(selectedOptions);
  };

  return (
    <div>
      <FormControlLabel
        control={<Checkbox />}
        label="Выбрать все"
        checked={selectedOptions?.length === options.length}
        onChange={handleSelectAll}
      />
      {selectedOptions?.length > 0 && (
        <FormControlLabel
          control={<Checkbox />}
          label="Отменить выбор"
          checked={selectedOptions?.length === 0}
          onChange={handleClearSelection}
        />
      )}

      <Select
        onChange={handleSelectChange}
        value={selectedOptions}
        isMulti
        options={options}
        {...field}
      />
    </div>
  );
};
