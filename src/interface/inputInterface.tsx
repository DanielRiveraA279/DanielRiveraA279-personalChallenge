export interface InputInterface {
    placeholder: string;
    value: string;
    placeholderTextColor: string;
    onChangeText: (query: string) => void;
}