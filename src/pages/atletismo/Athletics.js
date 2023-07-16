import { ThemeProvider } from 'styled-components';
import { appTheme } from '../../components/Theme';
import HighlightNews from '../../components/HighlightNews';
import ResumeNews from "../../components/ResumeNews";
import { useEffect, useState } from "react";
import athletics from "../../data/athletics.json";

function Athletics() {

    const [athleticsHighlight,setAthleticsHighlight] = useState([])

    useEffect(() => {
        setAthleticsHighlight(athletics.highlight)
    })

    const [athleticsResume,setAthleticsResume] = useState([])

    useEffect(() => {
            setAthleticsResume(athletics.resume)
        })

    return (
    <ThemeProvider theme={appTheme}>
        {athleticsHighlight.map((n, index) => (
            <HighlightNews key={index} highlight={n} />
        ))}
        {athleticsResume.map((n, index) => (
            <ResumeNews key={index} resume={n}/>
        ))}
        
    </ThemeProvider>
    );
}

export default Athletics;