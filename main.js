// Functions

// 1. Normal Function
function greet()
{
    console.log('Good morning Bala Sagar')
}

greet()


// 2. Parameterized Function
function greet2(username)
{
    console.log('Hello '+username)
}

greet2('sagar')
greet2(2002)

// 3. Returning Function
function add(a,b)
{
    return a+b
}

const num = add('bala',10)
console.log(num)


// ARROW FUNCTIONS

// 1. Normal Arrow Function
const adds = (a,b) => {
    return a+b
}
const num2 = adds(20,10)
console.log(num2)

// 2. Arrow function with single code line
const addnum = (a,b) => a+b
const num3 = addnum(20,50)
console.log(num3)


// 3. Arrow Function with single variable
const addFive = num => num+5

const num4 = addFive(10)
console.log(num4)


// SCOPE

const mynum = 100

// BLock Scope
if(true)
{
    const myname = 'sagar'
    console.log(myname)
    //global scope
    console.log(mynum)
}

//Function Scope
function testfn()
{
    const myname= 'Baala'
    console.log(myname)
    //global scope
    console.log(mynum)
}

testfn()

