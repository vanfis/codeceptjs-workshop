const { I } = inject();

class AddRemoveElementsPage {
    buttons = {
        addElement: '//*[@id="content"]/div/button',
        delete: '//*[@id="elements"]/button'
      }

    toggleToAdd() {
        I.click(this.buttons.addElement)

    }
}
module.exports = new AddRemoveElementsPage()
module.exports.AddRemoveElementsPage = AddRemoveElementsPage;
