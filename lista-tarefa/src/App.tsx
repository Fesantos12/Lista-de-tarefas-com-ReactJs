import { useState } from 'react';
import { Nav } from './components/Nav';
import { Post } from './components/Post';

export function App() {
  const [post, setPost] = useState<string>('');
  const [criaPost, setCriaPost] = useState<string[]>([]);

  function createPost() {
    if (post.trim()) {
      setCriaPost([...criaPost, post]);
      setPost('');
    }
  }

  function removePost(index: number) {
    const newPost = criaPost.filter((_, i) => i !== index);

    setCriaPost(newPost);
  }

  return (
    <div className="w-full h-screen">
      <Nav />
      <div className="w-full h-[calc(100vh-56px)] flex flex-col items-center gap-10">
        <div className="w-[700px] h-40 bg-slate-600 mt-14 rounded-xl flex items-center px-8">
          <input
            type="text"
            id="Text"
            value={post}
            placeholder="Digite sua tarefa..."
            className="w-full h-10 flex-1 border-none outline-none rounded-s-lg pl-[5px]"
            onChange={(e) => setPost(e.target.value)}
          />
          <button
            className="w-20 h-10 bg-slate-900 rounded-e-lg flex items-center justify-center text-xl text-white font-semibold uppercase"
            onClick={createPost}
          >
            Criar
          </button>
        </div>

        {criaPost.map((post, index) => (
          <Post key={index} text={post} onClick={() => removePost(index)} />
        ))}
      </div>
    </div>
  );
}
