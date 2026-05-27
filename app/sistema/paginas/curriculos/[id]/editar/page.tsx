import EditarCurriculoClient from "./EditarCurriculoClient";

export default async function EditarCurriculoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return <EditarCurriculoClient id={id} />;
}
