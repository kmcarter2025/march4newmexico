document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let targetId = this.getAttribute('href');
            let targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Dropdown functionality for mobile view
    var dropdowns = document.getElementsByClassName("dropdown");
    for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].getElementsByClassName("dropbtn")[0].onclick = function() {
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        }
    }

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdownContents = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdownContents.length; i++) {
                var openDropdown = dropdownContents[i];
                if (openDropdown.style.display === "block") {
                    openDropdown.style.display = "none";
                }
            }
        }
    };

    // Open external links in new tabs
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });

    // Scroll-to-Top Button JavaScript
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    };

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

    // Search functionality
    document.getElementById('searchInput').addEventListener('keyup', function() {
        var searchQuery = this.value.toLowerCase();
        var allResources = document.getElementById('resourceList').getElementsByTagName('li');

        for (var i = 0; i < allResources.length; i++) {
            var currentResource = allResources[i].textContent || allResources[i].innerText;
            if (currentResource.toLowerCase().indexOf(searchQuery) > -1) {
                allResources[i].style.display = "";
            } else {
                allResources[i].style.display = "none";
            }
        }
    });

    // Enhancements for strong links
    document.querySelectorAll('strong a').forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // Prevents the default link navigation
            // Custom functionality for strong links
            alert("Link clicked: " + this.href);
        });
    });
});
