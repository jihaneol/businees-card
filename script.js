const body = document.body;
const themeButton = document.querySelector('.theme-toggle');
const copyButton = document.querySelector('[data-copy]');
const toast = document.querySelector('.toast');
const flipCard = document.querySelector('.flip-card');

themeButton.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('business-card-theme', body.classList.contains('dark') ? 'dark' : 'light');
});

if (localStorage.getItem('business-card-theme') === 'dark') body.classList.add('dark');

flipCard.addEventListener('click', (event) => {
  if (event.target.closest('a, button')) return;
  flipCard.classList.toggle('is-flipped');
  flipCard.setAttribute('aria-pressed', flipCard.classList.contains('is-flipped'));
});

flipCard.addEventListener('keydown', (event) => {
  if (event.key !== 'Enter' && event.key !== ' ') return;
  event.preventDefault();
  flipCard.click();
});

copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(copyButton.dataset.copy);
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2200);
  } catch {
    window.location.href = `mailto:${copyButton.dataset.copy}`;
  }
});
