import React, { Component } from "react";
import {
  EuiPage,
  EuiPageBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTitle,
  EuiBasicTable,
  EuiIcon,
  EuiText
} from "@elastic/eui";
import startIcon from "../../assets/images/start.png";
import "./skills.css";

class Skills extends Component {
  constructor(props) {
    super(props);
    const skills = [
      { name: "CSS", level: 2 },
      { name: "HTML", level: 2 },
      { name: "JavaScript", level: 2 },
      { name: "React", level: 1 },
      { name: "Automation", level: 1 },
      { name: "GitHub", level: 2 },
      { name: ".NET*", level: 3 },
      { name: "SQL Server", level: 5 },
      { name: "PL/SQL", level: 5 },
      { name: "R", level: 1 },
      { name: "Agile frameworks", level: 5 },
      { name: "BDD", level: 4 },
      { name: "Product owner skills", level: 4 },
      { name: "Spanish", level: 5 },
      { name: "English", level: 4 }
    ];
    this.state = {
      sortField: "name",
      sortDirection: "asc",
      skills
    };
  }

  compareValues = (key, order = "asc") => {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }

      const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === "desc" ? comparison * -1 : comparison;
    };
  };

  onTableChange = ({ sort = {} }) => {
    const { field: sortField, direction: sortDirection } = sort;
    const skills = this.state.skills;
    skills.sort(this.compareValues(sortField, sortDirection));

    this.setState({
      sortField,
      sortDirection
    });
  };

  render() {
    const { sortField, sortDirection, skills } = this.state;

    const sorting = {
      sort: {
        field: sortField,
        direction: sortDirection
      }
    };

    const getLevel = level => {
      //var starts = [<EuiIcon size="xl" type={startIcon} />];
      var starts = ['⭐'];
      for (var i = 1; i < level; i++) {
        starts.push('⭐');
      }
      return starts;
    };

    const columns = [
      {
        field: "name",
        name: "Skill",
        sortable: true,
        header: true,
        width: "20%"
      },
      {
        field: "level",
        name: "Level",
        sortable: true,
        header: true,
        render: level => getLevel(level),
        width: "40%"
      }
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
          <EuiBasicTable
            items={skills}
            columns={columns}
            sorting={sorting}
            onChange={this.onTableChange}
          />
          <EuiText className={"footerNote"}>
            <p>*Interested in develop other skills</p>
          </EuiText>
        </EuiPageBody>
      </EuiPage>
    );
  }
}

export default Skills;
