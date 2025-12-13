
    // Alert feature
    function showMessage() {
      alert("Sandwiches combine comfort, creativity, and nutrition — making them a timeless favorite.");
    }

    // Smooth scroll for navigation
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Theme accent toggle (font color emphasis)
    let accentOn = false;
    function toggleAccent() {
      document.body.style.color = accentOn ? '#1f3d36' : '#007E6E';
      accentOn = !accentOn;
    }

    // Dynamic greeting based on time
    window.addEventListener('load', () => {
      const hour = new Date().getHours();
      let greeting = 'Welcome';
      if (hour < 12) greeting = 'Good Morning';
      else if (hour < 18) greeting = 'Good Afternoon';
      else greeting = 'Good Evening';

      const hero = document.querySelector('.hero h2');
      hero.textContent = `${greeting}. Fresh. Simple. Delicious.`;
    });

    // Read more toggle for history
    const historyText = document.querySelector('.history p');
    const fullText = historyText.textContent + ' Today, sandwiches range from street food to gourmet cuisine, enjoyed by millions every day.';
    let expanded = false;

    historyText.insertAdjacentHTML('afterend', '<button onclick="toggleHistory()">Read More</button>');

    function toggleHistory() {
      if (!expanded) {
        historyText.textContent = fullText;
      } else {
        historyText.textContent = 'Named after John Montagu, the 4th Earl of Sandwich, this iconic dish began as a practical solution and evolved into a global culinary staple.';
      }
      expanded = !expanded;
    }
  