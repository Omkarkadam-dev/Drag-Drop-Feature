let lists = document.getElementsByClassName("list");

let RightBox = document.getElementById("right");
let LeftBox = document.getElementById("left");

for (list of lists) {
    list.addEventListener("dragstart", function (e) {
        let selected = e.target;

        RightBox.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        RightBox.addEventListener("drop", function (e) {
            RightBox.appendChild(selected);
            selected = null;
        });



        LeftBox.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        LeftBox.addEventListener("drop", function (e) {
            LeftBox.appendChild(selected);
            selected = null;
        });
    })
}