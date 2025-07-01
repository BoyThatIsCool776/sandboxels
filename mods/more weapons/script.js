elements.laser_gun = {
    color: "#ff0000",
    tool: true,
    category: "weapons",
    behavior: [
        "XX|CR:laser|XX",
        "CR:laser|XX|CR:laser",
        "XX|CR:laser|XX"
    ],
    desc: "Fires laser beams!",
    cooldown: 1
};

elements.laser = {
    color: "#00ffff",
    behavior: behaviors.BURN,
    category: "weapons",
    state: "gas",
    density: 1,
    temp: 1000,
    tempHigh: 2000,
    stateHigh: "plasma",
    reactions: {}
};
