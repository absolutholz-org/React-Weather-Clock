// Open Weather Icon Codes
// https://openweathermap.org/weather-conditions#How-to-get-icon-URL

import { ReactComponent as SvgClearDay } from '@mdi/svg/svg/weather-sunny.svg';
import { ReactComponent as SvgClearNight } from '@mdi/svg/svg/weather-night.svg';

import { ReactComponent as SvgFewClouds } from '@mdi/svg/svg/weather-cloudy.svg';
// import { ReactComponent as SvgScatteredClouds } from '@mdi/svg/svg/weather-sunny.svg';
// import { ReactComponent as SvgBrokenClouds } from '@mdi/svg/svg/weather-sunny.svg';
import { ReactComponent as SvgShowerRain } from '@mdi/svg/svg/weather-rainy.svg';
import { ReactComponent as SvgRain } from '@mdi/svg/svg/weather-pouring.svg';
import { ReactComponent as SvgThunderstorm } from '@mdi/svg/svg/weather-lightning-rainy.svg';
import { ReactComponent as SvgSnow } from '@mdi/svg/svg/weather-snowy.svg';
import { ReactComponent as SvgFog } from '@mdi/svg/svg/weather-fog.svg';

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
        icon = <SvgShowerRain />;
    } else if (iconCode >= 500 && iconCode < 600) {
        icon = <SvgRain />;
    } else if (iconCode >= 600 && iconCode < 700) {
        icon = <SvgSnow />;
    } else if (iconCode >= 700 && iconCode < 800) {
        icon = <SvgFog />;
    }

    return <>{ icon }</>;
}

export default WeatherIcon;
