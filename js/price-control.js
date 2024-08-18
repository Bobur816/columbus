const rangeInput = document.querySelectorAll(".range-input__big input");
const priceInput = document.querySelectorAll(".price-input__big input");
let progress = document.querySelector(".filter-prices__slider__progress__big");
let priceGap = 1000000;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(priceInput[0].value);
    let maxVal = parseInt(priceInput[1].value);

    if (maxVal - minVal >= priceGap && maxVal < 15000000 && minVal > 0) {
      if (e.target.classList.contains("input-min")) {
        rangeInput[0].value = minVal;
        progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxVal;
        progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value);
    let maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});

const rangeInputMob = document.querySelectorAll(".range-input__mobile input");
const priceInputMob = document.querySelectorAll(".price-input__mobile input");
let progressMob = document.querySelector(
  ".filter-prices__slider__progress__mobile"
);

priceInputMob.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(priceInputMob[0].value);
    let maxVal = parseInt(priceInputMob[1].value);

    if (maxVal - minVal >= priceGap && maxVal < 15000000 && minVal > 0) {
      if (e.target.classList.contains("input-min")) {
        rangeInputMob[0].value = minVal;
        progressMob.style.left = (minVal / rangeInputMob[0].max) * 100 + "%";
      } else {
        rangeInputMob[1].value = maxVal;
        progressMob.style.right =
          100 - (maxVal / rangeInputMob[1].max) * 100 + "%";
      }
    }
  });
});

rangeInputMob.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInputMob[0].value);
    let maxVal = parseInt(rangeInputMob[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInputMob[0].value = maxVal - priceGap;
      } else {
        rangeInputMob[1].value = minVal + priceGap;
      }
    } else {
      priceInputMob[0].value = minVal;
      priceInputMob[1].value = maxVal;
      progressMob.style.left = (minVal / rangeInputMob[0].max) * 100 + "%";
      progressMob.style.right =
        100 - (maxVal / rangeInputMob[1].max) * 100 + "%";
    }
  });
});
