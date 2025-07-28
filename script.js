    const sizeInfo = document.getElementById('sizeInfo');
    const h1 = sizeInfo.querySelector('h1');

    function updateSize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      h1.textContent = `Width: ${width} and Height: ${height}`;
    }

    window.addEventListener('resize', updateSize);
    updateSize(); // Initialize on page load
