const doMath = (arr, operator) => {
  const index = arr.findIndex((item) => item === operator);

  switch (operator) {
    case "+":
      if (isSubmited && isNaN(arr[index + 1])) throw "err/1";
      if (!arr[index - 1]) arr.splice(index, 1);
      else arr.splice(index - 1, 3, arr[index - 1] + arr[index + 1]);
      break;

    case "-":
      if (isSubmited && isNaN(arr[index + 1])) throw "err/1";
      arr.splice(index, 2, "+", -1 * arr[index + 1]);
      break;

    case "*":
      if (isSubmited && (isNaN(arr[index - 1]) || isNaN(arr[index + 1])))
        throw "err/1";
      arr.splice(index - 1, 3, arr[index - 1] * arr[index + 1]);
      break;

    case "/":
      if (
        isSubmited &&
        (isNaN(arr[index - 1]) || isNaN(arr[index + 1] || arr[index + 1] === 0))
      )
        throw "err/1";
      else arr.splice(index - 1, 3, arr[index - 1] / arr[index + 1]);
      break;

    case "^":
      if (isSubmited && (isNaN(arr[index - 1]) || isNaN(arr[index + 1])))
        throw "err/1";
      arr.splice(index - 1, 3, Math.pow(arr[index - 1], arr[index + 1]));
      break;

    case "(":
      if (isSubmited && !isNaN(arr[index - 1])) throw "err/1";

      const temp = arr.slice(
        arr.lastIndexOf("(") + 1,
        arr.indexOf(")", arr.lastIndexOf("("))
      );

      if (temp.length)
        arr.splice(arr.lastIndexOf("("), temp.length + 2, calculate(temp));
      else arr.splice(arr.lastIndexOf("("), 2);
      break;

    default:
      break;
  }
};

const checkInput = (value) => {
  let inputArr = value.match(/[/\+\-\*\/\^\(\)/i]|[\d]+/g);
  inputArr = removeDuplicates(inputArr);
  console.log(value);

  return inputArr.map((item) =>
    !isNaN(item) && !isNaN(parseFloat(item)) ? +item : item
  );
};

const removeDuplicates = (arr) => {
  return (
    arr.length &&
    arr.filter(
      (item, index, arr) => ["(", ")"].includes(item) || item !== arr[index - 1]
    )
  );
};

const insertToInput = (selectedInput, newValue, newposition = null) => {
  let cursorPosition = selectedInput.selectionEnd;

  selectedInput.focus();
  selectedInput.value =
    selectedInput.value.slice(0, cursorPosition) +
    newValue +
    selectedInput.value.slice(cursorPosition);

  cursorPosition = newposition || cursorPosition;
  selectedInput.setSelectionRange(
    cursorPosition + newValue.length,
    cursorPosition + newValue.length
  );
};

["input", "propertychange"].forEach((event) =>
  numberInput.addEventListener(event, (e) => {
    if (e.target.value) {
      equation = [...checkInput(e.target.value)];
      display(e.target.value);
    }
  })
);


const changeTheme = () => {
  const theme = localStorage.getItem("theme");

  if (theme === "light" || !theme) {
    document.body.classList.remove("dark");
    themeBtn.classList.remove("rotate-180");
  } else if (theme === "dark") {
    document.body.classList.add("dark");
    themeBtn.classList.add("rotate-180");
  }
};

document.addEventListener("DOMContentLoaded", () => changeTheme());

themeBtn.addEventListener("click", () => {
  const theme = localStorage.getItem("theme");

  if (theme === "light" || !theme) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }

  changeTheme();
});

historyBtn.addEventListener("click", () => {
  historyContainer.classList.toggle("-translate-x-full");
});

window.addEventListener("click", (e) => {
  if (!historyContainer.contains(e.target) && !historyBtn.contains(e.target)) {
    historyContainer.classList.add("-translate-x-full");
  }
});
