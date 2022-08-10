import * as React from "react";
import {
  AppNavBar,
  setItemActive
} from "baseui/app-nav-bar";
import {
  ChevronDown,
  Delete,
  Overflow,
  Upload
} from "baseui/icon";

export default function Header() {
  const [mainItems, setMainItems] = React.useState([
    {  
      active: true,
      icon: Upload, label: "Main A" 
    },
    {
      icon: ChevronDown,
      label: "Main B",
      navExitIcon: Delete,
      children: [
        { icon: Upload, label: "Secondary A" },
        { icon: Upload, label: "Secondary B" }
      ]
    }
  ]);
  return (
    <AppNavBar
      title="Tristan's Website"
      mainItems={mainItems}
      onMainItemSelect={item => {
        setMainItems(prev => setItemActive(prev, item));
      }}
      // username="Tristan Engen"
      // usernameSubtitle="Best there ever was"
      // userItems={[
      //   { icon: Overflow, label: "User A" },
      //   { icon: Overflow, label: "User B" }
      // ]}
      // onUserItemSelect={item => console.log(item)}
    />
  );
}