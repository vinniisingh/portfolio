window.addEventListener('scroll', function(){
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 0) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});


document.getElementById('share-web').addEventListener('click', () => {
    if (navigator.share) {
      navigator.share({
        title: 'Your Webpage Title',
        text: 'Check out this awesome webpage!',
        url: window.location.href,
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
    } else {
      console.log('Web Share API is not supported.');
      // Fallback behavior here, such as showing a dialog with the share options.
    }
  });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Show or hide the back to top button based on scroll position
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("backToTopBtn").style.display = "block";
    } else {
      document.getElementById("backToTopBtn").style.display = "none";
    }
  }

  document.getElementById('scroll-down').addEventListener('click', function() {
    const section2 = document.getElementById('about');
    section2.scrollIntoView({ behavior: 'smooth' });
  });


// Function to check if an element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

