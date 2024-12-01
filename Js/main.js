const sum = (num1, num2) => {
  let totalSum = num1 + num2;
  let sumObj = { result: totalSum, functionName: "sum" };
  return sumObj;
};

const substract = (num1, num2) => {
  let totalsubstract = num1 - num2;
  let substractObj = { result: totalsubstract, functionName: "substract" };
  return substractObj;
};

const multiply = (num1, num2) => {
  let totalmultiply = num1 * num2;
  let multiplyObj = { result: totalmultiply, functionName: "multiply" };
  return multiplyObj;
};

const division = (num1, num2) => {
  let totaldivision = num1 / num2;
  let divisionObj = { result: totaldivision, functionName: "division" };
  return divisionObj;
};

const modulus = (num1, num2) => {
  let totalmodulus = num1 % num2;
  let modulusObj = { result: totalmodulus, functionName: "modulus" };
  return modulusObj;
};

const exponential = (num1, num2) => {
  let totalexponential = num1 ** num2;
  let exponentialObj = {
    result: totalexponential,
    functionName: "exponential",
  };
  return exponentialObj;
};

let allfunc = [sum, substract, multiply, division, modulus, exponential];
let num1 = 20;
let num2 = 30;

for (let i = 0; i < allfunc.length; i++) {
  let allresult = allfunc[i](num1, num2);
  if (allresult.functionName == "sum") {
    console.log("This is sum function and result is:", allresult.result);
  } else if (allresult.functionName == "substract") {
    console.log("This is substract function and result is:", allresult.result);
  } else if (allresult.functionName == "multiply") {
    console.log("This is multiply function and result is:", allresult.result);
  } else if (allresult.functionName == "division") {
    console.log("This is division function and result is:", allresult.result);
  } else if (allresult.functionName == "modulus") {
    console.log("This is modulus function and result is:", allresult.result);
  } else {
    console.log(
      "This is exponential function and result is:",
      allresult.result
    );
  }
}
