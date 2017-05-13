(function(){
// to keep track of current slide:
var counter = 0,
    items = document.querySelectorAll('.diySlideshow figure'), // a collection of all of the slides, caching for performance
    numItems = items.length; // total number of slides

// showCurrent is how we cycle the slides, showing next or previous slide while **hiding all the others
var showCurrent = function(){
  var itemToShow = Math.abs(counter%numItems);// use modulo operator to get actual index of the element to show

  // remove .show class from whichever element currently holds that designation
  // http://stackoverflow.com/a/16053538/2006057
  [].forEach.call( items, function(el){
    el.classList.remove('show');
  });

  // add .show to the one item that's supposed to have it
  items[itemToShow].classList.add('show');
};

// add click events to prev & next buttons
document.querySelector('.next').addEventListener('click', function() {
     counter++;
     showCurrent();
  }, false);

document.querySelector('.previous').addEventListener('click', function() {
     counter--;
     showCurrent();
  }, false);

})();
