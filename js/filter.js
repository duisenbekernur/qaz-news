const filterButton = document.getElementById('filter-button');
const filterMenu = document.getElementById('filter-menu');


filterButton.addEventListener('click', function () {
    if (filterMenu.style.display === 'none' || filterMenu.style.display === '') {
        filterMenu.style.display = 'block';
    } else {
        filterMenu.style.display = 'none';
    }
});


function applyFilters() {
    const selectedCategory = document.getElementById('category-filter').value;
    const selectedDate = document.getElementById('date-filter').value;
    const selectedCountry = document.getElementById('country-filter').value;

   
}


document.getElementById('category-filter').addEventListener('change', applyFilters);
document.getElementById('date-filter').addEventListener('change', applyFilters);
document.getElementById('country-filter').addEventListener('change', applyFilters);

applyFilters();
