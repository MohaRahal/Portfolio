// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Remover tela de carregamento
  const loadingScreen = document.getElementById('loading');
  setTimeout(() => {
      loadingScreen.style.opacity = '0';
      setTimeout(() => {
          loadingScreen.style.display = 'none';
      }, 500);
  }, 1000);

  // Inicializar Vanta.js
  VANTA.WAVES({
      el: "#vanta-bg",
      color: 0x0a192f,
      waveHeight: 20,
      shininess: 50,
      waveSpeed: 1.0,
      zoom: 0.8
  });
});
