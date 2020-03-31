var tl = new TimelineMax(),
    box = document.querySelectorAll('.box');

// 1. moves from the "starting point" down over 1 sec
// TweenMax.to(box, 1, {
//     y: 300,
// })

// 2. moves from y at -500px down to the "starting point" over 1 sec
// TweenMax.from(box, 1, {
//     y: -500,
// })

// adds a bounce and staggered animation, needs a delayed amount between each of the staggered boxes on line 18
// TweenMax.staggerFrom(box, 1, {
//     y: -500,
//     ease: Bounce.easeOut
// }, 0.1)

// 3. one way of using two different animations
// adds a delay to the rotation
// TweenMax.staggerFrom(box, 1, {
//     y: -500,
//     ease: Bounce.easeOut
// }, 0.1)
// TweenMax.staggerFrom(box, 1, {
//     rotation: 90, 
//     delay: 1,
//     ease: Bounce.easeOut
// }, 0.1)

// 4. adds a negative delay so that the animations overlap
// tl.staggerFrom(box, 1, {
//     y: -500,
//     ease: Bounce.easeOut
// }, 0.1)
// tl.staggerFrom(box, 1, {
//     rotation: 90, 
//     ease: Bounce.easeOut
// }, 0.1, "-=0.5")

// 5. conflicting easeIn and easeOut effects to create a jiggle
// tl.staggerFrom(box, 1, {
//     y: -500,
//     ease: Bounce.easeOut
// }, 0.1)
// tl.staggerFrom(box, 2, {
//     rotation: 90, 
//     ease: Bounce.easeIn
// }, 0.1)
// tl.staggerFrom(box, 1, {
//     rotation: 180, 
//     ease: Bounce.easeOut
// }, 0.1, "-=0.5")

// 6. add a label to manipulate the red box, and rotate in sync with the purple boxes --> needs to use a label and make sure to change from staggerFrom to from because it's only one element
tl.staggerFrom(box, 5, {
    y: -500,
    ease: Bounce.easeOut
}, 0.1)

tl.add('rotate')
tl.staggerFrom(box, 2, {
    rotation: 90, 
    ease: Bounce.easeIn
}, 0.1, "rotate")
tl.staggerFrom(box, 1, {
    rotation: 180, 
    ease: Bounce.easeOut
}, 0.1, "rotate+=1.75")

tl.from(".newbox", 2, {
    rotation: 90, 
    ease: Bounce.easeIn
}, "rotate")
tl.from(".newbox", 1, {
    rotation: 180, 
    ease: Bounce.easeOut
}, "rotate+=1.75")