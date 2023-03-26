/** I prefer to have a different side image depending on the mode/theme, hence why i couldnt use
 *  just pure css to manage theme colors/properties. **/


let bodyEl = document.body;
let imageEl = document.getElementById("ac");
let modeButton = document.getElementById("mode");
let timeEl = document.getElementById("time")
let imgContainer = document.getElementById("imgCont")
let links = document.getElementsByTagName("a");
let modeContainer = document.getElementById("modeButton");
let rightContIcon = document.getElementById("iconImg");

let bgCol = "#1e1e2e";
let fgCol = "#b4bef3";
let fontSize = "18px";

let searchCol = "rgba(137, 180, 250, 0.7)";
let searchEngCol = "rgba(243, 139, 168, 0.7)";
let promptCol = "rgba(203, 166, 247, 0.7)";
let atSymbCol = "rgba(203, 166, 247, 0.7)";
let cursorCol = "#a6e3a1";
let listItemCol = "rgba(201, 203, 255, 0.5)";
// --liHover: rgba(201, 203, 255, 0.8);
// --time: #c9cbff;
let timeBorder = "0px";
let timeShadow = "none";
let timeBg = "transparent";

let imgBorder = "3px solid rgba(49, 50, 68, 0.2)";
let imgBorderRadius = "5px";
let imgShadow = "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.2) 0px 6px 6px";
let imgSize = "350";
let imgSrc = "ico/retg";

let modeFilt = "invert(100%) sepia(18%) saturate(3654%) hue-rotate(177deg) brightness(100%) contrast(84%)";
let modeSrc = "ico/light.png";
let iconImg = "ico/nord_luffy.png";
let iconHeight = "50";


function setSearchColors() {
	// have to fetch the element *after* the prompt is written--not on page load
	document.getElementById("setter").style.color = fgCol;
	document.getElementById("prePrompt").style.color = searchCol;
	document.getElementById("atSymb").style.color = atSymbCol;
	document.getElementById("searchType").style.color = searchEngCol;
	document.getElementById("promptSymb").style.color = promptCol;
}



function setMode() {
	modeButton.src = modeSrc;
	bodyEl.style.background = bgCol;
	bodyEl.style.color = fgCol;

	// input element is not picked up because we're setting the theme before writing the prompt

	setSearchColors();


	imgContainer.style.border = imgBorder;
	imgContainer.style.borderRadius = imgBorderRadius;
	imgContainer.style.boxShadow = imgShadow;
	imageEl.src = imgSrc;


	for (var i = 0; i < links.length; i++) {
		links[i].style.color = listItemCol;
	}


	imageEl.height = imgSize;

	//
	timeEl.style.borderRadius = timeBorder;
	timeEl.style.background = timeBg;
	timeEl.style.boxShadow = timeShadow;

	modeButton.style.filter = modeFilt;
	modeContainer.style.backgroundColor = bgCol;

	if (rightContIcon) {
		rightContIcon.src = iconImg;
		rightContIcon.height = iconHeight;
	}
}

/* new */

function lightNord() {

	/** Base **/
	bgCol = "#e5e9f0";
	fgCol = "rgba(59, 66, 82, 1)";
	fontSize = "18px";
	mode = "light";

	/** Input/Search **/
	searchCol = "rgba(137, 180, 250, 0.7)";
	searchEngCol = "rgba(243, 139, 168, 0.7)";
	promptCol = "rgba(203, 166, 247, 0.7)";
	atSymbCol = "rgba(203, 166, 247, 0.7)";
	cursorCol = "#a6e3a1";

	/** "Bookmark" links **/
	listItemCol = "rgba(59, 66, 82, 0.9)";

	/** Time **/
	timeBorder = "4px";
	timeShadow = "3px 3px 11px #d5d9df,-3px -3px 11px #f5f9ff";
	timeBg = "transparent";


	/** Image container **/
	imgBorder = "0px solid #d5d9df"; // ISSUE
	imgBorderRadius = "0px";
	imgShadow = "none";
	imgSize = "280";
	imgSrc = "ico/ac.png";

	/** Mode icon/container **/
	modeSrc = "ico/moon.png";
	modeFilt = "invert(20%) sepia(21%) saturate(481%) hue-rotate(181deg) brightness(89%) contrast(94%)";
	setMode();


	/** Right container image **/
	iconImg = "ico/nord_luffy.png";
	iconHeight = "50";

}


function darkAquarium() {

	/** Base **/
	bgCol = "#20202a";
	fgCol = "#b8dceb";
	fontSize = "18px";
	mode = "dark";

	/** Input/Search **/
	searchCol = "#313449";
	searchEngCol = "#6a8cbc";
	promptCol = "#8787bf";
	atSymbCol = "#8787bf";
	cursorCol = "#a6e3a1";

	/** "Bookmark" links **/
	listItemCol = "#63718b";

	/** Time **/
	timeBorder = "6px";
	timeShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
	timeBg = "rgba(44, 46, 62, 0.2)";

	/** Image container **/
	imgBorder = "2px solid rgba(222, 149, 111, 0.0)";
	imgBorderRadius = "6px";

	// imgShadow = "rgba(0, 0, 0, 0.19) 1px 2px 2px, rgba(0, 0, 0, 0.2) 1px 3px 3px";
	imgShadow = "rgba(0, 0, 20, 0.25) 0px 2px 5px , rgba(0, 0, 0, 0.3) 0px 1px 3px ";
	imgSize = "320";
	imgSrc = "ico/retg.png";

	/** Mode icon/container **/
	modeSrc = "ico/light.png";
	modeFilt = "invert(100%) sepia(18%) saturate(3654%) hue-rotate(177deg) brightness(100%) contrast(84%)";
	setMode();


	/** Right container image **/
	iconImg = "ico/nord_luffy.png";
	iconHeight = "50";

}


function darkCatppuccin() {

	/** Base **/
	bgCol = "#1e1e2e";
	fgCol = "#b4bef3";
	fontSize = "18px";
	mode = "dark";

	/** Input/Search **/
	searchCol = "rgba(137, 180, 250, 0.9)";
	searchEngCol = "rgba(245, 194, 231, 0.8)";
	promptCol = "rgba(203, 166, 247, 0.9)";
	atSymbCol = "rgba(203, 166, 247, 0.8)";
	cursorCol = "#a6e3a1";

	/** "Bookmark" links **/
	listItemCol = "rgba(201, 203, 255, 0.3)";

	/** Time **/
	timeBorder = "0px";
	timeShadow = "none";

	/** Image container **/
	imgBorder = "3px solid rgba(49, 50, 68, 0.2)";
	imgBorderRadius = "5px";
	imgShadow = "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.2) 0px 6px 6px";
	imgSize = "350";
	imgSrc = "ico/retg.png";

	/** Mode icon/container **/
	modeSrc = "ico/light.png";
	modeFilt = "invert(100%) sepia(18%) saturate(3654%) hue-rotate(177deg) brightness(100%) contrast(84%)";
	setMode();

	/** Right container image **/
	iconImg = "ico/nord_luffy.png";
	iconHeight = "50";
}

function setDefaultDarkMode() {
	darkAquarium();
}

function setDefaultLightMode() {
	lightNord();
}




/*
 * Get time
 */
function formatAMPM(date) {
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var ampm = hours >= 12 ? 'pm' : 'am';
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	minutes = minutes < 10 ? '0' + minutes : minutes;
	var strTime = hours + ':' + minutes + ' ' + ampm;
	return strTime;
}


setInterval(function() {
	document.getElementById("time").innerHTML = formatAMPM(new Date);
}, 1000);


/*
 * Output current time to screen
 */
function displayTime(time) {
	document.getElementById("time").innerHTML = time;
}


function joinWriter(command) {
	return (input) => {
		command(input);
	};
}

function focusPrompt() {
	const input = document.getElementById("setter");
	input.focus();
	input.setSelectionRange(input.value.length, input.value.length);
}


function getSearch() {
	const savedEngine = readEngine();
	let tmpStr = "";
	if (savedEngine) {
		let tmpUrl = savedEngine;
		if (tmpUrl === ENGINES.google[0]) {
			tmpStr = ENGINES.google[1];
		} else if (tmpUrl === ENGINES.yandex[0]) {
			tmpStr = ENGINES.yandex[1];
		} else {
			if (tmpUrl === ENGINES.ddg[0]) {
				tmpStr = ENGINES.ddg[1];
			}
		}
	} else {
		if (searchUrl === ENGINES.google[0]) {
			tmpStr = ENGINES.google[1];
		} else if (searchUrl === ENGINES.yandex[0]) {
			tmpStr = ENGINES.yandex[1];
		} else {
			if (searchUrl === ENGINES.ddg[0]) {
				tmpStr = ENGINES.ddg[1];
			} else {
				tmpStr = ENGINES.google[1];
			}
		}
	}
	return tmpStr;
}

// Write out functions
// THIS IS SLOW -- DONT KEEP TRACK OF CHILDS; CLEAR INPUT IMMEDIATELY
function writePrompt() {
  prePrompt = `search`;
  let searchType = `${searchStr}`;
  const terminal = document.getElementById("terminal-content");
  const termSearch = document.getElementById("terminalSearch");
  const prompt = document.createElement("div");
  prompt.classList.add("prompt");
  getSearch();
  prompt.innerHTML = `
    <div class='prompt-title'><span class="prePrompt" id="prePrompt">${prePrompt}</span><span class="atSymb" id="atSymb">@</span><span class="promptSearch" id="searchType">${searchType}</span>${position.length ? "/" : ""}${position.join(
      "/"
    )}<span class='prompt-cursor' id="promptSymb">${promptSymbol}</span></div>
    `;
  console.log(termSearch);
  termSearch.innerHTML = `
    <input type="text" spellcheck="false" id="setter" autocomplete="off">
    <div id="getter">
      <span id="writer"></span><b class="cursor" id="cursor">B</b>
    </div>
  `;
  terminal.appendChild(prompt);

  // Add event listeners to the input element
  const inputElement = document.getElementById("setter");
  inputElement.addEventListener("keydown", function(event) {
    writeit(this, event);
    moveIt(this.value.length, event);
  });
  inputElement.addEventListener("keyup", function(event) {
    writeit(this, event);
  });
  inputElement.addEventListener("keypress", function(event) {
    writeit(this, event);
  });
}



function parseCommand(input) {
	let parsedCmd = [];
	let temp;
	if (input.startsWith(":")) {
		parsedCmd = input.slice(0, 1).split("").concat(input.slice(1).split(" "));
	} else {
		parsedCmd.push(input);
	}
	return parsedCmd;
}

function readTheme() {
	return localStorage.getItem(LS_THEME_KEY);
}

function writeTheme(theme) {
	localStorage.setItem(LS_THEME_KEY, theme);
}

function readEngine() {
	return localStorage.getItem(LS_ENGINE_KEY);
}

function writeEngine(url) {
	localStorage.setItem(LS_ENGINE_KEY, url);
}

// Local Storage Key Values
const LS_KEY = "cli-page-links";
const LS_THEME_KEY = "cli-page-theme";
const LS_ENGINE_KEY = "cli-page-engine";

// Defined Engines
const ENGINES = {
	google: ["https://google.com/search?q=", "google"],
	ddg: ["https://duckduckgo.com/?q=", "ddg"],
	yandex: ["https://yandex.com/search/?text=", "yandex"]
};

// Defined Themes
const THEMES = [
	"dark",
	"light",
	"nord",
	"catp",
];

function clear() {
	const terminal = document.getElementById("terminal-content");
	while (terminal.firstChild) {
		terminal.removeChild(terminal.lastChild);
	}
	writePrompt();
	focusPrompt();
	theme(readTheme());
}



function toggleMode() {
	let but = document.getElementById("modeButton");
	but.addEventListener('click', function() {
		if (mode == "dark") {
			setDefaultLightMode();
			writeTheme("light");

		} else {
			if (mode == "light") {
				// setMode();
				setDefaultDarkMode();
				writeTheme("dark");
			}
		}
	})
}

function theme(input) {
	if (input.length) {
		if (input == "dark") {
			setDefaultDarkMode();
			writeTheme("dark");
		} else if (input == "light") {
			setDefaultLightMode();
			writeTheme("light");
		} else if (input == "catp") {
			darkCatppuccin();
			writeTheme("catp");
		} else if (input == "aqua") {
			darkAquarium();
			writeTheme("aqua");
		} else {
			setDefaultDarkMode();
			writeTheme("dark");
		}
	} else {
	  		setDefaultDarkMode();
			writeTheme("dark");
	}
	return;
}


function search(input) {
	let currentSearchUrl = searchUrl;
	if (input !== "") {
		const searchString = input;

		window.location.replace(currentSearchUrl + searchString);

		return;
	}
	return;
}

function changeEngine(searchEng) {
	let currentSearchUrl = searchEng;
	if (searchEng) {
		currentSearchUrl = ENGINES[searchEng][0] ? ENGINES[searchEng][0] : ENGINES.google[0];
		searchUrl = currentSearchUrl;
		writeEngine(currentSearchUrl);
	}
	searchStr = searchEng;

	clear();
	return;
}


// Defined Commands
const COMMANDS = {
	theme: {
		func: joinWriter(theme),
	},


	search: {
		func: joinWriter(search),
	},

	searchEng: {
		func: joinWriter(changeEngine),
	},

};



function init() {
	cursor = $("cursor");
	cursor.style.left = "0px";
}

/* Global declarations */
let searchUrl = ENGINES.yandex[0]; /* default search engine -- CHANGE this value */
let promptSymbol = "$" // Update to change prompt
let searchStr = getSearch();
let prePrompt = `search@${searchStr}`;
let position = []; 
let cursor;

function focusContainer(){
    const contFocus = document.getElementById("contFocus");
    contFocus.addEventListener("click", focusPrompt);
}

function focusSetter(){
    document.getElementById('terminalSearch').addEventListener('click', function() {
    document.getElementById('setter').focus();
});
}

(() => {
	// Set Engine
	const savedEngine = readEngine();
	if (savedEngine) {
		searchUrl = savedEngine;
	}

	getSearch();


	// write initial prompt
	writePrompt();

	// Set theme
	const currentTheme = readTheme();
	theme([currentTheme]);

	toggleMode();
	init();

	// Setup event listener for commands
	document.addEventListener("keydown", handleKeyPresses);

	focusPrompt();
	focusContainer();
	focusSetter();
})();

function handleKeyPresses(e) {
	switch (e.key) {
		case "Enter":
			e.preventDefault();
			const input = document.getElementById("setter");
			return runCommand(input.value);
		default:
			break;
	}
}


function runCommand(cmd) {

	const parsedCmd = parseCommand(cmd);
	let response;

	if (parsedCmd.length >= 1) {
		if (parsedCmd.length > 1 && parsedCmd[0] === ":") {
			if (parsedCmd[1] == "search") {
				response = COMMANDS.searchEng.func(
					parsedCmd[2]
				);
			} else if (parsedCmd[1] == "theme") {
				response = COMMANDS.theme.func(
					parsedCmd[2]
				);
			} else {
				response = COMMANDS[parsedCmd[1]].func(
					parsedCmd.slice(2, parsedCmd.length)
				);
			}
		} else {
			response = COMMANDS.search.func(parsedCmd[0]) // put this whole string into the search
		}
	}

	// TODO: make it so that this function replaces *in-place
	clear();
}



function $(elid) {
	return document.getElementById(elid);
}

function nl2br(txt) {
	return txt.replace(/\n/g, "<br />");
}

function writeit(from, e) {
	e = e || window.event;
	var w = $("writer");
	var tw = from.value;
	w.innerHTML = nl2br(tw);
}

function moveIt(count, e) {
	e = e || window.event;
	var keycode = e.keyCode || e.which;

	if (keycode == 37 && parseInt(cursor.style.left) >= (0 - ((count - 1) * 10))) {
		cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
	} else if (keycode == 39 && (parseInt(cursor.style.left) + 10) <= 0) {
		cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
	}
}

