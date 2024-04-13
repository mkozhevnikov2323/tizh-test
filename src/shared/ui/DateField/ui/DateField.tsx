import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export function AppDateField({ onChange }: any) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Дата рождения"
        format="DD.MM.YYYY"
        onChange={onChange}
      />
    </LocalizationProvider>
  );
}
