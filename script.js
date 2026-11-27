document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.querySelector('.js-dialog');
  const openButton = document.querySelector('.js-open-modal');

  if (dialog && openButton) {
    openButton.addEventListener('click', (e) => {
      e.preventDefault(); 
      dialog.showModal(); 
    });

    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) {
        dialog.close();
      }
    });
  } 
});