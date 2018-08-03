export default (() => {
    const items = [
        {
            id: 1,
            title: 'جلالة الملك يسلم تجهيزات خاصة لحماية الماشية هبة من المغرب لغينيا بيساو 1',
            image_url: '/images/2.jpg',
            url: '/details/1',
            time_ago: 'منذ ٤ دقائق',
            excerpt: 'بيساو – أشرف صاحب الجلالة الملك محمد السادس ، نصره الله ، مرفوقا برئيس جمهورية غينيا بيساو السيد جوزي ماريو فاز ، اليوم الخميس بالقصر الرئاسي ببيساو ، على تسليم تجهيزات لتربية الماشية منحتها المملكة المغربية للحفاظ على القطيع في غينيا بيساو.',
            category_name: 'الخليج 1',
            category_url: '/category/gulf',
            author: { //required only if the post is an article.
                id: 1,
                name: 'ناديه احمد',
                title: 'صحفيه',
                url: '/author/1',
                image_url: '/images/writer.png'
            },
            share_url: 'http://aldar.test/details/1',
        },
        {
            id: 2,
            title: 'جلالة الملك يسلم تجهيزات خاصة لحماية الماشية هبة من المغرب لغينيا بيساو 2',
            image_url: '/images/2.jpg',
            url: '/details/2',
            time_ago: 'منذ ٤ دقائق',
            excerpt: 'بيساو – أشرف صاحب الجلالة الملك محمد السادس ، نصره الله ، مرفوقا برئيس جمهورية غينيا بيساو السيد جوزي ماريو فاز ، اليوم الخميس بالقصر الرئاسي ببيساو ، على تسليم تجهيزات لتربية الماشية منحتها المملكة المغربية للحفاظ على القطيع في غينيا بيساو.',
            category_name: 'الخليج 2',
            category_url: '/category/gulf',
            author: {
                id: 1,
                name: 'ناديه احمد',
                title: 'صحفيه',
                url: '/author/1',
                image_url: '/images/writer.png'
            },
            share_url: 'http://aldar.test/details/1',
        },
        {
            id: 3,
            title: 'جلالة الملك يسلم تجهيزات خاصة لحماية الماشية هبة من المغرب لغينيا بيساو 3',
            image_url: '/images/2.jpg',
            url: '/details/3',
            time_ago: 'منذ ٤ دقائق',
            excerpt: 'بيساو – أشرف صاحب الجلالة الملك محمد السادس ، نصره الله ، مرفوقا برئيس جمهورية غينيا بيساو السيد جوزي ماريو فاز ، اليوم الخميس بالقصر الرئاسي ببيساو ، على تسليم تجهيزات لتربية الماشية منحتها المملكة المغربية للحفاظ على القطيع في غينيا بيساو.',
            category_name: 'الخليج 3',
            category_url: '/category/gulf',
            author: {
                id: 1,
                name: 'ناديه احمد',
                title: 'صحفيه',
                url: '/author/1',
                image_url: '/images/writer.png'
            },
            share_url: 'http://aldar.test/details/1',
        },
        {
            id: 4,
            title: 'جلالة الملك يسلم تجهيزات خاصة لحماية الماشية هبة من المغرب لغينيا 4',
            image_url: '/images/2.jpg',
            url: '/details/4',
            time_ago: 'منذ ٤ دقائق',
            excerpt: 'بيساو – أشرف صاحب الجلالة الملك محمد السادس ، نصره الله ، مرفوقا برئيس جمهورية غينيا بيساو السيد جوزي ماريو فاز ، اليوم الخميس بالقصر الرئاسي ببيساو ، على تسليم تجهيزات لتربية الماشية منحتها المملكة المغربية للحفاظ على القطيع في غينيا بيساو.',
            category_name: 'الخليج 4',
            category_url: '/category/gulf',
            author: {
                id: 1,
                name: 'ناديه احمد',
                title: 'صحفيه',
                url: '/author/1',
                image_url: '/images/writer.png'
            },
            share_url: 'http://aldar.test/details/1',
        },
        {
            id: 5,
            title: 'جلالة الملك يسلم تجهيزات خاصة لحماية الماشية هبة من المغرب لغينيا بيساو 5',
            image_url: '/images/2.jpg',
            url: '/details/5',
            time_ago: 'منذ ٤ دقائق',
            excerpt: 'بيساو – أشرف صاحب الجلالة الملك محمد السادس ، نصره الله ، مرفوقا برئيس جمهورية غينيا بيساو السيد جوزي ماريو فاز ، اليوم الخميس بالقصر الرئاسي ببيساو ، على تسليم تجهيزات لتربية الماشية منحتها المملكة المغربية للحفاظ على القطيع في غينيا بيساو.',
            category_name: 'الخليج 5',
            category_url: '/category/gulf',
            author: {
                id: 1,
                name: 'ناديه احمد',
                title: 'صحفيه',
                url: '/author/1',
                image_url: '/images/writer.png'
            },
            share_url: 'http://aldar.test/details/1',
        },
        {
            id: 6,
            title: 'جلالة الملك يسلم تجهيزات خاصة لحماية الماشية هبة من المغرب لغينيا بيساو 6',
            image_url: '/images/2.jpg',
            url: '/details/6',
            time_ago: 'منذ ٤ دقائق',
            excerpt: 'بيساو – أشرف صاحب الجلالة الملك محمد السادس ، نصره الله ، مرفوقا برئيس جمهورية غينيا بيساو السيد جوزي ماريو فاز ، اليوم الخميس بالقصر الرئاسي ببيساو ، على تسليم تجهيزات لتربية الماشية منحتها المملكة المغربية للحفاظ على القطيع في غينيا بيساو.',
            category_name: 'الخليج 6',
            category_url: '/category/gulf',
            author: {
                id: 1,
                name: 'ناديه احمد',
                title: 'صحفيه',
                url: '/author/1',
                image_url: '/images/writer.png'
            },
            share_url: 'http://aldar.test/details/1',
        },
        {
            id: 7,
            title: 'جلالة الملك يسلم تجهيزات خاصة لحماية الماشية هبة من المغرب لغينيا بيساو 7',
            image_url: '/images/2.jpg',
            url: '/details/7',
            time_ago: 'منذ ٤ دقائق',
            excerpt: 'بيساو – أشرف صاحب الجلالة الملك محمد السادس ، نصره الله ، مرفوقا برئيس جمهورية غينيا بيساو السيد جوزي ماريو فاز ، اليوم الخميس بالقصر الرئاسي ببيساو ، على تسليم تجهيزات لتربية الماشية منحتها المملكة المغربية للحفاظ على القطيع في غينيا بيساو.',
            category_name: 'الخليج 7',
            category_url: '/category/gulf',
            author: {
                id: 1,
                name: 'ناديه احمد',
                title: 'صحفيه',
                url: '/author/1',
                image_url: '/images/writer.png'
            },
            share_url: 'http://aldar.test/details/1',
        },
        
        {
            id: 8,
            title: 'جلالة الملك يسلم تجهيزات خاصة لحماية الماشية هبة من المغرب لغينيا بيساو 8',
            image_url: '/images/2.jpg',
            url: '/details/8',
            time_ago: 'منذ ٤ دقائق',
            excerpt: 'بيساو – أشرف صاحب الجلالة الملك محمد السادس ، نصره الله ، مرفوقا برئيس جمهورية غينيا بيساو السيد جوزي ماريو فاز ، اليوم الخميس بالقصر الرئاسي ببيساو ، على تسليم تجهيزات لتربية الماشية منحتها المملكة المغربية للحفاظ على القطيع في غينيا بيساو.',
            category_name: 'الخليج 8',
            category_url: '/category/gulf',
            author: {
                id: 1,
                name: 'ناديه احمد',
                title: 'صحفيه',
                url: '/author/1',
                image_url: '/images/writer.png'
            },
            share_url: 'http://aldar.test/details/1',
        },
        
        {
            id: 9,
            title: 'جلالة الملك يسلم تجهيزات خاصة لحماية الماشية هبة من المغرب لغينيا بيساو 9',
            image_url: '/images/2.jpg',
            url: '/details/9',
            time_ago: 'منذ ٤ دقائق',
            excerpt: 'بيساو – أشرف صاحب الجلالة الملك محمد السادس ، نصره الله ، مرفوقا برئيس جمهورية غينيا بيساو السيد جوزي ماريو فاز ، اليوم الخميس بالقصر الرئاسي ببيساو ، على تسليم تجهيزات لتربية الماشية منحتها المملكة المغربية للحفاظ على القطيع في غينيا بيساو.',
            category_name: 'الخليج 9',
            category_url: '/category/gulf',
            author: {
                id: 1,
                name: 'ناديه احمد',
                title: 'صحفيه',
                url: '/author/1',
                image_url: '/images/writer.png'
            },
            share_url: 'http://aldar.test/details/1',
        },
        
        {
            id: 10,
            title: 'جلالة الملك يسلم تجهيزات خاصة لحماية الماشية هبة من المغرب لغينيا بيساو 10',
            image_url: '/images/2.jpg',
            url: '/details/10',
            time_ago: 'منذ ٤ دقائق',
            excerpt: 'بيساو – أشرف صاحب الجلالة الملك محمد السادس ، نصره الله ، مرفوقا برئيس جمهورية غينيا بيساو السيد جوزي ماريو فاز ، اليوم الخميس بالقصر الرئاسي ببيساو ، على تسليم تجهيزات لتربية الماشية منحتها المملكة المغربية للحفاظ على القطيع في غينيا بيساو.',
            category_name: 'الخليج 10',
            category_url: '/category/gulf',
            author: {
                id: 1,
                name: 'ناديه احمد',
                title: 'صحفيه',
                url: '/author/1',
                image_url: '/images/writer.png'
            },
            share_url: 'http://aldar.test/details/1',
        },
        
        {
            id: 11,
            title: 'جلالة الملك يسلم تجهيزات خاصة لحماية الماشية هبة من المغرب لغينيا بيساو 11',
            image_url: '/images/2.jpg',
            url: '/details/11',
            time_ago: 'منذ ٤ دقائق',
            excerpt: 'بيساو – أشرف صاحب الجلالة الملك محمد السادس ، نصره الله ، مرفوقا برئيس جمهورية غينيا بيساو السيد جوزي ماريو فاز ، اليوم الخميس بالقصر الرئاسي ببيساو ، على تسليم تجهيزات لتربية الماشية منحتها المملكة المغربية للحفاظ على القطيع في غينيا بيساو.',
            category_name: 'الخليج 11',
            category_url: '/category/gulf',
            author: {
                id: 1,
                name: 'ناديه احمد',
                title: 'صحفيه',
                url: '/author/1',
                image_url: '/images/writer.png'
            },
            share_url: 'http://aldar.test/details/1',
        },
        
        {
            id: 12,
            title: 'جلالة الملك يسلم تجهيزات خاصة لحماية الماشية هبة من المغرب لغينيا بيساو 12',
            image_url: '/images/2.jpg',
            url: '/details/12',
            time_ago: 'منذ ٤ دقائق',
            excerpt: 'بيساو – أشرف صاحب الجلالة الملك محمد السادس ، نصره الله ، مرفوقا برئيس جمهورية غينيا بيساو السيد جوزي ماريو فاز ، اليوم الخميس بالقصر الرئاسي ببيساو ، على تسليم تجهيزات لتربية الماشية منحتها المملكة المغربية للحفاظ على القطيع في غينيا بيساو.',
            category_name: 'الخليج 12',
            category_url: '/category/gulf',
            author: {
                id: 1,
                name: 'ناديه احمد',
                title: 'صحفيه',
                url: '/author/1',
                image_url: '/images/writer.png'
            },
            share_url: 'http://aldar.test/details/1',
        },
        
        {
            id: 13,
            title: 'جلالة الملك يسلم تجهيزات خاصة لحماية الماشية هبة من المغرب لغينيا بيساو 13',
            image_url: '/images/2.jpg',
            url: '/details/13',
            time_ago: 'منذ ٤ دقائق',
            excerpt: 'بيساو – أشرف صاحب الجلالة الملك محمد السادس ، نصره الله ، مرفوقا برئيس جمهورية غينيا بيساو السيد جوزي ماريو فاز ، اليوم الخميس بالقصر الرئاسي ببيساو ، على تسليم تجهيزات لتربية الماشية منحتها المملكة المغربية للحفاظ على القطيع في غينيا بيساو.',
            category_name: 'الخليج 13',
            category_url: '/category/gulf',
            author: {
                id: 1,
                name: 'ناديه احمد',
                title: 'صحفيه',
                url: '/author/1',
                image_url: '/images/writer.png'
            },
            share_url: 'http://aldar.test/details/1',
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
