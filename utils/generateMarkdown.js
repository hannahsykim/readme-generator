  // TODO: Create a function that returns a license badge based on which license is passed in
  // If there is no license, return an empty string
  function renderLicenseBadge(license) {
    const licenseBadge = {
      mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
      odc: '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)'
    }
    if (license) {
    return licenseBadge[license]
    } else {
      return ''
    }
  }

  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
      const licenseLinks = {
        mit: '[MIT](https://opensource.org/licenses/MIT)',
        isc: '[ISC](https://opensource.org/licenses/ISC)',
        odc: '[ODC](https://opensource.org/licenses/by/)'
      }
      if (license) {
      return licenseLinks[license]
      } else {
        return ''
      }
  }


  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if(license){
      return `licensed under the ${this.renderLicenseLink(license)} license`
    } else {
      return ''
    }
  }

  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
        return `
  # ${data.title}

  ${this.renderLicenseBadge(data.license)}

  ## Table of content: 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Description <a id="description"></a>
  ${data.description}
  ## Installation <a id="installation"></a>
  ${data.installation}
  ## Usage <a id="usage"></a>
  ${data.usage}
  ## Contribution <a id="contribution"></a>
  ${data.contributing}
  ## Tests <a id="tests"></a>
  ${data.tests}
  ## License <a id="license"></a>
  ${this.renderLicenseSection(data.license)}
  ## Questions <a id="questions"></a>
  ${data.email}
  ${data.github}
  
    `;
  }


module.exports = {generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection};