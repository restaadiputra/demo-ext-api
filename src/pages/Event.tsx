import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "../utils/axios";

const Event = () => {
    const fetchEvents = async () => {
        const result = await axios.get("/events")
        return result.data;
    }

    const { data, isLoading } = useQuery({ queryKey: ['events'], queryFn: fetchEvents })

    if (isLoading) {
        return <p>Loading....</p>
    }

    return (
        <Box>
            {data.map((item) => (
                <p>{item.title}</p>
            ))}
        </Box>
    )
}
export default Event;
