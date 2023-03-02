// array containing all the two digit german TIN region codes
const regionCodes = [
	"01",
	"02",
	"03",
	"04",
	"05",
	"06",
	"07",
	"08",
	"09",
	"10",
	"11",
	"12",
	"13",
	"14",
	"15",
	"16",
	"17",
	"18",
	"19",
	"20",
	"21",
	"22",
	"23",
	"24",
	"25",
	"26",
	"27",
	"28",
	"29",
	"30",
	"31",
	"32",
	"33",
	"34",
	"35",
	"36",
	"37",
	"38",
	"39",
	"40",
	"41",
	"42",
	"43",
	"44",
	"45",
	"46",
	"47",
	"48",
	"49",
	"50",
	"51",
	"52",
	"53",
	"54",
	"55",
	"56",
	"57",
	"58",
	"59",
	"60",
	"61",
	"62",
	"63",
	"64",
	"65",
	"66",
	"67",
	"68",
	"69",
	"70",
	"71",
	"72",
	"73",
	"74",
	"75",
	"76",
	"77",
	"78",
	"79",
	"80",
	"81",
	"82",
	"83",
	"84",
	"85",
	"86",
	"87",
	"88",
	"89",
	"90",
	"91",
	"92",
	"93",
	"94",
	"95",
	"96",
	"97",
	"98",
	"99",
];

// array where all the codes generated will be stored
let germanFakeTINs = [];

// function that generates a random TIN number but always using a random region code to keep the format correct
function generateFakeTIN(a) {
	let fakeTIN = a[Math.floor(Math.random() * a.length)];
	while (fakeTIN.length < 11) {
		fakeTIN += Math.floor(Math.random() * 10);
	}
	return Number(fakeTIN);
}

// function used to generate multiple TINs and store them on the germanFakeTINs array
function generateMultiple(n, f, a) {
	for (let i = 0; i < n; i++) {
		germanFakeTINs.push(f(a));
	}
	return germanFakeTINs;
}

// example generating 100 german fake TINs
console.log(generateMultiple(100, generateFakeTIN, regionCodes));
