let string = "";
const input = document.querySelector("input");
const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener("click", e => {
        const targetElem = e.target.innerHTML;
        switch (targetElem) {
            case "=":
                try {
                    string = eval(string);
                } catch (error) {
                    string = "Error";
                }
                break;
            case "C":
                string = "";
                break;
            case "X":
                string = string.slice(0, -1);
                break;
            default:
                string += targetElem;
        }
        input.value = string;
    });
});
