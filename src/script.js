var circle = document.querySelector('.customcursorball');



window.addEventListener("mousemove",function(dets){
    console.log(dets.clientX,dets.clientY);
    circle.style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
})