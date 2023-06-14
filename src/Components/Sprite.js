import { Path, Svg, Symbol } from "react-native-svg";

export const Sprite = () => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg">
            <Symbol id="user" fill="none" viewBox="0 0 40 40">
                <Path
                    d="M28 29V27C28 24.7909 26.2091 23 24 23H16C13.7909 23 12 24.7909 12 27V29"
                    stroke="#212121"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 19C22.2091 19 24 17.2091 24 15C24 12.7909 22.2091 11 20 11C17.7909 11 16 12.7909 16 15C16 17.2091 17.7909 19 20 19Z"
                    stroke="#212121"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </Symbol>
            <Symbol id="grid" fill="none" viewBox="0 0 40 40">
                <Path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 11H18V18H11V11Z"
                    stroke="#212121"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22 11H29V18H22V11Z"
                    stroke="#212121"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22 22H29V29H22V22Z"
                    stroke="#212121"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 22H18V29H11V22Z"
                    stroke="#212121"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </Symbol>
        </Svg>
    );
};
