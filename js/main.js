const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//listen for tab click
function selectItem(e) {
  removeBorder();
  removeShow();
  //Add Border to current tab
  this.classList.add('tab-border');
  //grab content item from dom
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  //Add Show Class
  tabContentItem.classList.add('show');
}
function removeBorder() {
  tabItems.forEach(item => {
      item.classList.remove('tab-border');
  });
}
function removeShow() {
  tabItems.forEach(item => {
      item.classList.remove('show');
  });
}
tabItems.forEach(item => {
    item.addEventListener('click', selectItem);
            });
