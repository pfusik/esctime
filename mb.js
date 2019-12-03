function sqr(x)
{
	return x * x >> 8;
}

function mb(x, y)
{
//	if (y < 0) y = -y;
	let A = x;
	let B = y;
	for (let c = 0; c < 16; c++) {
//console.log("a=", A, " b=", B);
		let S = (A ^ B) < 0 ? -1 : 1;
		A = Math.abs(A);
		B = Math.abs(B);
		if (sqr(A) + sqr(B) >= 256)
			return c;
		const nB = S * (sqr(A + B) - sqr(A - B)) + y;
		A = 2 * (sqr(A) - sqr(B)) + x;
		B = nB;
	}
	return 0;
}

const altirrapal = [
"#000000", "#111111", "#222222", "#333333", "#444444", "#555555", "#666666", "#777777", "#888888", "#999999", "#aaaaaa", "#bbbbbb", "#cccccc", "#dddddd", "#eeeeee", "#ffffff", 
"#3f0000", "#500500", "#611600", "#722700", "#833800", "#944900", "#a55a01", "#b66b12", "#c77c23", "#d88d34", "#e99e45", "#faaf56", "#ffc067", "#ffd178", "#ffe289", "#fff39a", 
"#500000", "#610000", "#720300", "#831403", "#942514", "#a53625", "#b64736", "#c75847", "#d86958", "#e97a69", "#fa8b7a", "#ff9c8b", "#ffad9c", "#ffbead", "#ffcfbe", "#ffe0cf", 
"#540003", "#650014", "#760025", "#870836", "#981947", "#a92a58", "#ba3b69", "#cb4c7a", "#dc5d8b", "#ed6e9c", "#fe7fad", "#ff90be", "#ffa1cf", "#ffb2e0", "#ffc3f1", "#ffd4ff", 
"#4f0035", "#600046", "#710057", "#820168", "#931279", "#a4238a", "#b5349b", "#c645ac", "#d756bd", "#e867ce", "#f978df", "#ff89f0", "#ff9aff", "#ffabff", "#ffbcff", "#ffcdff", 
"#3d0068", "#4e0079", "#5f008a", "#70009b", "#8111ac", "#9222bd", "#a333ce", "#b444df", "#c555f0", "#d666ff", "#e777ff", "#f888ff", "#ff99ff", "#ffaaff", "#ffbbff", "#ffccff", 
"#20008b", "#31009c", "#4200ad", "#5308be", "#6419cf", "#752ae0", "#863bf1", "#974cff", "#a85dff", "#b96eff", "#ca7fff", "#db90ff", "#eca1ff", "#fdb2ff", "#ffc3ff", "#ffd4ff", 
"#000089", "#00089a", "#0019ab", "#102abc", "#213bcd", "#324cde", "#435def", "#546eff", "#657fff", "#7690ff", "#87a1ff", "#98b2ff", "#a9c3ff", "#bad4ff", "#cbe5ff", "#dcf6ff", 
"#000c65", "#001d76", "#002e87", "#003f98", "#0550a9", "#1661ba", "#2772cb", "#3883dc", "#4994ed", "#5aa5fe", "#6bb6ff", "#7cc7ff", "#8dd8ff", "#9ee9ff", "#affaff", "#c0ffff", 
"#001f30", "#003041", "#004152", "#005263", "#006374", "#057485", "#168596", "#2796a7", "#38a7b8", "#49b8c9", "#5ac9da", "#6bdaeb", "#7cebfc", "#8dfcff", "#9effff", "#afffff", 
"#002b00", "#003c0e", "#004d1f", "#005e30", "#006f41", "#018052", "#129163", "#23a274", "#34b385", "#45c496", "#56d5a7", "#67e6b8", "#78f7c9", "#89ffda", "#9affeb", "#abfffc", 
"#003300", "#004400", "#005500", "#006600", "#077700", "#188800", "#299900", "#3aaa0f", "#4bbb20", "#5ccc31", "#6ddd42", "#7eee53", "#8fff64", "#a0ff75", "#b1ff86", "#c2ff97", 
"#002b00", "#003c00", "#024d00", "#135e00", "#246f00", "#358000", "#469100", "#57a200", "#68b300", "#79c40e", "#8ad51f", "#9be630", "#acf741", "#bdff52", "#ceff63", "#dfff74", 
"#011c00", "#122d00", "#233e00", "#344f00", "#456000", "#567100", "#678200", "#789300", "#89a400", "#9ab503", "#abc614", "#bcd725", "#cde836", "#def947", "#efff58", "#ffff69", 
"#230900", "#341a00", "#452b00", "#563c00", "#674d00", "#785e00", "#896f00", "#9a8000", "#ab9100", "#bca210", "#cdb321", "#dec432", "#efd543", "#ffe654", "#fff765", "#ffff76", 
"#3f0000", "#500500", "#611600", "#722700", "#833800", "#944900", "#a55a01", "#b66b12", "#c77c23", "#d88d34", "#e99e45", "#faaf56", "#ffc067", "#ffd178", "#ffe289", "#fff39a"
];

const palette = [
	altirrapal[0x94],
	altirrapal[0x72],
	altirrapal[0x54],
	altirrapal[0x36],
	altirrapal[0x18],
	altirrapal[0x26],
	altirrapal[0x44],
	altirrapal[0x66]
];

let dx = 4;

function draw()
{
//	const cx = document.getElementById("xSlider").value | 0;
//	const cy = document.getElementById("ySlider").value | 0;
//	const dx = document.getElementById("zSlider").value | 0;
	const cx = 256; // 0;
	const cy = 0; // 139;
	const context = document.getElementById("canvas").getContext("2d");
	for (let y = 0; y < 48; y++) {
		for (let x = 0; x < 80; x++) {
			context.fillStyle = palette[mb((x - 64) * dx + cx, (y - 32) * dx + cy) & 7];
			context.fillRect(x * 20, y * 20, 20, 20);
		}
	}
//	dx -= 5 / 256;
}

function main()
{
//	setInterval(draw, 100);
//	mb(4, -128);
}
