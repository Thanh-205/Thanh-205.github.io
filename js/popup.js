status = 'Mr.Linhkool';
var a = new Array(),
    n = '';
a[1] = 'Đ';
a[2] = 'ú';
a[3] = 'n';
a[4] = 'g';
a[5] = ' ';
a[6] = 'v';
a[7] = 'ậ';
a[8] = 'y';
a[9] = '!';
a[10] = ' ';
a[11] = 't';
a[12] = 'u';
a[13] = 'i';
a[14] = ' ';
a[15] = 'h';
a[16] = 'ơ';
a[17] = 'i';
a[18] = ' ';
a[19] = 'n';
a[20] = 'g';
a[21] = 'á';
a[22] = 'o';
a[23] = ' ';
a[24] = ' ';
a[25] = ' ';
a[26] = ' ';

function one() {
    t = document.f.txt.value;
    j = t.length;
    if (j > 0) {
        for (var i = 1; i <= j; i++) {
            n = n + a[i];
            if (i == 27) {
                document.f.txt.value = '';
                n = '';
            }
        }
    }
    document.f.txt.value = n;
    n = '';
    setTimeout('one()', 1);
}
function s() {}
function on() {
    one();
}

$(document).ready(function () {
    $('#k').hide();
    $('h1').click(function () {
        $('.active').removeClass('active');
        $('#k').slideUp('fast');
        if ($(this).next('#k').is(':hidden') == true) {
            $(this).addClass('active');
            $(this).next('#k').slideDown('fast');
        }
    });
});
function Yeu() {
    $('#divResult').fadeOut(0);
    $('#divResult').html("</br><h2>haha đừng có chối nữa nhé ! <img src='img/3.gif'</img></h2>");
    $('#divResult').fadeIn(2000, function () {
        $('#divResult2').fadeOut(0);
    });
}
