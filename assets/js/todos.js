let todoList = $("ul");
todoList.on("click", "li", function () {
    $(this).toggleClass("completed");
});

todoList.on("click", "span",
    function (event) {
        event.stopPropagation();
        $(this).parent().fadeOut(500,
            function () {
                $(this).remove()
            }
        );
    }
);

$("input[type='text']").keypress(
    function (event) {
        if (event.which === 13) {
            let task = $(this).val();
            $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + task + "</li>");
            $(this).val(null);
        }
    }
);

$("i.fa-plus").click(
    function () {
        $("input[type='text']").fadeToggle(300);
    }
);