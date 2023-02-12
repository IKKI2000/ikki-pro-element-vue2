<template>
    <div id="app" v-loading.fullscreen.lock="$store.state.loading" :element-loading-text="$t('Common.Loading')">
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </nav>
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'AppView',
    };
</script>

<style lang="scss">
    body {
        > .el-loading-mask.is-fullscreen {
            .el-loading-spinner {
                margin-top: -50px;
                .circular {
                    width: 80px;
                    height: 80px;
                }
                .el-loading-text {
                    font-size: 24px;
                }
            }
        }
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    #nprogress {
        .bar {
            height: 3px !important;
            background: $--color-primary !important;
            .peg {
                box-shadow: 0 0 10px $--color-primary, 0 0 5px $--color-primary;
            }
        }
        .spinner {
            top: 8px !important;
            right: 8px !important;
            .spinner-icon {
                border-top-color: $--color-primary;
                border-left-color: $--color-primary;
                width: 12px;
                height: 12px;
            }
        }
    }
    nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
