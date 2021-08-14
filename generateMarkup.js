let ma
function generateMarkdown(teamDataArray) {
    licenseBadge = renderLicenseBadge(data.proLicence);
    licenseSection = renderLicenseSection(data.proLicence);
  
    var markDown = 
    `# ${data.proName}
    ${licenseBadge}
       
    ## Description
    ${data.proDecription}
    
    ## Table of Contents
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [License](#License)
    * [Contribute](#Contributing)
    * [Tests](#Tests)
    * [Questions](#Questions)
    
    ## Installation
    To install the necessary dependencies, run the following command:
    \`\`\`
    ${data.proDependencies} 
    \`\`\`
    
    ## Usage
    ${data.proRepo}
    ## License
    ${licenseSection}
    ## Contributing
    ${data.proContribution}
    ## Tests
    To run the tests, run the following command;
    \`\`\`
    ${data.proTest}
    \`\`\`
    ## Questions
    If you have any questions about the repo, open an issue or directly contact me at <${data.uEmail}> You can find my other work at [${data.uName}](https://github.com/${data.uName})`;
  
    return markDown;
  }


























module.exports = generateMarkup;
