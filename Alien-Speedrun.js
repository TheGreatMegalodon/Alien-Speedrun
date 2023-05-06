const mod_version =
"2.0.2";

/*
  
  "ASP" IS A SOLO MODE!
  
  WHICH MEANS IT IS NOT MADE FOR MORE THAN 1 PLAYER TO JOIN.
  TRYING TO MAKE MORE THAN 1 PLAYER JOIN IS GONNA CAUSE THE MOD TO CRASH OR MALFUNCTION.
  
  THNAKS.
  
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
  14: { name: "Candlestick", difficulty: { 0: "Easy", 1: "Easy", 2: "Easy", 3: "Easy" } },
  15: { name: "Hirsute", difficulty: { 0: "Medium", 1:  "Hard", 2:  "Hard", 3:  "Hard" } },
  16: { name: "Piranha", difficulty: { 0: "Easy", 1: "Easy", 2: "Easy", 3: "Hard" } },
  17: { name: "Pointu", difficulty: { 0: "Easy", 1: "Easy", 2: "Easy", 3: "Easy" } },
  18: { name: "Fork", difficulty: { 0: "Easy", 1: "Easy", 2: "Easy", 3: "Easy" } },
  19: { name: "Saucer", difficulty: { 0: "Medium", 1: "Medium", 2:  "Hard", 3:  "Hard" } },
  20: { name: "Final Boss", difficulty: { 0: "Hard", 1: "Hard", 2: "Hard", 3: "Hard" } },
  // troll
  13: { name: "Caterpillar", difficulty: { 0:  "Medium", 1:  "Hard", 2: "Extreme" } },
};

const wavesInfo = {
  0: { codes: { 1: {code: 10, level: 0}, 2: {code: 11, level: 0}, 3: {code: 14, level: 0}, 4: {code: 16, level: 0}, 5: {code: 17, level: 0}, 6: {code: 18, level: 0} }, len: 6 }, // green
  1: { codes: { 1: {code: 10, level: 1}, 2: {code: 11, level: 1}, 3: {code: 12, level: 0}, 4: {code: 14, level: 1}, 5: {code: 15, level: 0}, 6: {code: 16, level: 1}, 7: {code: 17, level: 1}, 8: {code: 18, level: 1}, 9: {code: 19, level: 0} }, len: 9 }, // yellow
  2: { codes: { 1: {code: 10, level: 2}, 2: {code: 11, level: 2}, 3: {code: 12, level: 1}, 4: {code: 14, level: 2}, 5: {code: 15, level: 1}, 6: {code: 16, level: 2}, 7: {code: 19, level: 1}, 8: {code: 20, level: 0} }, len: 8 }, // red
  3: { codes: { 1: {code: 10, level: 3}, 2: {code: 16, level: 3}, 3: {code: 17, level: 2}, 4: {code: 18, level: 2}, 5: {code: 19, level: 2}, 6: {code: 20, level: 1} }, len: 6 }, // purple
  4: { codes: { 1: {code: 13, level: 0}, 2: {code: 13, level: 1}, 3: {code: 13, level: 2} }, len: 3 }, // light blue
  5: { codes: { 1: {code: 0, level: 0} }, len: Infinity } // ending
};

const timing = {
  300: {txt1: `${format_time(300)}`, txt2: `Minutes on the clock`, color: `rgba(155, 255, 55, 0.8)`},
  600: {txt1: `${format_time(600)}`, txt2: `Minutes on the clock!`, color: `rgba(255, 155, 55, 0.8)`},
  1200: {txt1: `${format_time(1200)}`, txt2: `Minutes on the clock.!`, color: `rgba(255, 155, 55, 0.8)`},
  1800: {txt1: `${format_time(1800)}`, txt2: `Minutes on the clock..! Time is running high! too high..`, color: `rgba(255, 55, 55, 0.8)`}
};

const intraWaves = {
  "active": { velocityMultiplier: 3, sizeReducer: 1.2, spawnFrequency: 0.5, spawnLimit: 20 },
  "passive": { velocityMultiplier: 1, sizeReducer: 1, spawnFrequency: 4, spawnLimit: 4 }
};

const shipsInformations = {
  default: { name: "Unknown", tier: "Undefined" },
  // 1
  101: { name: "Fly", tier: "1" },
  // 2
  201: { name: "Delta-Fighter", tier: "2" },
  202: { name: "Trident", tier: "2" },
  // 3
  301: { name: "Pulse-Fighter", tier: "3" },
  302: { name: "Side-Fighter", tier: "3" },
  303: { name: "Shadow X-1", tier: "3" },
  304: { name: "Y-Defender", tier: "3" },
  // 4
  401: { name: "Vanguard", tier: "4" },
  402: { name: "Mercury", tier: "4" },
  403: { name: "X-Warior", tier: "4" },
  404: { name: "Side-interceptor", tier: "4" },
  405: { name: "Pioneer", tier: "4" },
  406: { name: "Crusader", tier: "4" },
  // 5
  501: { name: "U-Sniper", tier: "5" },
  502: { name: "FuryStar", tier: "5" },
  503: { name: "T-Warrior", tier: "5" },
  504: { name: "Aetos", tier: "5" },
  505: { name: "Shadow X-2", tier: "5" },
  506: { name: "Howler", tier: "5" },
  507: { name: "Bat-Defender", tier: "5" },
  // 6
  601: { name: "Advanced-Fighter", tier: "6" },
  602: { name: "Scorpion", tier: "6" },
  603: { name: "Marauder", tier: "6" },
  604: { name: "Condor", tier: "6" },
  605: { name: "A-Speedster", tier: "6" },
  606: { name: "Rock-Tower", tier: "6" },
  607: { name: "Barracuda", tier: "6" },
  608: { name: "O-Defender", tier: "6" },
  // 7
  701: { name: "Odyssey", tier: "7" },
  702: { name: "Shadow X-3", tier: "7" },
  703: { name: "Bastion", tier: "7" },
  704: { name: "Aries", tier: "7" }
};

const damagePerLevels = {
  1: { min: 0, max: 50 },
  2: { min: 25, max: 75 },
  3: { min: 50, max: 100 },
  4: { min: 75, max: 125 },
  5: { min: 100, max: 150 },
  6: { min: 125, max: 175 },
  7: { min: 150, max: 200 }
};

const ship = [Spectator_191 = '{"name":"Spectator","level":1.9,"model":1,"size":0.025,"zoom":0.075,"specs":{"shield":{"capacity":[1e-30,1e-30],"reload":[1000,1000]},"generator":{"capacity":[1e-30,1e-30],"reload":[1,1]},"ship":{"mass":1,"speed":[200,200],"rotation":[1000,1000],"acceleration":[1000,1000]}},"bodies":{"face":{"section_segments":100,"angle":0,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-2,-2,2,2],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,1,1,0],"height":[0,1,1,0],"vertical":true,"texture":[6]}},"typespec":{"name":"Spectator","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[1e-30,1e-30],"reload":[1000,1000]},"generator":{"capacity":[1e-30,1e-30],"reload":[1,1]},"ship":{"mass":1,"speed":[200,200],"rotation":[1000,1000],"acceleration":[1000,1000]}},"shape":[0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001],"lasers":[],"radius":0.001}}'];
const music = ["civilisation.mp3", "procedurality.mp3", "argon.mp3", "crystals.mp3", "red_mist.mp3", "warp_drive.mp3"];
const musicApplyed = music[~~(Math.random() * music.length)];
if (!game.custom.launched) MapOpen();
this.options = {
  root_mode: "",
  map_name: "Alien Speedrun",
  map_size: 20,
  max_players: 2,
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

var time = 35;
var stage = 0;
var code = 1;
var blinkColor;
var startingGame = false;
var instrutor_ended = false;
var endGameTimer;
var knownPlayers;
var nextAlien_Code = 10;
var nextAlien_Level = 0;
var collectibles = [10, 11, 20, 21, 41, 42, 90, 91];
var asteroid_positions = getCords(100,  {cords: 100}, false);
var asteroid_sizes = setVariables({order: 3, len: 10, gap: 2});
var asteroid_velocity = getCords(6,  {cords: 0}, false).map(pos => pos/12.5).filter(pos => pos !== 0);
this.tick = function(game) {
  if (game.step % 60 === 0) {
    switch(startingGame) {
      case true:
        if (time >= 0) {
          time--;
          prepareScoreboard(game);
          if (instrutor_ended) game.ships.forEach(ship => {alert(ship, format_time(time+1), `Starting...!`, "rgba(255,255,255, 0.8)", 1500)});
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
          game.ships.forEach(ship => { alert(ship, `First Alien!`, `Alien:  ${alienn.name}, difficulty:  ${alienn.difficulty[nextAlien_Level]}`) }); 
        }
        break;
      case 1:
        updateScoreboard(game);
        const gameInfo = intraWaves[paChangeMode(nextAlien_Code, nextAlien_Level)];
        if (game.step % (gameInfo.spawnFrequency*60) === 0 && game.asteroids.length <= gameInfo.spawnLimit) {
          game.addAsteroid({
            size: asteroid_sizes[~~(Math.random()*asteroid_sizes.length)] / gameInfo.sizeReducer,
            x: asteroid_positions[~~(Math.random()*asteroid_positions.length)],
            y: asteroid_positions[~~(Math.random()*asteroid_positions.length)],
            vx: asteroid_velocity[~~(Math.random()*asteroid_velocity.length)] * gameInfo.velocityMultiplier,
            vy: asteroid_velocity[~~(Math.random()*asteroid_velocity.length)] * gameInfo.velocityMultiplier
          });
        }
        break;
      case 2:
        if (time >= 0) {
          time--;
          endScoreboard(game);
          if (!instrutor_ended) game.ships.forEach(ship => {alert(ship, format_time(time+1), `Ending...!`, "rgba(255,255,255, 0.8)", 1500)});
        } else {
          game.ships.forEach(ship => {
            const info = (shipsInformations.hasOwnProperty(ship.custom.oldType)) ? shipsInformations[ship.custom.oldType] : shipsInformations.default;
            ship.gameover({
              "You WON!" : ship.name.toString(),
              "-" : "-",
              "Total Time" : format_time(endGameTimer-1),
              "Ship Used" : `${info.name}, Tier ${info.tier}`,
              "Aliens Killed" : ship.custom.kills.toString()
            });
          });
        }
        break;
    }
  }
};

function paChangeMode(code, level) { return ((code == 16 && level == 3) || (code == 20 && level >= 1)) ? "active" : "passive" }
function getNextAlien() { if (code === wavesInfo[stage].len) stage++, code = 1; else code++; return { code: wavesInfo[stage].codes[code].code, level: wavesInfo[stage].codes[code].level } }
function isBoss(code, level) { return (code == 20 || code == 19 || code == 15 || code == 12 || (code == 16 && level == 3) || (code == 10 && level == 3)) }
this.event = function(event, game) {
  switch(event.name) {
    case "alien_destroyed":
      event.killer.custom.kills++;
      const nextAlien = getNextAlien();
      if (stage === 5) gameFinished(event.killer);
      else {
        nextAlien_Code = nextAlien.code;
        nextAlien_Level = nextAlien.level;
        const alien = aliensInfo[nextAlien_Code];
        (nextAlien.code == 13) ? alert(event.killer, `Warning!`, `Next alien:  ${alien.name}, difficulty:  ${alien.difficulty[nextAlien_Level]}`, "rgba(155,55,255,0.8)") : alert(event.killer, `Well Done!`, `Next alien:  ${alien.name}, difficulty:  ${alien.difficulty[nextAlien_Level]}`);
        const collectible = isBoss(nextAlien_Code, nextAlien_Level) ? 12 : collectibles[~~(Math.random() * collectibles.length)];
        const crystals = isBoss(nextAlien_Code, nextAlien_Level) ? setVariables({order: (Math.pow(stage+1, 3))+10, len: 10, gap: 2})[~~(Math.random() * setVariables({order: (Math.pow(stage+1, 3))+10, len: 10, gap: 2}).length)] : setVariables({order: stage+4, len: 10, gap: 2})[~~(Math.random() * setVariables({order: stage+4, len: 10, gap: 2}).length)];
        setTimeout(() => {
          game.addAlien({ code: nextAlien_Code,  level: nextAlien_Level,  x: game.options.map_size * 5,  y: game.options.map_size * 5, crystal_drop: crystals, weapon_drop: collectible });
          if (nextAlien_Code == 13) {
            setTimeout(() => {
              const alien = game.aliens[0];
              switch(code) {
                case 1: alien.set({damage: 100, rate: 2}); break;
                case 2: alien.set({damage: 200, rate: 1}); break;
                case 3: alien.set({damage: 600, rate: 0.1, laser_speed: 160}); break;
              }
            }, 200);
          }
        }, 4000);
      }
      break;
    case "ship_spawned":
      if (!game.custom.Hasjoined) prepareShip(event.ship, game);
      else (event.ship === knownPlayers) ? desactivate(event.ship) : expulsed();
      break;
    case "asteroid_destroyed":
      if (event.killer) {
        const point = event.asteroid.size > 30 ? setVariables({order: 3, len: 1, gap: 2}) : setVariables({order: 1, len: 1, gap: 2});
        event.killer.set({score: event.killer.score + point[0]});
        if (event.asteroid.size > 40) {
          const collectible = collectibles[~~(Math.random() * collectibles.length)];
          game.addCollectible({ code: collectible, x: event.asteroid.x, y: event.asteroid.y });
        }
      }
      break;
    case "ship_destroyed":
      game.custom.lastlyDied = true;
      startingGame = false;
      break;
  }
};

function alert(ship, Value1 = "", Value2 = "", Color = "rgba(255, 255, 255, 0.8)", time = 4000, height = {txt1: 18, txt2: 24}) {
  clearTimeout(ship.custom.logtimeout);
  ship.custom.logtimeout = setTimeout(() => { ship.setUIComponent({id: "Text", visible: false}) }, time);
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
          if (!instrutor_ended) instrutor_ended = true, addObject("MapCenter", Objects.MapCenter, {x: 20 * 5, y: 20 * 5, z: -15, sx: 60, sy: 60, rz: 0});
          else instrutor_ended = false;
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

function endScoreboard(game) {
  const ship = game.ships[0];
  const colorPlayer = shipColor(ship);
  let Scoreboard = {
    id: "scoreboard",
    clickable: false,
    visible: true,
    components: [
      { type: "text", position: [14, 4, 100, 8], value: `Game is ending`, color: "rgb(255,255,255)", align: "left" },
      { type: "text", position: [32, 4, 100, 8], value: format_time(time), color: "rgb(255,255,255)", align: "center" },
      { type: "box", position: [10, 15, 80, 1.4], fill: "rgba(155, 155, 155, 0.4)" },
      // Ship
      { type: "box", position: [0, 21, 1.5, 12], fill: `rgba(${colorPlayer}, 0.4)` },
      { type: "box", position: [3, 21, 96, 12], fill: "rgba(155, 155, 155, 0.1)" },
      { type: "player", id: ship.id, position: [4, 22.5, 100, 9], value: "", color: "rgba(255,255,255,0.8)" },
      // txt
      { type: "text", position: [0, 57, 100, 8], value: `Communications`, color: "rgb(255,255,255)", align: "center" },
      { type: "text", position: [0, 67, 100, 8], value: `Over`, color: "rgb(255,255,255)", align: "center" }
    ]
  };
  game.ships.forEach(ship => {ship.setUIComponent(Scoreboard)});
}

let dataInitIndex = 0;
const dataInitValues = ["Initializing Data!", "Initializing Data.!", "Initializing Data..!", "Initializing Data...!"];
function prepareScoreboard(game) {
  const ship = game.ships[0];
  const colorPlayer = shipColor(ship);
  let Scoreboard = {
    id: "scoreboard",
    clickable: false,
    visible: true,
    components: [
      { type: "text", position: [14, 4, 100, 8], value: format_time(time), color: "rgb(255,255,255)", align: "left" },
      { type: "text", position: [52, 4, 100, 8], value: `Stage  ${stage}/4`, color: "rgb(255,255,255)", align: "left" },
      { type: "box", position: [10, 15, 80, 1.4], fill: "rgba(155, 155, 155, 0.4)" },
      // Ship
      { type: "box", position: [0, 21, 1.5, 12], fill: `rgba(${colorPlayer}, 0.4)` },
      { type: "box", position: [3, 21, 96, 12], fill: "rgba(155, 155, 155, 0.1)" },
      { type: "player", id: ship.id, position: [4, 22.5, 100, 9], value: "", color: "rgba(255,255,255,0.8)" },
      // txt
      { type: "text", position: [0, 60, 100, 8], value: dataInitValues[(dataInitIndex++) % dataInitValues.length], color: "rgb(255,255,255)", align: "center" }
    ]
  };
  game.ships.forEach(ship => {ship.setUIComponent(Scoreboard)});
}

function updateScoreboard(game) {
  const ship = game.ships[0];
  const alienLB = aliensInfo[nextAlien_Code];
  const colorStage = (stage === 0) ? "55, 255, 55" : (stage === 1) ? "255, 220, 55" : (stage === 2) ? "255, 55, 55" : (stage === 3) ? "155, 55, 255" : (stage >= 4) ? "55, 200, 255" : "255, 255, 255";
  const colorInformations = (alienLB.difficulty[nextAlien_Level] == "Easy") ? "55,255,55" : (alienLB.difficulty[nextAlien_Level] == "Medium") ? "255,155,55" : (alienLB.difficulty[nextAlien_Level] == "Medium") ? "151,0,0" : "255,55,55";
  const colorAlien = (alienLB.name == "Caterpillar" || alienLB.name == "Final Boss") ? "155,55,255" : "255,255,255";
  const colorPlayer = shipColor(ship);
  let Scoreboard = {
    id: "scoreboard",
    clickable: false,
    visible: true,
    components: [
      { type: "text", position: [14, 4, 100, 8], value: format_time(time++), color: "rgba(255,255,255,0.8)", align: "left" },
      { type: "text", position: [52, 4, 100, 8], value: `Stage  ${stage}/4`, color: `rgba(${colorStage}, 0.8)`, align: "left" },
      { type: "box", position: [10, 15, 80, 1.4], fill: "rgba(155, 155, 155, 0.4)" },
      // Ship
      { type: "box", position: [0, 21, 1.5, 12], fill: `rgba(${colorPlayer}, 0.4)` },
      { type: "box", position: [3, 21, 96, 12], fill: "rgba(155, 155, 155, 0.1)" },
      { type: "player", id: ship.id, position: [4, 22.5, 100, 9], value: "", color: "rgba(255,255,255,0.8)" },
      // Informations
      { type: "text", position: [0, 37.5, 100, 8], value: `Game Information`, color: "rgba(255,255,255,0.8)", align: "center" },
      { type: "box", position: [22.5, 45, 55, 0.8], fill: "rgba(155, 155, 155, 0.4)" },
      // Kills
      { type: "box", position: [0, 53, 1.5, 10], fill: `rgba(255, 255, 255, 0.4)` },
      { type: "box", position: [3, 53, 75, 10], fill: "rgba(155, 155, 155, 0.1)" },
      { type: "box", position: [79.5, 53, 19.5, 10], fill: "rgba(155, 155, 155, 0.2)" },
      { type: "text", position: [20, 54, 100, 8], value: `Aliens Killed`, color: "rgba(255,255,255,0.8)", align: "left" },
      { type: "text", position: [39.5, 54, 100, 8], value: ship.custom.kills, color: "rgba(255,255,255,0.8)", align: "center" },
      // Alien Name
      { type: "box", position: [0, 65, 1.5, 10], fill: `rgba(${colorAlien}, 0.4)` },
      { type: "box", position: [3, 65, 75-20, 10], fill: "rgba(155, 155, 155, 0.1)" },
      { type: "box", position: [79.5-20, 65, 19.5+20, 10], fill: "rgba(155, 155, 155, 0.2)" },
      { type: "text", position: [9.5, 66, 100, 8], value: `Current Alien`, color: "rgba(255,255,255,0.8)", align: "left" },
      { type: "text", position: [29, 66, 100, 8], value: alienLB.name, color: `rgba(${colorAlien}, 0.8)`, align: "center" },
      // Alien Difficulty
      { type: "box", position: [0, 77, 1.5, 10], fill: `rgba(${colorInformations}, 0.4)` },
      { type: "box", position: [3, 77, 75-15, 10], fill: "rgba(155, 155, 155, 0.1)" },
      { type: "box", position: [79.5-15, 77, 19.5+15, 10], fill: "rgba(155, 155, 155, 0.2)" },
      { type: "text", position: [9.5, 78, 100, 8], value: `Alien Difficulty`, color: "rgba(255,255,255,0.8)", align: "left" },
      { type: "text", position: [31.5, 78, 100, 8], value: alienLB.difficulty[nextAlien_Level], color: `rgba(${colorInformations}, 0.8)`, align: "center" },
      // Asteroid Number
      { type: "box", position: [0, 89, 1.5, 10], fill: `rgba(255, 255, 255, 0.4)` },
      { type: "box", position: [3, 89, 75, 10], fill: "rgba(155, 155, 155, 0.1)" },
      { type: "box", position: [79.5, 89, 19.5, 10], fill: "rgba(155, 155, 155, 0.2)" },
      { type: "text", position: [12.5, 90, 100, 8], value: `Moving Asteroids`, color: "rgba(255,255,255,0.8)", align: "left" },
      { type: "text", position: [39.5, 90, 100, 8], value: game.asteroids.length, color: "rgba(255,255,255,0.8)", align: "center" }
    ]
  };
  game.ships.forEach(shiper => {
    if (timing.hasOwnProperty(time+1)) alert(shiper, timing[time].txt1, timing[time].txt2, timing[time].color, 4000, { txt1: 75, txt2: 81 });
    shiper.setUIComponent(Scoreboard);
  });
}

function shipColor(ship) {
  const dmg = damagePerLevels[Math.floor(ship.type/100)];
  return (ship.shield <= 5) ? "55, 55, 55" : (ship.shield <= dmg.min) ? "255, 55, 55" : (ship.shield <= dmg.max) ? "255, 155, 55" : (ship.shield >= dmg.max) ? "55, 255, 55" : "255, 255, 255";
}

function prepareShip(ship, game,timed = 0) {
  game.custom.Hasjoined = true;
  knownPlayers = ship;
  ship.custom.kills = 0;
  ship.set({x: 0, y: 0, invincible: 1000});
  ship_instructor(ship, "Welcome to..\n", "Zoltar");
  ship_instructor(ship, "Alien Speedrun!\n", "Zoltar", timed += 3);
  ship_instructor(ship, "To win the game, you must kill all the aliens as quickly as possible without dying once..", "Zoltar", timed += 3);
  ship_instructor(ship, "There are 5 stages, from 0 to 4, each one is more difficult than the other", "Zoltar", timed += 9);
  ship_instructor(ship, "Complete them as quickly as possible and maybe become the new record holder!", "Zoltar", timed += 8);
  ship_instructor(ship, "\nGood luck Commander!", "Zoltar", timed += 8, 4);
  startingGame = true;
}

function expulsed() {
  game.ships.forEach(ship => {
    alert(ship, `More than 2 players detected`, `Please restart the mod in order to continue playing`, "rgba(255, 55, 55, 0.8)", 8000);
    ship.set({x: 0, y: 0, vx: 0, vy: 0, collider: false, type: 191, idle: true});
    setTimeout(() => {
      ship.gameover({
        "Create your own game" : ship.name.toString(),
        "Alien SpeedRun" : "Cannot hold more than",
        "1 player at once" : "-"
      });
    }, 5000);
  });
  game.modding.terminal.echo(`[[bg;tomato;]\n - Restart The Mod - \n]`);
}

function desactivate(ship) {
  alert(ship, `You failed!`, `Be better next time!`, "rgba(255, 55, 55, 0.8)");
  const info = (shipsInformations.hasOwnProperty(ship.type)) ? shipsInformations[ship.type] : shipsInformations.default;
  ship.set({x: 0, y: 0, vx: 0, vy: 0, collider: false, type: 191, idle: true});
  setTimeout(() => {
    const alien = aliensInfo[nextAlien_Code];
    ship.gameover({
      "You LOST!" : ship.name.toString(),
      "Killer" : alien.name.toString(),
      "Difficulty" : alien.difficulty[nextAlien_Level].toString(),
      "Stage" : `${stage.toString()}/4`,
      "Time Survived" : format_time(time-1).toString(),
      "Ship Used" : `${info.name}, Tier ${info.tier}`,
      "Aliens Killed" : ship.custom.kills.toString()
    });
    game.modding.terminal.echo(`[[bg;tomato;]\n  - Restart The Mod - \n]`);
  }, 4000);
}

function gameFinished(ship, timed = 0, tt = 0) {
  ship.custom.oldType = ship.type;
  startingGame = false;
  endGameTimer = time;
  ship.set({ x: 0, y: 0, vx: 0, vy: 0, collider: false, type: 191, idle: true });
  alert(ship, `Finished!`, `Well done Commander!`, "rgba(55,255,55,0.8)");
  setTimeout(() => { time = 30, startingGame = 2 }, tt += 2000);
  setTimeout(() => {
    ship_instructor(ship, "\n\n\n\n\n\n", "Zoltar", 1);
    ship_instructor(ship, `Well done! Commander`, "Zoltar", timed += 2);
    ship_instructor(ship, `You successfuly killed all of the aliens.`, "Zoltar", timed += 5);
    ship_instructor(ship, `It took you ${format_time(endGameTimer-1)} minutes to finish the game!`, "Zoltar", timed += 6);
    ship_instructor(ship, `you did a great performance.`, "Zoltar", timed += 7);
    ship_instructor(ship, `i wish you the best, and see you next time.`, "Zoltar", timed += 5);
    ship_instructor(ship, `\n\n\n\n\n\ncommunications\nover.`, "Zoltar", timed += 6, 4);
  }, tt += 2000);
}

function format_time(time) {
  if (time > 0) {
    minutes = Math.floor(time / 60);
    seconds = time % 60;
    if (time % 60 === 0) return `${(time / 60).toString()}:00`;
    if (seconds < 10) seconds = `0${seconds.toString()}`;
    if (minutes < 1) return seconds.toString();
    return `${minutes.toString()}:${seconds.toString()}`;
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
  const s = "            ";
  game.modding.terminal.echo(`
  [[bg;#ffdf00;]${s}       - Alien SpeedRun - ]
  [[ig;#00fff2;]\n${s}Version: ${mod_version}\n${s}All credits goes to Megalodon#0001]\n
  [[ig;#ff0000;]
  "ASP" IS A SOLO MODE!
  
  WHICH MEANS IT IS NOT MADE FOR MORE THAN 1 PLAYER TO JOIN.
  TRYING TO MAKE MORE THAN 1 PLAYER JOIN IS GONNA CAUSE THE MOD TO CRASH OR MALFUNCTION.]
  `);
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
