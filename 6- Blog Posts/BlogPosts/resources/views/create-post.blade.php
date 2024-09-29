<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <form action="/create-post" method="POST">
        @csrf
        <input name="title"></input>
        <textarea name="body"></textarea>
        <button>post</button>
    </form>
</body>

</html>
