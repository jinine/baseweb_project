import * as React from 'react'
import Box from "@mui/material/Box";
import bgImage from "../assets/images/World-Map-PNG-Image.png";
import {useStyletron} from 'baseui';

import {Block} from 'baseui/block';
import {Tabs, Tab} from 'baseui/tabs-motion';
import {Heading, HeadingLevel} from 'baseui/heading';
import {ParagraphSmall} from 'baseui/typography';
import {Button} from 'baseui/button';

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
      <div style={{width:'50%', float:'left', padding:'100px', paddingLeft:'250px'}}>

    <Block
      backgroundColor="white"
      width="65%"
      align = "left"
      height="600px"
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
              <h3>I must not fear.</h3>
            <ParagraphSmall>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            <br />Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            <br />when an unknown printer took a galley of type and scrambled it to make a type 
            <br />specimen book.
            </ParagraphSmall>
            <br />
            <br />
            <br />
            <Button onClick={() => alert('thank you 🙂')}>Click me!</Button>
          </HeadingLevel>
        </Block>
      </Tab>
      <Tab title="Featured 2" artwork={FaRegHeart}>
      <Block>
          <HeadingLevel>
            <Heading>
              Featured Item 2
            </Heading>
            <h3>
            Fear is the mind-killer. 
            </h3>
            <ParagraphSmall>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            <br />Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            <br />when an unknown printer took a galley of type and scrambled it to make a type 
            <br />specimen book.
            </ParagraphSmall>
            <br />
            <br />
            <br />
            <Button onClick={() => alert('thank you 🙂')}>Another Click!</Button>
          </HeadingLevel>
        </Block>
      </Tab>
      <Tab title="Featured 3" artwork={FaRegThumbsUp}>
      <Block>
          <HeadingLevel>
            <Heading>
              Featured Item 3 
            </Heading>
            <h3>
              Fear is the little-death that brings total obliteration.
            </h3>
            <ParagraphSmall>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            <br />Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            <br />when an unknown printer took a galley of type and scrambled it to make a type 
            <br />specimen book.
            </ParagraphSmall>
            <br />
            <br />
            <br />
            <Button onClick={() => alert('thank you 🙂')}>Last Button!</Button>
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