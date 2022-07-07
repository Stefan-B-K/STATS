export const stringToDate = (dateString: string, separator: string): Date => {
    const dateArr = dateString
        .split(separator)
        .map((value: string): number => parseInt(value))
    return new Date(dateArr[2], dateArr[1] - 1, dateArr[0])
}

