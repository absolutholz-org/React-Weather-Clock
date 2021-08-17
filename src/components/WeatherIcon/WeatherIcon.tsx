// Open Weather Icon Codes
// https://openweathermap.org/weather-conditions#How-to-get-icon-URL

import { ReactComponent as SvgFog } from './../../icons/fog.svg';

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

import { ReactComponent as SvgThunderstormDay } from './../../icons/thunderstorm-day.svg';
import { ReactComponent as SvgThunderstormNight } from './../../icons/thunderstorm-night.svg';

import { ReactComponent as SvgSnowDay } from './../../icons/snow-day.svg';
import { ReactComponent as SvgSnowNight } from './../../icons/snow-night.svg';

import { ReactComponent as SvgSleetDay } from './../../icons/sleet-day.svg';
import { ReactComponent as SvgSleetNight } from './../../icons/sleet-night.svg';

interface IWeatherIconProps {
    iconCode: number;
    isDaytime: boolean;
}

function WeatherIcon ({ iconCode, isDaytime }: IWeatherIconProps): JSX.Element {
    let icon = isDaytime ? <SvgClearDay /> : <SvgClearNight />;

    if (iconCode > 800 && iconCode < 900) {
        icon = <SvgClouds />;
    } else if (iconCode >= 200 && iconCode < 300) {
        icon = isDaytime ? <SvgThunderstormDay /> : <SvgThunderstormNight />;
    } else if (iconCode >= 300 && iconCode < 400) {
        icon = isDaytime ? <SvgHeavyRainDay />:  <SvgHeavyRainNight />;
    } else if (iconCode >= 500 && iconCode < 600) {
        icon = isDaytime ? <SvgHeavyRainDay />:  <SvgHeavyRainNight />;
    } else if (iconCode >= 600 && iconCode < 700) {
        icon = isDaytime ? <SvgSnowDay /> : <SvgSnowNight />;
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
        case 611:
        case 612:
        case 613:
            icon = isDaytime ? <SvgSleetDay /> :  <SvgSleetNight />;
            break;
    }

    return <>{ icon }</>;
}

export default WeatherIcon;
