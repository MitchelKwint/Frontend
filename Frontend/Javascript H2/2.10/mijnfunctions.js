function afmelden() {
    var antwoord = confirm('Wilt u zich afmelden');
    if (antwoord == true) {
        alert('U wordt afgemeld!!!');
    }
}

function begroeten() {
    var datum = new Date();
    var uur = datum.getHours();
    if (uur = > 0 && < 12) {
        document.write('Goedemorgen');
    } else if (uur = > 12 && < 18) {
        document.write('Goedenavond');
    }
}
