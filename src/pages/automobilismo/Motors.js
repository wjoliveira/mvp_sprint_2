import { ThemeProvider } from 'styled-components';
import { appTheme } from '../../components/Theme';
import HighlightNews from '../../components/HighlightNews';
import ResumeNews from "../../components/ResumeNews";
import { useEffect, useState } from "react";
import motors from "../../data/motors.json";

function Motors() {

    const [motorsHighlight,setMotorsHighlight] = useState([])

    useEffect(() => {
        setMotorsHighlight(motors.highlight)
    })

    const [motorsResume,setMotorsResume] = useState([])

    useEffect(() => {
            setMotorsResume(motors.resume)
        })

    return (
    <ThemeProvider theme={appTheme}>
        {motorsHighlight.map((n, index) => (
            <HighlightNews key={index} highlight={n} />
        ))}
        {motorsResume.map((n, index) => (
            <ResumeNews key={index} resume={n}/>
        ))}
        
    </ThemeProvider>
    );
}

export default Motors;