test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(3.5)).toBe(4.221);

    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(3.5)).toBe(504.90999999999997);

    const { fromYenToPound} = require('./app.js')
    expect(fromYenToPound(3.5)).toBe(0.01925);
}
)