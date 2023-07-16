import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import { Box, Button, ButtonGroup, Stack } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import StadiumIcon from '@mui/icons-material/Stadium';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {

  const navigate = useNavigate()

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => navigate('/')}
          >
            <StadiumIcon />
          </IconButton>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            REACT SPORTS
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
        <Box sx={{ 
            flexGrow: 1, 
            width: '100%', 
            height: '40px', 
            margin: '0 auto',
            }}>
            <Stack direction="row" justifyContent="space-between">
                <ButtonGroup position="fixed">
                    <Button variant="contained" size="large" sx={{height: "40px", paddingLeft: "40px", paddingRight: "40px"}} onClick={() => navigate('/')}>INÍCIO</Button>
                    <Button variant="contained" size="large" sx={{height: "40px", paddingLeft: "40px", paddingRight: "40px"}} onClick={() => navigate('/soccer')}>FUTEBOL</Button>
                    <Button variant="contained" size="large" sx={{height: "40px", paddingLeft: "40px", paddingRight: "40px"}} onClick={() => navigate('/volleyball')}>VOLEI</Button>
                    <Button variant="contained" size="large" sx={{height: "40px", paddingLeft: "40px", paddingRight: "40px"}} onClick={() => navigate('/basketball')}>BASQUETE</Button>
                    <Button variant="contained" size="large" sx={{height: "40px", paddingLeft: "40px", paddingRight: "40px"}} onClick={() => navigate('/fight')}>LUTAS</Button>
                    <Button variant="contained" size="large" sx={{height: "40px", paddingLeft: "40px", paddingRight: "40px"}} onClick={() => navigate('/motors')}>AUTOMOBILISMO</Button>
                    <Button variant="contained" size="large" sx={{height: "40px", paddingLeft: "40px", paddingRight: "40px"}} onClick={() => navigate('/athletics')}>ATLETISMO</Button>
                    <Button variant="contained" size="large" sx={{height: "40px", paddingLeft: "40px", paddingRight: "40px"}} onClick={() => navigate('/tennis')}>TÊNIS</Button>
                    <Button variant="contained" size="large" sx={{height: "40px", paddingLeft: "21px", paddingRight: "20px"}} onClick={() => navigate('/other_sports')}>OUTROS ESPORTES</Button>
                </ButtonGroup>
            </Stack>
        </Box>
      </AppBar>
    </Box>
  );
}