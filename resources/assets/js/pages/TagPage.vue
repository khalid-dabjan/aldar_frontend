<template>
    <div>
        <search-results :query="id" results-type="tag"></search-results>
    </div>
</template>
<script>
    import SearchResults from '../components/SearchResults';

    export default {
        components: {SearchResults},
        computed: {
            id() {
                return this.$route.params.id;
            }
        }
    }
</script>