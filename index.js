function concederBeca() {
    const edad = document.getElementById('input-edad').value
    const hasTitle = confirm('Tienes titulo Universitario?')
    const areParo = confirm('Estas en el Paro?')
   
    let beca
 
    if(edad >= 18 && hasTitle == true || areParo == true){
        beca = document.getElementById('estadoBeca').innerHTML = 'Beca CONCEDIDA'
    } else {
        beca = document.getElementById('estadoBeca').innerHTML = 'Beca NO concedida'
    }
    
    console.log(edad , hasTitle, areParo, beca)
}
