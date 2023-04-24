// Alien-Speedrun
// by: Megalodon
// version: 1.0.0

var map =
"                    \n"+
"                    \n"+
"                    \n"+
"                    \n"+
"                    \n"+
"                    \n"+
"          5         \n"+
"      55758 7       \n"+
"       8  57        \n"+
"       57  58       \n"+
"      55    55      \n"+
"      58 7 75       \n"+
"       7 8755       \n"+
"        55 5        \n"+
"                    \n"+
"                    \n"+
"                    \n"+
"                    \n"+
"                    \n"+
"                    ";

var vocabulary = [
  { text: "GG", icon: "\u00a3", key: "G" },
  { text: "Alien", icon: "\u0030", key: "A" },
  { text: "Yes", icon: "\u004c", key: "Y" },
  { text: "No", icon: "\u004d", key: "N" },
  { text: "Record", icon: "\u0032", key: "J" },
  { text: "For the win", icon: "\u002e", key: "W" }
];

const aliensInfo = {
  10: { name: "Chicken", difficulty: { 0: "Easy", 1: "Easy", 2: "Easy", 3: "Medium" } },
  11: { name: "Crab", difficulty: { 0: "Easy", 1: "Easy", 2: "Easy", 3: "Easy" } },
  12: { name: "Fortress", difficulty: { 0: "Medium", 1:  "Hard", 2:  "Hard", 3:  "Hard" } },
  13: { name: "Caterpillar", difficulty: { 0: "Easy", 1:  "Easy", 2:  "Easy", 3: "Extremly Hard" } }, // troll
  14: { name: "Candlestick", difficulty: { 0: "Easy", 1: "Easy", 2: "Easy", 3: "Easy" } },
  15: { name: "Hirsute", difficulty: { 0: "Medium", 1:  "Hard", 2:  "Hard", 3:  "Hard" } },
  16: { name: "Piranha", difficulty: { 0: "Easy", 1: "Easy", 2: "Easy", 3: "Hard" } },
  17: { name: "Pointu", difficulty: { 0: "Easy", 1: "Easy", 2: "Easy", 3: "Easy" } },
  18: { name: "Fork", difficulty: { 0: "Easy", 1: "Easy", 2: "Easy", 3: "Easy" } },
  19: { name: "Saucer", difficulty: { 0: "Medium", 1: "Medium", 2:  "Hard", 3:  "Hard" } },
  20: { name: "Final Boss", difficulty: { 0: "Hard", 1: "Hard", 2: "Hard", 3: "Hard" } },
};

var music = ["civilisation.mp3", "procedurality.mp3", "argon.mp3", "crystals.mp3", "red_mist.mp3", "warp_drive.mp3"];
var musicApplyed = music[~~(Math.random() * music.length)];
this.options = {
  root_mode: "",
  map_name: "Invasion Speedrun",
  map_size: 20,
  max_players: 1,
  crystal_value: 4,
  lives: 1,
  maxtierlives: 1,
  starting_ship_maxed: true,
  weapon_drop: 10,
  weapons_store: false,
  choose_ship: [301, 302, 303, 304],
  custom_map: map,
  vocabulary: vocabulary,
  soundtrack: musicApplyed,
  ships: Spectator_191 = '{"name":"Spectator","level":1.9,"model":1,"size":0.025,"zoom":0.075,"specs":{"shield":{"capacity":[1e-30,1e-30],"reload":[1000,1000]},"generator":{"capacity":[1e-30,1e-30],"reload":[1,1]},"ship":{"mass":1,"speed":[200,200],"rotation":[1000,1000],"acceleration":[1000,1000]}},"bodies":{"face":{"section_segments":100,"angle":0,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-2,-2,2,2],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,1,1,0],"height":[0,1,1,0],"vertical":true,"texture":[6]}},"typespec":{"name":"Spectator","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[1e-30,1e-30],"reload":[1000,1000]},"generator":{"capacity":[1e-30,1e-30],"reload":[1,1]},"ship":{"mass":1,"speed":[200,200],"rotation":[1000,1000],"acceleration":[1000,1000]}},"shape":[0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001],"lasers":[],"radius":0.001}}'
};

var time = 25;
var stage = 0;
var startingGame = false;
var instrutor_ended = false;
var nextAlien_Code = 10;
var nextAlien_Level = 0;
var collectibles = [10, 20, 41, 42, 90, 91];
this.tick = function(game) {
  if (game.step % 60 === 0) {
    switch(startingGame) {
      case true:
        if (time >= 0) {
          time--;
          prepareScoreboard(game);
          if (instrutor_ended) for (let ship of game.ships) alert(ship, `The game will start soon`, format_time(time+1), "rgba(55, 255, 55, 0.8)", 1500);
        } else {
          time = 0;
          startingGame = 1;
          game.addAlien({
            code: nextAlien_Code,
            level: nextAlien_Level,
            x: game.options.map_size * 5,
            y: game.options.map_size * 5,
            crystal_drop: setVariables({order: stage+2, len: 10, gap: 1})[~~(Math.random() * setVariables({order: stage+2, len: 10, gap: 1}).length)],
            weapon_drop: collectibles[~~(Math.random() * collectibles.length)]
          });
        }
        break;
      case 1:
        updateScoreboard(game);
        break;
      case "ended":
        if (time >= 0) {
          endScoreboard(game);
        } else {
          for (let ship of game.ships) {
            ship.gameover({
              "You Won" : ship.name,
              "-" : "-",
              "Time Survived" : time,
              "Aliens Killed" : ship.custom.kills,
              "Score" : ship.score
            });
            ship.set({idle: true});
          }
        }
        break;
    }
  }
};

function endScoreboard(game) {
  let Scoreboard = {
    id: "scoreboard",
    clickable: false,
    visible: true,
    components: [
      {type: "text", position: [14, 4, 100, 8], value: `Game is ending`, color: "rgb(255,255,255)", align: "left"},
      {type: "text", position: [72, 4, 100, 8], value: format_time(time--), color: colorStage, align: "left"},
      {type: "box", position: [10, 15, 80, 1.4], fill: "rgba(155, 155, 155, 0.4)"},
      {type: "text", position: [0, 45, 100, 10], value: `Communications`, color: "rgb(255,255,255)", align: "center"},
      {type: "text", position: [0, 57, 100, 10], value: `Over`, color: "rgb(255,255,255)", align: "center"}
    ]
  };
  for (let ship of game.ships) ship.setUIComponent(Scoreboard);
}

function prepareScoreboard(game) {
  let Scoreboard = {
    id: "scoreboard",
    clickable: false,
    visible: true,
    components: [
      {type: "text", position: [14, 4, 100, 8], value: format_time(time), color: "rgb(255,255,255)", align: "left"},
      {type: "text", position: [58, 4, 100, 8], value: `Stage:  ${stage}`, color: colorStage, align: "left"},
      {type: "box", position: [10, 15, 80, 1.4], fill: "rgba(155, 155, 155, 0.4)"},
    ]
  };
  for (let ship of game.ships) ship.setUIComponent(Scoreboard);
}

function updateScoreboard(game) {
  const alienLB = aliensInfo[nextAlien_Code];
  const colorStage = (stage > 0) ? (stage < 3) ? "rgb(255,155,55)" : "rgb(255,55,55)" : "rgb(255,255,255)";
  const colorInformations = (alienLB.difficulty[nextAlien_Level] == "Easy") ? "rgb(55,255,55)" : (alienLB.difficulty[nextAlien_Level] == "Medium") ? "rgb(255,155,55)" : (alienLB.difficulty[nextAlien_Level] == "Medium") ? "rgb(151,0,0)" : "rgb(255,55,55)";
  const colorAlien = (alienLB.name == "Caterpillar" || alienLB.name == "Final Boss") ? "rgb(155,55,255)" : "rgb(255,255,255)";
  const down = 10;
  let Scoreboard = {
    id: "scoreboard",
    clickable: false,
    visible: true,
    components: [
      {type: "text", position: [14, 4, 100, 8], value: format_time(time++), color: "rgb(255,255,255)", align: "left"},
      {type: "text", position: [58, 4, 100, 8], value: `Stage:  ${stage}`, color: colorStage, align: "left"},
      {type: "box", position: [10, 15, 80, 1.4], fill: "rgba(155, 155, 155, 0.4)"},
      // Kills
      {type: "text", position: [0, 18+down-2.5, 100, 8], value: `Aliens Killed:`, color: "rgb(255,255,255)", align: "center"},
      {type: "box", position: [31, 25.5+down-2.5, 38, 1], fill: "rgba(155, 155, 155, 0.4)"},
      {type: "text", position: [0, 28+down-2.5, 100, 8], value: game.ships[0].custom.kills, color: "rgb(255,255,255)", align: "center"},
      // Alien Name
      {type: "text", position: [0, 40+down, 100, 8], value: `Current Alien:`, color: "rgb(255,255,255)", align: "center"},
      {type: "box", position: [30, 47.5+down, 40, 1], fill: "rgba(155, 155, 155, 0.4)"},
      {type: "text", position: [0, 50+down, 100, 8], value: alienLB.name, color: colorAlien, align: "center"},
      // Alien Difficulty
      {type: "text", position: [0, 65+down, 100, 8], value: `Alien Difficulty:`, color: "rgb(255,255,255)", align: "center"},
      {type: "box", position: [27.5, 72.5+down, 45, 1], fill: "rgba(155, 155, 155, 0.4)"},
      {type: "text", position: [0, 75+down, 100, 8], value: alienLB.difficulty[nextAlien_Level], color: colorInformations, align: "center"},
    ]
  };
  for (let ship of game.ships) ship.setUIComponent(Scoreboard);
}

this.event = function(event, game) {
  switch(event.name) {
    case "alien_destroyed":
      event.killer.custom.kills++;
      if (event.alien.code === 20 && event.alien.level === 3) {
        setTimeout(() => {gameFinished(event.killer)}, 2000);
      } else {
        if (event.alien.code === 20) {
          // Change Stage
          stage++;
          nextAlien_Code = 10;
          nextAlien_Level = event.alien.level+1;
        } else {
          // Normal
          nextAlien_Code = event.alien.code+1;
          nextAlien_Level = event.alien.level;
        }
        const alien = aliensInfo[nextAlien_Code];
        alert(event.killer, `Well Done!`, `Next alien:  ${alien.name}, difficulty:  ${alien.difficulty[nextAlien_Level]}`);
        const collectible = (nextAlien_Code == 20 || nextAlien_Code == 19 || nextAlien_Code == 15 || nextAlien_Code == 12) ? 12 : collectibles[~~(Math.random() * collectibles.length)];
        const crystals = (nextAlien_Code == 20 || nextAlien_Code == 19 || nextAlien_Code == 15 || nextAlien_Code == 12) ? setVariables({order: stage+10, len: 10, gap: 2})[~~(Math.random() * setVariables({order: stage+10, len: 10, gap: 2}).length)] : setVariables({order: stage+2, len: 10, gap: 1})[~~(Math.random() * setVariables({order: stage+2, len: 10, gap: 1}).length)];
        setTimeout(() => {
          game.addAlien({
            code: nextAlien_Code, 
            level: nextAlien_Level, 
            x: game.options.map_size * 5, 
            y: game.options.map_size * 5,
            crystal_drop: crystals,
            weapon_drop: collectible
          });
          setTimeout(() => {
            if (nextAlien_Code == 13) {
              if (nextAlien_Level < 3) game.aliens[0].set({damage: 40, rate: 2});
              else game.aliens[0].set({damage: 250, rate: 6});
            }
          }, 200);
        }, 4000);
      }
      break;
    case "ship_spawned":
      prepareShip(event.ship);
      break;
    case "ship_destroyed":
      event.ship.gameover({
        "You Lost" : event.ship.name,
        "-" : "-",
        "Time Survived" : time,
        "Aliens Killed" : event.ship.custom.kills,
        "Score" : event.ship.score
      });
      event.ship.set({idle: true});
      break;
  }
};

function alert(ship, Value1 = "", Value2 = "", Color = "rgba(255, 255, 255, 0.8)", time = 4000) {
  clearTimeout(ship.custom.logtimeout);
  ship.custom.logtimeout = setTimeout(() => {ship.setUIComponent({id: "Text", visible: false})}, time);
  ship.setUIComponent({
    id: "Text",
    position: [-5, -5, 110, 110],
    clickable: false,
    visible: true,
    components: [
      {type: "text", position: [0, 18, 100, 5], color: Color, value: Value1},
      {type: "text", position: [0, 24, 100, 4], color: Color, value: Value2}
    ]
  });
}

var ship_instructor = function(ship, message, character = "Lucina", delay = 0, hide_after = 0) {
  if (!ship || !message || !message.length) {return}
  let instructor_func;
  if (hide_after) {
    instructor_func = function() {
      ship.showInstructor();
      ship.instructorSays(message, character);
      setTimeout(() => { 
        ship.hideInstructor();
        if (!instrutor_ended) {
          instrutor_ended = true;
          addObject("MapCenter", MapCenter, {x: 20 * 5, y: 20 * 5, sx: 60, sy: 60});
        } else {
          time = 10;
          startingGame = "ended";
        }
      }, hide_after * 650);
    };
  } else {
    instructor_func = function() {
      ship.showInstructor();
      ship.instructorSays(message, character);
    };
  }
  setTimeout(instructor_func, delay * 650);
};

function prepareShip(ship) {
  startingGame = true;
  ship.custom.kills = 0;
  ship.set({x: 0, y: 0});
  ship_instructor(ship, "Welcome to (Invasion Speedrun)", "Zoltar");
  ship_instructor(ship, "To win you must kill every aliens without dying", "Zoltar", 6);
  ship_instructor(ship, "Good luck Commander", "Zoltar", 10);
  ship_instructor(ship, "See you at the end!", "Zoltar", 14, 4);
}

function gameFinished(ship, time = 0) {
  startingGame = false;
  ship.set({x: 0, y: 0, type: 191, collider: false, idle: true});
  ship_instructor(ship, `Well done! Commander`, "Zoltar");
  ship_instructor(ship, `You successfuly killed all of the aliens.`, "Zoltar", time+=5);
  ship_instructor(ship, `It took you ${format_time(time)} minutes to finish the game!`, "Zoltar", time+=6);
  ship_instructor(ship, `you did a great performance.`, "Zoltar", time+=7);
  ship_instructor(ship, `i wish you the best, and see you next time.`, "Zoltar", time+=5);
  ship_instructor(ship, `\n\n\n\ncommunications over.`, "Zoltar", time+=6, 5);
}

function format_time(time) {
  if (time > 0) {
    minutes = Math.floor(time / 60);
    seconds = time % 60;
    if (time % 60 === 0) {
      minutes = time / 60;
      seconds = "00";
      return minutes.toString() + ":" + seconds;
    }
    if (seconds < 10) seconds = "0" + seconds.toString();
    return minutes.toString() + ":" + seconds.toString();
  } else return "0:00";
}

function setVariables(info, list=[], i=0) {
  if (info.len > 10) return undefined;
  if (!info.gap) info.gap = 1;
  while (i<info.len) {
    const addNum = Math.round(Math.random()*(info.gap*10))+(info.order*10);
    if (!list.includes(addNum)) list.push(addNum), i++;
  }
  return list;
} 

const MapCenter = {
  id: "MapCenter",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  emissive: "https://raw.githubusercontent.com/TheGreatMegalodon/Dueling-Component/main/Dueling_Component/Aliens_SpeedRun.png",
};

const lost_sector_aries = {
  id: "lost_sector_aries",
  obj: "https://starblast.io/lost_sector/LostSector_Aries_HardEdges.obj",
  diffuse: "https://starblast.io/lost_sector/LostSector_Aries_LostSector_Aries_Diffuse.jpg",
  bump: "https://starblast.io/lost_sector/LostSector_Aries_LostSector_Aries_Height.jpg",
  specular: "https://starblast.io/lost_sector/LostSector_Aries_LostSector_Aries_Specular.jpg",
  shininess: 10,
  emissiveColor: 0,
  specularColor: 0xFFFFFF,
  transparent: false
};

game.setObject({
  id: "lost_sector_aries",
  type: lost_sector_aries,
  position: {x:20 * 5, y: 20 * 5, z:-60},
  scale: {x:3, y:3, z:3},
  rotation: {x:0, y:0, z:Math.PI}
});

addObject = function(Name, ID, info) {
  const defaultInfo = {x: 0, y: 0, sx: 0, sy: 0, rz: 0};
  info = {...defaultInfo, ...info};
  game.setObject({
    id: Name,
    type: ID,
    position: {x: info.x, y: info.y, z: -15},
    scale: {x: info.sx, y: info.sy, z: 0},
    rotation: {x: Math.PI, y: 0, z: info.rz}
  });
};
