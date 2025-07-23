
document.getElementById('start-fresh').onclick = () => {
  alert('Start Fresh clicked! (Feature coming soon)');
};
document.getElementById('upload-template').onclick = () => {
  alert('Upload Template clicked! (Feature coming soon)');
};
document.getElementById('add-layer').onclick = () => {
  const layerList = document.getElementById('layer-list');
  const newItem = document.createElement('li');
  newItem.textContent = 'New Layer';
  layerList.appendChild(newItem);
};
