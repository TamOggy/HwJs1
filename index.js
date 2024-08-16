const square = number => number * number;

console.log(square(5)) // bài 1

const String = (strText, woText) => {
    const woTextLength = woText.length;
    
    for (let i = 0; i <= strText.length - woTextLength; i++) {
      let found = true;
      for (let j = 0; j < woTextLength; j++) {
        if (strText[i + j] !== woText[j]) {
          found = false;
          break;
        }
      }
      if (found) {
        return true;
      }
    }
    
    return false;
  };

console.log(String("Hello world!", "call"));// bài 2


const Them = (arr, add) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(`${add}: ${arr[i]}`);
    }
    return result;
  };

const result = Them(["one", "two", "three"], "number");
console.log(result); // bài 3



const doubleValues = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i] * 2);
    }
    return result;
  };

arr = [1,2,3,4]
console.log(doubleValues(arr))//bai4


const getOddNumbers = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        result.push(arr[i]);
      }
    }
    return result;
  };
console.log(getOddNumbers(arr))//bai 5

const totalWorkingDays = (employees) => {
    let total = 0;
    for (let i = 0; i < employees.length; i++) {
      total += employees[i].workingDays;
    }
    return total;
  };
  
  const employees = [
    { id: 1, name: "John", workingDays: 22 },
    { id: 2, name: "Jane", workingDays: 20 },
    { id: 3, name: "Mark", workingDays: 25 },
];
console.log(totalWorkingDays(employees))// bài 6