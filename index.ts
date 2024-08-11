#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

class Player{
    name:string;
    fuel:number = 100;
    constructor(name:string){
        this.name = name
    }
    fuelDecrease(){
        let fuel = this.fuel -25
        this.fuel = fuel
    }
    fuelIncrease(){
        this.fuel = 100
    }
}
class Opponent{
    name:string;
    fuel:number = 100;
    constructor(name:string){
        this.name = name
    }
    fuelDecrease(){
        let fuel = this.fuel -25
        this.fuel = fuel
    }
}

let player = await inquirer.prompt([
    {
        name:"name",
        type:"input",
        message:chalk.cyan("Please Enter Your Name:"),
    }
])

let opponent = await inquirer.prompt([
    {
        name:"select",
        type:"list",
        message:chalk.yellow("Select Your Opponent"),
        choices:["Alpha","Roco","Mario","Sonic"]
    }
])

let p1 = new Player(player.name)
let o1 = new Opponent(opponent.select)

do{
    // Alpha
    if(opponent.select == "Alpha"){
        let ask = await inquirer.prompt([
            {
                name:"opt",
                type:"list",
                message:chalk.blue("What Would You Like To Do?"),
                choices:["Attack","Drink Health Potion","Run For Life"],
            }
        ]);
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(chalk.green(`${p1.name} fuel is ${p1.fuel}\n`));
                console.log(chalk.yellowBright(`${o1.name} fuel is ${o1.fuel}\n`));
                if(p1.fuel <= 0){
                    console.log(chalk.magenta("You Loose..! Better Luck Next Time"));
                    process.exit()
                }
            }
            if(num <= 0){
                o1.fuelDecrease()
                console.log(chalk.green(`${p1.name} fuel is ${p1.fuel}\n`));
                console.log(chalk.yellowBright(`${o1.name} fuel is ${o1.fuel}\n`));
                if(o1.fuel <= 0){
                    console.log("You Win..!");
                    process.exit()
                }
            }
            }
            if(ask.opt == "Drink Health Potion"){
                p1.fuelIncrease()
                console.log(chalk.greenBright(`\nYou Drink Health Potion..! Your Fuel is Now ${p1.fuel}%`)); 
            }
            if (ask.opt == "Run For Life"){
                console.log(chalk.red(`\nYou Loose..!\n`));
                process.exit()
            }
        }

    // Roco
    if(opponent.select == "Roco"){
        let ask = await inquirer.prompt([
            {
                name:"opt",
                type:"list",
                message:chalk.blue("What Would You Like To Do?"),
                choices:["Attack","Drink Health Potion","Run For Life"],
            }
        ]);
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(chalk.green(`${p1.name} fuel is ${p1.fuel}\n`));
                console.log(chalk.yellowBright(`${o1.name} fuel is ${o1.fuel}\n`));
                if(p1.fuel <= 0){
                    console.log(chalk.magenta("You Loose..! Better Luck Next Time"));
                    process.exit()
                }
            }
            if(num <= 0){
                o1.fuelDecrease()
                console.log(chalk.green(`${p1.name} fuel is ${p1.fuel}\n`));
                console.log(chalk.yellowBright(`${o1.name} fuel is ${o1.fuel}\n`));
                if(o1.fuel <= 0){
                    console.log("You Win..!");
                    process.exit()
                }
            }
            }
            if(ask.opt == "Drink Health Potion"){
                p1.fuelIncrease()
                console.log(chalk.greenBright(`\nYou Drink Health Potion..! Your Fuel is Now ${p1.fuel}%`)); 
            }
            if (ask.opt == "Run For Life"){
                console.log(chalk.red(`\nYou Loose..!\n`));
                process.exit()
            }
        }

    // Mario
    if(opponent.select == "Mario"){
        let ask = await inquirer.prompt([
            {
                name:"opt",
                type:"list",
                message:chalk.blue("What Would You Like To Do?"),
                choices:["Attack","Drink Health Potion","Run For Life"],
            }
        ]);
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(chalk.green(`${p1.name} fuel is ${p1.fuel}\n`));
                console.log(chalk.yellowBright(`${o1.name} fuel is ${o1.fuel}\n`));
                if(p1.fuel <= 0){
                    console.log(chalk.magenta("You Loose..! Better Luck Next Time"));
                    process.exit()
                }
            }
            if(num <= 0){
                o1.fuelDecrease()
                console.log(chalk.green(`${p1.name} fuel is ${p1.fuel}\n`));
                console.log(chalk.yellowBright(`${o1.name} fuel is ${o1.fuel}\n`));
                if(o1.fuel <= 0){
                    console.log("You Win..!");
                    process.exit()
                }
            }
            }
            if(ask.opt == "Drink Health Potion"){
                p1.fuelIncrease()
                console.log(chalk.greenBright(`\nYou Drink Health Potion..! Your Fuel is Now ${p1.fuel}%`)); 
            }
            if (ask.opt == "Run For Life"){
                console.log(chalk.red(`\nYou Loose..!\n`));
                process.exit()
            }
        }

    // Sonic
    if(opponent.select == "Sonic"){
        let ask = await inquirer.prompt([
            {
                name:"opt",
                type:"list",
                message:chalk.blue("What Would You Like To Do?"),
                choices:["Attack","Drink Health Potion","Run For Life"],
            }
        ]);
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(chalk.green(`${p1.name} fuel is ${p1.fuel}\n`));
                console.log(chalk.yellowBright(`${o1.name} fuel is ${o1.fuel}\n`));
                if(p1.fuel <= 0){
                    console.log(chalk.magenta("You Loose..! Better Luck Next Time"));
                    process.exit()
                }
            }
            if(num <= 0){
                o1.fuelDecrease()
                console.log(chalk.green(`${p1.name} fuel is ${p1.fuel}\n`));
                console.log(chalk.yellowBright(`${o1.name} fuel is ${o1.fuel}\n`));
                if(o1.fuel <= 0){
                    console.log("You Win..!");
                    process.exit()
                }
            }
            }
            if(ask.opt == "Drink Health Potion"){
                p1.fuelIncrease()
                console.log(chalk.greenBright(`\nYou Drink Health Potion..! Your Fuel is Now ${p1.fuel}%`)); 
            }
            if (ask.opt == "Run For Life"){
                console.log(chalk.red(`\nYou Loose..!\n`));
                process.exit()
            }
        }
            
        
    }
while(true)
