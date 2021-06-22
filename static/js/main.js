(function ($) {
    $(document).ready(function () {
        // Fill this with your site specific JS code
        $(".project-img").mouseenter(function () {
            $(this).context.originalImage = $(this).context.attributes.style.value;
            $(this).context.attributes.style.value = $(this).context.dataset.preview;
        })

        $(".project-img").mouseleave(function () {
            $(this).context.attributes.style.value = $(this).context.originalImage;
        })

    });

})(jQuery);
