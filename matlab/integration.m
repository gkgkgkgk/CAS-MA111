syms f(x)
f(x) = ((2*x^4) - (17*x^3) + (46*x^2) - (43*x) + 12);
eq = f(x) == 0;
solution = solve(eq, x);
disp(solution)

disp(solve(f(x) > 0));