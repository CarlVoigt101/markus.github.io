let mybutton = document.getElementById("backToTopButton");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
    setActiveNav(navItems.home.nav); // reset Nav
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
 // Navigation active or not
 const navItems = {
  home: {
    nav: document.getElementById('homeNav'),
    line: document.getElementById('homeLine'),
  },
  about: {
    nav: document.getElementById('aboutNav'),
    line: document.getElementById('aboutLine'),
  },
  work: {
    nav: document.getElementById('workNav'),
    line: document.getElementById('workLine'),
  },
  contact: {
    nav: document.getElementById('contactNav'),
    line: document.getElementById('contactLine'),
  },
};

function setActiveNav(navItem) {
  for (const key in navItems) {
    const item = navItems[key];
    item.line.style.display = item.nav === navItem ? 'block' : 'none';
    item.nav.style.fontWeight = item.nav === navItem ? '700' : '400';
  }
}

function handleScroll(event) {
  // Determine which section is currently in view based on scroll position
  let currentNavItem = null;
  for (const key in navItems) {
    const item = navItems[key];
    const section = document.getElementById(key);
    const rect = section.getBoundingClientRect();
    if (rect.top <= 0 && rect.bottom >= 0) {
      currentNavItem = item.nav;
      break;
    }
  }
  
  if (currentNavItem) {
    setActiveNav(currentNavItem);
  }
}

// Add scroll event listener to update navigation on scroll
window.addEventListener('scroll', handleScroll);

// Set active nav item on initial load
window.addEventListener('load', () => {
  setActiveNav(navItems.home.nav);
});


// Scroll Nav 
var lastScrollTop = 0;

window.addEventListener("scroll", function() {
    var header = document.querySelector("nav");
    var scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
        header.style.top = "-100px"; 
        header.style.opacity = "0"; 
    } else {
        header.style.top = "0"; 
        header.style.opacity = "1"; 
    }

    lastScrollTop = scrollTop;
});

// Sroll Nav2
var lastScrollTop2 = 0;

window.addEventListener("scroll", function() {
    var header2 = document.getElementById('nav2');
    var scrollTop2 = window.scrollY;

    if (scrollTop2 > lastScrollTop2) {
        header2.style.top = "-100px"; 
        header2.style.opacity = "0"; 
    } else {
        header2.style.top = "0"; 
        header2.style.opacity = "1"; 
    }

    lastScrollTop2 = scrollTop2;
});

//BurgerMenü

const burgerMenu = document.getElementById('burger');
const overlay = document.querySelector('.overlay');
const body = document.body;
const closeButton = document.getElementById('close');

burgerMenu.addEventListener('click', () => {
    overlay.style.right = '0';
    overlay.style.pointerEvents = 'auto';
    body.style.overflow = 'hidden';
    burgerMenu.style.display ='none';
});

closeButton.addEventListener('click', () => {
    closeOverlay();
});

overlay.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        closeOverlay();
    }
});

function closeOverlay() {
    overlay.style.right = '-100%';
    overlay.style.pointerEvents = 'none';
    body.style.overflow = 'auto';
    burgerMenu.style.display = 'flex';
}

//nav2 aktive or not
const navItems2 = {
  home2: {
    nav2: document.getElementById('homeNav2'),
    line2: document.getElementById('homeLine2'),
  },
  about2: {
    nav2: document.getElementById('aboutNav2'),
    line2: document.getElementById('aboutLine2'),
  },
  work2: {
    nav2: document.getElementById('workNav2'),
    line2: document.getElementById('workLine2'),
  },
  contact2: {
    nav2: document.getElementById('contactNav2'),
    line2: document.getElementById('contactLine2'),
  },
};

function setActiveNav2(navItem2) {
  for (const key in navItems2) {
    const item = navItems2[key];
    item.line2.style.display = item.nav2 === navItem2 ? 'block' : 'none';
    item.nav2.style.fontWeight = item.nav2 === navItem2 ? '700' : '400';
  }
}

for (const key in navItems2) {
  const item = navItems2[key];
  item.nav2.addEventListener('click', () => {
    setActiveNav2(item.nav2);
  });
}

window.addEventListener('load', () => {
  setActiveNav2(navItems2.home2.nav2);
});

// ---------------------

