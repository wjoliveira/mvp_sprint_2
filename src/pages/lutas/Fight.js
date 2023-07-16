import { ThemeProvider } from 'styled-components';
import { appTheme } from '../../components/Theme';
import HighlightNews from '../../components/HighlightNews';
import ResumeNews from "../../components/ResumeNews";
import { useEffect, useState } from "react";
import fight from "../../data/fight.json";

function Fight() {

    const [fightHighlight,setFightHighlight] = useState([])

    useEffect(() => {
        setFightHighlight(fight.highlight)
    })

    const [fightResume,setFightResume] = useState([])

    useEffect(() => {
            setFightResume(fight.resume)
        })

    return (
    <ThemeProvider theme={appTheme}>
        {fightHighlight.map((n, index) => (
            <HighlightNews key={index} highlight={n} />
        ))}
        {fightResume.map((n, index) => (
            <ResumeNews key={index} resume={n}/>
        ))}
        
    </ThemeProvider>
    );
}

export default Fight;