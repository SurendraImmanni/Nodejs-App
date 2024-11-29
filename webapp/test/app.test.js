import request from "supertest"; // Import supertest
import app from "../app"; // Import the app (export your express app from the main file)

describe("GET /", () => {
  it("should return a 200 status and the correct message", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.text).toBe("Welcome to DevOps World, this is my first task");
  });
});

