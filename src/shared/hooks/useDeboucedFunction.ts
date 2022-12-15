import { useRef } from "react";

export default function useDebouncedFunction<F extends (props: any) => ReturnType<F>>(
    func: Function, delay: number
    ) {
    const ref = useRef<ReturnType<typeof setTimeout> | null>(null)

    return (...props: any) => {
        if (ref.current) clearTimeout(ref.current);
        
        ref.current = setTimeout(() => func(...props), delay);
    };
}