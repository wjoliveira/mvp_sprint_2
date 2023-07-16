import { Box, CardMedia, Typography } from "@mui/material";
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../../components/Theme';
import { useLocation} from "react-router"
import fight_other_news from "../../data/fight_other_news.json"
import { useEffect, useState } from "react";

function FightNews(){

    let { state } = useLocation();

    const [fightResume,setFightResume] = useState([])

    useEffect(() => {
            setFightResume(fight_other_news.resume)
        })

    return(
        <ThemeProvider theme={appTheme}>
            <Box
                sx={{
                flexGrow: 1, 
                width: '1100px', 
                //height: '150px', 
                margin: '0 auto',
                mt: '124px', mb: '20px'
                }}
            >
                <Typography variant="h4" component="div">
                    {state.n.subtitle}
                </Typography>
                <br />
                <Typography variant="div" component="p">
                    {state.n.title}
                </Typography>
            </Box>
            <Box
            sx={{
                flexGrow: 1, 
                width: '800px', 
                height: '400px', 
                margin: '0 auto',
                mt: '20px', mb: '20px',
                backgroundColor: '#c6c6c6'
            }}
            >
                <CardMedia 
                    component="img"
                    height="400px"
                    image={state.n.image}
                />
            </Box>
            <Box
                sx={{
                    flexGrow: 1, 
                    width: '800px', 
                    margin: '0 auto',
                    mt: '20px', mb: '20px',
                }}
            >
                <Typography variant="div" component="p" sx={{textAlign: "justify"}}>
                    {state.n.main}
                    {state.n.main}
                </Typography>
            </Box>

        </ThemeProvider>
    );
}

export default FightNews;