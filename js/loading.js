const tl = gsap.timeline({
    defaults: {
        ease: 'power1.out'
    }
})
tl.to('.intro-text', {
    y: '0%',
    duration: 1,
    stagger: 0.4
});
tl.to('.slider', {
    y: '-100%',
    duration: 1.8,
    delay: 0.5
});
tl.to('.intro', {
    y: "-100%",
    duration: 1
}, "-=1");
tl.fromTo('header', {
    opacity: 0
}, {
    opacity: 1,
    duration: 1
});
tl.fromTo('.content', {
    opacity: 0
}, {
    opacity: 1,
    duration: 1
}, "-=1");