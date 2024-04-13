import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import Select from 'react-select';

export const SelectField = ({ setSelectedOptions, selectedOptions }: any) => {
  const options = [
    { value: '1', label: 'Морковка' },
    { value: '2', label: 'Капуста' },
    { value: '3', label: 'Свекла' },
    { value: '4', label: 'Редиска' },
    { value: '5', label: 'Сосиска' },
    { value: '6', label: 'Пирожок' },
  ];

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
        control={<Checkbox defaultChecked />}
        label="Выбрать все"
        checked={selectedOptions.length === options.length}
        onChange={handleSelectAll}
      />
      {selectedOptions.length > 0 && (
        <FormControlLabel
          control={<Checkbox />}
          label="Отменить выбор"
          checked={selectedOptions.length === 0}
          onChange={handleClearSelection}
        />
      )}

      <Select
        onChange={handleSelectChange}
        value={selectedOptions}
        isMulti
        options={options}
      />
    </div>
  );
};
