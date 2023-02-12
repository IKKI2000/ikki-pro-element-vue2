<template>
    <div id="ikki" v-loading.fullscreen.lock="$store.state.loading" :element-loading-text="$t('Common.Loading')">
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'IKKIView',
    };
</script>

<style lang="scss">
    #ikki {
        ~ .el-loading-mask.is-fullscreen {
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
</style>
