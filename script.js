// Função para alterar a imagem
function changeImage(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      var imageField = document.getElementById("imageField");
      if (imageField) {
        imageField.src = e.target.result;
      } else {
        console.error('Element with id "imageField" not found');
      }
    };

    reader.readAsDataURL(input.files[0]); // convert to base64 string
  }
}

// Adicionar ouvinte de evento ao campo de entrada de arquivo
var imageInput = document.getElementById("imageInput");
if (imageInput) {
  imageInput.addEventListener("change", function () {
    changeImage(this);
  });
} else {
  console.error('Element with id "imageInput" not found');
}
