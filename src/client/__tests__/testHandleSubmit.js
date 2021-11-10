
import 'babel-polyfill' // for solving  ReferenceError: regeneratorRuntime is not defined error  npm i -D babel-core babel-polyfill babel-preset-es2015 babel-preset-stage-0 babel-loader

import handleSubmit from "../js/formHandler"


describe('testing handleSubmit',()=>{

    test('testing submit',()=>{
        expect(handleSubmit).toBeDefined()
    })
})