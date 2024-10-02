document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu-toggle');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closebtn');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            overlay.style.width = '100%';
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            overlay.style.width = '0';
        });
    }

    function toggleMore(event) {
        event.preventDefault();
        const moreSubmenu = event.currentTarget.nextElementSibling;
        moreSubmenu.classList.toggle('active');
    }

    
    
    const slideLeftElements = document.querySelectorAll('.slide-left');
    const slideRightElements = document.querySelectorAll('.slide-right');

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    slideLeftElements.forEach(element => {
        observer.observe(element);
    });

    slideRightElements.forEach(element => {
        observer.observe(element);
    });




















    document.getElementById('interest-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const interest = document.getElementById('interest').value;
        document.getElementById('results').innerText = 'Searching...';
    
        const apiKey = 'AIzaSyAT304IYtXhxIDHvifrF4H88-Il5fCCOxY'; // Enter your Google API Key here
        const searchEngineId = '107427397df82485d'; // Enter your Search Engine ID here
        const query = `${interest} online global competitions OR clubs`;
        const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${encodeURIComponent(query)}`;
    
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const results = data.items;
                let output = '<ol>'; // Start ordered list
                results.forEach((result, index) => {
                    const title = result.title;
                    const snippet = result.snippet;
                    const link = result.link;
                    output += `<li> <a href="${link}" target="_blank">${title}</a>:</strong> ${snippet}</li>`;
                });
                output += '</ol>'; // Close ordered list
                document.getElementById('results').innerHTML = output;
            })
            .catch(error => {
                document.getElementById('results').innerText = 'Sorry, something went wrong. Please try again later.';
                console.error('Error:', error);
            });
    });
    





    




    






    









});



function validateFileTutor() {
    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];
    const errorMessage = document.getElementById('error-message');

    if (file && file.size > 10 * 1024 * 1024) { // 10 MB limit
        errorMessage.textContent = 'File size must be less than 10 MB';
        return false;
    }

    errorMessage.textContent = '';
    return true;
}

function openFormTutor() {
    document.getElementById("form-container-tutor").style.display = "block";
    document.getElementById("modal-overlay-tutor").style.display = "block";
}

function closeFormTutor() {
    document.getElementById("form-container-tutor").style.display = "none";
    document.getElementById("modal-overlay-tutor").style.display = "none";
}

function openFormStudent() {
    document.getElementById("form-container-student").style.display = "block";
    document.getElementById("modal-overlay-student").style.display = "block";
}

function closeFormStudent() {
    document.getElementById("form-container-student").style.display = "none";
    document.getElementById("modal-overlay-student").style.display = "none";
}