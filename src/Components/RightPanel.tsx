import {Avatar, Box, IconButton, Input, Paper, Typography} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoodIcon from "@mui/icons-material/Mood";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CustomAppBar from "./CustomAppBar/CustomAppBar";
import {rightPanelMenuItem} from "../Utils/constaint";
import React from "react";
import CustomMenuButton from "./CustomMenuButton/CustomMenuButton";
import {useForm} from "react-hook-form";
import {useGetMessageQuery} from "../Redux/getAllMessageChat.api";
import {useSendMessageMutation} from "../Redux/sendMessage.api";
import {Send} from "@mui/icons-material";

export default function RightPanel({phone, setPhone}: any) {

    const { register, handleSubmit, reset } = useForm();

    // @ts-ignore
    const {data: getAll = []} = useGetMessageQuery({chatId: phone}, {pollingInterval: 3000})

    const [sendMessage] = useSendMessageMutation()
    function onSubmit(data: any) {
        reset()

        sendMessage({
            chatId: phone,
            message: data.message
        })

    }

    const globalIconStyle = {
        color: "#8696a1",
        height: "28px",
        width: "28px",
    };
    return (
        <Box height="100%" width="70%" display="flex" flexDirection="column">
            <CustomAppBar>
                <Box
                    width="100%"
                    height="100%"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Box display="flex">
                        <Avatar/>
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="flex-start"
                            pl="10px"
                        >
                            <Typography variant="body1" color="white">
                                Artem Belykh
                            </Typography>
                            <Typography variant="caption" color="#8496a0">
                                online
                            </Typography>
                        </Box>
                    </Box>
                    <Box display="flex">
                        <IconButton onClick={() => {
                        }}>
                            <SearchIcon
                                sx={{
                                    color: "#afbac0",
                                }}
                            />
                        </IconButton>
                        <CustomMenuButton menuItems={rightPanelMenuItem}/>
                    </Box>
                </Box>
            </CustomAppBar>
            <Box height="87%" bgcolor={"#3d3d3d"} color="white">
                {getAll && getAll.map((item: any, index: any) => (
                    <div style={{padding: "10px"}} key={index}>{item.extendedTextMessage?.text}</div>
                ))}
            </Box>
            <Box
                height="62px"
                alignItems="center"
                display="flex"
                sx={{
                    background: "#1f2c33",
                    padding: "0px 15px",
                }}
            >
                <IconButton onClick={() => {
                }}>
                    <MoodIcon sx={globalIconStyle}/>
                </IconButton>
                <IconButton onClick={() => {
                }}>
                    <AttachFileIcon
                        sx={{
                            ...globalIconStyle,
                            transform: "rotateY(0deg) rotate(45deg)",
                        }}
                    />
                </IconButton>
                <Box component={"form"} onSubmit={handleSubmit(onSubmit)} flex={1} pl="5px" pr="5px">
                    <Input
                        {...register('message')}
                        fullWidth
                        disableUnderline
                        placeholder="Type a message"
                        sx={{
                            background: "#2b3943",
                            height: "42px",
                            borderRadius: "6px",
                            color: "white",
                            padding: "0px 10px",
                        }}
                    />
                </Box>
                <IconButton>
                    <Send sx={globalIconStyle}/>
                </IconButton>
            </Box>
        </Box>
    );
}