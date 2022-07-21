interface ArticleShape {
  input: ArticleInput;
  output: ArticleOutput;
}

type ArticleInput = {
  [key: string]: string | number;
  cantidad: number;
  descripcion: string;
  peso: number;
  precioUnitario: number;
  arancel: number;
  margen: number;
};

type ArticleOutput = {
  [key: string]: number;
  costoTotalUnitario: number;
  gananciaUnitaria: number;
  pvpUnitario: number;
};
