import {
  changeColorAlpha,
  createSharedStyle,
  createVariations,
  getSizeRelativeToReference,
  INCLUDE,
  inverseColorBrightnessForAmount
} from "@shoutem/theme";
import { Dimensions } from "react-native";
import { Theme } from "react-native-paper/typings";
import {Utils} from "../../Utils";
import {
  IPHONE_XR_NOTCH_PADDING,
  IPHONE_X_NOTCH_PADDING,
  NAVIGATION_HEADER_HEIGHT
} from "../../Utils/Constant";
const window = Dimensions.get("window");
const NAVIGATION_BAR_HEIGHT = Utils.Device.select({
  iPhoneX: NAVIGATION_HEADER_HEIGHT + IPHONE_X_NOTCH_PADDING,
  iPhoneXR: NAVIGATION_HEADER_HEIGHT + IPHONE_XR_NOTCH_PADDING,
  default: NAVIGATION_HEADER_HEIGHT
});
export const sizeVariants = [
  "",
  "left",
  "right",
  "top",
  "bottom",
  "horizontal",
  "vertical"
];
export const textComponents = [
  // 'shoutem.ui.Heading',
  // 'shoutem.ui.Title',
  // 'shoutem.ui.Subtitle',
  // 'shoutem.ui.Text',
  // 'shoutem.ui.Caption',
];
export const viewComponents = [
  "shoutem.ui.View"
  // 'shoutem.ui.Tile',
  // 'shoutem.ui.Card',
  // 'shoutem.ui.Row',
];
export function dimensionRelativeToIphone(
  dimension,
  actualRefVal = window.width
) {
  // 375 is iPhone width
  return getSizeRelativeToReference(dimension, 375, actualRefVal);
}

export function formatLineHeight(fontSize) {
  // adds required padding to lineHeight to support
  // different alphabets (Kanji, Greek, etc.)

  if (fontSize < 22) {
    // minimum lineHeight for different alphabets is 25
    return 25;
  }

  return fontSize + 3;
}
export default (theme: Theme | any): Record<string, any> => ({
  //
  // Common
  //
  guttersPadding: {
    ...createVariations(
      ".sm-gutter",
      sizeVariants,
      "padding",
      theme.gutter.smallGutter
    ),
    ...createVariations(
      ".md-gutter",
      sizeVariants,
      "padding",
      theme.gutter.mediumGutter
    ),
    ...createVariations(
      ".lg-gutter",
      sizeVariants,
      "padding",
      theme.gutter.largeGutter
    ),
    ...createVariations(
      ".xl-gutter",
      sizeVariants,
      "padding",
      theme.gutter.extraLargeGutter
    )
  },

  guttersMargin: {
    ...createVariations(
      ".sm-gutter",
      sizeVariants,
      "margin",
      theme.gutter.smallGutter
    ),
    ...createVariations(
      ".md-gutter",
      sizeVariants,
      "margin",
      theme.gutter.mediumGutter
    ),
    ...createVariations(
      ".lg-gutter",
      sizeVariants,
      "margin",
      theme.gutter.largeGutter
    ),
    ...createVariations(
      ".xl-gutter",
      sizeVariants,
      "margin",
      theme.gutter.extraLargeGutter
    )
  },

  commonVariants: {
    ".rounded-corners": {
      borderRadius: 2,
      borderWidth: 0,
      borderColor: "transparent"
    },

    ".flexible": {
      flex: 1
    },

    ".inflexible": {
      flex: 0
    },

    ".collapsible": {
      flex: -1
    },

    ".stretch": {
      alignSelf: "stretch"
    },

    ".space-between": {
      justifyContent: "space-between"
    },

    ".space-around": {
      justifyContent: "space-around"
    }
  },
  alignmentVariants: {
    flexDirection: "column",
    ".topLeft": {
      justifyContent: "flex-start",
      alignItems: "flex-start"
    },
    ".topCenter": {
      justifyContent: "flex-start",
      alignItems: "center"
    },
    ".topRight": {
      justifyContent: "flex-start",
      alignItems: "flex-end"
    },
    ".middleLeft": {
      justifyContent: "center",
      alignItems: "flex-start"
    },
    ".middleCenter": {
      justifyContent: "center",
      alignItems: "center"
    },
    ".middleRight": {
      justifyContent: "center",
      alignItems: "flex-end"
    },
    ".bottomLeft": {
      justifyContent: "flex-end",
      alignItems: "flex-start"
    },
    ".bottomCenter": {
      justifyContent: "flex-end",
      alignItems: "center"
    },
    ".bottomRight": {
      justifyContent: "flex-end",
      alignItems: "flex-end"
    },
    ".top": {
      justifyContent: "flex-start"
    },
    ".middle": {
      justifyContent: "center"
    },
    ".bottom": {
      justifyContent: "flex-end"
    }
  },

  fillParent: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  "fill-parent": {
    ".fill-parent": {
      [INCLUDE]: ["fillParent"]
    }
  },

  dimmedFeaturedBackground: {
    backgroundColor: inverseColorBrightnessForAmount(theme.colors.primary, 5)
  },

  featuredBackground: {
    backgroundColor: theme.colors.primary
  },
  imageOverlayText: {
    ...createSharedStyle(textComponents, {
    //   color: variables.imageOverlayTextColor
    }),

    "shoutem.ui.Icon": {
      ".indicator": {
        // color: variables.imageOverlayTextColor
      },

      ".scroll-indicator": {
        // color: variables.imageOverlayTextColor
      },

    //   color: variables.imageOverlayTextColor
    }
  },

  boldTextStyle: {
    fontWeight: "500"
  },

  italicTextStyle: {
    fontStyle: "italic"
  },

  codeTextStyle: {
    fontFamily: "Menlo"
  },

  multilineTextStyle: {
    ".v-center": {
      // Compensate for lineHeight, because
      // textAlignVertical is not supported on iOS
      marginTop: -4,
      marginBottom: 4
    },

    lineHeight: 26
  },

  text: {
    [INCLUDE]: ["commonVariants", "guttersMargin"],

    ".line-through": {
      textDecorationLine: "line-through"
    },

    ".h-left": {
      textAlign: "left"
    },

    ".h-right": {
      textAlign: "right"
    },

    ".h-center": {
      textAlign: "center"
    },

    ".bold": {
      [INCLUDE]: ["boldTextStyle"]
    },

    ".multiline": {
      [INCLUDE]: ["multilineTextStyle"]
    },

    ".muted": {
      opacity: 0.5
    },

    backgroundColor: "transparent"
  },

  "shoutem.ui.Heading": {
    [INCLUDE]: ["text"],

    // lineHeight: formatLineHeight(variables.heading.fontSize),
    // ...variables.heading
  },

  "shoutem.ui.Title": {
    [INCLUDE]: ["text"],

    // lineHeight: formatLineHeight(variables.title.fontSize),
    // ...variables.title
  },

  "shoutem.ui.Subtitle": {
    [INCLUDE]: ["text"],

    // lineHeight: formatLineHeight(variables.subtitle.fontSize),
    // ...variables.subtitle
  },

  "shoutem.ui.Caption": {
    [INCLUDE]: ["text"],

    // lineHeight: formatLineHeight(variables.caption.fontSize),
    // letterSpacing: 0.5,
    // ...variables.caption
  },

  "shoutem.ui.Text": {
    [INCLUDE]: ["text"],

    // ...variables.text
  },

  //
  // Indicators
  //
  indicator: {
    // color: variables.text.color
  },

  //
  // Images
  //
  imageSizes: {
    // NOTE: '-avatar' styles do not work with ImageBackground
    ".small-avatar": {
      width: dimensionRelativeToIphone(25),
      height: dimensionRelativeToIphone(25),
      borderRadius: 12.5,
      borderWidth: 0
    },

    ".small": {
      width: dimensionRelativeToIphone(65),
      height: dimensionRelativeToIphone(65)
    },

    ".medium-avatar": {
      width: dimensionRelativeToIphone(145),
      height: dimensionRelativeToIphone(145),
      borderRadius: 72.5,
      borderWidth: 0
    },

    ".medium": {
      width: dimensionRelativeToIphone(145),
      height: dimensionRelativeToIphone(92)
    },

    ".medium-wide": {
      width: dimensionRelativeToIphone(180),
      height: dimensionRelativeToIphone(85)
    },

    ".medium-portrait": {
      width: dimensionRelativeToIphone(209),
      height: dimensionRelativeToIphone(139)
    },

    ".medium-square": {
      width: dimensionRelativeToIphone(145),
      height: dimensionRelativeToIphone(145)
    },

    // NOTE: Image resizing doesn't work correctly if both
    // dimensions are not explicitly defined, so we can't
    // use flex: 1, or alignSelf: 'stretch' here...
    ".featured": {
      width: dimensionRelativeToIphone(365),
      height: dimensionRelativeToIphone(345)
    },

    ".large": {
      width: window.width,
      height: dimensionRelativeToIphone(280)
    },

    ".large-portrait": {
      width: window.width,
      height: dimensionRelativeToIphone(518)
    },

    ".large-banner": {
      width: window.width,
      height: dimensionRelativeToIphone(200)
    },

    ".large-square": {
      width: window.width,
      height: window.width
    },

    ".large-wide": {
      width: window.width,
      height: dimensionRelativeToIphone(238)
    },

    ".large-ultra-wide": {
      width: window.width,
      height: dimensionRelativeToIphone(130)
    }
  },
  "shoutem.ui.Image": {
    [INCLUDE]: ["commonVariants", "imageSizes", "fill-parent"],

    ".placeholder": {
      backgroundColor: inverseColorBrightnessForAmount(theme.colors.surface, 10)
    },

    heroAnimation(driver, { layout }) {
      return {
        transform: [
          {
            scale: driver.interpolate({
              inputRange: [-0.9 * layout.height, 0],
              outputRange: [3, 1],
              extrapolateRight: "clamp",
              useNativeDriver: true
            })
          },
          {
            translateY: driver.interpolate({
              inputRange: [-100, 100],
              outputRange: [-50, 50],
              extrapolateLeft: "clamp",
              useNativeDriver: true
            })
          }
        ]
      };
    }
  },
  "shoutem.ui.ImageBackground": {
    [INCLUDE]: ["commonVariants", "imageSizes", "fill-parent"],

    ".placeholder": {
      backgroundColor: inverseColorBrightnessForAmount(
        theme.colors.surface,
        10
      ),

      "shoutem.ui.Icon": {
        color: inverseColorBrightnessForAmount(theme.colors.surface, 30)
      }
    },

    "shoutem.ui.Tile": {
      [INCLUDE]: ["textCentricTile", "fillParent", "imageOverlayText"],

      "shoutem.ui.Button": {
        ".clear": {
          [INCLUDE]: ["imageOverlayText"]
        }
      },

      backgroundColor: theme.colors.backdrop
    },

    heroAnimation(driver, { layout }) {
      return {
        transform: [
          {
            scale: driver.interpolate({
              inputRange: [-0.9 * layout.height, 0],
              outputRange: [3, 1],
              extrapolateRight: "clamp",
              useNativeDriver: true
            })
          },
          {
            translateY: driver.interpolate({
              inputRange: [-100, 100],
              outputRange: [-50, 50],
              extrapolateLeft: "clamp",
              useNativeDriver: true
            })
          }
        ]
      };
    },

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },

  //
  // Containers
  //
  verticalFlexAlignment: {
    ".h-center": {
      alignItems: "center"
    },

    ".h-start": {
      alignItems: "flex-start"
    },

    ".h-end": {
      alignItems: "flex-end"
    },

    ".v-center": {
      justifyContent: "center"
    },

    ".v-start": {
      justifyContent: "flex-start"
    },

    ".v-end": {
      justifyContent: "flex-end"
    }
  },
  horizontalFlexAlignment: {
    ".h-center": {
      justifyContent: "center"
    },

    ".h-start": {
      justifyContent: "flex-start"
    },

    ".h-end": {
      justifyContent: "flex-end"
    },

    ".v-center": {
      alignItems: "center"
    },

    ".v-start": {
      alignItems: "flex-start"
    },

    ".v-end": {
      alignItems: "flex-end"
    }
  },
  "shoutem.ui.View": {
    [INCLUDE]: ["commonVariants", "guttersPadding"],

    ".horizontal": {
      [INCLUDE]: ["horizontalFlexAlignment"],
      flexDirection: "row",
      alignItems: "flex-end"
    },

    ".vertical": {
      [INCLUDE]: ["verticalFlexAlignment"],
      flexDirection: "column"
    },

    ".fill-parent": {
      [INCLUDE]: ["fillParent"]
    },

    ".overlay": {
    //   backgroundColor: variables.imageOverlayColor
    },

    ".overlay-bottom": {
      height: 25,
      bottom: 0,
      left: 0,
      position: "absolute",
      right: 0
    },

    ".solid": {
    //   backgroundColor: variables.paperColor
    },

    ".wrap": {
      flexWrap: "wrap"
    },

    ".dimmed": {
      ".featured": {
        [INCLUDE]: ["dimmedFeaturedBackground"]
      }
    },

    ".muted": {
      opacity: 0.3
    },

    ".featured": {
      [INCLUDE]: ["featuredBackground"]
    },

    ".center": {
      alignSelf: "center"
    },

    ".badge": {
      alignItems: "center",
    //   backgroundColor: variables.navBarIconsColor,
    //   borderColor: variables.navBarBackground,
      borderRadius: 8,
      borderWidth: 2,
      height: 16,
      justifyContent: "center",
      position: "absolute",
      width: 16,

      "shoutem.ui.Text": {
        // color: variables.navBarBackground,
        fontSize: 9,
        fontWeight: "bold",
        textAlign: "center"
      }
    },

    ".oval-highlight": {
      alignItems: "center",
      backgroundColor: changeColorAlpha("#030303", 0.1),
      borderRadius: 31,
      height: 62,
      justifyContent: "center",
      width: 62
    }
  },
    //
  // Other
  //
  'shoutem.ui.LinearGradient': {
    '.fill-parent': {
      [INCLUDE]: ['fillParent'],
    },
  },
});
