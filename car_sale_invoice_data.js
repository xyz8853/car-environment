

window.onload = () => {
    const customerDetails = localStorage.getItem(`customerDetails`);
          const custDet = JSON.parse(customerDetails);
    const carDetails = localStorage.getItem('carDetails');
          const carDet = JSON.parse(carDetails);
    const sellerDetails = localStorage.getItem('sellerDetails');
          const sellDet = JSON.parse(sellerDetails);
    
    /** here below set data */
    // set customer data
    let cName = document.querySelector('#custName');    
    let cAge = document.querySelector(`#custAge`);
    let cEmail = document.querySelector(`#custEmail`);
    let cPhone = document.querySelector(`#custPhone`);
    let cParmAdd = document.querySelector(`#custParmAdd`);
    let cResiAdd = document.querySelector(`#custResAdd`);
    //
    let fullName = custDet.firstName;
    fullName = fullName+" "+custDet.middleName;
    fullName = fullName+" "+custDet.lastName;
    cName.textContent = fullName;
    cAge.textContent = custDet.age;
    cEmail.textContent = custDet.emailId;
    cPhone.textContent = custDet.mobileNo;
    let fullAddress = custDet.permanentCity;
    fullAddress = fullAddress+" "+custDet.permanentState;
    fullAddress = fullAddress+" "+custDet.permanentZipNo;
    cParmAdd.textContent =fullAddress;
    let fullResAdd = custDet.residentialAddress.resCity;
    fullResAdd = fullResAdd+" "+custDet.residentialAddress.resState;
    fullResAdd = fullResAdd+" "+custDet.residentialAddress.resZip;
    cResiAdd.textContent = fullResAdd;


    //set seller data
    let selName = document.querySelector(`#sellName`);
    let selMoble = document.querySelector(`#sellMob`);
    let selMaillingAdd = document.querySelector(`#sellMailingAdd`);
    //
    selName.textContent = sellDet.sellerName;
    selMoble.textContent = sellDet.sellerMobileNo;
    let sellFullAddress = sellDet.sellerMaillingAdd;
    sellFullAddress = sellFullAddress+" "+sellDet.sellerState;
    selMaillingAdd.textContent = sellFullAddress;
    // set car data

};

