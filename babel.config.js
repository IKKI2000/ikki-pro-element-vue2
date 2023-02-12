module.exports = {
    presets: ['@vue/cli-plugin-babel/preset'],
    plugins: [['component', { libraryName: 'element-ui', libDir: 'packages', styleLibraryName: 'theme-chalk/src', ext: '.scss' }]],
};
