export default (() => {
    const items = [
        {
            id: '1',
            name: '#الملك محمد السادس',
        },
        {
            id: '2',
            name: '#إقتصاد',
        },
        {
            id: '3',
            name: '#سياسة',
        },
        {
            id: '4',
            name: '#المغرب',
        },
        {
            id: '5',
            name: '#تويتر',
        },
    ];
    return (num) => {
        let arr = [];
        let indexes = [];
        for (let i = 0; i < num; i++) {
            let index;
            do {
                index = Math.floor(Math.random() * Math.floor(items.length));
            }
            while (indexes.includes(index));
            indexes.push(index);
            arr.push(items[index]);
        }
        return num === 1 ? arr[0] : arr;
    };
})();
