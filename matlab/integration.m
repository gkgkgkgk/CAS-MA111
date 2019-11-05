syms f(x)
f(x) = (2*x^4) - (17*x^3) + (46*x^2) - (43*x) + 12;
df = diff(f, x);
eq = df == 0;
solution = solve(eq, x);
disp(solution)

incr = solve(df > 0, x);

disp(incr)