export default (() => {
    const items = [
        {
            title: 'الرئيسية',
            uri: '/',
            slug: 'home',
        },
        {
            title: 'اخبار الدار',
            uri: '/news',
            slug: 'news',
            sub: []
        },
        {
            title: 'المواطن',
            uri: '/cit',
            slug: 'cit',
            sub: [
                {
                    title: 'صور',
                    uri: '/cit-pic',
                    slug: 'cit-pic',
                },
            ]
        },
    ];
    return () => {
        return items;
    };
})();
