export default (() => {
    const item = {
        id: 1,
        question: 'بيساو – أشرف صاحب الجلالة الملك محمد السادس ، نصره الله ، مرفوقا برئيس',
        image_url: '/images/1.jpg',
        answers: [
            {
                id: 1,
                text: 'نعم',
                image_url: '/images/widgets/poll1.png',
            },
            {
                id: 2,
                text: 'لا',
                image_url: '/images/widgets/poll2.png',
            },
            {
                id: 3,
                text: 'غير مهتم',
                image_url: '/images/widgets/poll3.png',
            },
        ]
    };
    return () => {
        return item;
    };
})();
