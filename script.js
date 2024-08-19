function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tab-content" and hide them
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tab-btn" and remove the class "active"
  tablinks = document.getElementsByClassName("tab-btn");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Set the default active tab
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('.tab-btn').click();
});

document.addEventListener("DOMContentLoaded", function() {
  const timelineItems = document.querySelectorAll('.timeline-item');

  function startTimelineAnimation() {
    const triggerPoint = window.innerHeight * 0.9; 

    timelineItems.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;

      if (itemTop < triggerPoint) {
        item.classList.add('animate');
      }
    });
  }

  window.addEventListener('scroll', startTimelineAnimation);
  startTimelineAnimation(); 
});
