// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  ## License
  ${license.license}
 `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
      return `
 # ${data.title}
    
 ## Table of content: 
 - [Project description](#Description)
 - [Installation](#Installation)
 - [Usage](#Usage)
 - [Contribution](#Contributing)
 - [Tests](#Tests)
 - [License](#License)
 - [Questions](#Question)

 ## Description
 ${data.description}
 ## Installation
 ${data.installation}
 ## Usage
 ${data.usage}
 ## Contributing
 ${data.contributing}
 ## Tests 
 ${data.tests}
 ## Questions 
 ${data.email}
 ${data.github}
 
  `;
}

module.exports = generateMarkdown;
