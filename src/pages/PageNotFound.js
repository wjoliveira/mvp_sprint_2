import { Typography } from "@mui/material";
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../components/Theme';
import NewsImg from "../components/NewsImg";
import error404 from "../assets/images/sistema/error404.png";

export const PageNotFound = () => (
        <img src={error404} alt="404" />
);