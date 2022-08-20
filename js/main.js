document.querySelector('button').onclick = function() {
    let rimie = document.getElementById("imie").value;
    document.getElementById("name").innerHTML = rimie;
    let rnazwisko = document.getElementById("drugie-imie").value;
    document.getElementById("surname").innerHTML = rnazwisko;
    let rnrtel = document.getElementById("nr-tel").value;
    document.getElementById("phone").innerHTML = rnrtel;
}
