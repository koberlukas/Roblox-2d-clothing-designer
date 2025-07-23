const settingsModal = document.getElementById('settingsModal');
const openSettingsBtn = document.getElementById('openSettingsBtn');
const closeSettingsBtn = document.getElementById('closeSettingsBtn');
const themeSelect = document.getElementById('themeSelect');
const languageSelect = document.getElementById('languageSelect');

function loadSettings() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  const savedLanguage = localStorage.getItem('language') || 'en';

  themeSelect.value = savedTheme;
  languageSelect.value = savedLanguage;

  applyTheme(savedTheme);
  applyLanguage(savedLanguage);
}

function applyTheme(theme) {
  document.body.classList.remove('dark-mode', 'light-mode');
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.add('light-mode');
  }
}

function applyLanguage(lang) {
  // Placeholder: expand to localize UI later
  console.log('Language set to', lang);
}

themeSelect.addEventListener('change', () => {
  const selectedTheme = themeSelect.value;
  localStorage.setItem('theme', selectedTheme);
  applyTheme(selectedTheme);
});

languageSelect.addEventListener('change', () => {
  const selectedLanguage = languageSelect.value;
  localStorage.setItem('language', selectedLanguage);
  applyLanguage(selectedLanguage);
});

openSettingsBtn.addEventListener('click', () => {
  settingsModal.style.display = 'block';
});

closeSettingsBtn.addEventListener('click', () => {
  settingsModal.style.display = 'none';
});

// Initialize
loadSettings();
