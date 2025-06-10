// Mobile menu toggle
document.getElementById('mobile-menu').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
    
    const icon = this.querySelector('i');
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});