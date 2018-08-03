<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Al dar</title>

    <link rel="stylesheet" type="text/css" href="/css/boilerplate.css">
    <link rel="stylesheet" type="text/css" href="/css/mygrid.css">
    <link rel="stylesheet" type="text/css" href="/css/flexslider.css">
    <link rel="stylesheet" type="text/css" href="/css/flexslider-rtl.css">
    <link rel="stylesheet" type="text/css" href="/css/main.css">

    <script src="/js/respond.min.js"></script>
    <!-- <link rel="shortcut icon" href="images/favicon.ico" /> -->
    <style>
        .btn-order {
            position: absolute;
            z-index: 1;
            top: 10px;
            right: 20px;
            background-color: rgba(255, 255, 255, 0.3);
        }
    </style>
</head>
<body>
<div id="app">
    <application></application>
</div>

{{--<script type="text/javascript" src="js/jquery.js"></script>--}}
{{--<script type="text/javascript" src="js/jquery.flexslider-min.js"></script>--}}
<script src="https://code.highcharts.com/highcharts.js"></script>

<script>
    let baseUrl = '{!! config('app.api_url') !!}';
    let serverUrl = '{!! config('app.server_url') !!}';
</script>

<script src="/js/app.js"></script>

<script type="text/javascript" src="/js/myscript.js"></script>
</body>
</html>
