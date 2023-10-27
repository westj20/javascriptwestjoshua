"use strict";

// Create an object literal
// let game1 = {
//   title: "Final Fantasy 3",
//   createdBy: "SquareSoft",
// };

// output.innerHTML = "<p>Best Game Ever = " + game1.title;

//nested
// let game2 = {
//   title: "Final Fantasty 3",
//   createdBy: {
//     company: "SquareSoft",
//     writer: " Hironobu Sakaguchi",
//   },
//   yearCreated: "1990",
// };

// output.innerHTML += "<p> Created By =" + game2.createdBy.company;

let game1 = {
  title: "Final Fantasy 3",
  createdBy: "SquareSoft",
  platform: ["SNES", "iOS", "Android"],
  getCreator: function () {
    return this.createdBy;
  },
};

output.innerHTML = "<p>Game Title: " + game1.title + "</p>";
output.innerHTML += "<p>Created By: " + game1.getCreator() + "</p>";
output.innerHTML +=
  "<p>Supported Platforms: " + game1.platform.join(", ") + "</p>";

function Game(title, createdBy) {
  this.title = title;
  this.createdBy = createdBy;
}

Game.prototype.getInfo = function () {
  return `Title: ${this.title}, Created By: ${this.createdBy}`;
};

const gameInstance1 = new Game("Chrono Trigger", "SquareSoft");
const gameInstance2 = new Game("Final Fantasy 7", "Square Enix");
const gameInstance3 = new Game("The Legend of Zelda", "Nintendo");

output.innerHTML += "<p>Game 1 Info: " + gameInstance1.getInfo() + "</p>";
output.innerHTML += "<p>Game 2 Info: " + gameInstance2.getInfo() + "</p>";
output.innerHTML += "<p>Game 3 Info: " + gameInstance3.getInfo() + "</p>";

class GameClass {
  constructor(title, createdBy) {
    this.title = title;
    this.createdBy = createdBy;

    this.publicMethod = () => {
      console.log(`Public Method: ${this.title}`);
    };

    const privateMethod = () => {
      console.log(`Private Method: ${this.title}`);
    };

    this.accessPrivate = () => {
      try {
        privateMethod();
      } catch (error) {
        console.error("Error accessing private method: " + error);
      }
    };
  }
}

const gameClassInstance = new GameClass("Super Mario Bros.", "Nintendo");
gameClassInstance.publicMethod();
gameClassInstance.accessPrivate();

function Character(name) {
  this.name = name;
}

Character.prototype.introduce = function () {
  return `Hello, I am ${this.name}.`;
};

function Hero(name, specialAbility) {
  Character.call(this, name);
  this.specialAbility = specialAbility;
}

Hero.prototype = Object.create(Character.prototype);
Hero.prototype.constructor = Hero;

Hero.prototype.useSpecialAbility = function () {
  return `${this.name} uses their special ability: ${this.specialAbility}`;
};

const mario = new Hero("Mario", "Super Jump");
const link = new Hero("Link", "Master Sword");

output.innerHTML += "<p>" + mario.introduce() + "</p>";
output.innerHTML += "<p>" + mario.useSpecialAbility() + "</p>";
output.innerHTML += "<p>" + link.introduce() + "</p>";
output.innerHTML += "<p>" + link.useSpecialAbility() + "</p>";

const game2 = {
  title: "The Legend of Zelda",
  createdBy: {
    company: "Nintendo",
    director: "Shigeru Miyamoto",
  },
  yearCreated: "1986",
};

const jsonString = JSON.stringify(game2);
output.innerHTML += "<p>JSON String: " + jsonString + "</p>";

const parsedObject = JSON.parse(jsonString);
output.innerHTML += "<p>Created By: " + parsedObject.createdBy.company + "</p>";
