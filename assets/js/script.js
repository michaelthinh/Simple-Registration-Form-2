const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var formGroups = $$(".form-group");

formGroups.forEach(function (group) {
    group.onclick = function () {
        var activeGroup = $(".form-group.active");
        if (activeGroup != this) {
            activeGroup.classList.remove("active");
            this.classList.add("active");
        }
    };
});
