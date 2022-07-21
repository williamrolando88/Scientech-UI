import { PlusCircleIcon } from '@heroicons/react/solid';

interface Header {
  value: string;
  width: string;
  isButton: boolean;
  action?: () => void;
}

const tableHeaders = [
  { value: 'No.', width: 'w-10', isButton: false },
  { value: 'Cant.', width: 'w-16', isButton: false },
  { value: 'Descripción', width: 'w-80', isButton: false },
  { value: 'Peso Unitario', width: 'w-16', isButton: false },
  { value: 'Precio Unitario', width: 'w-16', isButton: false },
  { value: 'Arancel', width: 'w-16', isButton: false },
  { value: 'Margen', width: 'w-16', isButton: false },
  { value: 'Costo Total', width: 'w-16', isButton: false },
  { value: 'Ganancia Unitaria', width: 'w-16', isButton: false },
  { value: 'PVP Unitario', width: 'w-16', isButton: false },
  {
    value: 'Agregar Item',
    width: 'w-16',
    isButton: true,
    action: () => {
      console.log('add row!');
    },
  },
];

const ArticleTableHeader = () => {
  return (
    <div className="flex">
      {tableHeaders.map((header, i) => (
        <HeaderItem header={header} key={i} />
      ))}
    </div>
  );
};

export default ArticleTableHeader;

const HeaderItem = ({ header }: { header: Header }) =>
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
