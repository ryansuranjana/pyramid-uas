if (!navigator.onLine) {
  setInterval(() => {
    alert("Tugas ini pakai tailwindcss pak, jadi harus pakai internet");
  }, [2000]);
}

const inputFile = document.getElementById("input-file");
const inputFileForm = document.querySelector("#input-file input");
const labelFile = document.getElementById("label-file");
const previewImg = document.getElementById("preview-img");

function fileValidation(fileInput) {
  console.log(fileInput.target.files);
  if (fileInput?.target?.files && fileInput?.target?.files[0]) {
    labelFile.classList.add("hidden");
    const reader = new FileReader();
    reader.onload = function (e) {
      previewImg.src = e.target.result;
      previewImg.classList.remove("hidden");
    };
    reader.readAsDataURL(fileInput?.target?.files[0]);
  } else {
    labelFile.classList.remove("hidden");
    previewImg.classList.add("hidden");
    return false;
  }
}

inputFileForm.addEventListener("change", fileValidation);

inputFile.addEventListener("click", () => {
  console.log("input file click");
  inputFileForm.click();
});
