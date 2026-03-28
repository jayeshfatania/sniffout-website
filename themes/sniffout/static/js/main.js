// Sniffout website - main.js

// --- Filter walks (Area index page) ---
// type: 'all' | 'difficulty' | 'terrain' | 'offLead'
// value: the matching front matter value, or null for 'all'
// chipEl: the clicked chip element (for active state)
function filterWalks(type, value, chipEl) {
  // Update chip active states
  var chips = document.querySelectorAll('.filter-chip');
  chips.forEach(function(c) { c.classList.remove('filter-chip--active'); });
  if (chipEl) { chipEl.classList.add('filter-chip--active'); }

  var cards = document.querySelectorAll('.walk-list-card');
  cards.forEach(function(card) {
    if (type === 'all' || !value) {
      card.classList.remove('hidden');
      return;
    }
    var match = false;
    if (type === 'difficulty') {
      match = card.dataset.difficulty === value;
    } else if (type === 'terrain') {
      match = card.dataset.terrain === value;
    } else if (type === 'offLead') {
      // Off-lead filter: show cards where offLead is 'Full' or 'Partial' or not 'On-lead only'
      var ol = card.dataset.offlead || '';
      match = ol !== 'On-lead only' && ol !== 'On lead' && ol !== 'None' && ol !== '';
    }
    if (match) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// --- Install page: platform detection ---
function detectPlatform() {
  var ua = navigator.userAgent;
  var isIOS = /iPhone|iPad|iPod/.test(ua);
  var isAndroid = /Android/.test(ua);

  var iosEl = document.getElementById('install-ios');
  var androidEl = document.getElementById('install-android');
  var desktopEl = document.getElementById('install-desktop');

  if (!iosEl) return; // not on install page

  if (isIOS) {
    iosEl.style.display = 'block';
    if (androidEl) androidEl.style.display = 'none';
    if (desktopEl) desktopEl.style.display = 'none';
    // Set iOS tab active
    switchInstallTab('ios');
  } else if (isAndroid) {
    if (iosEl) iosEl.style.display = 'none';
    androidEl.style.display = 'block';
    if (desktopEl) desktopEl.style.display = 'none';
    switchInstallTab('android');
  } else {
    if (iosEl) iosEl.style.display = 'none';
    if (androidEl) androidEl.style.display = 'none';
    if (desktopEl) desktopEl.style.display = 'block';
  }
}

// --- Install page: tab switcher ---
function switchInstallTab(platform) {
  var iosSteps = document.getElementById('steps-ios');
  var androidSteps = document.getElementById('steps-android');
  var tabIos = document.getElementById('tab-ios');
  var tabAndroid = document.getElementById('tab-android');

  if (!iosSteps) return;

  if (platform === 'ios') {
    iosSteps.style.display = 'flex';
    androidSteps.style.display = 'none';
    tabIos.classList.add('platform-tab--active');
    tabAndroid.classList.remove('platform-tab--active');
  } else {
    iosSteps.style.display = 'none';
    androidSteps.style.display = 'flex';
    tabAndroid.classList.add('platform-tab--active');
    tabIos.classList.remove('platform-tab--active');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  detectPlatform();
});
