const input = document.getElementById('range-input');
const monthly = document.querySelectorAll('.monthly');
const annually = document.querySelectorAll('.annually');

input.addEventListener('change', () => {
    monthly.forEach(month => {
        month.classList.toggle('active');
    })
    annually.forEach(year => {
        year.classList.toggle('active');
    })
})