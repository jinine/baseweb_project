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
      icon: Upload, label: "Home" 
    },
    {
      icon: ChevronDown,
      label: "About ADI",
      navExitIcon: Delete,
      children: [
        { icon: Upload, label: "Purpose, Mission, Vision"},
        { icon: Upload, label: "Who was Amelia Douglas?" }
      ]
    },
    {
      icon: ChevronDown,
      label: "Metis Arts & Culture",
      navExitIcon: Delete,
      children: [
        { icon: Upload, label: "Metis Heritage Arts Photo Repository (2D images)"},
        { icon: Upload, label: "Metis Artists in BC" }
      ]
    },
    {
      icon: ChevronDown,
      label: "ADI Exhibitions",
      navExitIcon: Delete,
      children: [
        { icon: Upload, label: "Virtual 3D Exhibitions"},
        { icon: Upload, label: "Virtual Art Wall Exhibitions" }
      ]
    },
    {
      icon: ChevronDown,
      label: "Michif Language",
      navExitIcon: Delete,
      children: [
        { icon: Upload, label: "Information of Michif and Indigenous Language Resources"}
      ]
    },
    {  
      active: true,
      icon: Upload, label: "Contact" 
    },
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