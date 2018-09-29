module.exports = (homebridge) => {
  homebridge.registerPlatform(
    'LED Light',
    '@gordalina/homebridge-magic-home',
    require('./src/Platform')(homebridge),
  );
}
