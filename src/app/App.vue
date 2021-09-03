<template>
    <div class="site">
        <header>
            <div class="site-layout">
                <h1>Workout List</h1>
            </div>
        </header>
        <main>
            <div class="site-layout">
                <router-view />
            </div>
        </main>
        <footer>
            <div class="site-layout">
                <p>GitHub repository:</p>
                <a
                    href="https://github.com/Lyubosumaz/lyuboslav-ilkov-acronis-task"
                    target="_blank"
                    rel="noreferrer"
                    >lyuboslav-ilkov-acronis-task</a
                >
            </div>
        </footer>
    </div>
</template>

<script>
import mockData from '../mockWorkoutData.json';

export default {
    mounted() {
        // mock data on server
        if (!sessionStorage.mockWorkoutData) {
            sessionStorage.setItem('mockWorkoutData', JSON.stringify(mockData));
        }
    },
};
</script>

<style>
.site-layout {
    width: 60rem;
    margin: 0 auto;
}
header {
    text-align: center;
    padding: 1.3rem 0;
}
footer {
    background-color: #c6f0e6;
    margin-top: 8em;
    padding-top: 1em;
}
footer .site-layout {
    height: 4rem;
    display: flex;
    align-items: center;
    font-size: 1.4em;
}
footer .site-layout p {
    margin-right: 0.75em;
}
footer .site-layout a {
    color: #909399;
}
footer .site-layout a:hover {
    color: #67c23a;
}
</style>
