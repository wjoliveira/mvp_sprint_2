import { Typography } from "@mui/material";
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../components/Theme';
import HighlightNews from '../components/HighlightNews'
import home from '../data/home.json';
import { useEffect, useState } from "react";

function Home(){

    const [homeHighlight,setHomeHighlight] = useState([])

    useEffect(() => {
        setHomeHighlight(home.highlight)
    })

    return(
        <ThemeProvider theme={appTheme}>
        {homeHighlight.map((n, index) => (
            <HighlightNews key={index} highlight={n} />
        ))}
    </ThemeProvider>
    );
}

export default Home;