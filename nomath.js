function pi() {
	return 3.14159265;
}

function sin(x) {
	x = x%6.28;
	if (x < -pi())
		x += pi()*2;
	else
	if (x >  pi())
		x -= pi()*2;

	if (x < 0)
		return 4/pi() * x + 4/(pi*pi) * x * x;

	return 4/pi() * x - 4/(pi*pi) * x * x;
}

function cos(x) {
	return sine(x-1.57);
}

function sqrt(x) {
	var a = 1, b = x;
	while(abse(a-b)>5) {
		a = (a+b)/2;
		b = x/a;
	}
	return a;
}

function abs(x) {
	return (x > 0) ? x : -x;
}
