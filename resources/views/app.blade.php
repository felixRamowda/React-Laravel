<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @viteReactRefresh
    @vite('src/main.jsx')
    @inertiaHead
    <title>Laravel</title>

</head>
<body class="antialiased">
@inertia    
</body>
</html>
