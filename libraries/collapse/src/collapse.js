
const Collapse = (($) => {

    class Collapse {
        constructor(element) {
            const child = $(element).data('child');
            const trigger = $(element).data('item');
            this.toggle(element, trigger, child);
        }

        toggle(element, trigger, child) {
            let items = $(element).find(trigger);

            $(items).click(function () {
                $(this).toggleClass('open');
                $(this).find(child).slideToggle("slow");
            });
        }
    }

    $('body').ready(function () {
        const elements = $('[data-module="Collapse"]');
        $(elements).each(function () {
            const collapseItems = new Collapse(this);
        });
    });

    return Collapse
})($)
