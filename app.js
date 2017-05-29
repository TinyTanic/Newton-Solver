const f = x => Math.pow(x, 8) + Math.pow(x, 2) - 1;

const f1 = x => 8 * Math.pow(x, 7) + 2 * x;

const f2 = x => 56 * Math.pow(x, 6) + 2;

let a = 0, b = 3459834753;

let x0 = f(a) * f2(a) > 0 ? a : b;

const newton = (f, f1, f2, a, b, x0, xp) => {
  if (xp - x0 < 0.01) return x0;
  console.log(x0);
  return newton(f, f1, f2, a, b, x0 - f(x0) / f1(x0), x0);
};

let res = newton(f, f1, f2, a, b, x0);
console.log(res);
