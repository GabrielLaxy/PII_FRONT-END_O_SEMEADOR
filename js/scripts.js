
document.addEventListener('DOMContentLoaded', function () {
  const enviar = document.querySelector('.enviar');
  
  enviar.addEventListener('click', function (event) {
      event.preventDefault(); // Previne o envio do formulário imediatamente
      const inputs = document.querySelectorAll('input[required], textarea[required]');
      let allFilled = true;

      inputs.forEach(function (input) {
          if (!input.value) {
              allFilled = false;
              input.classList.add('is-invalid');
          } else {
              input.classList.remove('is-invalid');
          }
      });

      if (allFilled) {
          alert('Mensagem enviada!');
          event.target.closest('form').reset();
      } else {
          alert('Por favor, preencha todos os campos obrigatórios.');
      }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const enviar = document.querySelector('.enviarMatricula');

  enviar.addEventListener('click', function (event) {
      event.preventDefault(); // Previne o envio do formulário imediatamente
      const inputs = document.querySelectorAll('input[required], textarea[required]');
      let allFilled = true;

      inputs.forEach(function (input) {
          if (!input.value) {
              allFilled = false;
              input.classList.add('is-invalid');
          } else {
              input.classList.remove('is-invalid');
          }
      });

      if (allFilled) {
          alert('Mensagem enviada!');
          document.getElementById('matriculaForm').reset();
      } else {
          alert('Por favor, preencha todos os campos obrigatórios.');
      }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const enviar = document.querySelector('.enviarCodigo');
  const codigoInput = document.getElementById('codigoInput');
  const inputFile = document.getElementById('input-file');
  const inputFilePreto = document.getElementById('input-file-preto');
  const selectedImage = document.getElementById('selected-image');
  const selectedImagePreto = document.getElementById('selected-image-preto');
  let lastUploadedFileName = ''; // Variável para armazenar o último nome de arquivo carregado

  enviar.addEventListener('click', function (event) {
      event.preventDefault(); // Previne o envio do formulário imediatamente

      const codigoFilled = codigoInput.value.trim() !== '';
      const inputFileFilled = inputFile.files.length > 0 || inputFilePreto.files.length > 0;
      let newFileUploaded = false;

      // Verifica se um novo arquivo foi carregado comparando o nome do arquivo
      if (inputFile.files.length > 0) {
          const currentFileName = inputFile.files[0].name;
          if (currentFileName !== lastUploadedFileName) {
              newFileUploaded = true;
              lastUploadedFileName = currentFileName; // Atualiza o nome do último arquivo carregado
          }
      } else if (inputFilePreto.files.length > 0) {
          const currentFileName = inputFilePreto.files[0].name;
          if (currentFileName !== lastUploadedFileName) {
              newFileUploaded = true;
              lastUploadedFileName = currentFileName; // Atualiza o nome do último arquivo carregado
          }
      }

      if (codigoFilled || (inputFileFilled && newFileUploaded)) {
          alert('Doação enviada!');
          document.getElementById('codigoForm').reset();
          selectedImage.src = '/IMAGENS/Frame 3.png'; // Retorna à imagem inicial
          selectedImagePreto.src = '/IMAGENS/Frame 3-Preto.png'; // Retorna à imagem inicial
      } else {
          alert('Por favor, preencha o número do código de barras ou faça o upload de uma imagem.');
      }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  function handleImageUpload(inputFile, selectedImage) {
      inputFile.addEventListener('change', function () {
          const file = inputFile.files[0];
          if (file) {
              const reader = new FileReader();
              reader.onload = function (e) {
                  const img = new Image();
                  img.onload = function () {
                      const canvas = document.createElement('canvas');
                      const ctx = canvas.getContext('2d');

                      const targetWidth = 150;
                      const scaleFactor = targetWidth / img.width;
                      const targetHeight = img.height * scaleFactor;

                      canvas.width = targetWidth;
                      canvas.height = targetHeight;

                      ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

                      selectedImage.src = canvas.toDataURL('image/jpeg');
                  };
                  img.src = e.target.result;
              };
              reader.readAsDataURL(file);
          }
      });
  }

  const inputFile = document.getElementById('input-file');
  const selectedImage = document.getElementById('selected-image');
  handleImageUpload(inputFile, selectedImage);

  const inputFilePreto = document.getElementById('input-file-preto');
  const selectedImagePreto = document.getElementById('selected-image-preto');
  handleImageUpload(inputFilePreto, selectedImagePreto);
});
