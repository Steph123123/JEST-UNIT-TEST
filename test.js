
const { sum } = require('./app.js');


test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});


test("One euro should be 1.206 dollars", function(){
    
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(3.5)).toBe(4.2); 
})


test("1.206 dollars should be 154.247 Yen", function(){
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen (3.5)).toBe(447.65000000000003); 
})


test("154.247 Yen should be 123.397 pound", function(){
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound (3.5)).toBe(2.8000000000000003); 
})


//terminado!!