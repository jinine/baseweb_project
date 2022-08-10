import * as React from 'react'
import Box from "@mui/material/Box";
import bgImage from "../assets/images/sky-image.jpeg";
import {useStyletron} from 'baseui';

// import {Heading, HeadingLevel} from 'baseui/heading';
import {Block} from 'baseui/block';
// import {ParagraphSmall} from 'baseui/typography';
import {Tabs, Tab} from 'baseui/tabs-motion';
import {Grid, Cell} from 'baseui/layout-grid';
import {Check} from 'baseui/icon';

export default function Homepage() {
  const [activeKey, setActiveKey] = React.useState(0);
    
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
    <div style={{width:'100%'}}>
      <div style={{width:'50%', float:'left', padding:'25px'}}>

    <Block
      backgroundColor="white"
      width="75%"
      align = "left"
      height="250px"
    >
      <Tabs
      activeKey={activeKey}
      onChange={({activeKey}) => setActiveKey(activeKey)}
      activateOnFocus={false}
    >
      <Tab title="First" artwork={Check}>I must not fear.</Tab>
      <Tab title="Second" artwork={Check}>Fear is the mind-killer.</Tab>
      <Tab title="Third" artwork={Check}>Fear is the little-death that brings total obliteration.</Tab>
    </Tabs>

    </Block>
    </div>
    </div>
      </Box>
    </>
  );
}

const Outer = ({children}) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        background: theme.colors.accent100,
      })}
    >
      {children}
    </div>
  );
};

const Inner = ({children}) => {
  const [css] = useStyletron();
  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // background: theme.colors.accent200,
        // color: theme.colors.accent700,
        padding: '.25rem',
      })}
    >
      {children}
    </div>
  );
};