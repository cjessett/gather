const {assert} = require('chai');
const {buildItemObject} = require('../test-utils');

describe('User visits the create page', () => {
    describe('posts a new item, open its detail', () => {
      it('and is rendered correctly', () => {
        //Setup
        const itemToCreate = buildItemObject();

        //Exercise
        browser.url('/items/create');
        browser.setValue('#title-input', itemToCreate.title);
        browser.setValue('#description-input', itemToCreate.description);
        browser.setValue('#imageUrl-input', itemToCreate.imageUrl);
        browser.click('#submit-button');
        browser.click('.item-card a');

        //Verify
        assert.include(browser.getText('body'), itemToCreate.description);
      });
    });
});

