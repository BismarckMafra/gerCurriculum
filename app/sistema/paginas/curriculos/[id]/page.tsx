import CurriculoDetalheClient from "./CurriculoDetalheClient";

type PageProps = {
  params: {
    id: string;
  };
};

export default function PaginaItemCurriculo({ params }: PageProps) {
  return <CurriculoDetalheClient id={params.id} />;
}
