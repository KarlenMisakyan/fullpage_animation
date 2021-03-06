new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
        onLeave: (origin, destination, direction) => {
            const section = destination.item;
            const title = section.querySelector('h1')
            const tl = new TimelineMax({delay: 0.5});
            tl.fromTo(title, 0.5, {y: '50', opacity: 0}, {y: '0', opacity: 1})
        
        if(destination.index === 1) {
            const chairs = document.querySelectorAll('.chair')
            const description = document.querySelector('.description')

            tl.fromTo(description, 0.7, {x: '-110%', opacity: 1 }, {x: '10%', opacity: 1})
              .fromTo(chairs, 0.7, {x: '100%'}, {x: '-50%'})
              .fromTo(chairs[0], 2, {opacity: 1}, {opacity: 1})
              .fromTo(chairs[1], 2, {opacity: 0}, {opacity: 1})
              .fromTo(chairs[2], 2, {opacity: 0}, {opacity: 1})
              
        }
    }
})