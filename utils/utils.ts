export const truncate = (source: string, size: number): string => source.length > size ? source.slice(0, size - 1) + "…" : source;
export const numberWithSpaces = (number: string | number): string => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
