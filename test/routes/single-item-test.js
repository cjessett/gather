const {assert} = require('chai');
const request = require('supertest');

const app = require('../../app');

const {parseTextFromHTML, seedItemToDatabase} = require('../test-utils');
const {connectDatabaseAndDropData, diconnectDatabase} = require('../setup-teardown-utils');

describe('Server path: /items/:id', () => {
  beforeEach(connectDatabaseAndDropData);

  afterEach(diconnectDatabase);

  // Write your test blocks below:
  describe('GET', () => {
    it('renders item information', async () => {
    	//Setup
    	const item = await seedItemToDatabase()

    	//Exercise
      	const response = await request(app)
        	.get("/items/"+item._id);
 
 		//Verify
      	assert.include(parseTextFromHTML(response.text, '#item-title'), item.title);
      	assert.include(parseTextFromHTML(response.text, '#item-description'), item.description);
 
    });
  });
  
});
