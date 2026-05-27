import CurriculoDetalheClient from "./CurriculoDetalheClient";

export default async function PaginaItemCurriculo({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return <CurriculoDetalheClient id={id} />;
}
