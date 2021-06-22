(function ($) {
    $(document).ready(function () {
        // Fill this with your site specific JS code
        $(".project-img").mouseenter(function () {
            $(this).context.originalImage = $(this).context.attributes.style.value;
            $(this).context.attributes.style.value = "background-image: url('/static/projects/sun.gif');"
        })

        $(".project-img").mouseleave(function () {
            $(this).context.attributes.style.value = $(this).context.originalImage;
        })
    });
})(jQuery);