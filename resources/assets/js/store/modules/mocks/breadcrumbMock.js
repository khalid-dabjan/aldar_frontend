export default (() => {
    const items = [
        {
            id: 2,
            slug: 'local',
            name: 'محلي',
        },
        {
            id: 1,
            slug: 'politics',
            name: 'سياسة',
        },
    ];
    return () => {
        return items;
    };
})();
