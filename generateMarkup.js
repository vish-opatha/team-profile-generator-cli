const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

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
