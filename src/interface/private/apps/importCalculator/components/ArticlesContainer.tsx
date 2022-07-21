import ArticleTableHeader from './ArticleTableHeader';

const ArticlesContainer = () => {
  return (
    <article className="bg-emerald-50">
      <h3>Detalle de artículos</h3>
      <div className="w-full rounded-md border">
        <ArticleTableHeader />
      </div>

      <div></div>
    </article>
  );
};

export default ArticlesContainer;
