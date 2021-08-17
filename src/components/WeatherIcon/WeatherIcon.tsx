// Open Weather Icon Codes
// https://openweathermap.org/weather-conditions#How-to-get-icon-URL

// import { ReactComponent as SvgClearDay } from '@mdi/svg/svg/weather-sunny.svg';
// import { ReactComponent as SvgClearNight } from '@mdi/svg/svg/weather-night.svg';

import { ReactComponent as SvgFewClouds } from '@mdi/svg/svg/weather-cloudy.svg';
// import { ReactComponent as SvgScatteredClouds } from '@mdi/svg/svg/weather-sunny.svg';
// import { ReactComponent as SvgBrokenClouds } from '@mdi/svg/svg/weather-sunny.svg';
// import { ReactComponent as SvgShowerRain } from '@mdi/svg/svg/weather-rainy.svg';
// import { ReactComponent as SvgRain } from '@mdi/svg/svg/weather-pouring.svg';
import { ReactComponent as SvgThunderstorm } from '@mdi/svg/svg/weather-lightning-rainy.svg';
import { ReactComponent as SvgSnow } from '@mdi/svg/svg/weather-snowy.svg';
import { ReactComponent as SvgFog } from '@mdi/svg/svg/weather-fog.svg';

import { ReactComponent as SvgClouds } from './../../icons/clouds.svg';
import { ReactComponent as SvgClearDay } from './../../icons/sun.svg';
import { ReactComponent as SvgClearNight } from './../../icons/moon-and-star.svg';
import { ReactComponent as SvgCloudyDay } from './../../icons/cloudy-day.svg';
import { ReactComponent as SvgCloudyNight } from './../../icons/cloudy-night.svg';
import { ReactComponent as SvgPartlyCloudyDay } from './../../icons/partly-cloudy-day.svg';
import { ReactComponent as SvgPartlyCloudyNight } from './../../icons/partly-cloudy-night.svg';
import { ReactComponent as SvgMostlyCloudyDay } from './../../icons/mostly-cloudy-day.svg';
import { ReactComponent as SvgMostlyCloudyNight } from './../../icons/mostly-cloudy-night.svg';

import { ReactComponent as SvgLightRainDay } from './../../icons/light-rain-day.svg';
import { ReactComponent as SvgModerateRainDay } from './../../icons/moderate-rain-day.svg';
import { ReactComponent as SvgHeavyRainDay } from './../../icons/heavy-rain-day.svg';
import { ReactComponent as SvgLightRainNight } from './../../icons/light-rain-night.svg';
import { ReactComponent as SvgModerateRainNight } from './../../icons/moderate-rain-night.svg';
import { ReactComponent as SvgHeavyRainNight } from './../../icons/heavy-rain-night.svg';

interface IWeatherIconProps {
    iconCode: number;
    isDaytime: boolean;
}

function WeatherIcon ({ iconCode, isDaytime }: IWeatherIconProps): JSX.Element {
    let icon = isDaytime ? <SvgClearDay /> : <SvgClearNight />;

    if (iconCode > 800 && iconCode < 900) {
        icon = <SvgFewClouds />;
    } else if (iconCode >= 200 && iconCode < 300) {
        icon = <SvgThunderstorm />;
    } else if (iconCode >= 300 && iconCode < 400) {
        icon = isDaytime ? <SvgHeavyRainDay />:  <SvgHeavyRainNight />;
    } else if (iconCode >= 500 && iconCode < 600) {
        icon = isDaytime ? <SvgHeavyRainDay />:  <SvgHeavyRainNight />;
    } else if (iconCode >= 600 && iconCode < 700) {
        icon = <SvgSnow />;
    } else if (iconCode >= 700 && iconCode < 800) {
        icon = <SvgFog />;
    }

    switch (iconCode) {
        case 801:
            icon = isDaytime ? <SvgPartlyCloudyDay /> : <SvgPartlyCloudyNight />;
            break;
        case 802:
            icon = isDaytime ? <SvgMostlyCloudyDay /> : <SvgMostlyCloudyNight />;
            break;
        case 803:
            icon = isDaytime ? <SvgCloudyDay /> : <SvgCloudyNight />;
            break;
        case 804:
            icon = <SvgClouds />;
            break;
        case 500:
            icon = isDaytime ? <SvgLightRainDay /> :  <SvgLightRainNight />;
            break;
        case 501:
            icon = isDaytime ? <SvgModerateRainDay /> :  <SvgModerateRainNight />;
            break;
    }

    return <>{ icon }</>;
}

export default WeatherIcon;
