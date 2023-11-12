(() => {
    //variables
    const model = document.querySelector("#model");
    const hotspots = document.querySelectorAll(".Hotspot");
  
    //functions
    function modelLoaded() {
      hotspots.forEach(hotspot => {
        hotspot.style.display = "block";
        addHoverEffect(hotspot);
      });
    }
  
    function addHoverEffect(hotspot) {
      const originalScale = 1;
      const hoverScale = 1.2; // Adjust as needed
  
      hotspot.addEventListener("mouseover", () => {
        gsap.to(hotspot, {
          scale: hoverScale,
          duration: 0.3, // Duration of the grow animation
        });
      });
  
      hotspot.addEventListener("mouseout", () => {
        gsap.to(hotspot, {
          scale: originalScale,
          duration: 0.3, // Duration of the shrink animation
        });
      });
    }
  
    function showInfo() {
      let selected = document.querySelector(`button[slot="${this.slot}"] > div`);
      gsap.to(selected, 1, { autoAlpha: 1 });
    }
  
    function hideInfo() {
      let selected = document.querySelector(`button[slot="${this.slot}"] > div`);
      gsap.to(selected, 1, { autoAlpha: 0 });
    }
  
    // Event Listener
    model.addEventListener("load", modelLoaded);
  
    hotspots.forEach(function (hotspot) {
      hotspot.addEventListener("mouseover", showInfo);
      hotspot.addEventListener("mouseout", hideInfo);
    });
  })();
  