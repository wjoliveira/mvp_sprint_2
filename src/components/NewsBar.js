import { Box, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import ImgMediaCard from "./ImgMediaCard";
import { Link, useNavigate } from "react-router-dom";

export default function NewsBar(props) {

    const navigate = useNavigate()

    const resume = props.resume;

    return (


            <Link style={{ textDecoration: 'none' }} to={`/${resume.sport}/${resume.id}`} state={{n:resume}}>
                <Card sx={{width: "300px", height: "100px", backgroundColor: "#9fcfcf"}}>
                    <CardMedia
                        component="img"
                        width="120px"
                        height="80px"
                        image={resume.image}
                    />
                    <CardContent>
                        <Typography variant="h6" component="h6">
                            {resume.title}
                        </Typography>
                    </CardContent>
                </Card>
            </Link>

        )
}