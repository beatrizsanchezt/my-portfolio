import React from 'react';
import {
  EuiPage,
  EuiPageBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTitle,
  EuiText,
} from '@elastic/eui';
import CustomTable from '../../common/CustomTable/CustomTable';

import './Skills.css';

const Skills = () => {
  const skillsArray = [
    { name: 'CSS', level: 2 },
    { name: 'HTML', level: 2 },
    { name: 'JavaScript', level: 2 },
    { name: 'React', level: 1 },
    { name: 'Automation', level: 1 },
    { name: 'GitHub', level: 2 },
    { name: '.NET*', level: 3 },
    { name: 'SQL Server', level: 5 },
    { name: 'PL/SQL', level: 5 },
    { name: 'R', level: 1 },
    { name: 'Agile frameworks', level: 5 },
    { name: 'BDD', level: 4 },
    { name: 'Product owner skills', level: 4 },
    { name: 'Spanish', level: 5 },
    { name: 'English', level: 4 },
  ];

  const [sortField, setSortField] = React.useState('name');
  const [sortDirection, setsortDirection] = React.useState('asc');
  const [skills] = React.useState(skillsArray);

  const compareValues = (key, order = 'asc') => function innerSort(a, b) {
    if (!Object.prototype.hasOwnProperty.call(a, key) || !Object.prototype.hasOwnProperty.call(b, key)) {
      return 0;
    }

    const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === 'desc' ? comparison * -1 : comparison;
  };

  const onTableChange = ({ sort = {} }) => {
    const { field, direction } = sort;
    skills.sort(compareValues(field, direction));
    setSortField(field);
    setsortDirection(direction);
  };

  const sorting = {
    sort: {
      field: sortField,
      direction: sortDirection,
    },
  };

  const getLevel = (level) => {
    const starts = ['⭐'];
    for (let i = 1; i < level; i += 1) {
      starts.push('⭐');
    }
    return starts;
  };

  const columns = [
    {
      field: 'name',
      name: 'Skill',
      sortable: true,
      width: '20%',
    },
    {
      field: 'level',
      name: 'Level',
      sortable: true,
      render: (level) => getLevel(level),
      width: '40%',
    },
  ];

  return (
    <EuiPage>
      <EuiPageBody>
        <EuiPageHeader>
          <EuiPageHeaderSection>
            <EuiTitle size="l">
              <h1>Skills</h1>
            </EuiTitle>
          </EuiPageHeaderSection>
        </EuiPageHeader>
        <CustomTable
          items={skills}
          columns={columns}
          sorting={sorting}
          onChange={onTableChange}
        />
        <EuiText className="footerNote">
          <p>*Interested in develop other skills</p>
        </EuiText>
      </EuiPageBody>
    </EuiPage>
  );
};

export default Skills;
