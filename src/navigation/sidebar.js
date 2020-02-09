import React, { useState } from "react";
import { EuiIcon, EuiSideNav } from "@elastic/eui";
import CustomLink from "./CustomLink/CustomLink";
import aboutIcon from "../assets/images/resume.png";
import blogIcon from "../assets/images/blog.png";
import educationIcon from "../assets/images/library.png";
import projectsIcon from "../assets/images/projects.png";
import skillsIcon from "../assets/images/skill.png";

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

  const sideNav = [
    createItem("About", {
      icon: <EuiIcon type={aboutIcon} size="xl" />,
      href: "/about"
    }),
    createItem("Education", {
      icon: <EuiIcon type={educationIcon} size="xl" />,
      href: "/education"
    }),
    createItem("Skills", {
      icon: <EuiIcon type={skillsIcon} size="xl" />,
      href: "/skills"
    }),
    createItem("Projects", {
      icon: <EuiIcon type={projectsIcon} size="xl" />,
      href: "/projects"
    }),
    createItem("Blog", {
      icon: <EuiIcon type={blogIcon} size="xl" />,
      href: "/blog"
    })
  ];

  return (
    <EuiSideNav
      mobileTitle="Navigate within my Portfolio"
      toggleOpenOnMobile={toggleOpenOnMobile}
      isOpenOnMobile={isSideNavOpenOnMobile}
      items={sideNav}
      style={{ width: 192 }}
      renderItem={({ href, children }) => {
        return <CustomLink to={href}>{children}</CustomLink>;
      }}
    />
  );
};

export default SideBar;
