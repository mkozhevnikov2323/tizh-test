import { TextField } from '@mui/material';

export const AppTextField = ({ label, type, ...field }: any) => (
  <TextField
    sx={{
      '& .MuiInputBase-input': {
        fontSize: '16px',
        padding: '10px',
      },
      '& .MuiOutlinedInput-root': {
        borderColor: 'blue',
      },
      '& .MuiInputLabel-root': {
        top: '-5px',
      },
    }}
    label={label}
    className="form__input"
    id="outlined-size-normal"
    type={type}
    {...field}
  />
);
