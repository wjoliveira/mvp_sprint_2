import { ThemeProvider } from 'styled-components';
import { appTheme } from '../../components/Theme';
import HighlightNews from '../../components/HighlightNews';
import ResumeNews from "../../components/ResumeNews";
import { useEffect, useState } from "react";
import soccer from "../../data/soccer.json";

function Soccer() {

    const [soccerHighlight,setSoccerHighlight] = useState([])

    useEffect(() => {
        setSoccerHighlight(soccer.highlight)
    })

    const [soccerResume,setSoccerResume] = useState([])

    useEffect(() => {
            setSoccerResume(soccer.resume)
        })

    return (
    <ThemeProvider theme={appTheme}>
        {soccerHighlight.map((n, index) => (
            <HighlightNews key={index} highlight={n} />
        ))}
        {soccerResume.map((n, index) => (
            <ResumeNews key={index} resume={n}/>
        ))}
        
    </ThemeProvider>
    );
}

export default Soccer;