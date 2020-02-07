import React, { Component } from "react";
import { EuiIcon, EuiSideNav } from "@elastic/eui";
import EuiCustomLink from "./EuiCustomLink/EuiCustomLink";
import aboutIcon from "../assets/images/resume.png";
import blogIcon from "../assets/images/blog.png";
import educationIcon from "../assets/images/library.png";
import projectsIcon from "../assets/images/projects.png";
import skillsIcon from "../assets/images/skill.png";

class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSideNavOpenOnMobile: false,
      selectedItemName: "About"
    };
  }

  toggleOpenOnMobile = () => {
    this.setState({
      isSideNavOpenOnMobile: !this.state.isSideNavOpenOnMobile
    });
  };

  selectItem = name => {
    this.setState({
      selectedItemName: name
    });
  };

  createItem = (name, data = {}) => {
    // NOTE: Duplicate `name` values will cause `id` collisions.
    return {
      ...data,
      id: name,
      name,
      isSelected: this.state.selectedItemName === name,
      onClick: () => this.selectItem(name)
    };
  };

  render() {
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

    const sideNav = menuItems.map(
      item => this.createItem(item.title, { icon: <EuiIcon type={item.iconType} size="xl"/>, href: item.href })
    );

    return (
      <EuiSideNav
        mobileTitle="Navigate within my Portfolio"
        toggleOpenOnMobile={this.toggleOpenOnMobile}
        isOpenOnMobile={this.state.isSideNavOpenOnMobile}
        items={sideNav}
        style={{ width: 192 }}
        renderItem={({ href, children }) => {
          return <EuiCustomLink to={href}>{children}</EuiCustomLink>;
        }}
      />
    );
  }
}

export default SideBar;
