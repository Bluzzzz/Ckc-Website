$(document).ready(function() {
// Inject current year
$('#year').text(new Date().getFullYear());


// Mobile nav toggle
$('.nav-toggle').on('click', function() {
$('.main-nav').slideToggle(200);
});


// Smooth scroll for internal links (if any)
$('a[href^="#"]').on('click', function(e) {
var target = $(this.getAttribute('href'));
if(target.length) {
e.preventDefault();
$('html, body').stop().animate({ scrollTop: target.offset().top - 80 }, 500);
}
});


// Portfolio filter
$('.filter-btn').on('click', function() {
var filter = $(this).data('filter');
$('.filter-btn').removeClass('active');
$(this).addClass('active');


if(filter === 'all') {
$('.gallery-item').show();
} else {
$('.gallery-item').each(function() {
var cat = $(this).data('category');
if(cat === filter) $(this).show(); else $(this).hide();
});
}
});


// Simple contact form handling (client-side)
$('#contactForm').on('submit', function(e) {
e.preventDefault();
var name = $('#name').val().trim();
var phone = $('#phone').val().trim();
if(!name || !phone) {
alert('Please fill in your name and phone number.');
return;
}
// For GitHub Pages static site, you can integrate Formspree, Netlify Forms or email link.
alert('Thank you! Your message was sent (demo). Replace this with your form handler.');
$(this)[0].reset();
});


});