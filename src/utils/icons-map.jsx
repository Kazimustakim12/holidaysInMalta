// import { UserIcon } from "../components/IconSvg";
import * as SvgIconsComponent from "../components/IconSvg";
/**
 * Icons Component map.
 *
 * @param {string} name Icon Name.
 * @param {string} fillColor Icon Fill color name.
 * @param {string} strokeColor Icon Stroke color name.
 *
 *
 * @returns {*}
 */
export const getIconComponentByName = (name, className) => {
  const ComponentsMap = {
    agoda: SvgIconsComponent.AgodaIcon,
    airbnb: SvgIconsComponent.AirbnbIcon,
    tripadvisor: SvgIconsComponent.TripAdvisor,
    guest: SvgIconsComponent.UserIcon,
    bedroom: SvgIconsComponent.BedRoomIcon,
    bed: SvgIconsComponent.BedIcon,
    bathroom: SvgIconsComponent.BathRoomIcon,
    kitchen: SvgIconsComponent.KitchenIcon,
    wifi: SvgIconsComponent.WifiIcon,
    pool: SvgIconsComponent.PoolIcon,
    tv: SvgIconsComponent.TvIcon,
    instagram: SvgIconsComponent.InstagramIcon,
    washer: SvgIconsComponent.WasherIcon,
    airCondition: SvgIconsComponent.AirConditionIcon,
    cctv: SvgIconsComponent.CCTvIcon,
    bbq: SvgIconsComponent.BBQGrillIcon,
    smokeAlarm: SvgIconsComponent.SmokeAlarmIcon,
    dining: SvgIconsComponent.OutDoorDiningIcon,
    dryer: SvgIconsComponent.DryerIcon,
    essentials: SvgIconsComponent.EssentialsIcon,
    water: SvgIconsComponent.HotWaterIcon,
    monoAlarm: SvgIconsComponent.CrabonMonoxideAlarmIcon,
    heating: SvgIconsComponent.HeatingIcon,
  };

  const IconComponent = ComponentsMap[name];
  if (name in ComponentsMap) {
    return <IconComponent className={className} />;
  } else {
    return null;
  }
};
