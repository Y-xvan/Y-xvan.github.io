// Add clickable links to interests
(function() {
  console.log('Interests links script loaded');

  function initInterestLinks() {
    console.log('Initializing interest links...');

    // Map of interests to their tutorial URLs
    const interestLinks = {
      'Computer Vision': '#',
      'Large Language Models': '#',
      'Reinforcement Learning': '#'
    };

    // Try multiple selectors to find interests
    const selectors = [
      '.blox-resume-biography-3 .hbb-interests ul',
      '.hbb-interests ul',
      '[class*="interests"] ul',
      '.interests ul'
    ];

    let interestsList = null;
    for (const selector of selectors) {
      interestsList = document.querySelector(selector);
      if (interestsList) {
        console.log('Found interests list with selector:', selector);
        break;
      }
    }

    if (!interestsList) {
      console.warn('Interests list not found, will retry...');
      setTimeout(initInterestLinks, 500);
      return;
    }

    const items = interestsList.querySelectorAll('li');
    console.log('Found', items.length, 'interest items');

    items.forEach((item, index) => {
      const text = item.textContent.trim();
      console.log(`Interest ${index}: "${text}"`);

      // Check if this interest has a link
      if (interestLinks[text] && interestLinks[text] !== '#') {
        console.log(`Adding link to "${text}": ${interestLinks[text]}`);

        // Add data attribute
        item.setAttribute('data-link', interestLinks[text]);

        // Make it clearly clickable
        item.style.cursor = 'pointer';
        item.style.position = 'relative';

        // Add click handler
        item.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          console.log('Clicked on:', text, 'navigating to:', interestLinks[text]);
          window.location.href = interestLinks[text];
        });

        console.log(`Successfully added click handler to "${text}"`);
      }
    });
  }

  // Try to initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initInterestLinks);
  } else {
    initInterestLinks();
  }
})();
