// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

let carPrice = document.querySelector('#validationCustom019');
//offline input data index all box
let offlinePaymentData = document.querySelector('#offlinePaymentData');
//online input data index all box
let onlinePaymentData = document.querySelector('#onlinePaymentData');

carPrice.addEventListener('click', function(event){
     let optionData = event.target.value;
     if(optionData == 'offline'){
        onlinePaymentData.classList.add('d-none');
        offlinePaymentData.removeAttribute('class');
        offlinePaymentData.setAttribute('class','row');
        console.log("offline work-done");
     }
     if(optionData == 'online'){
        offlinePaymentData.classList.add('d-none');
        onlinePaymentData.removeAttribute('class');
        onlinePaymentData.setAttribute('class','row');
        console.log("online work-done");
     }
});