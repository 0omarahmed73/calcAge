let inputs = document.querySelectorAll('input');
let button = document.querySelector('button');
let ops = document.querySelectorAll('.texts span')
console.log(ops)

button.addEventListener('click' , function(){
  inputs.forEach(el => {
    if (el.value === '' || (el.value.startsWith('0') && el.value.length === 1) ){
      el.parentElement.querySelector('label').classList.add('error');
      el.classList.add('error');
      el.parentElement.classList.add('error');
      el.parentElement.querySelector('.errorResult').innerText = 'This field is required';
      el.parentElement.querySelector('.errorResult').classList.add('error');
    }
    else {
      el.parentElement.querySelector('label').classList.remove('error');
      el.classList.remove('error');
      el.parentElement.classList.remove('error');
      el.parentElement.querySelector('.errorResult').innerText = '';
      el.parentElement.querySelector('.errorResult').classList.remove('error');
    }
  })
  if (inputs[0].value.length < 2 && inputs[0].value !== '' && inputs[0].value !== '0'){
    inputs[0].value = `0${inputs[0].value}`;
  }
  if (inputs[1].value.length < 2 && inputs[1].value !== '' && inputs[1].value !== '0'){
    inputs[1].value = `0${inputs[1].value}`;
  }
  if (inputs[2].value.length < 4 && inputs[0].value !== '0' ){
    if (inputs[2].value.length === 1){
      inputs[2].value = `000${inputs[2].value}`;
    }
    else if (inputs[2].value.length === 2){
      inputs[2].value = `00${inputs[2].value}`;
    }
    else if (inputs[2].value.length === 3){
      inputs[2].value = `0${inputs[2].value}`;
    }
  }
    if (inputs[1].value > 12){
      inputs[1].parentElement.querySelector('label').classList.add('error');
      inputs[1].classList.add('error');
      inputs[1].parentElement.classList.add('error');
      inputs[1].parentElement.querySelector('.errorResult').innerText = 'Invalid month';
      inputs[1].parentElement.querySelector('.errorResult').classList.add('error');
    }
    if (inputs[2].value > (new Date()).getFullYear()){
      inputs[2].parentElement.querySelector('label').classList.add('error');
      inputs[2].classList.add('error');
      inputs[2].parentElement.classList.add('error');
      inputs[2].parentElement.querySelector('.errorResult').innerText = 'Must be in the past';
      inputs[2].parentElement.querySelector('.errorResult').classList.add('error');
    }
    if (inputs[0].value >= 1){
      if (inputs[0].value > (new Date(inputs[2].value , inputs[1].value , 0)).getDate() ){
        inputs.forEach(el => {
          el.parentElement.querySelector('label').classList.add('error');
          el.classList.add('error');
          el.parentElement.classList.remove('error');
          el.parentElement.querySelector('.errorResult').innerText = '';
          el.parentElement.querySelector('.errorResult').classList.add('error');
        })
        inputs[0].parentElement.querySelector('.errorResult').innerText = 'Must be a valid date';
        inputs[0].parentElement.classList.add('error');
      }
    }
      let errors = false ;
      inputs.forEach(el => {
        if (el.classList.contains('error')){
          errors = true;
        }
      }
    )
    if (errors === false) {
      let getDate = new Date(inputs[2].value ,( inputs[1].value ) - 1 , inputs[0].value);
      let now = new Date();
      let diff = new Date(now - getDate);
      console.log(now.getHours());
      ops[0].innerText = diff.getUTCFullYear() - 1970;
      ops[1].innerText = diff.getUTCMonth();
      ops[2].innerText = diff.getUTCDate() - 1;

    }
  })


  
  