import gsap from 'gsap';

export const scrollAnimation = (position, target, onUpdate) => {
    const timeline = gsap.timeline();

    timeline.to(position, {
        x: -3.38,
        y: -10.74,
        z: -5.93,
        scrollTrigger: {
            trigger: '.sound-section',
            start: "top bottom",
            end: "top top",
            scrub: 2, //true, or 2:delay
            immediateRender: false  //-- not rendering the animation until it's triggered
        },
        onUpdate
    }).to(target, {
        x: 1.52,
        y: 0.77,
        z: -1.08,
        scrollTrigger: {
            trigger: '.sound-section',
            start: "top bottom",
            end: "top top",
            scrub: 2, //true, or 2:delay
            immediateRender: false  //-- not rendering the animation until it's triggered
        }
    }).to('.jumbotron-section', {
        opacity: 0,
        scrollTrigger: {
            trigger: '.sound-section',
            start: "top bottom",
            end: "top top",
            scrub: 2, //true, or 2:delay
            immediateRender: false  //-- not rendering the animation until it's triggered
        }
    }).to('.sound-section-content', {
        opacity: 1,
        scrollTrigger: {
            trigger: '.sound-section',
            start: "top bottom",
            end: "top top",
            scrub: 2, //true, or 2:delay
            immediateRender: false  //-- not rendering the animation until it's triggered
        }
    }).to(position, {
        x: 1.56,
        y: 5.0,
        z: 0.011,
        scrollTrigger: {
            trigger: '.display-section',
            start: "top bottom",
            end: "top top",
            scrub: 2, //true, or 2:delay
            immediateRender: false  //-- not rendering the animation until it's triggered
        },
        onUpdate
    }).to(target, {
        x: -0.55,
        y: 0.32,
        z: 0.0,
        scrollTrigger: {
            trigger: '.display-section',
            start: "top bottom",
            end: "top top",
            scrub: 2, //true, or 2:delay
            immediateRender: false  //-- not rendering the animation until it's triggered
        }
    }).to('.display-section', {
        opacity: 1,
        scrollTrigger: {
            trigger: '.display-section',
            start: "top bottom",
            end: "top top",
            scrub: 2, //true, or 2:delay
            immediateRender: false  //-- not rendering the animation until it's triggered
        }
    })
}