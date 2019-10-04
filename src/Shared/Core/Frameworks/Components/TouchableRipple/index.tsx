/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { connectStyle } from "@shoutem/theme";
import * as React from "react";
import {
    Animated,
    Easing,
    GestureResponderEvent,
    LayoutChangeEvent,
    TouchableWithoutFeedback,
    View as RNView,
    ViewStyle,
} from "react-native";
type Props = React.ComponentProps<typeof TouchableWithoutFeedback> &
    React.ComponentProps<typeof RNView> & {
        rippleColor: string;
        rippleOpacity: number;
        rippleDuration: number;
        rippleSize: number;
        rippleContainerBorderRadius: number;
        rippleCentered: boolean;
        rippleSequential: boolean;
        rippleFades: boolean;
        disabled: boolean;
        onRippleAnimation: (animation, callback) => any;
        style: { container: ViewStyle; ripple: ViewStyle };
        theme?: any;
    };
interface State {
    width: number;
    height: number;
    ripples: any[];
}
class Ripple extends React.PureComponent<Props, State> {
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    constructor(props: Props) {
        super(props);
    }

    public static defaultProps: Partial<Props> = {
        // ...TouchableWithoutFeedback.defaultProps,
        rippleColor: "rgb(0, 0, 0)",
        rippleOpacity: 0.3,
        rippleDuration: 400,
        rippleSize: 0,
        rippleContainerBorderRadius: 0,
        rippleCentered: false,
        rippleSequential: false,
        rippleFades: true,
        disabled: false,
        onRippleAnimation: (animation, callback) => animation.start(callback),
    };
    private unique: number = 0;
    private mounted: boolean = false;
    state = {
        width: 0,
        height: 0,
        ripples: [],
    };
    componentDidMount() {
        this.mounted = true;
    }
    componentWillUnmount() {
        this.mounted = false;
    }
    onLayout = (event: LayoutChangeEvent): void => {
        const { width, height } = event.nativeEvent.layout;
        const { onLayout } = this.props;
        if (typeof onLayout === "function") {
            onLayout(event);
        }
        this.setState({ width, height });
    };
    onPress = (event: GestureResponderEvent): void => {
        const { ripples } = this.state;
        const { onPress, rippleSequential } = this.props;
        if (!rippleSequential || !ripples.length) {
            if (typeof onPress === "function") {
                requestAnimationFrame(() => onPress(event));
            }
            this.startRipple(event);
        }
    };
    onLongPress = (event: GestureResponderEvent): void => {
        const { onLongPress } = this.props;
        if (typeof onLongPress === "function") {
            requestAnimationFrame(() => onLongPress(event));
        }
        this.startRipple(event);
    };
    onPressIn = (event: GestureResponderEvent): void => {
        let { onPressIn } = this.props;

        if (typeof onPressIn === "function") {
            onPressIn(event);
        }
    };

    onPressOut = (event: GestureResponderEvent): void => {
        let { onPressOut } = this.props;

        if (typeof onPressOut === "function") {
            onPressOut(event);
        }
    };
    onAnimationEnd = (): void => {
        if (this.mounted) {
            this.setState(({ ripples }) => ({ ripples: ripples.slice(1) }));
        }
    };
    createRipple = (locationX, locationY, R) => ({
        unique: this.unique++,
        progress: new Animated.Value(0),
        locationX,
        locationY,
        R,
    });
    startRipple = (event: GestureResponderEvent): void => {
        const { width, height } = this.state;
        const { rippleDuration, rippleCentered, rippleSize, onRippleAnimation } = this.props;
        const w2 = 0.5 * width;
        const h2 = 0.5 * height;
        const { locationX, locationY } = rippleCentered ? { locationX: w2, locationY: w2 } : event.nativeEvent;
        const offsetX = Math.abs(w2 - locationX);
        const offsetY = Math.abs(h2 - locationY);
        const R = rippleSize > 0 ? 0.5 * rippleSize : Math.sqrt(Math.pow(w2 + offsetX, 2) + Math.pow(h2 + offsetY, 2));
        const ripple = this.createRipple(locationX, locationY, R);
        const animation = Animated.timing(ripple.progress, {
            toValue: 1,
            easing: Easing.out(Easing.ease),
            duration: rippleDuration,
            useNativeDriver: true,
        });
        onRippleAnimation(animation, this.onAnimationEnd);
        this.setState(({ ripples }) => ({ ripples: ripples.concat(ripple) }));
    };
    renderRipple = ({ unique, progress, locationX, locationY, R }): React.ReactNode => {
        const { rippleColor, rippleOpacity, rippleFades, style, theme } = this.props;
        // const { rippleRadius = radius } = theme;
        const rippleStyle: ViewStyle = {
            top: locationY - theme.rippleRadius,
            left: locationX - theme.rippleRadius,
            backgroundColor: rippleColor,
            transform: [
                {
                    scale: progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.5 / theme.rippleRadius, R / theme.rippleRadius],
                    }),
                },
            ],
            opacity: rippleFades
                ? progress.interpolate({ inputRange: [0, 1], outputRange: [rippleOpacity, 0] })
                : rippleOpacity,
        };
        return <Animated.View style={Object.assign(style.ripple, rippleStyle)} key={unique} />;
    };

    render() {
        const { ripples } = this.state;
        const { onPress, onPressIn, onPressOut, onLongPress, onLayout } = this;
        const {
            delayLongPress,
            delayPressIn,
            delayPressOut,
            disabled,
            hitSlop,
            pressRetentionOffset,
            children,
            rippleContainerBorderRadius,
            testID,
            nativeID,
            accessible,
            accessibilityLabel,
            onLayout: __ignored__,
            style,
            ...props
        } = this.props;

        const touchableProps = {
            delayLongPress,
            delayPressIn,
            delayPressOut,
            disabled,
            hitSlop,
            pressRetentionOffset,
            onPress,
            onPressIn,
            testID,
            nativeID,
            accessible,
            accessibilityLabel,
            onPressOut,
            onLongPress: props.onLongPress ? onLongPress : undefined,
            onLayout,
        };

        let containerStyle = {
            borderRadius: rippleContainerBorderRadius,
        };
        return (
            <TouchableWithoutFeedback {...touchableProps}>
                <Animated.View {...props} pointerEvents="box-only">
                    {children}
                    <Animated.View style={Object.assign(style.container || {}, containerStyle)}>
                        {ripples.map(this.renderRipple)}
                    </Animated.View>
                </Animated.View>
            </TouchableWithoutFeedback>
        );
    }
}
// Ripple.defaultProps.
export default connectStyle("md.ui.Ripple")(Ripple);
