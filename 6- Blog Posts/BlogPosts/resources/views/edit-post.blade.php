<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <form action="/post/{{ $post->id }}" method="POST">
        @csrf
        @method('PUT')
        <input name="title" value="{{ $post->title }}"></input>
        <textarea name="body">{{ $post->body }}</textarea>
        <button>save change</button>
    </form>
</body>

</html>
