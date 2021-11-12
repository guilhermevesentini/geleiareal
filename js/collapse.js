<script>
    document.querySelectorAll('.accordion__button').forEach (button => {
        button.addEventListener('click', ()=> {
            const accordionContent = button.nextElementSibling;

            button.classList.toggle('accordion__button--active');

                if (button.classList.contains('accordion__button--active')) {
                    accordionContent.style.maxHeight = accordionContent.scrollHeight + '150px'

                } else {
                    accordionContent.style.maxHeight = 0;
                }
        });
    });
</script>