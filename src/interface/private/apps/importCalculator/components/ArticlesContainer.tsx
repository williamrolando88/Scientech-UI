import { useDispatch } from 'react-redux';
import ArticleTableHeader from './ArticleTableHeader';

const columnHeaders =
  'Nº,Cant.,Descripción,Peso Unitario,Precio Unitario,Arancel,Margen,Costo Total,PVP'.split(
    ','
  );

const ArticlesContainer = () => {
  const headers = [
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

  return (
    <article className="bg-emerald-50">
      <h3>Detalle de artículos</h3>
      <div className="w-full rounded-md border">
        <div className="flex text-sm">
          {headers.map((header, i) => (
            <ArticleTableHeader key={i} header={header} />
          ))}
        </div>
      </div>

      <div></div>
    </article>
  );
};

export default ArticlesContainer;
