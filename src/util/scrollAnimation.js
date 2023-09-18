import gsap from 'gsap';

//-- props: camera position, target, and onUpdate
export const scrollAnimation = (position, target, onUpdate) => {
    const timeline = gsap.timeline();

    //-- change positions
    timeline
    .to(position, {
        x: -3.38,
        y: -10.74,
        z: -5.93,
        scrollTrigger: {
            trigger: '.sound-section',
            start: "top bottom",
            end: "top top",
            scrub: true, //true, or 2:delay
            immediateRender: false  //-- not rendering the animation until it's triggered
        },
        onUpdate
    })
    .to(target, {
        x: 1.52,
        y: 0.77,
        z: -1.08,
        scrollTrigger: {
            trigger: '.sound-section',
            start: "top bottom",
            end: "top top",
            scrub: true, //true, or 2:delay
            immediateRender: false  //-- not rendering the animation until it's triggered
        }
    })
    .to('.jumbotron-section', {
        opacity: 0,
        scrollTrigger: {
            trigger: '.sound-section',
            start: "top bottom",
            end: "top top",
            scrub: true, //true, or 2:delay
            immediateRender: false  //-- not rendering the animation until it's triggered
        }
    })
    .to('.sound-section-content', {
        opacity: 1,
        scrollTrigger: {
            trigger: '.sound-section',
            start: "top bottom",
            end: "top top",
            scrub: true, //true, or 2:delay
            immediateRender: false  //-- not rendering the animation until it's triggered
        }
    })
}