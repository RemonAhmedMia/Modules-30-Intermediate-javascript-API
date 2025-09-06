function add(num1,num2){
    const sum = num1 + num2;
    return sum;
};
const final = add(20,20);
console.log(final);

// ======================================

function plus(numb1,numb2=0){
    const added = numb1+ numb2;
    return added;
}
const output = plus(5);
console.log(output);

function fullName(first, last=''){
    const full = first + " " + last;
    return full;
}
const finalName = fullName('Rimon' , 'Ahmed');
console.log(finalName);


// =========================

$(document).ready(function() {
  var $cursor = $(".cursor"),
      $overlay = $(".project-overlay");

  // Mouse move function
  function moveCircle(e) {
    gsap.to($cursor, {
      duration: 0.5,
      x: e.pageX - $cursor.width()/2,
      y: e.pageY - $cursor.height()/2,
      delay: 0.03
    });
  }

  // Hover for different projects
  $(".p-1").hover(function() {
    $cursor.css({ "background-image": "url(https://images.unsplash.com/photo-1477704080907-b04e4e2d3282?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)" });
  });

  $(".p-2").hover(function() {
    $cursor.css({ "background-image": "url(https://images.unsplash.com/photo-1553979199-b0b04376d319?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80)" });
  });

  $(".p-3").hover(function() {
    $cursor.css({ "background-image": "url(https://images.unsplash.com/photo-1557263432-f37dd16f6d08?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80)" });
  });

  $(".p-4").hover(function() {
    $cursor.css({ "background-image": "url(https://images.unsplash.com/photo-1512830414785-9928e23475dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)" });
  });

  // Show cursor on hover overlay
  $overlay.mousemove(function() {
    gsap.to($cursor, { duration: 0.3, scale: 1, autoAlpha: 1 });
    $(this).on("mousemove", moveCircle);
  });

  // Hide cursor when leaving overlay
  $overlay.mouseout(function() {
    gsap.to($cursor, { duration: 0.3, scale: 0.1, autoAlpha: 0 });
  });
});
