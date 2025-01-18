var ntxt = document.querySelector('input#numero')
var btn = document.querySelector('button#verificar')
var info = document.querySelector('div#informacao')
var resu = document.querySelector('div#res')

btn.addEventListener('click', verificar)
resu.style.display = 'none'

function verificar() {
    info.innerHTML = 'informação'
    var nvalor = Number.parseInt(ntxt.value)

    if (nvalor < 0) {
        resu.style.display = 'none'
        info.innerHTML = 'Número inválido'
        alert('[ERROR] Números inferiores a zero (0) são inválidos')
    } else {
        resu.style.display = 'block'
    }

    if (nvalor % 2 === 0) {
        resu.innerHTML = `O número ${nvalor} é <strong>PAR<strong>`
    } else {
        resu.innerHTML = `O número ${nvalor} é <strong>IMPAR<strong>`
    }

}