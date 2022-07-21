import { TrashIcon } from '@heroicons/react/outline';

const Article = () => {
  return (
    <div className="text-sm">
      <div className="w-12 rounded-md border bg-sky-400 text-center">
        <label className="font-bold">{index + 1}</label>
      </div>

      {inputArray.map((input, i) => (
        <InputField key={i} input={input} />
      ))}

      {outputArray.map((field, i) => (
        <OutputField key={i} output={field} />
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

const InputField = () => {
  return (
    <div key={input.name} className="rounded-md border px-2">
      <div className="flex items-center gap-1 py-1">
        {input.name === 'precioUnitario' ? (
          <span className="font-semibold">$</span>
        ) : null}
        <input
          className={`w-full grow select-text bg-transparent ${
            input.name === 'cantidad' ? 'text-center' : 'text-left'
          }`}
          name={input.name}
          onFocus={(e) => e.target.select()}
          value={input.value}
          type={input.name === 'descripcion' ? 'text' : 'number'}
          pattern={input.name === 'descripcion' ? '' : '[0-9]'}
          min="0"
        />
        <span className="text-xs">
          {`${
            input.name === 'arancel'
              ? '%'
              : input.name === 'margen'
              ? '%'
              : input.name === 'peso'
              ? '[lb]'
              : input.name === 'precioUnitario'
              ? ''
              : ''
          }`}
        </span>
      </div>
    </div>
  );
};

const OutputField = () => {
  return (
    <div key={field.name} className="rounded-md border bg-neutral-200 px-2">
      <div className="flex items-center gap-1">
        <span>$</span>
        <span className="grow">{field.value}</span>
      </div>
    </div>
  );
};

/*

<tr
      className="text-sm"
      onBlur={() => dispatch(updateArticle({ article: userInput, id }))}>
      <td className="w-12 rounded-md border bg-sky-400 text-center">
        <label className="font-bold">{index + 1}</label>
      </td>

      {inputArray.map((input) => (
        <td key={input.name} className="rounded-md border px-2">
          <div className="flex items-center gap-1 py-1">
            {input.name === 'precioUnitario' ? (
              <span className="font-semibold">$</span>
            ) : null}
            <input
              className={`w-full grow select-text bg-transparent ${
                input.name === 'cantidad' ? 'text-center' : 'text-left'
              }`}
              name={input.name}
              onFocus={(e) => e.target.select()}
              value={input.value}
              onChange={handleChange}
              type={input.name === 'descripcion' ? 'text' : 'number'}
              pattern={input.name === 'descripcion' ? '' : '[0-9]'}
              min="0"
            />
            <span className="text-xs">
              {`${
                input.name === 'arancel'
                  ? '%'
                  : input.name === 'margen'
                  ? '%'
                  : input.name === 'peso'
                  ? '[lb]'
                  : input.name === 'precioUnitario'
                  ? ''
                  : ''
              }`}
            </span>
          </div>
        </td>
      ))}
      
      {outputArray.map((field) => (
        <td key={field.name} className="rounded-md border bg-neutral-200 px-2">
          <div className="flex items-center gap-1">
            <span>$</span>
            <span className="grow">{field.value}</span>
          </div>
        </td>
      ))}

      <td className="rounded-md border focus-within:bg-red-500 focus-within:text-red-900 hover:bg-red-500 hover:text-red-900">
        <button
          onClick={() => dispatch(removeArticle(id))}
          className="flex w-full items-center justify-center gap-1 outline-none">
          <TrashIcon className="h-5 w-5" />
          <span>Borrar</span>
        </button>
      </td>
    </tr>

*/
