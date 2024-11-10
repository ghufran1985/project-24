function myFunction() {
    document.getElementById("R").innerHTML = "this is a message " + document.getElementById("A").firstChild.nodeValue;
    document.getElementById("R1").innerHTML = "this is the next mesage" + document.getElementById("A").childNodes[0].nodeValue;
}
