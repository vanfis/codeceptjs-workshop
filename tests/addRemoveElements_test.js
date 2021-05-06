/*
Your mission:

1. go on "/add_remove_elements/" page
2. click on "Add Element" button
3. verify "Delete" button is here now

Don't forget to create also Page Object structure in addRemoveElementsPage.js and call/use it in test
*/

const { toggleToAdd } = require("../pages/addRemoveElementsPage");

Feature('Add/Remove Elements');

Scenario('test something', async ({ I, AddRemoveElementsPage }) => {
    I.amOnPage('/add_remove_elements/')
    I.wait(5)
    AddRemoveElementsPage.toggleToAdd
   
   // I.click("Add Element")
    I.wait(5)
    //I.click()
    //I.click("Delete")

    
});
