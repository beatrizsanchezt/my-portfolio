import React from 'react';
import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTitle,
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
} from '@elastic/eui';
import CustomIconButton from '../../common/CustomIconButton/CustomIconButton';
import projectIcon from '../../assets/images/my-portfolio.png';

const cardFooterContent = (
  <EuiFlexGroup justifyContent="flexEnd">
    <EuiFlexItem grow={false}>
      <CustomIconButton
        iconType="logoGithub"
        href="https://github.com/12358-lab/my-portfolio/"
        target="_blank"
      >
        Go to Repo
      </CustomIconButton>
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
