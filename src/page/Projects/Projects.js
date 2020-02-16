import React from "./node_modules/react";
import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTitle,
  EuiLink,
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon
} from "@elastic/eui";
import projectIcon from "../../assets/images/my-portfolio.png";

const cardFooterContent = (
  <EuiFlexGroup justifyContent="flexEnd">
    <EuiFlexItem grow={false}>
      <EuiIcon type={"logoGithub"} size="xl"></EuiIcon>
      <EuiLink
        href="https://github.com/12358-lab/my-portfolio/"
        target="_blank"
      >
        Repo
      </EuiLink>
    </EuiFlexItem>
  </EuiFlexGroup>
);

const Projects = () => (
  <EuiPage>
    <EuiPageBody>
      <EuiPageHeader>
        <EuiPageHeaderSection>
          <EuiTitle size="l">
            <h1>Projects</h1>
          </EuiTitle>
        </EuiPageHeaderSection>
      </EuiPageHeader>
      <EuiPageContent>
        <EuiFlexGroup gutterSize="l" style={{ maxWidth: 400 }}>
          <EuiFlexItem>
            <EuiCard
              textAlign="left"
              image={projectIcon}
              title="My Portfolio"
              description="This page was made using React and Elastic UI with ❤, as a learning practice."
              footer={cardFooterContent}
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPageContent>
    </EuiPageBody>
  </EuiPage>
);

export default Projects;
