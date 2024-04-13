import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export function InputFileUpload({ onChange, register }: any) {
  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      onChange={onChange}
    >
      Заменить
      <VisuallyHiddenInput
        type="file"
        {...register('avatar')}
      />
    </Button>
  );
}
