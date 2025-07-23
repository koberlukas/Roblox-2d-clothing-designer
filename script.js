
document.getElementById('start-fresh').onclick = () => {
  alert('Start Fresh feature coming soon.');
};

document.getElementById('upload').onclick = () => {
  alert('Upload Template feature coming soon.');
};

document.getElementById('add-layer').onclick = () => {
  const layerList = document.getElementById('layer-list');
  const item = document.createElement('li');
  item.textContent = "Layer " + (layerList.children.length + 1);
  layerList.appendChild(item);
};

document.getElementById('theme-setting').onchange = (e) => {
  const theme = e.target.value;
  document.body.classList.toggle('light-theme', theme === 'light');
  document.getElementById('mode-info').textContent = theme === 'light' ? 'Light Mode' : 'Dark Mode';
};
