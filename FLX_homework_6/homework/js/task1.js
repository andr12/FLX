function print(real, imag)
{   if (Math.abs(imag)<1E-6)
        return real;
    else
        return '('+real+','+imag+')';
}

function solve()
{   A = document.quadratic.A.value;
    if (Math.abs(A)<1E-3)
    {   document.getElementById('output').innerHTML = 'Not a quadratic equation';
        return;
    }
    B = document.quadratic.B.value;
    C = document.quadratic.C.value;
    A = 2*A;
    D = B*B-2*A*C;
    if (Math.abs(D)<1E-3)
    {   document.getElementById('output').innerHTML = 'x = '+(-B/A);
        return;
    }
    if (D>0)
        document.getElementById('output').innerHTML = 'x1 = '+print((-B+Math.sqrt(D))/A, 0)+'<br />x2 = '+print((-B-Math.sqrt(D))/A, 0);
    else
        document.getElementById('output').innerHTML = 'x1 = '+print(-B/A,Math.sqrt(-D)/A)+'<br />x2 = '+print(-B/A,-Math.sqrt(-D)/A);
}
console.log('dsds');
