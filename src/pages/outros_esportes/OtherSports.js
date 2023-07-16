import { ThemeProvider } from 'styled-components';
import { appTheme } from '../../components/Theme';
import HighlightNews from '../../components/HighlightNews';
import ResumeNews from "../../components/ResumeNews";
import { useEffect, useState } from "react";
import otherSports from "../../data/other_sports.json";

function OtherSports() {

    const [otherSportsHighlight,setOtherSportsHighlight] = useState([])

    useEffect(() => {
        setOtherSportsHighlight(otherSports.highlight)
    })

    const [otherSportsResume,setOtherSportsResume] = useState([])

    useEffect(() => {
            setOtherSportsResume(otherSports.resume)
        })

    return (
    <ThemeProvider theme={appTheme}>
        {otherSportsHighlight.map((n, index) => (
            <HighlightNews key={index} highlight={n} />
        ))}
        {otherSportsResume.map((n, index) => (
            <ResumeNews key={index} resume={n}/>
        ))}
        
    </ThemeProvider>
    );
}

export default OtherSports;