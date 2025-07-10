elements.titanium = {
    desc: "Another metal that does not erode nor conduct electricity",
	conduct: 0,
	color: ["#a1ada5","#ebf5ee","#bac2bc","#848a86","#505251"],
	tempHigh:3000,
    stateHigh: "molten_titanium",
    category: "solids",
    state: "soild",
	 hardness: 1,
    density: 792,
	behavior: behaviors.WALL,
};

elements.molten_titanium = {
    desc: "Melted version of titanium",
    temp : 3000,
	conduct: 0,
	color: ["#d16e04","#FFCC99","#FF6600","#FF7F50","#DC143C","#800020"],
	tempLow:2999,
    stateLow: "titanium",
    category: "states",
    state: "soild",
    density: 792,
	behavior: behaviors.MOLTEN,
};
textures.Reniforced_Titanuim = {
    REINFORCEDTITANIUM: [
        "GiGgggGiGGg",
        "gggGGGGgggg",
        "iiiiiiiiiii",
        "GgGGggggGGg",
        "GggGGgggGGg",
        "igGGGgggggi",
        "GggggggGGGG",
        "GggGGgggggg",
        "Ggggggggggg",
        "ggggggGGggg",
        "Ggggggggggg",
        "iiiiiiiiiii",],
  
   
};                                                                                                                

elements.Reniforced_Titanuim = {
    color: "#787878",
    colorPattern: textures.Reniforced_Titanuim.REINFORCEDTITANIUM,
    colorKey: {
        "g": "#787878",
        "G": "#606060",
        "i": "#332f2f"},
    behavior: behaviors.WALL,
    
    tempHigh: 1000000000,
    stateHigh : "molten_titanium",
    category: "solids",
    state: "solid",
    density: 5000,
    hardness:1,
    noMix: true
};
