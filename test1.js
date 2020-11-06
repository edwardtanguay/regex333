
const texts = [
	"This is a text with a Lot",
	"skfjsfskdj sfksjlitfksdjf"
];

for(const text of texts) {
	//const exp1 = RegExp('lot');
	const exp1 = /l[io]t/i;

	console.log(exp1.test(text));
}
