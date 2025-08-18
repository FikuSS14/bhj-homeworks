document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown');
  
    dropdowns.forEach(dropdown => {
      const valueElement = dropdown.querySelector('.dropdown__value');
      const list = dropdown.querySelector('.dropdown__list');
      const items = dropdown.querySelectorAll('.dropdown__item');

      valueElement.addEventListener('click', function () {
        list.classList.toggle('dropdown__list_active');
      });
  
      items.forEach(item => {
        const link = item.querySelector('.dropdown__link');
  
        link.addEventListener('click', function (event) {
          event.preventDefault(); 
  
          const newValue = link.textContent.trim();
  
          valueElement.textContent = newValue;
          list.classList.remove('dropdown__list_active');
        });
      });
    });
  
    document.addEventListener('click', function (event) {
      dropdowns.forEach(dropdown => {
        const valueElement = dropdown.querySelector('.dropdown__value');
        const list = dropdown.querySelector('.dropdown__list');
  
        if (!dropdown.contains(event.target)) {
          list.classList.remove('dropdown__list_active');
        }
      });
    });
  });
