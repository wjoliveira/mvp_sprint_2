import { Typography } from "@mui/material";
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../components/Theme';
import HighlightNews from '../components/HighlightNews';
import ResumeNews from "../components/ResumeNews";

export const SportsBase = () => (
    <ThemeProvider theme={appTheme}>
        <HighlightNews>

        </HighlightNews>
        <ResumeNews />
        <ResumeNews />
        <ResumeNews />
        <ResumeNews />
    </ThemeProvider>
);