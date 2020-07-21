window.onload=()=>{
let animation = anime.timeline({loop:true});
animation.add({
    targets:"p",
    translateY:"50vh",
    delay:(elm, index, t) => index * 200,
    easing:"easeOutExpo",
    duration:1000
}).add({
    targets:"p",
    translateY:"0vh",
    translateX:"50vw",
    delay:(elm, index, t) => index * 200,
    easing:"easeOutExpo",
    duration:1000
}).add({
    targets:"p",
    translateY:"50vh",
    delay:(elm, index, t) => index * 200,
    easing:"easeOutExpo",
    duration:1000
}).add({
    targets:"p",
    translateY:"0vh",
    translateX:"0vw",
    delay:(elm, index, t) => index * 200,
    easing:"easeOutExpo",
    duration:1000
})
}