import { ThemeProvider } from 'styled-components';
import { appTheme } from '../../components/Theme';
import HighlightNews from '../../components/HighlightNews';
import ResumeNews from "../../components/ResumeNews";
import { useEffect, useState } from "react";
import tennis from "../../data/tennis.json";

function Tennis() {

    const [tennisHighlight,setTennisHighlight] = useState([])

    useEffect(() => {
        setTennisHighlight(tennis.highlight)
    })

    const [tennisResume,setTennisResume] = useState([])

    useEffect(() => {
            setTennisResume(tennis.resume)
        })

    return (
    <ThemeProvider theme={appTheme}>
        {tennisHighlight.map((n, index) => (
            <HighlightNews key={index} highlight={n} />
        ))}
        {tennisResume.map((n, index) => (
            <ResumeNews key={index} resume={n}/>
        ))}
        
    </ThemeProvider>
    );
}

export default Tennis;