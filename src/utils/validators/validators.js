export const required = value=> {
    if (value) return undefined;
    return 'The field is required';
}

export const maxLenCreator = maxLen => value => {
    if (value.length>maxLen) return 'The maximum length is '+maxLen+' symbols';
    return undefined;
}