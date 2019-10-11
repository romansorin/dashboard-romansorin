<!doctype html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    @env('production')
    <link href="{{ mix('app.css') }}" rel="stylesheet" />
    @elseenv('local')
    <link href="{{ asset('/css/app.css') }}" rel="stylesheet" />
    @endenv
</head>

</head>

<body class="bg-gray-100 h-screen antialiased leading-none">
    <div id="root"></div>

    <script charset="utf8" src="{{ asset('/js/app.js') }}"></script>
    @env('production')
    <script charset="utf8" src="{{ mix('app.js') }}"></script>
    @elseenv('local')
    @endenv

</body>

</html>