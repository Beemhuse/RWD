import { AgeTest, testUnit } from ".";
// const testUnit  = require (".");
import fs from 'fs'
import path from "path"
import { JSDOM } from "jsdom";



const htmlText = fs.readFileSync(path.resolve('./pages/semantic.html'))

test('html document is correct', ()=>{
const dom = new JSDOM(htmlText)
const document = dom.window.document
const h2 = document.querySelector('h2')
expect(h2).toBeTruthy();
})

// test('filter even numbers', () =>{
//     const inputs = [5, 6, 7, 8, 9, 10]
//     const output = [6, 8, 10]
//     expect(testUnit(inputs)).toEqual(output)
// })
// test('check age', () =>{
//     const inputs = [12, 18, 35]
//     const output = [0, 1, 2]
//     expect(AgeTest(inputs[0])).toEqual(output[0])
//     expect(AgeTest(inputs [1])).toEqual(output[1])
//     expect(AgeTest(inputs [2])).toEqual(output[2])
// })