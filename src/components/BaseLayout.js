import React, { useState } from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
//import Portfolio from "./portfolio/Portfolio";
import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";

export default function BaseLayout() {
   let [darkMode, setDarkMode] = useState(false);

   function handleClick() {
      setDarkMode(!darkMode);
   }

   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
            justifyContent={'space-between'}>
            <Grid item>
               <Navbar darkMode={darkMode} handleClick={handleClick} />
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
                  <Route exact path={'/'} element={<Home />} />
                  <Route exact path={'/about'} element={<About />} />
                  {/*<Route exact path={'/projects'} element={<Portfolio />} />*/}
                  <Route exact path={'/projects'} element={<h1 style={{ width:"100%", lineHeight:"30vh", textAlign: "center", marginTop:"3rem" }}>Im currently working on this page</h1>} />
               </Routes>
            </Grid>
         </Grid>
      </Box>
   )
}

