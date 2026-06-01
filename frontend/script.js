
        // Lenis Smooth Scroll Initialization
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        // Custom Cursor Logic
        const cursor = document.querySelector('.custom-cursor');
        const cursorOuter = document.querySelector('.cursor-outer');
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            cursorOuter.animate({
                left: `${e.clientX - 20}px`,
                top: `${e.clientY - 20}px`
            }, { duration: 500, fill: "forwards" });
        });

        const interactables = document.querySelectorAll('a, button, input, textarea, .group');
        interactables.forEach(item => {
            item.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(4)';
                cursor.style.opacity = '0.2';
                cursorOuter.style.transform = 'scale(1.5)';
                cursorOuter.style.borderColor = 'rgba(0,0,0,0.4)';
            });
            item.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.opacity = '1';
                cursorOuter.style.transform = 'scale(1)';
                cursorOuter.style.borderColor = 'rgba(0,0,0,0.2)';
            });
        });

        // Scroll Progress Bar
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById("progress-bar").style.width = scrolled + "%";
        });

        // Background Parallax Blobs
        window.addEventListener('scroll', () => {
            const scroll = window.pageYOffset;
            document.getElementById('blob-1').style.transform = `translate(${scroll * 0.1}px, ${scroll * 0.05}px)`;
            document.getElementById('blob-2').style.transform = `translate(${-scroll * 0.1}px, ${-scroll * 0.05}px)`;
            document.getElementById('blob-3').style.transform = `translate(${scroll * 0.05}px, ${scroll * 0.1}px)`;
        });

        // Reveal Animations Observer
        const observerOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal, .mask-reveal').forEach(el => observer.observe(el));

        // Header shrinking on scroll
        const header = document.querySelector('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('h-20');
                header.classList.remove('h-24');
            } else {
                header.classList.add('h-24');
                header.classList.remove('h-20');
            }
        });
        
        const expHeader = document.querySelector('.exp-header');
const expCard = document.querySelector('.exp-card');

if (expHeader && expCard) {
    expHeader.addEventListener('click', () => {
        expCard.classList.toggle('active');
    });
   };
const contactForm = document.getElementById("contact-form");
console.log("Contact form found:", contactForm);

if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const data = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        try {
            const response = await fetch(
                "https://my-portfolio-website-2kw6.onrender.com/api/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }
            );

            const result = await response.json();

            if (response.ok) {
                alert("Message sent successfully!");
                contactForm.reset();
            } else {
                alert(result.message || "Failed to send message.");
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong.");
        }
    });
}
