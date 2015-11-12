
$(function() {
    var flag = true;

    function toggle() {
        $('table').each(function(i, v) {
            if ($(this).hasClass('month')) {
                var tr = $(this).find('tr');
                var td = $(tr).find('td');
                $(td).each(function(i, v) {
                    if ($(v).hasClass('fri')) {
                        if (flag) {
                            $(v).addClass('highlight');
                        }
                        else {
                            $(v).removeClass('highlight');
                        }
                        flag = !flag;
                    }
                });
            }
        });
    }

    var button = $('<div><input type="submit" value="Toggle"></input></div>');
    $(button).on('click', function(event) {
        toggle();
    });
    button.appendTo('body');

    toggle();

});
