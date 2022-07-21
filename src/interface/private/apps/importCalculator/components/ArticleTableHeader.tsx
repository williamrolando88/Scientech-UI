import { PlusCircleIcon } from '@heroicons/react/solid';
import React from 'react';

interface Header {
  value: string;
  width: string;
  isButton: boolean;
  action?: () => void;
}

const ArticleTableHeader = ({ header }: { header: Header }) =>
  header.isButton ? (
    <div
      className={`flex cursor-pointer items-center justify-center gap-1  rounded-md border bg-green-300 py-1 hover:bg-emerald-600 hover:text-white ${header.width}`}
      onClick={header.action}
    >
      <PlusCircleIcon className="h-5 w-5" />
      <span>{header.value}</span>
    </div>
  ) : (
    <div className={`rounded-md border bg-sky-500 px-2 ${header.width}`}>
      {header.value}
    </div>
  );

export default ArticleTableHeader;
