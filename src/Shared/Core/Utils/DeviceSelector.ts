import _ from "lodash";
import { Dimensions, Platform } from "react-native";
import { IPHONE_XR_LONG_SIDE, IPHONE_X_LONG_SIDE } from "./Constant";
const { OS, isTV } = Platform;
const { width, height } = Dimensions.get("window");
const isPad = width / height < 1.6;
const xDimensionsMatch =
  height === IPHONE_X_LONG_SIDE || width === IPHONE_X_LONG_SIDE;

const xrDimensionsMatch =
  height === IPHONE_XR_LONG_SIDE || width === IPHONE_XR_LONG_SIDE;

const isIphoneX = OS === "ios" && !isPad && !isTV && xDimensionsMatch;
const isIphoneXR = OS === "ios" && !isPad && !isTV && xrDimensionsMatch;

/**
 * Receives settings for different devices
 * If the device is recognized, it returns only settings for that device
 * If not, it returns settings for 'default'
 *
 * @param {object} settings The settings provided for
 * @return {settings} Returns device specific (or 'default') settings
 */

function select(settings) {
  if (settings.iPhoneX && isIphoneX) {
    return settings.iPhoneX;
  }

  if (settings.iPhoneXR && isIphoneXR) {
    return settings.iPhoneXR;
  }

  return _.get(settings, "default");
}

export const Device = {
  isIphoneX,
  isIphoneXR,
  select
};
