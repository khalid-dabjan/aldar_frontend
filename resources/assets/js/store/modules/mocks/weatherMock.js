export default (() => {
    const item = {
        icon: '/images/widgets/weather.png',
        location_name: 'المغرب',
        degree: '27',
        condition_text: 'غالبا مشمش',
        day_of_the_week: 'الخميس',
        day_of_the_month: '15',
        date: 'مارس ٢٠١٦',
        hours: [
            {
                icon: '/images/widgets/weather2.png',
                degree: '25',
                time: '9 AM',
            },
            {
                icon: '/images/widgets/weather2.png',
                degree: '26',
                time: '10 AM',
            },
            {
                icon: '/images/widgets/weather2.png',
                degree: '26',
                time: '11 AM',
            },
            {
                icon: '/images/widgets/weather2.png',
                degree: '27',
                time: '12 PM',
            },
            {
                icon: '/images/widgets/weather2.png',
                degree: '28',
                time: '1 PM',
            },
            {
                icon: '/images/widgets/weather2.png',
                degree: '28',
                time: '2 PM',
            },
        ],
        days: [
            {
                icon: '/images/widgets/weather.png',
                day: 'الخميس',
                high: '26',
                low: '15'
            },
            {
                icon: '/images/widgets/weather.png',
                day: 'الجمعة',
                high: '26',
                low: '14'
            },
            {
                icon: '/images/widgets/weather.png',
                day: 'السبت',
                high: '27',
                low: '15'
            },
            {
                icon: '/images/widgets/weather.png',
                day: 'الاحد',
                high: '28',
                low: '17'
            },
            {
                icon: '/images/widgets/weather.png',
                day: 'التنين',
                high: '30',
                low: '18'
            },
            {
                icon: '/images/widgets/weather.png',
                day: 'التلاتا',
                high: '26',
                low: '13'
            },
            {
                icon: '/images/widgets/weather.png',
                day: 'العيد',
                high: '26',
                low: '15'
            },

        ]
    };
    return () => {
        return item
    };
})();
