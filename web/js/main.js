var birth = new Date(1995, 11, 29, 0, 0, 0, 0);

window.onload = function () {
    age();
}


function age() {
    var now = new Date();
    $("#date span").remove();
    if(now.getMonth() < birth.getMonth()) {
        var year = now.getFullYear() - birth.getFullYear() - 1;
    } else var year = now.getFullYear() - birth.getFullYear();
    if(now.getMonth() < birth.getMonth()) {
        var month = now.getMonth() + (12 - birth.getMonth());
    } else var month = now.getMonth() - birth.getMonth();
    if(now.getDate() < birth.getDate()) {
        var date = now.getDate() + (30 - birth.getDate() - 1);
    } else var date = now.getDate() - birth.getDate();
    var hours = now.getHours() - birth.getHours();
    var minutes = now.getMinutes() - birth.getMinutes();
    var second = now.getSeconds() - birth.getSeconds();
    $("#date").append("<span></br>" + year + " years " + month + " months " + date  + " days " +
        hours + " hours " + minutes + "minutes " + second + " seconds" + "</span>");
    setTimeout("age()", 1000);
}
