import {Avatar, Box, Typography} from "@mui/material";
import React from "react";
import {ChatCardType} from "../../Utils/LeftPanel.types";


export default function ChatCard({phone, chatId, setPhone}: any) {

    return (
        <Box
            display="flex"
            flexWrap="wrap"
            sx={{
                // background: selected ? "#2b3943" : "#101b20",
                padding: "8px 12px",
            }}
        >



            {phone && phone.map((item: any, index: any) => (

                <Box
                    key={index}
                    display="flex"
                    flexDirection="column"
                    pl="15px"
                    alignItems="center"
                    width="100%"
                >

                    <Box display="flex" onClick={() => setPhone(item)} sx={{cursor: "pointer"}} justifyContent="flex-start" padding="5px" width="100%">
                        <Avatar/>
                        <Typography marginLeft="10px" variant="body1" color="#d1d7db">
                            {item}
                        </Typography>
                    </Box>

                    <Box
                        width="100%"
                        mt="13px"
                        sx={{
                            border: ".05px solid #2f3b44",
                        }}
                    />

                </Box>
            ))}


        </Box>
    );
}