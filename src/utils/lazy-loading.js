const lazyLoading = () => {

    const lazyImgs = document.querySelectorAll('.lazy');
    
    const observer = new IntersectionObserver( (entries, observer) => {
        // console.log(entries);
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // console.log(entry.target);
                let img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('loading');
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    lazyImgs.forEach(img => {
        observer.observe(img);
    });
}

export default lazyLoading;
// once an image is lazy loaded you don't want to keep reloading it every time it enters the viewport    


//  root: null,
// rootMargin: '0px',
// threshold: 0,