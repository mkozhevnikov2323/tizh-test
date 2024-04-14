import React, { useEffect, useState } from 'react';
import { SelectField } from 'shared/ui/SelectField';

export const SearchSelect = ({ setUsers }: any) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOptionValues, setSelectedOptionValues] = useState([]);

  useEffect(() => {
    setSelectedOptionValues(
      selectedOptions?.map((option) => Number(option.value)),
    );
  }, [selectedOptions]);

  return (
    <SelectField
      selectedOptions={selectedOptions}
      setSelectedOptions={setSelectedOptions}
      selectedOptionValues={selectedOptionValues}
      fieldType="search"
      setUsers={setUsers}
    />
  );
};
