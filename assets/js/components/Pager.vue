<template>
    <ul class="pager">
        <li v-if="!isFirst()"><a class="pager__page pager__page--first" :href="pageUrl(previous)" @click.prevent.stop="$emit('change', previous)">Previous</a></li>
        <li v-for="page in pages">
            <a class="pager__page" v-if="!isCurrent(page)" :href="pageUrl(page)" @click.prevent.stop="$emit('change', page)">{{ page }}</a>
            <span v-else class="pager__page pager__page--active">{{ page }}</span>
        </li>
        <li v-if="!isLast()"><a class="pager__page pager__page--first" :href="pageUrl(next)" @click.prevent.stop="$emit('change', next)">Next</a></li>
    </ul>
</template>

<script>
    import _ from 'lodash';

    export default {
        props: ['current', 'total', 'url'],
        methods: {
            isCurrent(page) {
                return page === this.current
            },
            isFirst() {
                return this.current == 1;
            },
            isLast() {
                return this.current == this.total;
            },
            pageUrl(page) {
                if (typeof this.url === 'function') {
                    return this.url(page);
                } else {
                    return '#';
                }
            }
        },
        computed: {
            pages() {
                return _.range(1, this.total + 1);
            },
            next() {
                return Math.min(this.total, this.current + 1);
            },
            previous() {
                return Math.max(1, this.current - 1);
            }
        }
    }
</script>
