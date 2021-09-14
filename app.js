const form = document.querySelector('#form');
const imageBox = document.querySelector('.img-box');
const button = document.querySelector('.delete');
const imagePreview = document.getElementById('image-preview');
const image = document.querySelector('#file-input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

imageBox.addEventListener('click', (e) => {
  if (!e.target.classList.contains('delete')) {
    image.click();
  } else {
    imagePreview.setAttribute('src', '');
    button.classList.remove('active');
    imageBox.style.border = '2px dashed #ccc';
  }
});

image.addEventListener('change', (e) => {
  const file = e.target.files[0]; // get the actual file that user selected

  // check that user selects or not
  if (file) {
    const reader = new FileReader(); // for image src

    imageBox.style.border = 'none';

    button.classList.add('active');

    reader.addEventListener('load', () => {
      imagePreview.setAttribute('src', reader.result);
    });
    reader.readAsDataURL(file);
  }
});
