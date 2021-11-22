import { useState, useEffect } from "react"

export const Usedebouncevalue = (input: string = '', time: number = 500) => {

    const [debouncedValue, setDebouncedValue] = useState(input);

    useEffect(() => {
        //se dispara el seteo despues de que deje de escribir(input) o seleccionar(picker) el usuario y se cuenta 500 milesimas de segundos y recien dispara
        const timeout = setTimeout(() => {
            setDebouncedValue(input);
        }, time);

        return () => { //limpia la isntancia anterior
            clearTimeout(timeout);
        }
    }, [input]);

    return debouncedValue;
}
