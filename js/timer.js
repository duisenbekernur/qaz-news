function updateTimer() {
    const currentTime = new Date().getTime();
    const elapsedTime = (currentTime - startTime) / 1000;
    document.getElementById('time').textContent = elapsedTime.toFixed(1) + ' секунд';
  }
  
  let startTime = new Date().getTime();
  updateTimer(); 
  
  
  setInterval(updateTimer, 1000);
  