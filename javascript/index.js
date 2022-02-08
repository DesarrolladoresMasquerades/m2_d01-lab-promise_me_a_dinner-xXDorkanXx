// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));
*/

// Iteration 1 - using callbacks

getInstruction('mashedPotatoes', 0, (instruction) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${instruction}</li>`;
  getInstruction('mashedPotatoes', 1, (instruction) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${instruction}</li>`;
    getInstruction('mashedPotatoes', 2, (instruction) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${instruction}</li>`;
      getInstruction('mashedPotatoes', 3, (instruction) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${instruction}</li>`;
        getInstruction('mashedPotatoes', 4, (instruction) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${instruction}</li>`;
          getInstruction('mashedPotatoes', 0, () => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
            document.getElementById("mashedPotatoesImg").removeAttribute("hidden");
          })
        })
      })
    })
  })
});

// Iteration 2 - using promises
let num = 0;
obtainInstruction('steak', num)
  .then( (instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    num++;
    return obtainInstruction('steak', num);
  })
  .then( (instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    num++;
    return obtainInstruction('steak', num);
  })
  .then( (instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    num++;
    return obtainInstruction('steak', num);
  })
  .then( (instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    num++;
    return obtainInstruction('steak', num);
  })
  .then( (instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    num++;
    return obtainInstruction('steak', num);
  })
  .then( (instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    num++;
    return obtainInstruction('steak', num);
  })
  .then( (instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    num++;
    return obtainInstruction('steak', num);
  })
  .then( (instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
  })
  .then( () => {
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
    document.getElementById("steakImg").removeAttribute("hidden");
  })

// Iteration 3 using async/await

async function makeBroccoli() {
  
  try{
    let num2 = 0;
    for(let i=0; i<broccoli.length; i++){
      let instruction = await obtainInstruction('broccoli', num2);
      document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
      num2++;
    }
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
    document.getElementById("broccoliImg").removeAttribute("hidden");
  }catch(error){
    console.log(error);
  }
  
};

makeBroccoli();

// Bonus 2 - Promise all

const promises = [];

for(let i=0; i<8; i++){
  promises.push(obtainInstruction('brusselsSprouts', i))
}

Promise.all(promises)
.then((array)=> {
  array.forEach(value=> document.querySelector('#brusselsSprouts').innerHTML += `<li>${value}</li>` );
  document.querySelector('#brusselsSprouts').innerHTML += `<li>Brussels sprouts are ready!</li>`;
  document.getElementById('brusselsSproutsImg').removeAttribute("hidden");
})

