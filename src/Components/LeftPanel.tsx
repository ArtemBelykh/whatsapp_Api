import {Avatar, Box, IconButton, Input, Typography} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import {leftPanelMenuItem} from "../Utils/constaint";
import React, {useState} from "react";
import ChatCard from "./ChatCard/ChatCard";
import CustomAppBar from "./CustomAppBar/CustomAppBar";
import CustomMenuButton from "./CustomMenuButton/CustomMenuButton";


export default function LeftPanel({phone, setPhone}: any) {

    const [itemsChats, setItemChats] = useState([])

    const sendMessage = () => {
        const tel = prompt("Введите номер телефона собеседника: ")

        const Phone: any = tel + "@c.us"

        setPhone(Phone)
        // @ts-ignore
        setItemChats((prevState: any) => [...prevState, Phone])
    }

    return (
        <Box height="100%" width="30%" overflow="hidden">
            <CustomAppBar>
                <Box
                    width="100%"
                    height="100%"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Avatar/>

                    <Box display="flex">
                        <IconButton
                            onClick={() => {
                            }}
                            sx={{
                                paddingRight: "15px",
                            }}
                        >
                            <DonutLargeIcon
                                sx={{
                                    color: "#afbac0",
                                }}
                            />
                        </IconButton>
                        <IconButton
                            onClick={sendMessage}
                            sx={{
                                paddingRight: "10px",
                            }}

                        >
                            <ChatIcon
                                sx={{
                                    color: "#afbac0",
                                }}
                            />

                            <Typography color="white" fontSize="10" component="div">Создать чат</Typography>
                        </IconButton>

                        <CustomMenuButton menuItems={leftPanelMenuItem}/>
                    </Box>
                </Box>
            </CustomAppBar>
            <Box
                sx={{
                    background: "#101b20",
                    padding: "12px",
                }}
                display="flex"
            >
                <Box
                    display="flex"
                    sx={{
                        background: "#1f2c33",
                        borderRadius: "8px",
                        padding: "0px 8px",
                    }}
                    flex={1}
                    alignItems="center"
                >
                    <IconButton onClick={() => {
                    }}>
                        <SearchIcon
                            sx={{
                                color: "#8696a1",
                                height: "20px",
                                width: "20px",
                            }}
                        />
                    </IconButton>
                    <Input
                        fullWidth
                        disableUnderline
                        placeholder="Search or start a new chat"
                        sx={{
                            height: "35px",
                            color: "white",
                            padding: "0px 13px",
                            fontSize: "14px",
                        }}
                    />
                </Box>
                <IconButton onClick={() => {
                }}>
                    <FilterListIcon
                        sx={{
                            color: "#8696a1",
                            height: "20px",
                            width: "20px",
                        }}
                    />
                </IconButton>
            </Box>
            <Box
                overflow="auto"
                height="90%"
                sx={{
                    background: "#101b20",
                }}
            >
                <ChatCard phone={itemsChats} chatId={phone} setPhone={setPhone}/>
                <Box pt="50px"/>
            </Box>
        </Box>
    );
}