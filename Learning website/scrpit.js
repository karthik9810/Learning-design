window.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const menuItems = document.querySelectorAll('.menu a');
    
    menuItems.forEach(function(item) {
      if (item.getAttribute('href') === currentPage) {
        item.classList.add('active');
      }
    });
  });
 /**/
/**/
/**/ 
const progressBars = document.querySelectorAll('.progress');

// Set progress percentage for each course (e.g., 80% completed)
progressBars.forEach((progress) => {
  const progressPercentage = progress.dataset.progress;
  progress.style.width = `${progressPercentage}%`;
});

