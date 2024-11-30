// import request from "supertest"; // Import supertest
// import app from "../app.js"; // Import the app (export your express app from the main file)

// describe("GET /", () => {
//   it("should return a 200 status and the correct message", async () => {
//     const response = await request(app).get("/");

//     expect(response.status).toBe(200);
//     expect(response.text).toBe("Welcome to DevOps World");
//   });
// });

import request from 'supertest';
import { app, server } from '../app'; // Import both app and server

describe('GET /', () => {
  it('should return status 200 and the correct message', async () => {
    const response = await request(app).get('/'); // Send a GET request to the root route
    
    // Check if the status code is 200
    expect(response.status).toBe(200);
    
    // Check if the response text is "Welcome to DevOps World"
    expect(response.text).toBe('Welcome to DevOps World');
  });

  // After the test, close the server to prevent Jest from hanging
  afterAll(() => {
    server.close();
  });
});
