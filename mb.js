function mb(x, y)
{
	x = (x * 128 | 0) / 128;
	y = (y * 128 | 0) / 128;
	let a = 0;
	let b = 0;
	for (let c = 0; c < 16; c++) {
		const na = a * a - b * b + x;
		b = 2 * a * b + y;
		a = na;
		if (a * a + b * b >= 4)
			return c;
		a = (a * 128 | 0) / 128;
		b = (b * 128 | 0) / 128;
	}
	return 0;
}

const palette = [
	"#c77c23",
	"#981947",
	"#931279",
	"#8111ac",
	"#6419cf",
	"#213bcd",
	"#0550a9",
	"#006374"
];

let zoom = 40;

function draw()
{
	const context = document.getElementById("canvas").getContext("2d");
	for (let y = 0; y < 48; y++) {
		for (let x = 0; x < 80; x++) {
			context.fillStyle = palette[mb((x - 40) / zoom - 1, (y - 24) / zoom - 0.4) & 7];
			context.fillRect(x * 20, y * 20, 20, 20);
		}
	}
	zoom++;
}

function main()
{
	setInterval(draw, 100);
}
