import React from 'react';
import {useForm} from "react-hook-form";
import {Button, TextField} from "@mui/material";

const WritestoreForms = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();


    function onSubmit(data: any) {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField {...register('idInstance')} type="text" id="filled-basic" label="Введите IdInstance" variant="filled" />
            <TextField {...register('apiTokenInstance')} type="text" id="filled-basic" label="Введите ApiTokenInstance" variant="filled" />


            <Button>Отправить</Button>
        </form>
    );
};

export default WritestoreForms;