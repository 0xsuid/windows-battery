# Windows battery
[![](https://img.shields.io/npm/v/windows-battery.svg)](https://github.com/0xsuid/windows-battery)

Windows OS battery information library for Node.js

## Install
```
npm install windows-battery
```

## Usage
```js
const windows = require("windows-battery");

console.log(windows.battery())
//  { designcap: 37490,
//    currcap: 20660,
//    health: 55,
//    estcharge: 93,
//    ischarging: true }
```