// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Simple “Request Booking” handler – opens email draft
const buttons = document.querySelectorAll('.btn-book');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const session = btn.getAttribute('data-session');
    const subject = encodeURIComponent(`Autumn Mini Session – ${session}`);
    const body = encodeURIComponent(
`Hi John,

I’d like to request a booking for ${session} at Carlton Gardens.

Name:
Phone:
Number of people:
Type of session (couple/family/portrait/other):
Any notes:

Thanks!`
    );
    window.location.href = `mailto:youremail@example.com?subject=${subject}&body=${body}`;
  });
});
