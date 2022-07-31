/*
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const evenNums = nums.filter((num) => {
        return num % 2 == 0;
    })

    console.log(evenNums)
*/

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
Array.prototype.myfilter = function (func) {
    // 'this'  here means  nums array
    let filtered = [];
    for (let i = 0; i < this.length; i++){   // it goes to each element in the nums array and checks whether the condition of the function is true or not
        if (func(this[i], i, this)) {     // if the function returns true, then the element will be pushed into the filtered array
            filtered.push(this[i])   
        }
    }
    return filtered;
}

console.log(nums.myfilter(num => {  // whatever we pass call back function here in myfilter function, it will be passed as the callback function 'func' in the myfilter function of line number 11
    return num % 2 == 0 
}))
/*
    it gives output as [2,4,6,8,10]

*/


// it also works on Array of objects

// let's try myfilter on array of objects
const students = [{ name: 'santosh' }, { name: 'devi' }];

console.log(students.myfilter(student => {
    return student.name == 'santosh'
}))

/*
    it gives output as [{ name:'santosh' }]

*/

