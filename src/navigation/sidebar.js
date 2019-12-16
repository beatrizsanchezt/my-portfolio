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
    const sideNav = [
      this.createItem("About", {
        icon: <EuiIcon type={aboutIcon} size="xl" />,
        href: "/about"
      }),
      this.createItem("Education", {
        icon: <EuiIcon type={educationIcon} size="xl" />,
        href: "/education"
      }),
      this.createItem("Skills", {
        icon: <EuiIcon type={skillsIcon} size="xl" />,
        href: "/skills"
      }),
      this.createItem("Projects", {
        icon: <EuiIcon type={projectsIcon} size="xl" />,
        href: "/projects"
      }),
      this.createItem("Blog", {
        icon: <EuiIcon type={blogIcon} size="xl" />,
        href: "/blog"
      })
    ];

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
