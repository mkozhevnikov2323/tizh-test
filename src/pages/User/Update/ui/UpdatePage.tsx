import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import Button from '@mui/material/Button';
import { DateField } from 'shared/ui/DateField';
import { UploadFile } from 'features/uploadFile';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { TextField } from 'shared/ui/TextField';
import { SelectField } from 'shared/ui/SelectField';
import { useParams } from 'react-router-dom';
import { getUser } from 'features/api/user/getUser';
import { getUserFoodList } from 'shared/lib/helpers';
import { updateUser } from 'features/api/user/updateUser';

interface IFormInput {
  avatar: any;
  firstName: string;
  email: string;
  birthDate: string;
  favouriteFood: string[];
}

export const UpdatePage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  const { control, handleSubmit, setValue, register } = useForm();

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOptionValues, setSelectedOptionValues] = useState([]);

  useEffect(() => {
    if (user) {
      setValue('firstName', user.username);
      setValue('avatar', user.photo_id);
      setValue('email', user.email);
      setValue('birthDate', dayjs(user.birthdate, 'DD.MM.YYYY'));
      setValue('favouriteFood', getUserFoodList(user.favorite_food_ids));
    }
  }, [user]);

  useEffect(() => {
    getUser(id)
      .then((res) => {
        setUser(res);
      })
      .catch((err) => console.log('err', err));
  }, []);

  const handleAvatarChange = (file: any) => {
    setValue('avatar', '');
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
    if (data.avatar[0]) {
      formData.append('upload_photo', data.avatar[0]);
    }
    formData.append('username', data.firstName);
    formData.append('email', data.email);
    formData.append('birthdate', dayjs(data.birthDate).format('DD.MM.YYYY'));
    for (const value of selectedOptionValues) {
      formData.append('favorite_food_ids[]', value);
    }

    updateUser(formData, id)
      .then()
      .catch((err) => console.log('err', err));
    // fetch('http://tasks.tizh.ru/v1/user/create', {
    //   method: 'POST',
    //   mode: 'no-cors',
    //   body: formData,
    // })
    //   .then((response) => {
    //     console.log('Request succeeded with JSON response', response);
    //   })
    //   .catch((error) => {
    //     console.log('Request failed', error);
    //   });
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
        render={({ field }) => (
          <DateField
            value={user?.birthdate}
            onChange={handleDateChange}
            {...field}
          />
        )}
      />

      <Controller
        name="favouriteFood"
        control={control}
        render={({ field }) => (
          <SelectField
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            {...field}
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
