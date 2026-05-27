"use client";

import CurriculoForm from "../CurriculoForm";
import type { CurriculoFormData } from "../types";
import { cadastrarCurriculo } from "@/services/curriculosService";

export default function CadastrarCurriculo() {
    async function salvarCurriculo(data: CurriculoFormData) {
        await cadastrarCurriculo(data);
    }

    return <CurriculoForm modo="criar" onSave={salvarCurriculo} />;
}
