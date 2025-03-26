<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function showCreateForm()
    {

        // if (!auth()->check()) {
        //     return redirect("/");
        // }

        return view('create-post');
    }

    public function storeNewPost(Request $request)
    {
        $incomingFields = $request->validate([
            'title' => 'required',
            'body' => 'required',
        ]);
        // I want to strip out any HTML tags that a malicious user might try to add
        $incomingFields['title'] = strip_tags($incomingFields['title']);
        $incomingFields['body'] = strip_tags($incomingFields['body']);
        $incomingFields['user_id'] = auth()->id();

        $newPost = Post::create($incomingFields);

        // return 'you post';
        return redirect("/post/{$newPost->id}");
    }

    // public function viewSinglePost()
    // {
    //     return view('single-post');
    // }

    public function viewSinglePost(Post $postId)
    // However, if you make the names match and we start to use the power of a model,
    // Laravel can perform database lookups for us
    // this syntax is called type hinting
    // We're hinting to Laravel that whatever this incoming value is,
    // we want to interpret it through the lens of what is a blog post, our post model
    // Laravel can look up the appropriate post in the database just based on this incoming ID value
    {

        // return $postId->title;
        // return view('single-post', ['title' => $postId->title]);
        return view('single-post', ['title' => $postId->user->username]);
    }

    public function delete(Post $post)
    {
        if (auth()->user()->cannot('delete', $post)) {
            return 'you are not allowed to delete this post';
        }

        $post->delete();

        return redirect('/profile/' . auth()->user()->username);
    }

    // public function delete(Post $post) ???
    // {
    //     $post->delete();

    //     return redirect('/profile/' . auth()->user()->username);
    // }

    public function showEditForm(Post $post)
    {

        if (auth()->user()->cannot('update', $post)) {
            return 'you are not allowed to update this post';
        }

        return view('edit-post', ['post' => $post]);
    }

    public function edit(Post $post, Request $request)
    {
        $incomingFields = $request->validate([
            'title' => 'required',
            'body' => 'required',
        ]);
        $incomingFields['title'] = strip_tags($incomingFields['title']);
        $incomingFields['body'] = strip_tags($incomingFields['body']);

        $post->update($incomingFields);

        // return redirect('/profile/' . auth()->user()->username);
        return back();
        // So it'll take the visitor to the URL they just came from previously

    }

}
