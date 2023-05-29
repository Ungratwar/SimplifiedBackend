//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
chai.use(chaiHttp);
let should = chai.should();
const user = require("../model/user")


/*
  * Test the /GET route
  */
  describe('/GET users', () => {
      it('it should GET all the users', (done) => {
        chai.request(server)
            .get('/user')
            .end((err, res) => {
                  res.should.have.status(201);
              done();
            });
      });
  });

