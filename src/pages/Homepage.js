import * as React from 'react'
import Box from "@mui/material/Box";
import bgImage from "../assets/images/World-Map-PNG-Image.png";
import announcementBGImage from "../assets/images/sky-image.jpeg";
import {useStyletron} from 'baseui';

import {Block} from 'baseui/block';
import {Tabs, Tab} from 'baseui/tabs-motion';
import {Heading, HeadingLevel} from 'baseui/heading';
import {ParagraphSmall} from 'baseui/typography';
import {Button} from 'baseui/button';
import { StyledLink } from "baseui/link";

//icons
import Icon from 'baseui/icon/check'
import { FaRegStar, FaRegHeart, FaRegThumbsUp } from "react-icons/fa" ;



export default function Homepage() {
  const [activeKey, setActiveKey] = React.useState(0);
    
  return (
    <div class = "wrapper" style={{width:'100%'}}>
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
            <Button onClick={() => alert('thank you 🙂')}>Click me!</Button>
            <br />
            <br />
            <br />
            <StyledLink href="/" animateUnderline>
              Link to a new item
            </StyledLink>
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
            <Button onClick={() => alert('thank you 🙂')}>Another Click!</Button>
            <br />
            <br />
            <br />
            <StyledLink href="/" animateUnderline>
              Link to a new item
            </StyledLink>
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
            <Button onClick={() => alert('thank you 🙂')}>Last Button!</Button>
            <br />
            <br />
            <br />
            <StyledLink href="/" animateUnderline>
              Link to a new item
            </StyledLink>
          </HeadingLevel>
        </Block>
      </Tab>
    </Tabs>
    </Block>
    </div>
    </div>   
    </Box>

    {/* Second Component */}
    <div style={{width:'81.5%'}}>
    <Box
        minHeight="25vh"
        width="100%"
        sx={{
          backgroundImage: `url(${announcementBGImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "left",
          overflow: "auto",
          padding: '100px',
          paddingLeft: '250px',
        }}
      >
        <Block>
        <HeadingLevel>
            <Heading>
              Featured Item 3 
            </Heading>
            <ParagraphSmall>
              Fear is the little-death that brings total obliteration.
            </ParagraphSmall>
            <Button onClick={() => alert('thank you 🙂')}>Visit!</Button>
            <br />
          </HeadingLevel>
          </Block>
    </ Box>
    </div>

  {/* Third Component */}
    <div style={{paddingLeft: '250px'}}>
          <h2>Test Items</h2>
    </div>
    <div style={{width:'100%'}}> 
        <div style={{width:'35%', float:'left', marginLeft: '250px'}}>
          <Box
            minHeight="25vh"
            width="60%"
            sx={{
              backgroundImage: `url(${announcementBGImage})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
              display: "grid",
              placeItems: "left",
              overflow: "auto",
            }}
          ></ Box>
          <h3>Heading</h3>
          <ParagraphSmall>
            Some Information.
          </ParagraphSmall>
            </div>
        <div style={{width:'50%', float:'right'}}> 
        <Box
            minHeight="25vh"
            width="40%"
            sx={{
              backgroundImage: `url(${announcementBGImage})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
              display: "grid",
              placeItems: "left",
              overflow: "auto",
            }}
          ></ Box>
          <h3>Heading</h3>
          <ParagraphSmall>
            Some Information.
          </ParagraphSmall>
        </div>
    </div>

    </div>
    
   
  );
}