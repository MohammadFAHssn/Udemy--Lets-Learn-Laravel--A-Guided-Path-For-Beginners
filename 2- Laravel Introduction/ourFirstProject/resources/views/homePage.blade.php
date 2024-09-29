<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Hello, This is a blade template</h1>

    <p>A great number is {{ 2 + 2 }}</p>

    <p>The current year is {{ date('Y') }}</p>

    <p>Ok, This is {{$name}} and {{$catName}}</p>

    <ul>
        @foreach($persons as $person)
            <li>{{$person}}</li>       
        @endforeach
    </ul>
    <P>These are directivea in blade!!!</P>
</body>

</html>
