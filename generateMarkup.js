const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// This function generates the markup text for index.html
async function generateMarkup(teamObjectArray) {
  let teamContainer = '';
  teamObjectArray.forEach((emp) => {
    let empDiv = '';
    if (emp instanceof Manager) {
      empDiv = generateManagerDiv(emp);
    } else if (emp instanceof Engineer) {
      empDiv = generateEngineerDiv(emp);
    } else if (emp instanceof Intern) {
      empDiv = generateInternDiv(emp);
    } else {
      console.error('There are no other types of employees!');
    }
    teamContainer += empDiv;
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Team</title>
 
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
</head>
<body>
  <header class="container-fluid bg-primary p-3">
      <h1 class="text-white text-center">Software Development Team</h1>
  </header>

  <main>
      <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-around text-center">
            ${teamContainer} 
      </div>
  </main>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
    crossorigin="anonymous"></script>
</body>

</html>
`;
}

function generateManagerDiv(mgr) {
  return `
  <div class="card m-3 p-0 bg-light border" style="width: 18rem;">
      <div class="card-body bg-danger text-white">
          <h5 class="card-title">${mgr.empName}</h5>
          <p class="card-text">Manager</p>
      </div>
      <ul class="list-group m-3 border border-secondary">
          <li class="list-group-item">ID: ${mgr.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${mgr.empEmail}">${mgr.empEmail}</a></li>
          <li class="list-group-item">Office Number: ${mgr.officeNumber}</li>
      </ul>
  </div>
  `;
}

function generateEngineerDiv(eng) {
  return `
  <div class="card m-3 p-0 bg-light border" style="width: 18rem;">
      <div class="card-body bg-success text-white">
          <h5 class="card-title">${eng.empName}</h5>
          <p class="card-text">Engineer</p>
      </div>
      <ul class="list-group list-group-flush m-3 border border-secondary">
          <li class="list-group-item">ID: ${eng.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${eng.empEmail}">${eng.empEmail}</a></li>
          <li class="list-group-item">GitHub: <a href="${eng.github}" target="_blank">${eng.gitHub}</a></li>
      </ul>
  </div>
  `;
}

function generateInternDiv(intern) {
  return `
  <div class="card m-3 p-0 bg-light border border-secondary" style="width: 18rem;">
      <div class="card-body bg-success text-white">
          <h5 class="card-title">${intern.empName}</h5>
          <p class="card-text">Intern</p>
      </div>
      <ul class="list-group list-group-flush m-3 border border-secondary">
          <li class="list-group-item">ID: ${intern.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${intern.empEmail}">${intern.empEmail}</a></li>
          <li class="list-group-item">School: ${intern.school}</li>
      </ul>
  </div>
  `;
}

module.exports = generateMarkup;
