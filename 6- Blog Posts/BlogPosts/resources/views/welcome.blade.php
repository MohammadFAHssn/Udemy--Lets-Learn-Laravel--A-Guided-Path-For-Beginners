<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>

    {{-- @auth
        <p>user page</p>
    @else
        <p>home page</p>
    @endauth --}}

    <form action = "/register" method="POST">
        @csrf
        <label>username</label>
        <input value="{{ old('username') }}" name="username"></input>
        @error('username')
            <p>{{ $message }}</p>
        @enderror

        <label>email</label>
        <input value="{{ old('email') }}" name="email"></input>
        @error('email')
            <p>{{ $message }}</p>
        @enderror

        <label>passowrd</label>
        <input name="password"></input>
        @error('password')
            <p>{{ $message }}</p>
        @enderror

        <label>confirm password</label>
        <input name="password_confirmation"></input>
        @error('password_confirmation')
            <p>{{ $message }}</p>
        @enderror

        <button>sign up</button>
    </form>

    <form action = "/login" method="POST">
        @csrf
        <label>username</label>
        <input name="loginUsername"></input>

        <label>passowrd</label>
        <input name="loginPassword"></input>

        <button>log in</button>
    </form>

    @if (session()->has('success'))
        <p style="color: green;">
            {{ session('success') }}
        </p>
    @endif

    @if (session()->has('failed'))
        <p style="color: red;">
            {{ session('failed') }}
        </p>
    @endif
</body>

</html>
