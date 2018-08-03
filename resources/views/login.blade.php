<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Login</title>


</head>
<body class="">
<div id="app">
    <login>
    </login>
</div>


<script>
    let baseUrl = '{!! config('app.api_url') !!}';
    let serverUrl = '{!! config('app.server_url') !!}';
</script>
<script src="/js/app.js"></script>

</body>
</html>


