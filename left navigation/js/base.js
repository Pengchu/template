// collapse nav
$(document).on('click', '[data-ride="collapse"] a', function (e) {
    var $this = $(e.target),
        $active;
   
    $this.is('a') || ($this = $this.closest('a'));

    $active = $this.parent().siblings(".active");
    $active && $active.toggleClass('active').find('> ul:visible').slideUp(200);

    ($this.parent().hasClass('active') && $this.next().slideUp(200)) || $this.next().slideDown(200);
    $this.parent().toggleClass('active');

    $this.next().is('ul') && e.preventDefault();

    setTimeout(function () {
        $(document).trigger('updateNav');
    }, 300);
});