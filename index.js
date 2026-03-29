

// variant work
let blackColorCar = document.querySelector('#blackcolor');
let mattColorCar = document.querySelector('#mattcolor');
let redColorCar = document.querySelector('#redcolor');
let blueColorCar = document.querySelector('#bluecolor');


    blackColorCar.addEventListener('click', function(event){
        let blackCar = document.querySelector('.all-type-car-color-manage');
        blackCar.setAttribute('src','full-car22.png');
        blackColorCar.setAttribute('class', 'border-color');
        
        mattColorCar.removeAttribute('class');
        redColorCar.removeAttribute('class');
        blueColorCar.removeAttribute('class');
    });



    mattColorCar.addEventListener('click', function(){
        let mattCar = document.querySelector('.all-type-car-color-manage');
        mattCar.setAttribute('src', 'full-car77.png');
        mattColorCar.setAttribute('class', 'border-color');

        blackColorCar.removeAttribute('class');
        redColorCar.removeAttribute('class');
        blueColorCar.removeAttribute('class');

    })


redColorCar.addEventListener('click', function(){
     let redCar = document.querySelector('.all-type-car-color-manage');
     redCar.setAttribute('src', 'ma.jpg');
     redColorCar.setAttribute('class', 'border-color');

     mattColorCar.removeAttribute('class');
     blackColorCar.removeAttribute('class');
     blueColorCar.removeAttribute('class');
})


blueColorCar.addEventListener('click', function(){
     let blueCar = document.querySelector('.all-type-car-color-manage');
     blueCar.setAttribute("src",'full-car33.png');
     blueColorCar.setAttribute('class', 'border-color');

     mattColorCar.removeAttribute('class');
     redColorCar.removeAttribute('class');
     blackColorCar.removeAttribute('class');
});

// Left-Hand Car Image changes
let carChangeImage = ['full-car22.png', 'full-car77.png', 'ma.jpg', 'full-car33.png'];
let carChangeIndex1=3;
let carChangeIndex2=1;
let carChangeImageTag = document.querySelector('#carChangeImageTag');

let leftHandIcon = document.querySelector('#leftHandIcon');
    leftHandIcon.addEventListener('click', function(){
        carChangeImageTag.setAttribute('src', `${carChangeImage[carChangeIndex1]}`);
        if(carChangeIndex1==0){
            carChangeIndex1=3;
        }
        carChangeIndex1--;
        console.log('left hand click');
})

//Right-Hand Car Image change
let rightHandIcon = document.querySelector('#rightHandIcon');
    rightHandIcon.addEventListener('click', function(){
          carChangeImageTag.setAttribute('src', `${carChangeImage[carChangeIndex2]}`);
          if(carChangeIndex2==3){
               carChangeIndex2=0;
          }
          carChangeIndex2++;
          console.log("right hand click");
    })
    /** below work of the car EMI CONCEPT */
    let n=1*12; 
    let r =(Number)(1/(12*100).toFixed(5));
    let p =10000;
    /**where 
     * n = duration of month
     * r = Rate of Interest
     * p = principle amount
     */
    //show duration months
    let showDurationMonth = document.querySelector('#showDurationMonth');
    //months duration
    let monthDuration = document.querySelector('#monthDuration');
        monthDuration.addEventListener('input', e=>{
            showDurationMonth.value = e.target.value+' Yr';
            n = e.target.value*12;
            console.log('months:'+n);
        })
    //show rate 
    let showRate = document.querySelector('#showRate');
    //amount inderest 
    let amountRate = document.querySelector('#amountIntrest');
        amountRate.addEventListener('input', e=>{
            showRate.value = e.target.value+"%";
            r = e.target.value;
            r = (r/(12*100));
            r = (Number)(r.toFixed(5));
            console.log(r);
        })
    //show loan amount
    let showLoanAmount = document.querySelector('#showLoanAmount');
    //loan amount
    let amountLoan = document.querySelector('#loanAmount');
        amountLoan.addEventListener('input', e=>{
            showLoanAmount.value = "₹ "+e.target.value;
            p = e.target.value;
            console.log('princple amount:'+p);
        })
    /** formula
     * [PxR x(1+R)^n]/[(1+R)^n-1]
     */
    //check emi concept here
    let showMonthlyEMI = document.querySelector('.cash-payment');
    let checkEMIBtn = document.querySelector('#checkEMIBtn');
        checkEMIBtn.addEventListener('click', e=>{
            let result = Math.round((p*r)*Math.pow((1+r), n)/(Math.pow((1+r), n)-1));
            showMonthlyEMI.textContent = "₹ "+result;
            console.log(result);
        })
    
        
