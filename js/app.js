
let weapones = ["rock","paper","scissor"];

function computerPlay(){
    let selection = Math.floor(Math.random() * weapones.length);
    return weapones[selection];
}


