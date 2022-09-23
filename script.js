const logo = document.getElementById('logo');
const header = document.getElementsByClassName('header')[0];
const cartBtn = document.getElementById('cart');
const menuBtn = document.getElementById('menu');
const ul = document.getElementsByClassName('home-pricing-table-plan-features-list')[0];
const expandMoreFeatures = document.getElementById('expandMoreFeatures');
var li = document.getElementsByClassName('plan-features-item');
var expand = false;
var closed = true;
var html = `<li class="plan-features-item"><b>Unlimited</b> Free SSL</li>
                <li class="plan-features-item"><b>Free</b> domain</li>
                <li class="plan-features-item"><b>Free</b> email</li>
                <li class="plan-features-item"><b>Optimized</b> For WordPress</li>
                <li class="plan-features-item"><b>Unmetered</b> traffic (Unlimited GB)</li>
                <li class="plan-features-item"><b>100</b> Websites</li>
                <li class="plan-features-item"><b>100</b> GB SSD Storages</li>
                <li class="plan-features-item"><b>Free</b> Weekly Backups</li>
                <li class="plan-features-item"><b>100</b> Parked Domains</li>
                <li class="plan-features-item"><b>100</b> Subdomains per account</li>
                <li class="plan-features-item"><b>Full</b> DNS Editor</li>
                <li class="plan-features-item"><b>Managed</b> WordPress</li>
                <li class="plan-features-item"><b>Special offers</b> for Fiverr services</li>
                <li class="plan-features-item"><b>FAQ Database</b></li>
                <li class="plan-features-item"><b>WordPress</b> accerelation</li>
                <li class="plan-features-item"><b>40</b> Active Processes</li>
                <li class="plan-features-item"><b>20</b> Entry Processes</li>
                <li class="plan-features-item"><b>400 000</b> Inodes</li>
                <li class="plan-features-item"><b>Unlimited</b> Cronjobs</li>
                <li class="plan-features-item"><b>Auto Script Installer</b></li>
                <li class="plan-features-item"><b>Usage Monitoring and Statistics</b></li>
                <li class="plan-features-item"><b>Automated Scaling</b> suggestions</li>
                <li class="plan-features-item"><b>GIT</b> Support</li>
                <li class="plan-features-item"><b>SSH Access</b></li>
                <li class="plan-features-item"><b>Access Management</b></li>
                <li class="plan-features-item"><b>99.9%</b> Uptime Guarantee</li>
                <li class="plan-features-item"><b>Unlimited</b> FTP Accounts</li>
                <li class="plan-features-item"><b>20 minutes average issue</b> resolution time</li>
                <li class="plan-features-item"><b>24/7/365</b> chat and email service</li>
                <li class="plan-features-item"><b>Knowledge Base</b></li>
                <li class="plan-features-item"><b>Tutorials</b></li>
                <li class="plan-features-item"><b>Webinars</b></li>
                <li class="plan-features-item"><b>Unlimited</b> Databases</li>
                <li class="plan-features-item"><b>3 GB</b> database size</li>
                <li class="plan-features-item"><b>Unlimited</b> MySQL backup size</li>
                <li class="plan-features-item"><b>500 MySQL</b> connections</li>
                <li class="plan-features-item"><b>200 MB MySQL</b> import size</li>
                <li class="plan-features-item"><b>16 MB MySQL</b> packet size</li>
                <li class="plan-features-item"><b>300 seconds MySQL</b> statement time</li>
                <li class="plan-features-item"><b>15 MySQL</b> user connections</li>
                <li class="plan-features-item"><b>60 seconds MySQL</b> query time</li>
                <li class="plan-features-item"><b>HTTP/3</b></li>
                <li class="plan-features-item"><b>IPv6</b></li>
                <li class="plan-features-item"><b>10</b> MB/s I/O</li>
                <li class="plan-features-item"><b>128</b>IOPS</li>
                <li class="plan-features-item"><b>1</b> CPU Core</li>
                <li class="plan-features-item"><b>1 GB</b> RAM</li>
                <li class="plan-features-item"><b>6</b> datacenter locations</li>
                <li class="plan-features-item"><b>Dynamic</b> PHP limits</li>`;

window.addEventListener('scroll', scroll);

function scroll() {
  if (window.scrollY > 25) {
    header.classList.add('active');
    logo.src = 'images/logo-black.svg';
    cartBtn.src = 'images/shopping_cart-black.svg';
    menuBtn.src = 'images/menu-black.svg';
  } else if (window.scrollY < 25) {
    header.classList.remove('active');
    logo.src = 'images/logo-white.svg';
    cartBtn.src = 'images/shopping_cart.svg';
    menuBtn.src = 'images/menu.svg';
  }
}

function toggleNav() {
  var nav = document.getElementsByClassName('nav')[0];
  var header = document.getElementsByClassName('header')[0];
  if (nav.classList.contains('active')) {
    nav.classList.toggle('active');
    header.classList.add('active');
    logo.src = 'images/logo-black.svg';
    menuBtn.src = 'images/menu-black.svg';
    cartBtn.src = 'images/shopping_cart-black.svg';
  } else {
    nav.classList.toggle('active');
    header.classList.add('active');
    logo.src = 'images/logo-black.svg';
    menuBtn.src = 'images/menu-close.svg';
    cartBtn.src = 'images/shopping_cart-black.svg';
  }
}

function openDropdown(element, element2) {
    document.getElementById(element).classList.toggle('active');
    document.querySelector(`#${element2} img`).classList.toggle('active');
}

function timer() {
  const dayTimer = document.getElementById('days');
  const hourTimer = document.getElementById('hours');
  const minuteTimer = document.getElementById('minutes');
  const secondTimer = document.getElementById('seconds');

  var saleEndingDate = new Date('25 September 2022');
  var now = new Date();
  var timeLeft = saleEndingDate - now;

  if (timeLeft > 0) {
    var days = Math.floor(timeLeft/1000/60/60/24);
    if (days == 0) {
      var hours = Math.floor(timeLeft/1000/60/60);
    } else {
      var hours = Math.floor(timeLeft/1000/60/60) % Math.floor(timeLeft/1000/60/60/24);
    }
    if (hours == 0) {
      var minutes = Math.floor(timeLeft/1000/60);
    } else {
      var minutes = Math.floor(timeLeft/1000/60)%Math.floor(timeLeft/1000/60/60);
    }
    if (days == 0 && hours == 0 && minutes == 0) {
      var seconds = Math.floor(timeLeft / 1000);
    } else {
      var seconds = Math.floor(timeLeft/1000)%Math.floor(timeLeft/1000/60);
    }
    
    dayTimer.innerHTML = addZeros(days);
    hourTimer.innerHTML = addZeros(hours);
    minuteTimer.innerHTML = addZeros(minutes);
    secondTimer.innerHTML = addZeros(seconds);
  }
}

function addZeros(time) {
  if (Number(time) < 10) {
    return '0' + Number(time);
  } else {
    return Number(time);
  }
}

setInterval(timer, 1000);

function expandFeatures(element) {
  if (expand) {
    ul.innerHTML = `<li class="plan-features-item"><b>Unlimited</b> Free SSL</li>
                <li class="plan-features-item"><b>Free</b> domain</li>
                <li class="plan-features-item"><b>Free</b> email</li>
                <li class="plan-features-item"><b>Optimized</b> For WordPress</li>`;
    expand = false;
    element.innerText = 'See All Features';
  } else {
    ul.innerHTML = html;
    expand = true;
    element.innerText = 'See Less';
  }
}
