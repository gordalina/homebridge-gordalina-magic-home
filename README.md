# Homebridge Magic Home plugin

**A Homebridge plugin for devices running on the Magic Home Wi-Fi system.**

## Installation

First, install the plugin globally.

````
npm install -g homebridge-magic-home
````

Next, add a new accessory to your Homebridge `config.json`. You can add as many Magic Home-based accessories as you like in the following format:

````
  "platforms": [{
    "platform": "@gordalina/homebridge-magic-home"
  }]
````
