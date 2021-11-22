export interface PickerInterface {
    select: string;
    onValueChange: (query: string) => void;
}