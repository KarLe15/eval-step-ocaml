const fs = require("fs");
const readline = require('readline');


const text = fs.readFileSync("./jsons/example_cours/cours3/length_tr.ml.json");
const json = JSON.parse(text);



let i = 0;
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  } else {

    // if (
    //   json[i].step[0] === "MoveDownSubst" &&
    //   json[i+1].step[0] === "Match"       &&
    //   json[i+2].step[0] === "SubstCombine"
    //   ) {
    //   i += 3;
    // }

    // if (
    //   json[i].step[0] === "ApplyFunRuntime"   &&
    //   json[i+1].step[0] === "ApplyFunRuntime" &&
    //   json[i+2].step[0] === "SubstFun"
    //   ) {
    //   i += 3;
    // }
    // while(step === "MoveDownSubst"
    // ||  step === "SubstCombine"
    // ||  step === "SubstVar"
    // ||  step === "SubstFun"
    // ||  step === "ApplyFunComplete"){
    //   i++;
    // }
      /*
    if (
      json[i].step[] === "MoveDownSubst" &&
      json[i+1].step[] === "Match"       &&
      json[i+2].step[] === "SubstCombine"
      ) {
      i += 3;
    }

    if (
      json[i].step[] === "ApplyFunRuntime"   &&
      json[i+1].step[] === "ApplyFunRuntime" &&
      json[i+2].step[] === "SubstFun"
      ) {
      i += 3;
    }
      */
    let step = json[i].step[0];
    if(isSubstFunOf(json,i, "fact")){
      console.log("a");
      while (step !== "SubstFun" ) {
        i++;
        step = json[i].step[0];
      }  
    }
    else if(! onlyRuntimeLeft(json, i, "fact")){
      while ((!onlyRuntimeLeft(json, i, "fact")) ) {
        i++;
        step = json[i].step[0];
      }  
    }

    // console.log(step);
    console.log("==================================================");
    console.log(json[i].current_expression.expr);
    // console.log(json[i].current_expression.envs.env0);
    console.log(json[i].step);
    console.log("==================================================");
    i++;
  }
});
console.log('Press any key...');



function isSubstFunOf(jsons, index, func){
  for (let i = index; i < jsons.length; i++) {
    if(jsons[i].step[0] === "SubstFun"){
      return true;
    } 
  }
  return false;
}

function onlyRuntimeLeft(jsons, index, func){
  let res = true;
  for (let i = index;  res && i < jsons.length-1; i++) {
    res = res &&  jsons[i].step[0] === "ApplyFunRuntime";
  }
  return res;
}



// let steps = [];
// for (let i = 0; i< json.length; i++) {
//   steps += mapStepToEnum(json[i].step[0]);
// }


// console.log(countSchema(steps, "ad"));
// printSteps(steps);

// !important : possible schema :
//  "cgb",                                        // possiblement dependant de fichier
// "iid" | "(i)*d"
// "c*"
// "a"                                            // MoveDownSubt


function printSteps(steps) {
  // const temp = steps.split("");
  const temp = [steps];
  for (let i = 0; i< temp.length; i++) {
    console.log(temp[i]);
  }
}

function countSchema(steps, schema) {
  let regex = new RegExp(schema, "g");
  return (steps.match(regex) || []).length;
}

function mapStepToEnum (step)  {
    switch(step) {
      case  "MoveDownSubst" :
        return 'a';
      case  "SubstCombine" :
        return 'b';
      case  "SubstVar" :
        return 'c';
      case  "SubstFun" :
        return 'd';
      case  "If" :
        return 'e';
      case  "Let" :
        return 'f';
      case  "Match" :
        return 'g';
      case  "Fun":
        return 'h';
      case  "ApplyFunRuntime":
        return 'i';
      case "ApplyFunComplete":
        return 'j';
      case "Exn":
        return 'k';
      case "Seq":
        return 'l';
      case "Record":
        return 'm';
      case "ApplyFun":
        return 'n';
      default :
        return 'z'
    };
};





// modes : 
// retirer les moveDownSubst
// Aller de subtFun en SubtFun et ApplyFunRuntime 

