/**
 * NSBM EventHub - Client-Side JavaScript Application Logic
 * Interactive UI behaviors, Theme Switcher, Live Client Search/Filter, and AJAX seat registration.
 */

document.addEventListener('DOMContentLoaded', function () {
    
    // -------------------------------------------------------------
    // 1. Theme Switcher (Dark / Light Mode with localStorage)
    // -------------------------------------------------------------
    const currentTheme = localStorage.getItem('nsbm_theme') || 'light';
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateThemeIcon('dark');
    }

    const themeToggleBtn = document.getElementById('themeToggleBtn');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function () {
            let activeTheme = document.documentElement.getAttribute('data-theme');
            let newTheme = activeTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('nsbm_theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }

    function updateThemeIcon(theme) {
        const themeIcon = document.getElementById('themeIcon');
        if (themeIcon) {
            if (theme === 'dark') {
                themeIcon.className = 'bi bi-sun-fill text-warning';
            } else {
                themeIcon.className = 'bi bi-moon-stars-fill';
            }
        }
    }

    // -------------------------------------------------------------
    // 2. Client-Side Instant Live Search & Filter (No Page Reload)
    // -------------------------------------------------------------
    const searchInput = document.getElementById('clientSearchInput');
    const categorySelect = document.getElementById('clientCategorySelect');
    const eventCards = document.querySelectorAll('.event-card-item');

    function filterEvents() {
        if (!eventCards.length) return;

        const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
        const selectedCat = categorySelect ? categorySelect.value : '0';

        let visibleCount = 0;

        eventCards.forEach(function (card) {
            const title = card.getAttribute('data-title') || '';
            const venue = card.getAttribute('data-venue') || '';
            const desc = card.getAttribute('data-desc') || '';
            const catId = card.getAttribute('data-category-id') || '0';

            const matchesSearch = title.includes(searchTerm) || venue.includes(searchTerm) || desc.includes(searchTerm);
            const matchesCat = (selectedCat === '0' || catId === selectedCat);

            if (matchesSearch && matchesCat) {
                card.style.display = 'block';
                card.classList.add('animate-fade-in');
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        const noResultsMsg = document.getElementById('noResultsMsg');
        if (noResultsMsg) {
            noResultsMsg.style.display = visibleCount === 0 ? 'block' : 'none';
        }
    }

    if (searchInput) searchInput.addEventListener('input', filterEvents);
    if (categorySelect) categorySelect.addEventListener('change', filterEvents);

    // -------------------------------------------------------------
    // 3. Form Validation (Bootstrap HTML5)
    // -------------------------------------------------------------
    const forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });

    // -------------------------------------------------------------
    // 4. Confirm Delete Helper
    // -------------------------------------------------------------
    const deleteButtons = document.querySelectorAll('.btn-confirm-delete');
    deleteButtons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            const message = this.getAttribute('data-confirm-msg') || 'Are you sure you want to proceed?';
            if (!confirm(message)) {
                e.preventDefault();
            }
        });
    });

});
