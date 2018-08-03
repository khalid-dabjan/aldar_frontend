<template>
    <div>
        <search-results :query="query"></search-results>
    </div>
</template>
<script>
    import SearchResults from '../components/SearchResults';

    export default {
        components: {SearchResults},
        computed: {
            query() {
                return this.$route.query.q;
            }
        },
    }
</script>