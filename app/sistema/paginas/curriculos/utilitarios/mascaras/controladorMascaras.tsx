import { Controller, type Control, type FieldValues, type Path } from "react-hook-form";
import { PatternFormat } from "react-number-format";

type MaskedControlProps<T extends FieldValues> = {
    nome: Path<T>;
    control: Control<T>;
    mask: string;
    placeholder?: string;
    className?: string;
};

export function MaskedControl<T extends FieldValues>({
    nome,
    control,
    mask,
    placeholder,
    className = "border-2 border-blue-900 rounded",
}: MaskedControlProps<T>) {
    return (
        <Controller
            name={nome}
            control={control}
            render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
                <div className="flex flex-col">
                    <PatternFormat
                        format={mask} // Ex: "(##) #####-####"
                        mask="_"
                        value={value ?? ""}
                        onBlur={onBlur}
                        onValueChange={(values) => {
                            // Envia o valor formatado para o React Hook Form
                            onChange(values.formattedValue);
                        }}
                        getInputRef={ref}
                        placeholder={placeholder}
                        className={`${className} ${error ? 'border-red-500' : 'border-white'}`}
                    />
                    {error && <p className="text-red-600 text-sm mt-1">{error.message}</p>}
                </div>
            )}
        />
    );
}