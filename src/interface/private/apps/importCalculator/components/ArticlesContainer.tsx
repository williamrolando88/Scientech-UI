import Article from './Article';
import ArticleTableHeader from './ArticleTableHeader';

const articles: ArticleShape[] = [
  {
    input: {
      cantidad: 0,
      descripcion: 'Articulo 1',
      peso: 0,
      precioUnitario: 0,
      arancel: 0,
      margen: 0,
    },
    output: { costoTotalUnitario: 0, gananciaUnitaria: 0, pvpUnitario: 0 },
  },
  {
    input: {
      cantidad: 0,
      descripcion: 'Articulo 2',
      peso: 0,
      precioUnitario: 0,
      arancel: 0,
      margen: 0,
    },
    output: { costoTotalUnitario: 0, gananciaUnitaria: 0, pvpUnitario: 0 },
  },
];

const ArticlesContainer = () => {
  return (
    <article className="bg-emerald-50">
      <h3>Detalle de artículos</h3>
      <div className="w-full rounded-md border">
        <ArticleTableHeader />
      </div>

      <div>
        {articles.map((data, i) => (
          <Article key={i} data={data} index={i} />
        ))}
      </div>
    </article>
  );
};

export default ArticlesContainer;
