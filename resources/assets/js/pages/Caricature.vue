<template>
    <div>
        <breadcrumb :items="BCItems">
        </breadcrumb>
        <infograph-list :type="type">
        </infograph-list>
    </div>
</template>
<script>
    import Breadcrumb from '../partials/Breadcrumb';
    import InfographList from '../components/InfographList';

    export default {
        props: ['type'],
        components: {Breadcrumb, InfographList},
        computed: {
            BCItems() {
                // let naem = this.t
                return [
                    {
                        name: 'كاريكاتير',
                        url: '/category/caricature'
                    }
                ];
            },
        },
    }
</script>