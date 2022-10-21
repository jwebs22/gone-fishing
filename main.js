const prompt = require('prompt-sync')({sigint: true});

//Global Variables
let caughtFish = [];
let finalValue = 0;
let finalWeight = 0;

//intro:
console.log("\n");
console.log("You've gone fishing! Try to maximize the value of your caught fish.")
console.log("You can fish for six hours (till 12:00pm) and can catch, at most, 10 lbs of fish.");
console.log("\n");


for (let i = 6; i < 12; i++)
{
    console.log("=====================================================================\n");
    console.log(`The time is ${i}:00 a.m. So far you've caught: `);

    console.log(`${caughtFish.length} fish, ${getTotalWeight()} pounds, $${getTotalValue()}`);

    let fish = generateRandomFish();
    console.log(`You caught a ${fish.name} weighing ${fish.weight} lbs and valued at $${fish.value}`);

    if (getTotalWeight() + fish.weight > 10)
    {
        console.log("\nThis fish would put you over 10 pounds, so you release it.");
        console.log("\nPress any key to continue.");
        prompt("> ");

        continue; //could have put the rest in an else stmt
    }

    console.log("\nYour action: [c]atch or [r]elease?");
    let action = prompt("> ");

    while (action !== "c" && action !== "r")
    {
        console.log("\nPlease enter [c] or [r]");
        action = prompt("> ");
    }

    if (action === "c")
    {
        caughtFish.push(fish);

        console.log(`\nYou chose to keep the ${fish.name}!\n`);
    } else if (action === "r")
    {
        console.log(`\nYou chose to release the ${fish.name}.\n`);
    } 
}

console.log("\nThe time is 12:00 p.m. Time's Up!");
console.log(`\nYou caught ${caughtFish.length} fish:`);

for (i = 0; i < caughtFish.length; i++)
{
    console.log("* " + caughtFish[i].name + ", " +caughtFish[i].weight + " lbs, " + "$" + caughtFish[i].value);
}

for (i = 0; i < caughtFish.length; i++)
{
    finalWeight += caughtFish[i].weight;
}
console.log("\nTotal weight: " + finalWeight.toPrecision(3) + " lbs");

for (i = 0; i < caughtFish.length; i++)
{
    finalValue += caughtFish[i].value;
}
console.log("Total value: " + "$" + finalValue.toPrecision(3));


//Functions Below:
function generateRandomWeight()
{
    let weight = Number((Math.random() * 5).toPrecision(3));
    while (weight < 1)
    {
        weight = Number((Math.random() * 5).toPrecision(3));
    }
    return weight;
}

function generateRandomValue()
{
    let value = Number((Math.random() * 5).toPrecision(3));
    
    while (value < .1)
    {
        value = Number((Math.random() * 5).toPrecision(3));
    }
    
    if (value < 1)
    {
        value = Number(value.toPrecision(2));
    }  
    return value;
}

function generateRandomName()
{
    let adjectives1 = ["Fuzzy", "Mangled", "Stoic", "Slippy", "Marble", "Hysterical"];
    let adjectives2 = ["No-Armed", "Short-Fingered", "Three-Eyed", "Stubbed-Tailed", "No-Gilled", "One-Toothed"];
    let types = ["Slop-Fish", "Cadillac", "Espresso", "Trout", "Eel", "Dolphin", "Shoe", "Shrimp", "Salmon", "Poodle"];

    let adj1 = adjectives1[Math.floor(Math.random() * adjectives1.length)];
    let adj2 = adjectives2[Math.floor(Math.random() * adjectives2.length)];
    
    let type = types[Math.floor(Math.random() * types.length)];

    return adj1 + " " + adj2 + " " + type;
}

function generateRandomFish()
{
    let fish = {};

    fish.name = generateRandomName();
    fish.weight = generateRandomWeight();
    fish.value = generateRandomValue();
    return fish;
}

function getTotalWeight()
{
    let totalWeight = 0;
    for (let i = 0; i < caughtFish.length; i++)
    {
        totalWeight += caughtFish[i].weight;
    }
    return Number(totalWeight.toPrecision(3));

}

function getTotalValue()
{
    let totalValue = 0;
    for (let i = 0; i < caughtFish.length; i++)
    {
        totalValue += caughtFish[i].value;
    }
    return Number(totalValue.toPrecision(3));
}






