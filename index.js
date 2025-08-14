

// variant work
let blackColorCar = document.querySelector('#blackcolor');
let mattColorCar = document.querySelector('#mattcolor');
let redColorCar = document.querySelector('#redcolor');
let blueColorCar = document.querySelector('#bluecolor');


    blackColorCar.addEventListener('click', function(event){
        let blackCar = document.querySelector('.all-type-car-color-manage');
        blackCar.setAttribute('src','full-car22.PNG');
        blackColorCar.setAttribute('class', 'border-color');
        
        mattColorCar.removeAttribute('class');
        redColorCar.removeAttribute('class');
        blueColorCar.removeAttribute('class');
    });



    mattColorCar.addEventListener('click', function(){
        let mattCar = document.querySelector('.all-type-car-color-manage');
        mattCar.setAttribute('src', 'full-car77.PNG');
        mattColorCar.setAttribute('class', 'border-color');

        blackColorCar.removeAttribute('class');
        redColorCar.removeAttribute('class');
        blueColorCar.removeAttribute('class');

    })


redColorCar.addEventListener('click', function(){
     let redCar = document.querySelector('.all-type-car-color-manage');
     redCar.setAttribute('src', 'ma.JPG');
     redColorCar.setAttribute('class', 'border-color');

     mattColorCar.removeAttribute('class');
     blackColorCar.removeAttribute('class');
     blueColorCar.removeAttribute('class');
})


blueColorCar.addEventListener('click', function(){
     let blueCar = document.querySelector('.all-type-car-color-manage');
     blueCar.setAttribute("src",'full-car33.PNG');
     blueColorCar.setAttribute('class', 'border-color');

     mattColorCar.removeAttribute('class');
     redColorCar.removeAttribute('class');
     blackColorCar.removeAttribute('class');
});

// Left-Hand Car Image changes
let carChangeImage = ['full-car22.PNG', 'full-car77.PNG', 'ma.jpg', 'full-car33.PNG'];
let carChangeIndex1=3;
let carChangeIndex2=0;
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