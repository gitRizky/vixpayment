// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add("CreateTask", (featurename, scenarioname, allsteps) => {

//     let endpoint = 'https://api.clickup.com/api/v2/list/900300503843/task'
//     let token = 'pk_54848887_EO3FHAENRUGQQOPHHBXRQDH26RVAO5AL'
//     const headers = {
//         'Content-Type': 'application/json',
//         'Authorization': token
//     }
//     const body = {
//         'name' : scenarioname
//     }

//     cy.request({ method: 'POST', url: endpoint,  headers: headers, body: body }).then((response) => {
//         cy.log(JSON.stringify(response))
//         id = response.body.id
//         // Getting the Response
//         cy.log(id)

//         const screenshotsFolder = Cypress.config("screenshots");

//         const screenshotFileName = `${featurename} -- ${scenarioname} (failed).png`;
//         // Attaching ScreenShot
//         cy.request("https://clickup.com")
//         var data = new FormData();
//         data.append("filename", screenshotFileName);
//         cy.log(id)
//         cy.intercept({
//             method: "POST",
//             url: "https://api.clickup.com/api/v2/task/" + id + "/attachment?custom_task_ids=false&team_id=9003036353"
//         }).as('uploadFile')
//             .window()
//             .then((win) => {
//                 cy.wait(3000)

//                 cy.readFile(`${screenshotsFolder}/${Cypress.spec.name}/${screenshotFileName}`, 'binary')
//                     .then((binary) => Cypress.Blob.binaryStringToBlob(binary))
//                     .then((blob) => {
//                         const xhr = new win.XMLHttpRequest();
//                         data.set("attachment", blob, `${screenshotsFolder}/${Cypress.spec.name}/${screenshotFileName}`);
//                         xhr.open("POST", "https://api.clickup.com/api/v2/task/" + id + "/attachment?custom_task_ids=false&team_id=9003036353");
//                         let token = Access_Token

//                         xhr.setRequestHeader('Access-Control-Allow-Headers', '*')
//                         xhr.setRequestHeader("Authorization", token);
//                         xhr.send(data);
//                     })
//             })
//         cy.wait('@uploadFile').then((response) => {
//             cy.log(response)
//         })
//     })
// }) 