const key = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const updateStorage = () => {
  localStorage.setItem(key, JSON.stringify(formData));
};

const loadFormData = () => {
  const savedData = localStorage.getItem(key);
  if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email || '';
    messageInput.value = formData.message || '';
  }
};

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  updateStorage();
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log('Submitted data:', formData);

  localStorage.removeItem(key);
  formData = { email: '', message: '' };
  form.reset();
});

loadFormData();
