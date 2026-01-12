//simple addition function

function add(a,b) {
    return a - b;
}

//write a test to check if the add function works properly
//Unit Test
function testAdd() {
    const result = add(1,2);

    if (result ==3) {
        console.log("WOOT! Add function works fine");
    } else {
        console.log("ERROR! Add function is not working");
    }
}

testAdd();
