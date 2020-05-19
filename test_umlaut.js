const regex = /[äüöß]/;
const lines = [
	`This is a line.`,
	`This is a schön line.`,
	`This is another line.`,
	`This is a Straße.`,
	`This is a line.`,
];
for (const line of lines) {
	if (regex.test(line)) {
		console.log(line);
	}
}