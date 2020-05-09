import {expect} from 'chai';
import 'mocha';
import {requireAuth} from '../src/controllers/v0/feed/routes/feed.router';

const MockExpressRequest = require('mock-express-request');
const MockExpressResponse = require('mock-express-response');


describe('requireAuth test', () => {
    it('test no headers', async () => {
        let request = new MockExpressRequest();
        let response = new MockExpressResponse();
        requireAuth(request, response, () => {
        });
        expect(response.statusCode).to.equal(401);
    });
});
