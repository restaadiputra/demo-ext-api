import { Box, Button, ButtonGroup, Stack } from "@mui/material";
import React from "react";
import { Link, Route, Routes, Outlet } from "react-router-dom";
import Asset from "./pages/Asset";
import Event from "./pages/Event";

const Layout = () => {
    return (
        <Stack>
            <Box>
                <ButtonGroup color="secondary" aria-label="medium secondary button group">
                    <Button key="event">
                        <Link to="/">
                            Event
                        </Link>
                    </Button>
                    <Button key="asset">
                        <Link to="/asset">
                            Asset
                        </Link>
                    </Button>
                </ButtonGroup>
            </Box>
            <Box>
                <Outlet />
            </Box>
        </Stack>
    )
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Event />} />
                <Route path="asset" element={<Asset />} />
            </Route>
        </Routes>
    )
}

export default App
