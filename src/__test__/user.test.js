const request = require("supertest");
const app = require("../index");
const {sequelize} = require("../models");
const userData = {
  title: "alice",
  caption: "hallo",
  image_url: "http://url.com",
};

describe("GetAllPhotos", () => {
  it("seharusnya mendapatkan status code 200", async () => {
    const res = await request(app).get("/photos/photos");
    expect(res.statusCode).toBe(200);
  });
  it("seharusnya error", async () => {
    const res = await request(app).get("/photos");
    expect(res.statusCode).toBe(404);
  });
});
describe("CreatePhoto", () => {
  it("seharusnya mendapatkan status code 200", async () => {
    const res = await request(app).post("/photos/create").send(userData);
    expect(res.statusCode).toBe(200);
  });
  it("seharusnya error", async () => {
    const res = await request(app).post("/photos/create").send({
      title: "alice",
      caption: "hallo",
      image_url: "bukan Url",
    });
    expect(res.statusCode).toBe(500);
  });
});

describe("GetOnePhotoByID", () => {
  it("seharusnya mendapatkan status code 200", async () => {
    const res = await request(app).get("/photos/photos/1");
    expect(res.statusCode).toBe(200);
  });
  it("seharusnya error", async () => {
    const res = await request(app).get("/photos/photos/g");
    expect(res.statusCode).toBe(500);
  });
});
