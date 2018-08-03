<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Al Dar</title>
    <link rel="stylesheet" type="text/css" href="/css/boilerplate.css">
    <link rel="stylesheet" type="text/css" href="/css/mygrid.css">
    <link rel="stylesheet" type="text/css" href="/css/iframes.css">

    <script src="/js/respond.min.js"></script>
</head>
<body>

<div id="app">
    <order slug="{!! $slug !!}">
    </order>
</div>

<script>
    let baseUrl = '{!! config('app.api_url') !!}';
    let serverUrl = '{!! config('app.server_url') !!}';
</script>

{{--<script type="text/javascript" src="/js/jquery.js"></script>--}}
<script src="/js/app.js"></script>

<script defer src="/adminAssets/bootstrap.min.js"></script>
<script src="/adminAssets/js/jquery.ui.core.js"></script>
<script src="/adminAssets/js/jquery.ui.widget.js"></script>
<script src="/adminAssets/js/jquery.ui.mouse.js"></script>
<script src="/adminAssets/js/jquery.ui.draggable.js"></script>
<script src="/adminAssets/js/jquery.ui.sortable.js"></script>

<script>

    // $(window).on('load', function () {
    // });

    // $('body ,.closeAdminPanel, .closeIcon').click(function (e) {
    //     // $('.animateTop').animate({marginTop: '150px'}, 'fast').animate({marginTop: '-100%'}, 'fast');
    //     // $('.closePopup', window.parent.document).trigger('click');
    //
    // });

    $('#dontClosePopup').click(function (e) {
        e.stopImmediatePropagation();
    })

    $(function () {
        $("#sortable").sortable({
            revert: true,
            update: function (event, ui) {
                let arr = [];
                $('#sortable').children().each((index, item) => {
                    arr.push($(item).attr('data-id'));
                });
                $('#ids').val(arr.join(','));
            }
        });
        $("#draggable").draggable({
            connectToSortable: "#sortable",
            helper: "clone",
            revert: "invalid",

        });
        $("ul, li").disableSelection();
    });

</script>

</body>
</html>
