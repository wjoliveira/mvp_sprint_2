import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function ResumeNews(props) {

    const navigate = useNavigate()

    const resume = props.resume

    return (
        <Box
            sx={{
                flexGrow: 1, 
                width: '1280px', 
                height: '300px', 
                margin: '0 auto'
            }}
        >
            <Link style={{ textDecoration: 'none' }} to={`/${resume.sport}/${resume.id}`} state={{n:resume}}>
            <Stack direction="row" justifyContent="space-between" sx={{mt: "10px", mb: "10px"}}>
                <Card sx={{width: "350px", height: "280px", backgroundColor: "#9fcfcf"}} >
                    
                    <CardMedia
                        component="img"
                        height="280px"
                        image={resume.image}
                        onClick={() => navigate(`/${resume.sport}/${resume.id}`)}
                    >
                    </CardMedia>
                </Card>
                <Card sx={{width: "900px", height: "280px"}}>
                        <CardContent>
                            <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
                                Resume
                            </Typography>
                            <Typography variant="h5" component="div">
                                {resume.subtitle}
                            </Typography>
                            <Typography variant="h6" component="h6">
                                {resume.title}
                            </Typography>
                        </CardContent>
                    <CardActions>
                        <Button size="small">Compartilhe</Button>
                    </CardActions>
                </Card>
                </Stack>
            </Link>
        </Box>
    )
}