'use client'

import { useState } from 'react';
import { useTasksDispatch } from './TasksContext';

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();
  return (
    <div className='flex'>
      <input
        className='peer block w-1/2 rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        className='flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ml-2'
        onClick={() => {
          setText('');
          dispatch({
            type: 'added',
            id: nextId++,
            text: text,
          });
        }}>Add</button>
    </div>
  );
}

let nextId = 3;