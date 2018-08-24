
export const nameContains = (substring: string): (
    (item: {name: string}) => boolean
) => (
    ({name}) => name.includes(substring)
);
