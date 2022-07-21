import { TrashIcon } from '@heroicons/react/outline';

interface ArticleProps {
  data: ArticleShape;
  index: number;
}

const Article = ({ data, index }: ArticleProps) => {
  return (
    <div className="flex text-sm">
      <div className="w-12 rounded-md border bg-sky-400 text-center">
        <label className="font-bold">{index + 1}</label>
      </div>
      {Object.keys(data.input).map((inputKey, i) => (
        <InputField inputObject={data.input} inputKey={inputKey} key={i} />
      ))}
      {Object.keys(data.output).map((outputKey, i) => (
        <OutputField key={i} outputData={data.output[outputKey]} />
      ))}
      <div className="rounded-md border focus-within:bg-red-500 focus-within:text-red-900 hover:bg-red-500 hover:text-red-900">
        <button className="flex w-full items-center justify-center gap-1 outline-none">
          <TrashIcon className="h-5 w-5" />
          <span>Borrar</span>
        </button>
      </div>
    </div>
  );
};

export default Article;

interface InputFieldProps {
  inputObject: ArticleInput;
  inputKey: string;
}

const InputField = ({ inputObject, inputKey }: InputFieldProps) => {
  return (
    <div className="rounded-md border px-2">
      <div className="flex items-center gap-1 py-1">
        {inputKey === 'precioUnitario' && (
          <span className="font-semibold">$</span>
        )}
        <input
          className={`w-full grow select-text bg-transparent ${
            inputKey === 'cantidad' ? 'text-center' : 'text-left'
          }`}
          value={inputObject[inputKey]}
          type={inputKey === 'descripcion' ? 'text' : 'number'}
          min="0"
        />
        <span className="text-xs">
          {`${
            inputKey === 'arancel' || inputKey === 'margen'
              ? '%'
              : inputKey === 'peso'
              ? '[lb]'
              : ''
          }`}
        </span>
      </div>
    </div>
  );
};

interface OutputProps {
  outputData: number;
}

const OutputField = ({ outputData }: OutputProps) => {
  return (
    <div className="rounded-md border bg-neutral-200 px-2">
      <div className="flex items-center gap-1">
        <span>$</span>
        <span className="grow">{outputData}</span>
      </div>
    </div>
  );
};
