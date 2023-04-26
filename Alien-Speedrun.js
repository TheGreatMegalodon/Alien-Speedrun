const mod_version =
"1.0.7";

/*
Mod creator: Megaldoon
  - Fun small competitive mod for everyone.
*/

const map =
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

const vocabulary = [
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

const timing = {
  600: {txt1: `${format_time(600)} minutes on the clock!`, txt2: ``, color: `rgba(255, 255, 255, 0.8)`},
  1200: {txt1: `${format_time(1200)} minutes on the clock!`, txt2: ``, color: `rgba(255, 255, 255, 0.8)`},
  1800: {txt1: `${format_time(1800)} minutes on the clock!`, txt2: `Time is running high! too high..`, color: `rgba(255, 55, 55, 0.8)`}
};

const ship = [Spectator_191 = '{"name":"Spectator","level":1.9,"model":1,"size":0.025,"zoom":0.075,"specs":{"shield":{"capacity":[1e-30,1e-30],"reload":[1000,1000]},"generator":{"capacity":[1e-30,1e-30],"reload":[1,1]},"ship":{"mass":1,"speed":[200,200],"rotation":[1000,1000],"acceleration":[1000,1000]}},"bodies":{"face":{"section_segments":100,"angle":0,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-2,-2,2,2],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,1,1,0],"height":[0,1,1,0],"vertical":true,"texture":[6]}},"typespec":{"name":"Spectator","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[1e-30,1e-30],"reload":[1000,1000]},"generator":{"capacity":[1e-30,1e-30],"reload":[1,1]},"ship":{"mass":1,"speed":[200,200],"rotation":[1000,1000],"acceleration":[1000,1000]}},"shape":[0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001],"lasers":[],"radius":0.001}}'];
const music = ["civilisation.mp3", "procedurality.mp3", "argon.mp3", "crystals.mp3", "red_mist.mp3", "warp_drive.mp3"];
const musicApplyed = music[~~(Math.random() * music.length)];
if (!game.custom.launched) MapOpen();
this.options = {
  root_mode: "",
  map_name: "Alien Speedrun",
  map_size: 20,
  max_players: 1,
  crystal_value: 2.5,
  starting_ship: 801,
  starting_ship_maxed: true,
  weapons_store: false,
  choose_ship: [301, 302, 303, 304],
  custom_map: map,
  vocabulary: vocabulary,
  soundtrack: musicApplyed,
  ships: ship
};

var time = 32;
var stage = 0;
var startingGame = false;
var instrutor_ended = false;
var endGameTimer;
var nextAlien_Code = 10;
var nextAlien_Level = 0;
var collectibles = [10, 11, 20, 21, 41, 42, 90, 91];
var asteroid_positions = getCords(100,  {cords: 100}, false);
var asteroid_sizes = setVariables({order: 3, len: 10, gap: 2});
var asteroid_velocity = getCords(6,  {cords: 0}, false).map(pos => pos/12.5).filter(pos => pos !== 0);
this.tick = function(game) {
  if (game.step % 30 === 0) {
    if (game.ships.length > 1) { startingGame = false, colorBLK = blink("rgb(100,100,255)"), blocked();
      game.ships.forEach(ship => { alert(ship, `More than 2 players detected`, `Please restart the mod in order to continue playing`, colorBLK, 8000) });
    }
  }
  if (game.step % 60 === 0) {
    switch(startingGame) {
      case true:
        if (time >= 0) {
          time--;
          prepareScoreboard(game);
          if (instrutor_ended) game.ships.forEach(ship => {alert(ship, `Starting...!`, format_time(time+1), "rgba(255,255,255, 0.8)", 1500)});
        } else {
          time = 0;
          startingGame = 1;
          game.addAlien({
            code: nextAlien_Code,
            level: nextAlien_Level,
            x: game.options.map_size * 5,
            y: game.options.map_size * 5,
            crystal_drop: setVariables({order: stage+4, len: 10, gap: 2})[~~(Math.random() * setVariables({order: stage+4, len: 10, gap: 2}).length)],
            weapon_drop: collectibles[~~(Math.random() * collectibles.length)]
          });
          const alienn = aliensInfo[nextAlien_Code];
          game.ships.forEach(ship => {alert(ship, `First Alien!`, `Alien:  ${alienn.name}, difficulty:  ${alienn.difficulty[nextAlien_Level]}`);}); 
        }
        break;
      case 1:
        updateScoreboard(game);
        if (game.step % 240 === 0 && game.asteroids.length <= 4) {
          game.addAsteroid({
            size: asteroid_sizes[~~(Math.random()*asteroid_sizes.length)],
            x: asteroid_positions[~~(Math.random()*asteroid_positions.length)],
            y: asteroid_positions[~~(Math.random()*asteroid_positions.length)],
            vx: asteroid_velocity[~~(Math.random()*asteroid_velocity.length)],
            vy: asteroid_velocity[~~(Math.random()*asteroid_velocity.length)]
          });
        }
        break;
      case 2:
        if (time >= 0) {
          time--;
          endScoreboard(game);
          if (!instrutor_ended) game.ships.forEach(ship => {alert(ship, `Ending...!`, format_time(time+1), "rgba(255,255,255, 0.8)", 1500);});
        } else {
          for (let ship of game.ships) {
            ship.gameover({
              "You WON!" : ship.name.toString(),
              "-" : "-",
              "Time Survived" : format_time(endGameTimer-1),
              "Aliens Killed" : ship.custom.kills.toString(),
              "Score" : ship.score.toString()
            });
          }
        }
        break;
    }
  }
};

var blinkColor;
function blink(passiveColor) {
  if (blinkColor == passiveColor) blinkColor = "rgb(55,55,55)";
  else blinkColor = passiveColor;
  return blinkColor;
}

function blocked() {
  let Scoreboard = {
    id: "scoreboard",
    clickable: false,
    visible: true,
    components: [
      {type: "text", position: [0, 4, 100, 8], value: `Too many players`, color: "rgb(100,100,255)", align: "center"},
      {type: "box", position: [10, 15, 80, 1.4], fill: "rgba(155, 155, 155, 0.4)"},
      {type: "text", position: [0, 45, 100, 8], value: `C0.mmun1..c@t1o.ns..`, color: "rgb(255,255,255)", align: "center"},
      {type: "text", position: [0, 57, 100, 8], value: `S..cr@..m8l.ed.`, color: "rgb(255,255,255)", align: "center"}
    ]
  };
  game.ships.forEach(ship => {ship.setUIComponent(Scoreboard)}); 
}

function endScoreboard(game) {
  let Scoreboard = {
    id: "scoreboard",
    clickable: false,
    visible: true,
    components: [
      {type: "text", position: [14, 4, 100, 8], value: `Game is ending`, color: "rgb(255,255,255)", align: "left"},
      {type: "text", position: [72, 4, 100, 8], value: format_time(time), color: "rgb(255,255,255)", align: "left"},
      {type: "box", position: [10, 15, 80, 1.4], fill: "rgba(155, 155, 155, 0.4)"},
      {type: "text", position: [0, 45, 100, 8], value: `Communications`, color: "rgb(255,255,255)", align: "center"},
      {type: "text", position: [0, 57, 100, 8], value: `Over`, color: "rgb(255,255,255)", align: "center"}
    ]
  };
  game.ships.forEach(ship => {ship.setUIComponent(Scoreboard)});
}

let dataInitIndex = 0;
const dataInitValues = ["Initializing Data!", "Initializing Data.!", "Initializing Data..!", "Initializing Data...!"];
function prepareScoreboard(game) {
  let Scoreboard = {
    id: "scoreboard",
    clickable: false,
    visible: true,
    components: [
      {type: "text", position: [14, 4, 100, 8], value: format_time(time), color: "rgb(255,255,255)", align: "left"},
      {type: "text", position: [58, 4, 100, 8], value: `Stage:  ${stage}`, color: "rgb(255,255,255)", align: "left"},
      {type: "box", position: [10, 15, 80, 1.4], fill: "rgba(155, 155, 155, 0.4)"},
      {type: "text", position: [0, 52.5, 100, 8], value: dataInitValues[(dataInitIndex++) % dataInitValues.length], color: "rgb(255,255,255)", align: "center"},
    ]
  };
  game.ships.forEach(ship => {ship.setUIComponent(Scoreboard)});
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
  for (const ship of game.ships) {
    if (timing.hasOwnProperty(time)) alert(ship, timing[time].txt1, timing[time].txt2, timing[time].color, 4000, {txt1: 75, txt2: 81});
    ship.setUIComponent(Scoreboard);
  }
}

function isBoss(Code, Level) {return (Code == 20 || Code == 19 || Code == 15 || Code == 12 || (Code == 16 && Level == 3) || (Code == 10 && Level == 3))}
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
        const collectible = isBoss(nextAlien_Code, nextAlien_Level) ? 12 : collectibles[~~(Math.random() * collectibles.length)];
        const crystals = isBoss(nextAlien_Code, nextAlien_Level) ? setVariables({order: (Math.pow(stage+1, 3))+10, len: 10, gap: 2})[~~(Math.random() * setVariables({order: (Math.pow(stage+1, 3))+10, len: 10, gap: 2}).length)] : setVariables({order: stage+4, len: 10, gap: 2})[~~(Math.random() * setVariables({order: stage+4, len: 10, gap: 2}).length)];
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
              const alien = game.aliens[0];
              if (nextAlien_Level < 3) alien.set({damage: 40, rate: 2});
              else alien.set({damage: 600, rate: 0.1, laser_speed: 160});
            }
          }, 200);
          if (nextAlien_Code == 12 && nextAlien_Level === 0) {
            for (let ship of game.ships) {
              ship_instructor(ship, "\n\n\n\n\n\n", "Zoltar", 4);
              ship_instructor(ship, "Haha!", "Zoltar", 5);
              ship_instructor(ship, "Try Minning up before attacking that one!", "Zoltar", 9, 5, false);
            } 
          }
        }, 4000);
      }
      break;
    case "ship_spawned":
      if (!event.ship.custom.lastlyDied) prepareShip(event.ship);
      else { alert(event.ship, `You failed!`, `Be better next time!`, "rgba(255, 55, 55, 0.8)");
      event.ship.set({x: 0, y: 0, vx: 0, vy: 0, collider: false, type: 191, idle: true});
        setTimeout(() => {
          const alien = aliensInfo[nextAlien_Code];
          event.ship.gameover({
            "You LOST!" : event.ship.name.toString(),
            "-" : "-",
            "Killer" : alien.name.toString(),
            "Difficulty" : alien.difficulty[nextAlien_Level].toString(),
            "Stage" : stage.toString(),
            "Time Survived" : format_time(time-1).toString(),
            "Aliens Killed" : event.ship.custom.kills.toString(),
            "Score" : event.ship.score.toString()
          });
          game.modding.terminal.echo(`[[bg;tomato;]\n - Restart The Mod - \n]`);
        }, 4000);
      }
      break;
    case "asteroid_destroyed":
      if (event.killer) {
        const point = event.asteroid.size > 30 ? setVariables({order: 3, len: 1, gap: 2}) : setVariables({order: 1, len: 1, gap: 2});
        event.killer.set({score: event.killer.score + point[0]});
        if (event.asteroid.size > 40) {
          const collectible = collectibles[~~(Math.random() * collectibles.length)];
          game.addCollectible({
            code: collectible,
            x: event.asteroid.x,
            y: event.asteroid.y
          });
        }
      }
      break;
    case "ship_destroyed":
      event.ship.custom.lastlyDied = true;
      startingGame = false;
      break;
  }
};

function alert(ship, Value1 = "", Value2 = "", Color = "rgba(255, 255, 255, 0.8)", time = 4000, height = {txt1: 18, txt2: 24}) {
  clearTimeout(ship.custom.logtimeout);
  ship.custom.logtimeout = setTimeout(() => {ship.setUIComponent({id: "Text", visible: false})}, time);
  ship.setUIComponent({
    id: "Text",
    position: [-5, -5, 110, 110],
    clickable: false,
    visible: true,
    components: [
      {type: "text", position: [0, height.txt1, 100, 5], color: Color, value: Value1},
      {type: "text", position: [0, height.txt2, 100, 4], color: Color, value: Value2}
    ]
  });
}

var ship_instructor = function(ship, message, character = "Lucina", delay = 0, hide_after = 0, allow = true) {
  if (!ship || !message || !message.length) {return}
  let instructor_func;
  if (hide_after) {
    instructor_func = function() {
      ship.showInstructor();
      ship.instructorSays(message, character);
      setTimeout(() => { 
        ship.hideInstructor();
        if (allow) {
          if (!instrutor_ended) {
            instrutor_ended = true;
            addObject("MapCenter", Objects.MapCenter, {x: 20 * 5, y: 20 * 5, z: -15, sx: 60, sy: 60, rz: 0});
          } else instrutor_ended = false;
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

function prepareShip(ship, timed = 0) {
  startingGame = true;
  ship.custom.kills = 0;
  ship.set({x: 0, y: 0});
  ship_instructor(ship, "Welcome to..\n", "Zoltar");
  ship_instructor(ship, "Alien Speedrun!\n", "Zoltar", timed += 3);
  ship_instructor(ship, "To win the game, you must kill all the aliens as quickly as possible without dying once..", "Zoltar", timed += 3);
  ship_instructor(ship, "There are 4 steps, from 0 to 3, each one more difficult than the other", "Zoltar", timed += 8);
  ship_instructor(ship, "Complete them as quickly as possible and maybe become the record holder!", "Zoltar", timed += 7);
  ship_instructor(ship, "Good luck Commander!", "Zoltar", timed += 7, 4);
}

function gameFinished(ship, timed = 0) {
  startingGame = false;
  endGameTimer = time;
  ship.set({x: 0, y: 0, vx: 0, vy: 0, collider: false, type: 191, idle: true});
  ship_instructor(ship, "\n\n\n\n\n\n", "Zoltar", 1);
  ship_instructor(ship, `Well done! Commander`, "Zoltar", timed += 2);
  ship_instructor(ship, `You successfuly killed all of the aliens.`, "Zoltar", timed += 5);
  ship_instructor(ship, `It took you ${format_time(endGameTimer-1)} minutes to finish the game!`, "Zoltar", timed += 6);
  ship_instructor(ship, `you did a great performance.`, "Zoltar", timed += 7);
  ship_instructor(ship, `i wish you the best, and see you next time.`, "Zoltar", timed += 5);
  ship_instructor(ship, `\n\n\n\n\n\ncommunications\nover.`, "Zoltar", timed += 6, 4);
  time = 30;
  startingGame = 2;
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
  info.gap = info.gap || 1;
  while (i<info.len) {
    const addNum = Math.round(Math.random()*(info.gap*10))+(info.order*10);
    if (!list.includes(addNum)) list.push(addNum), i++;
  }
  return list;
} 

function getCords(size, info, random=true) {
  const mapSize = size+1;
  var newInfo = Array(mapSize).fill(0).map((_, i) => (info.cords - Math.round(size / 2)) + i);
  return random ? newInfo[~~(Math.random() * newInfo.length)] : newInfo;
}

function MapOpen() {
  game.modding.terminal.echo(`[[bg;#ffdf00;]\n - Alien SpeedRun - ]\n[[ig;#00fff2;]\nVersion: ${mod_version}\nAll credits goes to Megalodon#0001\n]`);
  game.custom.launched = true;
}

const Objects = {
  MapCenter: {
    id: "MapCenter",
    obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
    emissive: "https://raw.githubusercontent.com/TheGreatMegalodon/Dueling-Component/main/Dueling_Component/Aliens_SpeedRun_blur.png",
  },
  lost_sector_aries: {
    id: "lost_sector_aries",
    obj: "https://starblast.io/lost_sector/LostSector_Aries_HardEdges.obj",
    diffuse: "https://starblast.io/lost_sector/LostSector_Aries_LostSector_Aries_Diffuse.jpg",
    bump: "https://starblast.io/lost_sector/LostSector_Aries_LostSector_Aries_Height.jpg",
    specular: "https://starblast.io/lost_sector/LostSector_Aries_LostSector_Aries_Specular.jpg",
    shininess: 10, emissiveColor: 0, specularColor: 0xFFFFFF, transparent: false
  }
}

addObject = function(Name, ID, info) {
  const defaultInfo = {x: 0, y: 0, z: 0, sx: 0, sy: 0, sz: 0, rx: Math.PI, rz: Math.PI};
  info = {...defaultInfo, ...info};
  game.setObject({
    id: Name,
    type: ID,
    position: {x: info.x, y: info.y, z: info.z},
    scale: {x: info.sx, y: info.sy, z: info.sz},
    rotation: {x: info.rx, y: 0, z: info.rz}
  });
};

addObject("lost_sector_aries", Objects.lost_sector_aries, {x: 20 * 5, y: 20 * 5, z: -60, sx: 2, sy: 2, sz: 2, rx: 0});
