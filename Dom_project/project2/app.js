const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault()
   const height = parseInt(document.querySelector('#height').value)
   const weight = parseInt(document.querySelector('#weight').value)
   const results = document.querySelector('#results')
    
   if(height == '' || height < 0 || isNaN(height)) {
        results.innerHTML = `plase enter vaild value height ${height}`
   } else if(weight == '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `plase enter vaild value weight ${weight}`
     } else {

      if(weight < 18.6) {
      results.innerHTML = ( (weight / ((height*height) / 10000)).toFixed(2) ).concat('Under Weight = Less than 18.6')
      } else if (weight < 24.9) {
      results.innerHTML = ( (weight / ((height*height) / 10000)).toFixed(2) ).concat('Normal Range = 18.6 and 24.9')

      } else if (weight > 24.9 ) {
      results.innerHTML = ( (weight / ((height*height) / 10000)).toFixed(2) ).concat('Overweight = Greater than 24.9')

      }

     }

})