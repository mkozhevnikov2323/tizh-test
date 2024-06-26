import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import Button from '@mui/material/Button';
import './CreatePage.scss';
import { DateField } from 'shared/ui/DateField';
import { UploadFile } from 'features/uploadFile';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { TextField } from 'shared/ui/TextField';
import { SelectField } from 'shared/ui/SelectField';
import { createUser } from 'features/api/user/createUser';
import { useNavigate } from 'react-router-dom';

interface IFormInput {
  avatar: any;
  firstName: string;
  email: string;
  birthDate: string;
  favouriteFood: string[];
}

export const CreatePage = () => {
  const { control, handleSubmit, setValue, register } = useForm({
    defaultValues: {
      avatar: '',
      firstName: '',
      email: '',
      birthDate: '',
      favouriteFood: [],
    },
  });

  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOptionValues, setSelectedOptionValues] = useState([]);

  const handleAvatarChange = (file: any) => {
    setValue('avatar', 'hhhh');
  };

  const handleDateChange = (date: any) => {
    setValue('birthDate', date);
  };

  useEffect(() => {
    setSelectedOptionValues(
      selectedOptions?.map((option) => Number(option.value)),
    );
  }, [selectedOptions]);

  const onSubmit: SubmitHandler<IFormInput> = (data: any) => {
    const formData = new FormData();
    formData.append('upload_photo', data.avatar[0]);
    formData.append('username', data.firstName);
    formData.append('email', data.email);
    formData.append('birthdate', dayjs(data.birthDate).format('DD.MM.YYYY'));
    for (const value of selectedOptionValues) {
      formData.append('favorite_food_ids[]', value);
    }

    createUser(formData)
      .then()
      .catch((err: any) => console.log('err', err))
      .finally(() => navigate('/'));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form"
    >
      <Controller
        name="avatar"
        control={control}
        render={({ field }) => (
          <UploadFile
            onChange={handleAvatarChange}
            register={register}
            {...field}
          />
        )}
      />
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => (
          <TextField
            label="Имя"
            type="text"
            {...field}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            label="Email"
            type="email"
            {...field}
          />
        )}
      />
      <Controller
        name="birthDate"
        control={control}
        render={({ field }) => <DateField onChange={handleDateChange} />}
      />

      <Controller
        name="favouriteFood"
        control={control}
        render={({ field }) => (
          <SelectField
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
        )}
      />
      <Button
        color="success"
        variant="contained"
        type="submit"
        sx={{
          width: 'min-content',
          textTransform: 'initial',
        }}
      >
        Сохранить
      </Button>
    </form>
  );
};
