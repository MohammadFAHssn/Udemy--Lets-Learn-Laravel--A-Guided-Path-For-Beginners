<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <p>welcom {{ auth()->user()->username }}</p>

    <form action="/logout" method="POST">
        @csrf
        <button>log out</button>
    </form>

    @if (session()->has('success'))
        <p style="color: green;">
            {{ session('success') }}
        </p>
    @endif
</body>

</html>
