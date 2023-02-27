function pi() {
	return 3.14159265;
}

function sin(x) {
	x = x % 6.28;
	// -pi
	if (x < -3.14159265) {
		x += 6.28318531; // pi*2
	}
	// pi
	else if (x >  3.14159265) {
		x -= 6.28318531; // pi*2
	}

	if (x < 0) {
		// 4 / pi * x + 4 / (pi^2) * x^2
		return 1.27323954 * x + 0.405284735 * x * x;
	}
	// 4 / pi * x - 4 / (pi^2) * x^2
	return 1.27323954 * x - 0.405284735 * x * x;
}

function cos(x) {
	// sin(x + pi/2)
	return sin(x + 1.57079632);
}

function sqrt(x) {
	var a = 1, b = x;
	while (abs(a - b) > 5) {
		a = (a + b) / 2;
		b = x / a;
	}
	return a;
}

function abs(x) {
	return (x > 0) ? x : -x;
}
