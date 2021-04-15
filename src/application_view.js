//ANSI codes for colored outputs
export const ANSI_FG = {
	BLACK:	"\u001B[30m",
	RED:	"\u001B[31m",
	GREEN:	"\u001B[32m",
	YELLOW:	"\u001B[33m",
	BLUE:	"\u001B[34m",
	PURPLE:	"\u001B[35m",
	CYAN:	"\u001B[36m",
	WHITE:	"\u001B[37m",
	BRIGHT_BLACK:	"\u001B[90m",
	BRIGHT_RED:		"\u001B[91m",
	BRIGHT_GREEN:	"\u001B[92m",
	BRIGHT_YELLOW:	"\u001B[93m",
	BRIGHT_BLUE:	"\u001B[94m",
	BRIGHT_PURPLE:	"\u001B[95m",
	BRIGHT_CYAN:	"\u001B[96m",
	BRIGHT_WHITE:	"\u001B[97m"
}
export const ANSI_BG = {
	BLACK:	"\u001B[40m",
	RED:	"\u001B[41m",
	GREEN:	"\u001B[42m",
	YELLOW:	"\u001B[43m",
	BLUE:	"\u001B[44m",
	PURPLE:	"\u001B[45m",
	CYAN:	"\u001B[46m",
	WHITE:	"\u001B[47m",
	BRIGHT_BLACK:	"\u001B[100m",
	BRIGHT_RED:		"\u001B[101m",
	BRIGHT_GREEN:	"\u001B[102m",
	BRIGHT_YELLOW:	"\u001B[103m",
	BRIGHT_BLUE:	"\u001B[104m",
	BRIGHT_PURPLE:	"\u001B[105m",
	BRIGHT_CYAN:	"\u001B[106m",
	BRIGHT_WHITE:	"\u001B[107m"
}
const ANSI_RESET = "\u001B[0m";


//Page Strings for easier access.
const ATM_PAGES = {
	WELCOME_PAGE: {
		name: "welcome",
		text: ANSI_FG.BLUE + "+---------------------------+\n"
			+ "| DOLLARSBANK Welcomes You! |\n"
			+ "+---------------------------+\n" + ANSI_RESET
			+ ANSI_FG.BLACK + "1. Create New Account\n"
			+ "2. Login\n"
			+ "3. Exit\n" + ANSI_RESET
			+ ANSI_FG.GREEN + "Enter Choice (1, 2, or 3):\n" + ANSI_RESET
	}
}


export default function consoleLog(ansiCode, message) {
	console.log(ansiCode + message + ANSI_RESET);
}

export function printPage(pageName) {
	switch(pageName) {
		case ATM_PAGES.WELCOME_PAGE.name:
			console.log(ATM_PAGES.WELCOME_PAGE.text);
	}
}