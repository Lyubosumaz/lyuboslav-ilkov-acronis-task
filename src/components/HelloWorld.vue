<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <div v-for="count in getCounter" :key="count">OMG {{ count }}</div>
        <el-button @click="pCounter()">+</el-button>
        <el-button @click="mCounter()">-</el-button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'HelloWorld',
    props: {
        msg: String,
    },
    methods: {
        ...mapActions(['pCounter', 'mCounter']),
    },
    computed: mapGetters(['getCounter']),
    created() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
