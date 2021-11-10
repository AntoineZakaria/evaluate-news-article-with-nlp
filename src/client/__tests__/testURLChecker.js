import { checkUrl } from "../js/URLChecker";




describe('checkUrl functionality check',()=>{
    test('test',()=>{
        expect(checkUrl).toBeDefined()
    })


    test('valid url',()=>{
        expect(checkUrl('https://www.udacity.com/')).toBeTruthy()
    })

    test('invalid url',()=>{
        expect(checkUrl('')).toBeFalsy()
    })


   
})