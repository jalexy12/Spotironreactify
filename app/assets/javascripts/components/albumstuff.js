$('.btn-play').on('click', addPlaying)


function addPlaying(){
  $('.btn-play').toggleClass('playing')
  tickBar();
}


function tickBar(){
  var progValue = $('.progress').prop('value')
  

  if (progValue < 30 && $('.btn-play').hasClass('playing') === false){
    var newValue = +progValue + 1
    var timeout = setTimeout(tickBar, 1000)
    console.log(newValue)
  }else if(progValue < 30 && $('.btn-play').hasClass('playing') === true){
    newValue = progValue
  }else{
    newValue = 0
    clearTimeout(timeout)
  }
  $('.progress').prop('value', newValue)
}
