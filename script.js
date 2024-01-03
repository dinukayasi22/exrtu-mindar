
window.addEventListener("DOMContentLoaded", (event) => {
    const sceneEl = document.querySelector("#scene");
  
    sceneEl.addEventListener("arReady", (event) => {
    
      var showCone = false;
    
      const cone = document.getElementById("orange-cone");
      cone.setAttribute("visible", showCone);
      const logo = document.getElementById("ir-logo");
      
      const switchButton = document.getElementById("next-button");
      const studioMarker = document.getElementById("studio-marker");
      studioMarker.addEventListener("targetFound", (event) => {
  
        switchButton.style.display = "block";
  
        switchButton.addEventListener("click", () => {
          
          showCone = !showCone;
          cone.setAttribute("visible", showCone);
          logo.setAttribute("visible", !showCone);
  
          
        });
      });
  
      studioMarker.addEventListener("targetLost", (event) => {
        switchButton.style.display = "none";
      });
    });
  });
  