import React from 'react';
import {
  EuiPage,
  EuiPageBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTitle,
  EuiFlexGrid,
  EuiFlexItem,
  EuiIcon,
  EuiCard,
} from '@elastic/eui';
import icesiIcon from '../../assets/images/icesi.jpg';
import courseraIcon from '../../assets/images/coursera.png';
import isqtbIcon from '../../assets/images/isqtb.png';
import arcituraIcon from '../../assets/images/arcitura.png';

const iconTypes = [
  {
    logo: icesiIcon,
    name: 'Bachelor Systems Engineering',
    description: '1999-2005',
  },
  {
    logo: courseraIcon,
    name: 'R Programming',
    description: 'Dec 2017. Credential ID KP4MBG5NQEAH',
  },
  {
    logo: isqtbIcon,
    name: 'Certified Tester, Foundation Level',
    description: 'Aug 2015. Credential ID 15-CTFL-72914-06',
  },
  {
    logo: arcituraIcon,
    name: 'Big Data Scientist',
    description: 'Nov 2017. Credential ID X459ZQQQ49KM',
  },
];

const Education = () => (
  <EuiPage>
    <EuiPageBody>
      <EuiPageHeader>
        <EuiPageHeaderSection>
          <EuiTitle size="l">
            <h1>Education and Certificates</h1>
          </EuiTitle>
        </EuiPageHeaderSection>
      </EuiPageHeader>
      <EuiFlexGrid columns={2}>
        {iconTypes.map((item) => (
          <EuiFlexItem key={item.logo}>
            <EuiCard
              layout="horizontal"
              icon={<EuiIcon size="xxl" type={item.logo} />}
              title={item.name}
              description={item.description}
            />
          </EuiFlexItem>
        ))}
      </EuiFlexGrid>
    </EuiPageBody>
  </EuiPage>
);

export default Education;
