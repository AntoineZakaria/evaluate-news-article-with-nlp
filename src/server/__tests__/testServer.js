import 'babel-polyfill'


const {app}=require('../index')

const request =require('supertest')



describe('testing the server',()=>{
    test('testing get(/)',(done)=>{
        request(app).get('/').then((response)=>{

            expect(response.statusCode).toEqual(200)
            done()
        })

    })



    test('testing wrong pass get(/anything)',(done)=>{
        request(app).get('/anything').then((response)=>{

            expect(response.statusCode).toBe(404)
            done()
        })

    })
})