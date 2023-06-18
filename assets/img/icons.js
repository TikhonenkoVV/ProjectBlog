export const iconGrid = `<svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                width="24"
                height="24"
                transform="translate(8 8)"
                fill="white"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 11H18V18H11V11Z"
                stroke="#212121"
                stroke-opacity="0.8"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22 11H29V18H22V11Z"
                stroke="#212121"
                stroke-opacity="0.8"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22 22H29V29H22V22Z"
                stroke="#212121"
                stroke-opacity="0.8"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 22H18V29H11V22Z"
                stroke="#212121"
                stroke-opacity="0.8"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>`;

export const iconAdd = (firstColor, secondColor, thirdcolor) => `<svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="12.5"
                    cy="12.5"
                    r="12"
                    fill="${firstColor}"
                    stroke="${secondColor}"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z"
                    fill="${thirdcolor}"
                />
            </svg>`;

export const iconUser = `<svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M28 29V27C28 24.7909 26.2091 23 24 23H16C13.7909 23 12 24.7909 12 27V29"
            stroke="#212121"
            stroke-opacity="0.8"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 19C22.2091 19 24 17.2091 24 15C24 12.7909 22.2091 11 20 11C17.7909 11 16 12.7909 16 15C16 17.2091 17.7909 19 20 19Z"
            stroke="#212121"
            stroke-opacity="0.8"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>`;

export const iconComments = (firstColor, secondColor) => `<svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="${firstColor}"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 11.5C2.99656 12.8199 3.30493 14.1219 3.9 15.3C5.33904 18.1793 8.28109 19.9988 11.5 20C12.8199 20.0034 14.1219 19.6951 15.3 19.1L21 21L19.1 15.3C19.6951 14.1219 20.0034 12.8199 20 11.5C19.9988 8.28109 18.1793 5.33904 15.3 3.9C14.1219 3.30493 12.8199 2.99656 11.5 3H11C6.68419 3.2381 3.2381 6.68419 3 11V11.5V11.5Z"
                stroke="${secondColor}"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>`;

export const iconLikes = (color) => `<svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill="none"
                    stroke="${color}"
                    stroke-width="1px"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-opacity="1"
                    d="M 7.318635,9.199955 4.72741,9.19995 C 3.5133055,9.25962 2.995996,10.126292 3,10.7999 v 5.6 c -0.014744,0.912971 0.5755239,1.437006 1.72741,1.6 h 2.59111 9.74268 c 0.825316,-0.203817 1.482963,-0.575304 1.7274,-1.36 L 19.9805,9.43995 C 19.805616,8.70871 19.793107,7.929713 18.25315,7.599965 L 13.3646,7.59996 13.3021,4.39998 C 13.229,2.632305 11.094728,1.269548 10.648501,2.375 Z"
                    id="path3050"
                />
                <path
                    fill="none"
                    stroke="#BDBDBD"
                    stroke-width="1px"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-opacity="1"
                    d="m 7.318635,9.199955 -5e-6,8.799945"
                    id="path4210"
                />
            </svg>`;

export const iconMarker = `<svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20 10.3636C20 16.0909 12 21 12 21C12 21 4 16.0909 4 10.3636C4 6.29681 7.58172 3 12 3C16.4183 3 20 6.29681 20 10.3636V10.3636Z"
                        stroke="#BDBDBD"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"
                        stroke="#BDBDBD"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>`;

export const iconLogOut = `<svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2H10"
                            stroke="#BDBDBD"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M17 16L21 12L17 8"
                            stroke="#BDBDBD"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M21 12H9"
                            stroke="#BDBDBD"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>`;

export const iconCamera = `<svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="30" cy="30" r="30" fill="white" />
        <g clip-path="url(#clip0_32_29)">
            <path
                d="M29.9998 33.2C31.7671 33.2 33.1998 31.7673 33.1998 30C33.1998 28.2327 31.7671 26.8 29.9998 26.8C28.2325 26.8 26.7998 28.2327 26.7998 30C26.7998 31.7673 28.2325 33.2 29.9998 33.2Z"
                fill="#BDBDBD"
            />
            <path
                d="M27 20L25.17 22H22C20.9 22 20 22.9 20 24V36C20 37.1 20.9 38 22 38H38C39.1 38 40 37.1 40 36V24C40 22.9 39.1 22 38 22H34.83L33 20H27ZM30 35C27.24 35 25 32.76 25 30C25 27.24 27.24 25 30 25C32.76 25 35 27.24 35 30C35 32.76 32.76 35 30 35Z"
                fill="#BDBDBD"
            />
        </g>
        <defs>
            <clipPath id="clip0_32_29">
                <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(18 18)"
                />
            </clipPath>
        </defs>
    </svg>`;

export const iconRecicle = `<svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3 6H5H21"
                stroke="#BDBDBD"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M19.5 6C19.5 5.72386 19.2761 5.5 19 5.5C18.7239 5.5 18.5 5.72386 18.5 6H19.5ZM5.5 6C5.5 5.72386 5.27614 5.5 5 5.5C4.72386 5.5 4.5 5.72386 4.5 6H5.5ZM7.5 6C7.5 6.27614 7.72386 6.5 8 6.5C8.27614 6.5 8.5 6.27614 8.5 6H7.5ZM15.5 6C15.5 6.27614 15.7239 6.5 16 6.5C16.2761 6.5 16.5 6.27614 16.5 6H15.5ZM18.5 6V20H19.5V6H18.5ZM18.5 20C18.5 20.8284 17.8284 21.5 17 21.5V22.5C18.3807 22.5 19.5 21.3807 19.5 20H18.5ZM17 21.5H7V22.5H17V21.5ZM7 21.5C6.17157 21.5 5.5 20.8284 5.5 20H4.5C4.5 21.3807 5.61929 22.5 7 22.5V21.5ZM5.5 20V6H4.5V20H5.5ZM8.5 6V4H7.5V6H8.5ZM8.5 4C8.5 3.17157 9.17157 2.5 10 2.5V1.5C8.61929 1.5 7.5 2.61929 7.5 4H8.5ZM10 2.5H14V1.5H10V2.5ZM14 2.5C14.8284 2.5 15.5 3.17157 15.5 4H16.5C16.5 2.61929 15.3807 1.5 14 1.5V2.5ZM15.5 4V6H16.5V4H15.5Z"
                fill="#BDBDBD"
            />
            <path
                d="M10 11V17"
                stroke="#BDBDBD"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M14 11V17"
                stroke="#BDBDBD"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>`;

export const iconCameraExit = `<svg
        width="60"
        height="60"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fill="#fff"
            opacity="0.5"
            d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"
        ></path>
        <path
            fill="#FF6C00"
            d="M6.155 16l9.527 9.527v-5.716h10.162v-7.622h-10.162v-5.716z"
        ></path>
    </svg>`;

export const iconCameraSnap = `    <svg
        width="60"
        height="60"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fill="#fff"
            opacity="0.5"
            d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"
        ></path>
        <path
            fill="#ff6c00"
            d="M13.067 6.669l-1.789 1.955h-3.099c-1.075 0-1.955 0.88-1.955 1.955v11.731c0 1.075 0.88 1.955 1.955 1.955h15.641c1.075 0 1.955-0.88 1.955-1.955v-11.731c0-1.075-0.88-1.955-1.955-1.955h-3.099l-1.789-1.955z"
        ></path>
        <path
            fill="#fff"
            style="fill: var(--color1, #fff)"
            d="M16 21.377c2.724 0 4.933-2.209 4.933-4.933s-2.209-4.933-4.933-4.933c-2.724 0-4.933 2.209-4.933 4.933s2.209 4.933 4.933 4.933z"
        ></path>
        <path
            fill="#ff6c00"
            d="M16 19.572c1.728 0 3.128-1.401 3.128-3.128s-1.401-3.128-3.128-3.128c-1.728 0-3.128 1.401-3.128 3.128s1.401 3.128 3.128 3.128z"
        ></path>
    </svg>
`;

export const iconCameraFlip = `
        <svg
            width="60"
            height="60"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill="#fff"
                opacity="0.5"
                d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"
            ></path>
            <path
                fill="#FF6C00"
                d="M13.067 6.669l-1.789 1.955h-3.099c-1.075 0-1.955 0.88-1.955 1.955v11.731c0 1.075 0.88 1.955 1.955 1.955h15.641c1.075 0 1.955-0.88 1.955-1.955v-11.731c0-1.075-0.88-1.955-1.955-1.955h-3.099l-1.789-1.955zM11.112 16.444c-7.408-10.963-3.704-5.481 0 0z"
            ></path>
            <path
                fill="#fff"
                d="M19.503 13.277c-0.868-0.948-2.117-1.543-3.505-1.543-2.624 0-4.751 2.127-4.751 4.751h0.891c0-2.132 1.728-3.86 3.86-3.86 1.141 0 2.167 0.496 2.874 1.283l-1.389 1.389h3.266v-3.266l-1.246 1.246z"
            ></path>
            <path
                fill="#fff"
                d="M19.859 16.485c0 2.132-1.728 3.86-3.86 3.86-1.141 0-2.167-0.496-2.874-1.283l1.389-1.389h-3.266v3.266l1.246-1.246c0.868 0.948 2.117 1.543 3.505 1.543 2.624 0 4.751-2.127 4.751-4.751z"
            ></path>
        </svg>`;
