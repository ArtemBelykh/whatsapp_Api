import React, {useState} from 'react';
import {Box} from "@mui/material";
import WriteStorage from "./Components/WriteStorage";
import LeftPanel from "./Components/LeftPanel";
import RightPanel from "./Components/RightPanel";

function App() {
    const [phone, setPhone] = useState('')
    return (
        <>
            <WriteStorage/>


            <Box display="flex" flexDirection="row" height="100vh">
                <LeftPanel phone={phone} setPhone={setPhone} />
                <Box
                    sx={{
                        border: ".05px solid #2f3b44",
                    }}
                />
                <RightPanel phone={phone} setPhone={setPhone} />
            </Box>

        </>
    );
}

export default App;
