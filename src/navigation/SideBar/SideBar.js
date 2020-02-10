import React, { useState } from "react";
import { EuiIcon, EuiSideNav } from "@elastic/eui";
import CustomLink from "../CustomLink/CustomLink";
import aboutIcon from "../../assets/images/resume.png";
import blogIcon from "../../assets/images/blog.png";
import educationIcon from "../../assets/images/library.png";
import projectsIcon from "../../assets/images/projects.png";
import skillsIcon from "../../assets/images/skill.png";

const menuItems = [
  {
    title: "About",
    iconType: aboutIcon,
    href: "/about"
  },
  {
    title: "Education",
    iconType: educationIcon,
    href: "/education"
  },
  {
    title: "Skills",
    iconType: skillsIcon,
    href: "/skills"
  },
  {
    title: "Projects",
    iconType: projectsIcon,
    href: "/projects"
  },
  {
    title: "Blogs",
    iconType: blogIcon,
    href: "/blog"
  }
];

const SideBar = () => {
  const [isSideNavOpenOnMobile, setIsSideNavOpenOnMobile] = useState(false);
  const [selectedItemName, setSelectedItemName] = useState("About");

  const toggleOpenOnMobile = () => {
    setIsSideNavOpenOnMobile(!isSideNavOpenOnMobile);
  };

  const selectItem = name => {
    setSelectedItemName(name);
  };

  const createItem = (name, data = {}) => {
    return {
      ...data,
      id: name,
      name,
      isSelected: selectedItemName === name,
      onClick: () => selectItem(name)
    };
  };

  const sideNav = menuItems.map(item =>
    createItem(item.title, {
      icon: <EuiIcon type={item.iconType} size="xl" />,
      href: item.href
    })
  );

  return (
    <EuiSideNav
      mobileTitle="Navigate within my Portfolio"
      toggleOpenOnMobile={toggleOpenOnMobile}
      isOpenOnMobile={isSideNavOpenOnMobile}
      items={sideNav}
      style={{ width: "192px" }}
      renderItem={({ href, children }) => {
        return <CustomLink to={href}>{children}</CustomLink>;
      }}
    />
  );
};

export default SideBar;
