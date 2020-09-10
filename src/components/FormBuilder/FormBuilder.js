import React, { Fragment } from 'react';
import Input from '../UI/Input/Input';

const FormBuilder = ({ register, errors, formData }) => {
  return (
    <Fragment>
      {Object.keys(formData).map((key, idx) => {
        const data = formData[key];
        return (
          <Input
            key={data.label + idx}
            label={data.label}
            name={key}
            type={data.type}
            placeholder={data.placeholder}
            register={register({ ...data.valid })}
            errors={errors}
            errMessage={data.errMessage}
          />
        );
      })}
    </Fragment>
  );
};

export default FormBuilder;
