const app = require('../apis/app.js');
const request = require('supertest');

describe("GET /inicio/datosinstitucion", ()=>{
    test('should respond with a 200 status code', async() => {
        const response = await  request(app).get("/api/v1/inicio/datosinstitucion").send();
        expect(response.statusCode).toBe(200)
    })
    /* test('should respon with an array', async() => {
        const response = await request(app).get("/api/v1/inicio/datosinstitucion").send();
        expect(response.body).toBeInstanceOf(Array)        
    }) */

    
})

describe('Post /',()=>{
    test('should responde with a 200 status code', async() => {
        await request(app).post("").send();
        
    })
    
})