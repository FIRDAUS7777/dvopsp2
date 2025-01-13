const { describe, it, before, after } = require('mocha');
const { expect } = require('chai');
const { app, server } = require('../index');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
let baseUrl;
let resourceId; // Declare resourceId here

describe('Resource API', () => {
  before(async () => {
    const { address, port } = await server.address();
    baseUrl = `http://${address === '::' ? 'localhost' : address}:${port}`;
    
    // Create a resource before running the test (to get the resourceId)
    const res = await chai.request(baseUrl)
      .post('/add-resource') // Assuming you have an endpoint to add a resource
      .send({
        movieImage: 'image_url',
        movieTitle: 'Sample Movie',
        movieDescription: 'Description',
        movieDirectors: 'Director',
        movieWriters: 'Writer',
        movieStars: 'Stars'
      });

    resourceId = res.body.id; // Store the id of the newly created resource
  });

  after(() => {
    return new Promise((resolve) => {
      server.close(() => {
        resolve();
      });
    });
  });

  describe('PUT /edit-movie/:id', () => {
    it('should update an existing resource', (done) => {
      chai.request(baseUrl)
        .put(`/edit-movie/${resourceId}`) // Use the correct endpoint
        .send({
          movieImage: 'Updated image',
          movieTitle: 'Updated title',
          movieDescription: 'Updated description',
          movieDirectors: 'Updated directors',
          movieWriters: 'Updated writers',
          movieStars: 'Updated stars'
        })
        .end((err, res) => {
          expect(res).to.have.status(201); // Check for 201 status code
          expect(res.body.message).to.equal('Movie modified successfully!'); // Expect a success message
          done();
        });
    });
  });
});
