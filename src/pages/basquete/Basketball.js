import { ThemeProvider } from 'styled-components';
import { appTheme } from '../../components/Theme';
import HighlightNews from '../../components/HighlightNews';
import ResumeNews from "../../components/ResumeNews";
import { useEffect, useState } from "react";
import basketball from "../../data/basketball.json";

function Basketball() {

    const [basketballHighlight,setBasketballHighlight] = useState([])

    useEffect(() => {
        setBasketballHighlight(basketball.highlight)
    })

    const [basketballResume,setBasketballResume] = useState([])

    useEffect(() => {
            setBasketballResume(basketball.resume)
        })

    return (
    <ThemeProvider theme={appTheme}>
        {basketballHighlight.map((n, index) => (
            <HighlightNews key={index} highlight={n} />
        ))}
        {basketballResume.map((n, index) => (
            <ResumeNews key={index} resume={n}/>
        ))}
        
    </ThemeProvider>
    );
}

export default Basketball;