import * as React from 'react'
import Box from "@mui/material/Box";
import bgImage from "../assets/images/World-Map-PNG-Image.png";
import {useStyletron} from 'baseui';

import {Block} from 'baseui/block';
import {Tabs, Tab} from 'baseui/tabs-motion';
import {Heading, HeadingLevel} from 'baseui/heading';
import {ParagraphSmall} from 'baseui/typography';

//icons
import Icon from 'baseui/icon/check'
import { FaRegStar, FaRegHeart, FaRegThumbsUp } from "react-icons/fa" ;

export default function Homepage() {
  const [activeKey, setActiveKey] = React.useState(0);
    
  return (
    <>
    <Box
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
          overflow: "auto",
        }}
      >
    <div style={{width:'100%'}}>
      <div style={{width:'50%', float:'left', padding:'25px'}}>

    <Block
      backgroundColor="white"
      width="80%"
      align = "left"
      height="400px"
    >
      <Tabs
      activeKey={activeKey}
      onChange={({activeKey}) => setActiveKey(activeKey)}
      activateOnFocus={false}
    >
      <Tab title="Featured 1" artwork={FaRegStar}>
        <Block>
          <HeadingLevel>
            <Heading>
              Featured Item 1 
            </Heading>
            <ParagraphSmall>
              I must not fear.
            </ParagraphSmall>
          </HeadingLevel>
        </Block>
      </Tab>
      <Tab title="Featured 2" artwork={FaRegHeart}>
      <Block>
          <HeadingLevel>
            <Heading>
              Featured Item 2
            </Heading>
            <ParagraphSmall>
              Fear is the mind-killer. 
            </ParagraphSmall>
          </HeadingLevel>
        </Block>
      </Tab>
      <Tab title="Featured 3" artwork={FaRegThumbsUp}>
      <Block>
          <HeadingLevel>
            <Heading>
              Featured Item 3 
            </Heading>
            <ParagraphSmall>
              Fear is the little-death that brings total obliteration.
            </ParagraphSmall>
          </HeadingLevel>
        </Block>
      </Tab>
    </Tabs>

    </Block>
    </div>
    </div>
      </Box>
    </>
  );
}