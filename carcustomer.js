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

/**car form data handling */
let customerDetails = {
   firstName:'',
   middleName:'',
   lastName:'',
   age:'',
   mobileNo:'',
   emailId:'',
   permanentState:'NA',
   permanentCity:'NA',
   permanentZip:'NA',
   residentialAddress:{
      resCity:'',
      resZip:'',
      resState:''
   }
}
let sellerDetails = {
   sellerName:'',
   sellerMaillingAdd:'',
   sellerMobileNo:'',
   sellerState:''
}
let carDetails = {
   carName:'',
   carColor:'',
   carModel:'',
   carIdentificationNo:'',
   purchesDate:'',
   carPrice:''
}
let resCity='xxx', resState='yyy',resZipNo='zzz';
let carFormDataHandling = (event)=>{
   customerDetails.firstName = event.target.buyerFirstName.value;
   customerDetails.lastName = event.target.buyerLastName.value;
   customerDetails.middleName = event.target.buyerLastName.value;
   customerDetails.age = event.target.buyerAge.value;
   customerDetails.mobileNo = event.target.buyerMobileNo.value;
   customerDetails.emailId = event.target.buyerEmailId.value;
   customerDetails.permanentCity = event.target.buyerCityName.value;
   customerDetails.permanentState = event.target.buyerStateName.value;
   customerDetails.permanentZip = event.target.buyerZipNo.value;
   customerDetails.residentialAddress.resCity =  event.target.buyerResidentialCityName.value;
   customerDetails.residentialAddress.resState = event.target.buyerResidentialStateName.value;
   customerDetails.residentialAddress.resZip = event.target.buyerResidentialZipNo.value;
   // resState = event.target.buyerStateName.value;;
   // resZipNo = event.target.buyerZipNo.value;
   /**seller details fill inside object */
   sellerDetails.sellerName = event.target.sellerName.value;
   sellerDetails.sellerMaillingAdd = event.target.sellerAddress.value;
   sellerDetails.sellerMobileNo = event.target.sellerMobileNo.value;
   sellerDetails.sellerState = event.target.sellerStateName.value;
   /**car details */
   carDetails.carName = event.target.carFullName.value;
   carDetails.carColor = event.target.carColorName.value;
   carDetails.carModel = event.target.carModelName.value;
   carDetails.carIdentificationNo = event.target.carIdefNumber.value;
   carDetails.purchesDate = event.target.carPurchageDate.value;
   carDetails.carPrice = event.target.carPrice.value;


   // console.log(customerDetails);
   // console.log(sellerDetails);
   // console.log(carDetails);
  
  localStorage.setItem('customerDetails', JSON.stringify(customerDetails));
  localStorage.setItem(`sellerDetails`, JSON.stringify(sellerDetails));
  localStorage.setItem(`carDetails`, JSON.stringify(carDetails));
  
  window.location.href = "car_sale_invoice.html";
  event.preventDefault();
}

let permanentCity = document.querySelector('#buyerCityName');
    permanentCity.addEventListener('input', e=>{
       resCity = e.target.value;
    })
let permanentState = document.querySelector('#buyerStateName');
    permanentState.addEventListener('input', e=>{
        resState = e.target.value;
    })
let permanentZipNo = document.querySelector('#buyerZipNo');
    permanentZipNo.addEventListener('input', e=>{
        resZipNo = e.target.value;
    })
//
let buyerResidentialCityName = document.querySelector('#buyerResidentialCityName');
let buyerResidentialStateName = document.querySelector('#buyerResidentialStateName');
let buyerResidentialZipNo = document.querySelector('#buyerResidentialZipNo');
let checkBoxControl = 1;
let residentialCheck = document.querySelector('#checkResidentialAddresss');
   residentialCheck.addEventListener('click', event=>{
      if(checkBoxControl%2 != 0){
         buyerResidentialCityName.value = resCity;
         buyerResidentialStateName.value = resState;
         buyerResidentialZipNo.value = resZipNo;
      }else{
         buyerResidentialCityName.value ='';
         buyerResidentialStateName.value ='';
         buyerResidentialZipNo.value = '';
      }
      console.log(resCity);
      checkBoxControl++;
   })
