// scroll

$('a[href ^= "#"]').on('click', function(e) {
    let hRef = $(e.target).attr('href');
    let sectionOffset = $(hRef).offset().top;
    $('html, body').animate({ scrollTop: sectionOffset }, 1400);
    
});


// side bar 

$('.close').on('click',function(){
    $('aside').css('left' , '-250px'); 
})

$('.open').on('click',function(){
    $('aside').css('left' , '0px');  
})


// Singers Section

$('.singersSection h2').on('click',function(e){
    $(e.target).next().slideToggle(1000);
    $('.singersSection div').not($(e.target).next()).slideUp(1000);
    
})


//countDown Section

let time = setInterval(function(){
    let todayDate = new Date().getTime();
    let concertDate = new Date('2024-10-15').getTime();
    let difference = concertDate - todayDate;
    let days = Math.floor(difference / (24 * 60 * 60 *1000));
    let hours = Math.floor(difference % (24 * 60 * 60 * 1000) / (60 * 60 * 1000));
    let minutes = Math.floor((difference % (60 * 60 * 1000)) / (60 * 1000));
    let seconds = Math.floor((difference % (60 * 1000)) / 1000);  
    displayTime(days,hours,minutes,seconds);    
},1000)

function displayTime(days,hours,minutes,seconds){
    let cartoona = '';
    cartoona+=` <div class="col-md-3">
            <div class="card text-center bg-transparent border-1 border-white p-4 text-white">
              <div class="card-body">
                <h5 class="card-title">${days} D</h5>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card text-center bg-transparent border-1 border-white p-4 text-white">
              <div class="card-body">
                <h5 class="card-title">${hours} H</h5>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card text-center bg-transparent border-1 border-white p-4 text-white">
              <div class="card-body">
                <h5 class="card-title">${minutes} M</h5>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card text-center bg-transparent border-1 border-white p-4 text-white">
              <div class="card-body">
                <h5 class="card-title">${seconds} S</h5>
              </div>
            </div>
          </div>`


          document.getElementById('rowData').innerHTML=cartoona;
}

//join us section

$('textarea').on('keyup',function(){
    let wordsLength = $('textarea').val().length;
    let x = 100 - wordsLength;
    if(x>0){
        $('.number').text(x);
    }
    else{
        $('.number').text('your available character finished');

    }
})