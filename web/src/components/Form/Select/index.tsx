import * as Select from "@radix-ui/react-select";
import { CaretDown, CaretUp } from "phosphor-react";
import { FieldError } from "react-hook-form";

interface SelectOptions {
  value: string;
  label: string;
}

interface SelectProps {
  title?: string;
  name: string;
  mandatory?: boolean;
  options: SelectOptions[];
  placeholder?: string;
  onSelect(value: string): void;
  error?: FieldError;
}

export function SelectRadix({
  title,
  name,
  mandatory,
  options,
  placeholder,
  onSelect,
  error,
}: SelectProps) {
  return (
    <div className="flex flex-col gap-2">
      {!!title && (
        <label htmlFor={name} className="font-semibold flex gap-1">
          {title} {mandatory && <div className="text-red-600">*</div>}
        </label>
      )}

      <Select.Root onValueChange={onSelect}>
        <Select.Trigger
          className={`bg-zinc-900 py-3 px-4 rounded flex items-center justify-between text-sm [&[data-placeholder]]:text-zinc-500 border-2 ${
            !!error ? "border-red-600" : "border-transparent"
          }`}
        >
          <Select.Value placeholder={placeholder} />
          <Select.Icon>
            <CaretDown size={20} weight="bold" className="text-zinc-400" />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content className="overflow-hidden bg-zinc-900 rounded relative">
            <Select.ScrollUpButton className="flex items-center justify-center p-2">
              <CaretUp size={20} className="text-white" />
            </Select.ScrollUpButton>

            <Select.Viewport>
              {options.map(({ label, value }) => (
                <div key={value}>
                  <Select.Item
                    key={value}
                    value={value}
                    className="flex items-center py-2 px-4 text-zinc-300 cursor-pointer [&[data-highlighted]]:bg-violet-400 [&[data-state=checked]]:bg-violet-400 [&[data-highlighted]]:text-white [&[data-state=checked]]:text-white"
                  >
                    <Select.ItemText>{label}</Select.ItemText>
                  </Select.Item>
                  <Select.Separator />
                </div>
              ))}
            </Select.Viewport>
            <Select.ScrollDownButton className="flex items-center justify-center p-2">
              <CaretDown size={20} className="text-white" />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>

      {error && <span className="text-red-600 text-xs">{error.message}</span>}
    </div>
  );
}
