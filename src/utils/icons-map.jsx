// import { UserIcon } from "../components/IconSvg";
import * as SvgIconsComponent from "../components/IconSvg";
/**
 * Icons Component map.
 *
 * @param {string} name Icon Name.
 * @returns {*}
 */
export const getIconComponentByName = (name, className) => {
  console.log(SvgIconsComponent.UserIcon);
  const ComponentsMap = {
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
