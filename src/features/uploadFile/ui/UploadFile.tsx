import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { UploadButton } from 'shared/ui/UploadButton';
import './UploadFile.scss';

export const UploadFile = ({ register, onChange, ...field }: any) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e: any) => {
    const selectedFile = e.target.files[0];
    setFile(URL.createObjectURL(selectedFile));
  };

  return (
    <div className="uploadFile">
      <Avatar
        alt="S"
        src={file || `http://tasks.tizh.ru/file/get?id=${field.value}`}
        sx={{
          alignSelf: 'center',
          width: '150px',
          height: '150px',
        }}
        onChange={onChange}
        {...field}
      />
      <UploadButton
        register={register}
        onChange={handleFileChange}
      />
    </div>
  );
};
