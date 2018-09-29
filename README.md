# Homebridge Magic Home plugin

**A Homebridge plugin for devices running on the Magic Home Wi-Fi system.**

## Installation

First, install the plugin globally.

````
npm install -g homebridge-gordalina-magic-home
````

Next, add a new accessory to your Homebridge `config.json`. You can add as many Magic Home-based accessories as you like in the following format:

````
  "platforms": [{
    "platform": "homebridge-gordalina-magic-home"
  }]
````

## Run on Raspberry pi

```
sudo bash
npm install -g --unsafe-perm nodemon homebridge homebridge-gordalina-magic-home

CONFIG=$(cat <<'EOT'
  {
    "description": "An example Homebridge config for MagicHome.",

    "bridge": {
      "name": "Homebridge",
      "username": "DC:39:3D:F3:CE:31",
      "port": 51827,
      "pin": "031-57-155"
    },

    "platforms": [{
      "platform": "homebridge-gordalina-magic-home"
    }]
  }
EOT
)

mkdir ~/.homebridge
echo $CONFIG > ~/.homebridge/config.json

sed -i 's/exit 0//' /etc/rc.local
echo "DEBUG=* forever $(which homebridge) -D >> /var/log/homebridge.log 2>&1 &" >> /etc/rc.local
echo "exit 0" >> /etc/rc.local
```
