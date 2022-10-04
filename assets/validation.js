
function changeToArray(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      arr.push(+str[i]);
    }
  }
  return arr
}

function sumOfArray(arr){
    let array = changeToArray(arr)
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}

let button = document.getElementById('result');
button.addEventListener('click',()=>{
    let inputMember = document.getElementById('numberOfMember').value
    let numberOfFamilies = +document.getElementById('numberOfFamily').value
    function minimumBus(sum){
       
        let passengerCapacity = 4;
        let sumMember = sumOfArray(sum)
        let array = changeToArray(sum)
        let result = sumMember/passengerCapacity;
        let displayResult = document.getElementById('displayResult');
        
        if(array.length !== numberOfFamilies){
            displayResult.innerText = "Input must be equal with count of family";
        }else if(inputMember == 0 || numberOfFamilies == 0){
            displayResult.innerText = "Please enter the number of family and members";
        }
        else{
            displayResult.innerText = `Minimum bus required is : ${Math.ceil(result)}`;
        }
    }
   
    minimumBus(inputMember)
})
