<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <h1>{{ $user->username }}</h1>

    <p>num of posts: {{ $count }}</p>
    <ul>
        @foreach ($posts as $post)
            <li><a href="/post/{{ $post->id }}">{{ $post->title }}: {{ $post->body }}</a>

                {{-- @if (auth()->user()->id === $user->id)
                    <a>edit</a>
                    <a>delete</a>
                @endif --}}

                <a href="/post/{{ $post->id }}/edit">edit</a>

                {{-- @can('delete', $post) --}}
                <form action="/post/{{ $post->id }}" method="POST">
                    @csrf
                    @method('DELETE')
                    <button>delete</button>
                </form>
                {{-- @endcan --}}

            </li>
        @endforeach
    </ul>
</body>

</html>
