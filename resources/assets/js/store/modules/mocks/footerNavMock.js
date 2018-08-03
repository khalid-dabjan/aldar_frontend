export default (() => {
    const items = [
        {
            title: 'الدار',
            items: [
                {
                    title: 'عن الدار',
                    url: '/page/about',
                },
                {
                    title: 'سياسه الخصوصيه',
                    url: '/page/privacy-policy',
                }
            ],
        },
        {
            title: 'المحتوي',
            items: [
                {
                    title: 'أخبار المغرب',
                    url: '/category/local',
                },
                {
                    title: 'الصور',
                    url: '/albums',
                },
                {
                    title: 'الفيديو',
                    url: '/videos',
                },
                {
                    title: 'الاخبار السياسية',
                    url: '/category/politics',
                },
            ],
        },
    ];
    return () => {
        return items;
    };
})();
