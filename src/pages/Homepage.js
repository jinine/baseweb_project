import React from 'react'
import Box from "@mui/material/Box";
import bgImage from "../assets/images/sky-image.jpeg";

import {Heading, HeadingLevel} from 'baseui/heading';
// import {ParagraphSmall} from 'baseui/typography';



export default function Homepage() {

    
  return (
    <>
    <Box
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <HeadingLevel>
          <Heading>Tristan's Website</Heading>
        </ HeadingLevel>
      </Box>
    </>
  );
}