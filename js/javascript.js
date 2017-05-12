/**
 * Created by acmenukas on 2017-05-11.
 */


var x = true;
var y = true;

function toggle() {
    if (x) {
        document.getElementById('myImage').src = 'img/pic_bulbon.gif';
        document.getElementById('mybg').style.backgroundColor="#fff";

        x = !x;
    } else {
        document.getElementById('myImage').src = 'img/pic_bulboff.gif';
        document.getElementById('mybg').style.backgroundColor="#000"
        x = !x;
    }
}

function toggleShow() {
    if (y) {
        document.getElementById('myImage').style.display = 'block';
        y = !y;
    } else {
        document.getElementById('myImage').style.display = 'none';
        y = !y;
    }
}