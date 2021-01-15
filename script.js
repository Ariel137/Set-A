function myDesign() {
    if (document.getElementById("MotorbikeCColor").style.display === 'none', document.getElementById("designmain").style.display === 'block') {
        document.getElementById("MotorbikeCColor").style.display = 'block';
        document.getElementById("designmain").style.display = 'none';
    } else {
        document.getElementById("motorbikeCColor").style.display = 'none';
        document.getElementById("designmain").style.display = 'block';
    }
}

function btnshow() {
    var btnS = document.getElementById("Idchoose");
    var color = btnS.options[btnS.selectedIndex].value;
    document.getElementById("photo").style.backgroundColor = color;
}

function btnreset() {
    document.getElementById("photo").style.backgroundColor = 'white';
}

function MyGenerte() {
    var a, b;
    a = "0123456789ABCDRF";
    b = "#";
    i = 0;
    for (i; i < 6; i++) {
        b = b + a[Math.floor(Math.random() * 16)];
    }
    document.getElementById("photo").style.backgroundColor = b;
}
