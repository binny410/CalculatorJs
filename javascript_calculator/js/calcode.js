
var elMsg = document.getElementById('out');

//Keys

function key1()
{
    document.getElementById('result').value+='1';
}

function key2()
{
    document.getElementById('result').value+='2';
}

function key3()
{
    document.getElementById('result').value+='3';
}

function key4()
{
    document.getElementById('result').value+='4';
}

function key5()
{
    document.getElementById('result').value+='5';
}

function key6()
{
    document.getElementById('result').value+='6';
}

function key7()
{
    document.getElementById('result').value+='7';
}

function key8()
{
    document.getElementById('result').value+='8';
}

function key9()
{
    document.getElementById('result').value+='9';
}

function key0()
{
    document.getElementById('result').value+='0';
}

function keydot()
{
    document.getElementById('result').value+='.';
}

function clear()
{
    document.getElementById('result').value='';
    elMsg.textContent= '';
    
}

function plus()
{
    document.getElementById('result').value+='+';
}

function minus()
{
    document.getElementById('result').value+='-';
}

function mult()
{
    document.getElementById('result').value+='*';
}

function divide()
{
    document.getElementById('result').value+='/';
}

function remainder()
{
     document.getElementById('result').value+='%';
}

//evaluating expression using eval() function

function evalExpr()
{
   var result = document.getElementById('result').value;
   var answer = eval(result);
   elMsg.textContent = answer;
}

function sine()
{
    var result = document.getElementById('result').value;
    var answer = Math.sin(result);
    elMsg.textContent = answer;
}

function cos()
{
    var result = document.getElementById('result').value;
    var answer = Math.cos(result);
    elMsg.textContent = answer;
}

function tan()
{
    var result = document.getElementById('result').value;
    var answer = Math.tan(result);
    elMsg.textContent = answer;
}

function sqroot()
{
    var result = document.getElementById('result').value;
    var answer = Math.sqrt(result);
    elMsg.textContent = answer;
}

function log()
{
    var result = document.getElementById('result').value;
    var answer = Math.log(result);
    elMsg.textContent = answer;
}

function exponent()
{
    var ex = document.getElementById('result').value;
    var answer = Math.exp(ex);
    elMsg.textContent = answer;
}

function leftBracket()
{
    document.getElementById('result').value+='(';
}

function rightBracket()
{
    document.getElementById('result').value+=')';
}

function pi()
{
    var x = document.getElementById('result').value;
    var answer;
    
    if (x)
        { 
            answer = Math.PI * x;
        }
    else
        {
            answer = Math.PI;
        }
    
    elMsg.textContent = answer;
}

function bckspc()
{
    result = document.cal.abc.value;
    document.cal.abc.value = result.substr(0, result.length-1);
    
    
}


// adding functionality

var equals = document.getElementById('equals');
equals.addEventListener('click',evalExpr,false);

var key_sin = document.getElementById('key_sin');
key_sin.addEventListener('click',sine,false);

var key_cos = document.getElementById('key_cos');
key_cos.addEventListener('click',cos,false);

var key_tan = document.getElementById('key_tan');
key_tan.addEventListener('click',tan,false);

var key_sqrt = document.getElementById('key_sqrt');
key_sqrt.addEventListener('click',sqroot,false);

var key_log = document.getElementById('key_log');
key_log.addEventListener('click',log,false);

var key_pi = document.getElementById('key_pi');
key_pi.addEventListener('click',pi,false);

var key_exp = document.getElementById('key_exp');
key_exp.addEventListener('click', exponent, false);

var one = document.getElementById('one');
one.addEventListener('click', key1, false);

var two = document.getElementById('two');
two.addEventListener('click', key2, false);

var three = document.getElementById('three');
three.addEventListener('click', key3, false);

var four = document.getElementById('four');
four.addEventListener('click', key4, false);

var five = document.getElementById('five');
five.addEventListener('click', key5, false);

var six = document.getElementById('six');
six.addEventListener('click', key6, false);

var seven = document.getElementById('seven');
seven.addEventListener('click', key7, false);

var eight = document.getElementById('eight');
eight.addEventListener('click', key8, false);

var nine = document.getElementById('nine');
nine.addEventListener('click', key9, false);

var zero = document.getElementById('zero');
zero.addEventListener('click', key0, false);

var key_dot = document.getElementById('key_dot');
key_dot.addEventListener('click', keydot, false);

var pluss = document.getElementById('pluss');
pluss.addEventListener('click', plus, false);

var minuss = document.getElementById('minuss');
minuss.addEventListener('click',minus,false);

var multi = document.getElementById('multi');
multi.addEventListener('click',mult,false);

var dividee = document.getElementById('dividee');
dividee.addEventListener('click',divide,false);

var leftBrackett = document.getElementById('leftBrackett');
leftBrackett.addEventListener('click', leftBracket, false);

var rightBrackett = document.getElementById('rightBrackett');
rightBrackett.addEventListener('click', rightBracket, false);

var clearr = document.getElementById('clearr');
clearr.addEventListener('click', clear, false);

var key_remain = document.getElementById('key_remain');
key_remain.addEventListener('click', remainder, false);

var back = document.getElementById('back');
back.addEventListener('click', bckspc, false);


