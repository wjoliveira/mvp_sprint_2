import { ThemeProvider } from 'styled-components';
import { appTheme } from '../../components/Theme';
import HighlightNews from '../../components/HighlightNews';
import ResumeNews from "../../components/ResumeNews";
import { useEffect, useState } from "react";
import volleyball from "../../data/volleyball.json";

function Volleyball() {

    const [volleyballHighlight,setVolleyballHighlight] = useState([])

    useEffect(() => {
        setVolleyballHighlight(volleyball.highlight)
    })

    const [volleyballResume,setVolleyballResume] = useState([])

    useEffect(() => {
            setVolleyballResume(volleyball.resume)
        })

    return (
    <ThemeProvider theme={appTheme}>
        {volleyballHighlight.map((n, index) => (
            <HighlightNews key={index} highlight={n} />
        ))}
        {volleyballResume.map((n, index) => (
            <ResumeNews key={index} resume={n}/>
        ))}
        
    </ThemeProvider>
    );
}

export default Volleyball;