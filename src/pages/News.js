import { Typography } from "@mui/material";
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../components/Theme';
import NewsTitle from "../components/NewsTitle";
import NewsImg from "../components/NewsImg";
import NewsBody from "../components/NewsBody";
import NewsBar from "../components/NewsBar";

export const News = () => (
    <ThemeProvider theme={appTheme}>
        <NewsTitle></NewsTitle>
        <NewsImg></NewsImg>
        <NewsBody></NewsBody>
        <NewsBar>Leia também</NewsBar>
    </ThemeProvider>
);