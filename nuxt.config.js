export default {
  target: 'static',
  build: {
    // Uncommenting this fixes the issue
    // transpile: [/nuxt/],
    babel: {
      presets({ isClient, isModern }, defaultPreset) {
        if (isClient && !isModern) {
          defaultPreset[1].targets = {
            browsers: ['last 2 versions', 'ie 11', '> 1%'],
          }
        }
        return [defaultPreset]
      },
    },
    extend(config) {
      // Confirm that the config above is being set properly
      console.log(
        JSON.stringify(
          config.module.rules
            .filter((rule) => rule && rule.test.test('file.js'))
            .map((rule) => rule.use[0].options)
        )
      )
      return config
    },
  },
}
