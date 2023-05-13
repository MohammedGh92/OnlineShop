import React from 'react'
import { View } from 'react-native';
import { AppBTN, AppController } from '../../Common/';
import { useForm } from "react-hook-form";
import { nameRules, emailRules, passwordRules } from '../../Common/Utils/inputRules/';

export default function NewScreenForm(props) {

    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        props.onSubmit(data);
    };

    return (
        <View>
            <AppController rules={nameRules()} control={control} error={errors.FirstName} name={'FirstName'} placeholder={'First Name'} />
            <AppController rules={emailRules()} control={control} error={errors.Email} name={'Email'} placeholder={'Email'} />
            <AppController iconName={'lock'} secureTextEntry rules={passwordRules()} control={control} error={errors.Password} name={'Password'} placeholder={'Password'} />
            <AppBTN title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
    );

}