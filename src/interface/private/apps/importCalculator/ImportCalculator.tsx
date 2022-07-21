import ArticlesContainer from './components/ArticlesContainer';

const ImportCalculator = () => {
  return (
    <section>
      <div>
        <button>Nuevo</button>
        <button>Guardar</button>
        <button>Recuperar</button>
        <button>Limpiar</button>
      </div>

      <ArticlesContainer />

      <div>aqui vienen los costos fijos</div>

      <div>aqui viene el reporte</div>
    </section>
  );
};

export default ImportCalculator;
