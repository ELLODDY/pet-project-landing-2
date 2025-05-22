// не подключен

const description = document.querySelector('.radio-description');
const radios = document.querySelectorAll('input[name="investorType"]');

const texts = {
  individual: 'I am a natural person investing on my own behalf as a sole owner, joint tenant, or tenant in common.'
};

radios.forEach(radio => {
  radio.addEventListener('change', () => {
    description.textContent = texts[radio.value];
  });
});