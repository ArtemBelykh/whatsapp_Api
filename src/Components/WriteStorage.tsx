import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {TransitionProps} from '@mui/material/transitions';
import {TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import {useEffect} from "react";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function WriteStorage() {
    const [open, setOpen] = React.useState(true);

    const {register, handleSubmit, formState: {errors}, reset} = useForm({mode: "onBlur"});


    useEffect(() => {
        if (localStorage.getItem('idInstance') && localStorage.getItem('apiTokenInstance')) {
            setOpen(false)
        }
    }, [])

    function onSubmit(data: any) {
        reset()

        localStorage.setItem('idInstance', data.idInstance)
        localStorage.setItem('apiTokenInstance', data.apiTokenInstance)


        handleClose()
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>Введите данные WhatsApp</DialogTitle>
                <DialogContent>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField {...register('idInstance', {
                            required: "Введите idInstance"
                        })} type="text" id="filled-basic"
                                   label="Введите IdInstance"
                                   variant="filled"/><br/>

                        <ErrorMessage
                            errors={errors}
                            name="idInstance"
                            render={({ message }: any) => <p>{message}</p>}
                        />

                        <br/>
                        <TextField {...register('apiTokenInstance', {
                            required: "Введите apiTokenInstance"
                        })} type="text" id="filled-basic"
                                   label="Введите ApiTokenInstance" variant="filled"/><br/>

                        <ErrorMessage
                            errors={errors}
                            name="apiTokenInstance"
                            render={({ message }: any) => <p>{message}</p>}
                        />

                        <br/>


                        <Button type="submit">Отправить</Button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}