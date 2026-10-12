(() => {
  const birthday = new Date('2026-10-22T00:00:00');
  const $ = id => document.getElementById(id);
  const pad = n => String(n).padStart(2, '0');

  function updateCountdown() {
    const now = new Date();
    let ms = birthday.getTime() - now.getTime();
    if (ms <= 0) {
      ['days','hours','minutes','seconds'].forEach(id => $(id).textContent = '00');
      $('countdownMessage').textContent = 'It is your sparkle day, Shana! Happy Birthday! 🎂💗';
      return;
    }
    const days = Math.floor(ms / 86400000); ms %= 86400000;
    const hours = Math.floor(ms / 3600000); ms %= 3600000;
    const minutes = Math.floor(ms / 60000); ms %= 60000;
    const seconds = Math.floor(ms / 1000);
    $('days').textContent = days;
    $('hours').textContent = pad(hours);
    $('minutes').textContent = pad(minutes);
    $('seconds').textContent = pad(seconds);
  }
  updateCountdown(); setInterval(updateCountdown, 1000);

  function confetti(amount = 65) {
    const symbols = ['💗','♡','✨','🌸','💖','✦'];
    for (let i = 0; i < amount; i++) {
      const el = document.createElement('span');
      el.className = 'confetti';
      el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      el.style.left = Math.random() * 100 + 'vw';
      el.style.setProperty('--dur', (2.4 + Math.random() * 2.5) + 's');
      el.style.setProperty('--drift', (Math.random() * 180 - 90) + 'px');
      el.style.setProperty('--size', (12 + Math.random() * 16) + 'px');
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 5200);
    }
  }
  let toastTimer;
  function toast(message) {
    const t = $('toast'); t.textContent = message; t.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
  }

  document.querySelectorAll('.candle').forEach(candle => {
    candle.addEventListener('click', () => {
      const on = candle.getAttribute('aria-pressed') === 'true';
      candle.setAttribute('aria-pressed', String(!on));
    });
  });
  $('wishBtn').addEventListener('click', () => {
    const allCandles = [...document.querySelectorAll('.candle')];
    allCandles.forEach(c => c.setAttribute('aria-pressed', 'false'));
    $('wishMessage').textContent = 'Wish sent! May Allah fill your life with joy, peace, health, and beautiful surprises. Ameen. 💗';
    confetti(42);
  });

  // Secret birthday letter: accepts the phrase with or without emoji/punctuation.
  const secretForm = $('secretForm');
  if (secretForm) {
    secretForm.addEventListener('submit', event => {
      event.preventDefault();
      const value = $('secretWord').value.toLowerCase().replace(/[^a-z]/g, '');
      if (value === 'littleprincess') {
        $('secretCard').hidden = true;
        $('unlockedLetter').hidden = false;
        confetti(55);
        $('unlockedLetter').scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        $('secretFeedback').textContent = 'Almost, princess! Try the words: little princess 💓';
        $('secretFeedback').classList.add('error');
        $('secretWord').focus();
      }
    });
  }

  $('confettiBtn').addEventListener('click', () => {
    confetti(100);
    toast('Sending Shana a whole sky full of love! 💗');
  });

  const modal = $('photoModal'), modalImg = $('modalImage');
  document.querySelectorAll('.photo-card').forEach(card => card.addEventListener('click', () => {
    modalImg.src = card.dataset.full;
    modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }));
  function closeModal() {
    modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true');
    modalImg.src = ''; document.body.style.overflow = '';
  }
  $('modalClose').addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // The music button takes visitors to the embedded Guzarish player.
  const musicBtn = $('musicBtn');
  if (musicBtn) musicBtn.addEventListener('click', () => {
    const song = document.querySelector('#song');
    if (song) song.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // Show the video section only when the optional uploaded clip is included.
  const video = document.querySelector('.video-section video');
  if (video) {
    video.addEventListener('loadedmetadata', () => document.querySelector('.video-section').hidden = false);
    video.addEventListener('error', () => document.querySelector('.video-section').hidden = true);
  }
})();

// Little Princess secret-letter surprise
(function(){
  const input=document.getElementById('magicWord');
  const button=document.getElementById('unlockLetterBtn');
  const letter=document.getElementById('unlockedLetter');
  const message=document.getElementById('unlockMessage');
  if(!input||!button||!letter||!message)return;
  function unlock(){
    const word=input.value.trim().toLowerCase().replace(/\s+/g,' ');
    if(word==='little princess'){letter.hidden=false;message.textContent='You did it, Little Princess! This letter is from Ahsan, with all his love. 💓';button.textContent='Letter unlocked ♡';letter.scrollIntoView({behavior:'smooth',block:'center'});}
    else{message.textContent='Not quite, princess. Try your magic words again. 💗';}
  }
  button.addEventListener('click',unlock);
  input.addEventListener('keydown',e=>{if(e.key==='Enter')unlock();});
})();
