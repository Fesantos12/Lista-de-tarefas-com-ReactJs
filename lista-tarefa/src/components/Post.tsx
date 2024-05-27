import { X } from 'lucide-react';
import { Key, MouseEventHandler, ReactNode } from 'react';

type postProps = {
  key: Key;
  text: ReactNode;
  onClick: MouseEventHandler;
};

export const Post = ({ key, text, onClick }: postProps) => {
  return (
    <div
      key={key}
      className="w-[700px] h-[100px] rounded-xl bg-slate-600 flex items-center justify-between px-5"
    >
      <p className="text-2xl text-white font-medium">{text}</p>
      <button
        onClick={onClick}
        className="w-8 h-8 bg-red-600 flex items-center justify-center rounded"
      >
        <X color="white" size={20} />
      </button>
    </div>
  );
};
