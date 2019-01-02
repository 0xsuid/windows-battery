const {execSync} = require('child_process');

exports.battery = function () {
    let result = {
        designcap: 0,
        currcap: 0,
        health: 0,
        estcharge: 0,
        ischarging: false
    }
    if (process.platform === 'win32') {
        try {
            const battery = execSync('wmic /namespace:\\\\root\\wmi Path BatteryStaticData Get DesignedCapacity /value | find "=" && wmic /namespace:\\\\root\\wmi Path BatteryFullChargedCapacity Get FullChargedCapacity /value | find "=" && wmic Path Win32_Battery Get BatteryStatus, EstimatedChargeRemaining /value | find "="');
            const info = battery.toString().match(/\d+/g);
            result.designcap = Number(info[0]);
            result.currcap = Number(info[1]);
            result.health = Math.round(info[1] * 100 / info[0]);
            result.ischarging = Boolean((info[2] === '2'));
            result.estcharge = Number(info[3]);
        } catch (err) {
            result.error = true;
        }
    }else{
        result.oserror = true;
    }
    return result;
}