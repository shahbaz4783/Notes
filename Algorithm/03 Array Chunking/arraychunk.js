const chunk = (arr, size) => {
    const chunked = [];

    for (let element of arr){
        const last = chunked[chunked.length -1];

        if (!last || last.length === size){
            chunked.push([element]);
        } else {
            last.push(element)
        }
    }

    return chunked;
}

module.exports = chunk;