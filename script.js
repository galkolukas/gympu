function highlightText() {
  const searchInput = document.getElementById('searchInput');
  const searchValue = searchInput.value.trim();
  const contentElement = document.querySelector('.content');

  if (searchValue !== '') {
     const content = contentElement.textContent;
     const regex = new RegExp(searchValue, 'gi');
     const highlightedContent = content.replace(
        regex,
        (match) => `<span class="highlight">${match}</span>`
     );
     contentElement.innerHTML = highlightedContent;
   } else {
      contentElement.innerHTML = contentElement.textContent;
   }
}