export default (() => {
    const item = {
        id: 1,
        name: 'سياسة',
        slug: 'politics',
        breadcrumb: [
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
        ],
    };
    return () => {
        return item;
    };
})();
