import {extendTheme} from '@chakra-ui/react';


const theme = extendTheme({
    body: {
        background: 'brand.primary',
    },
    fonts: {
        body: 'Droid Arabic Kufi, sans-serif',
        heading: 'Georgia, serif',
        monospace: 'Menlo, monospace'
        , fontSizes: [
            12, 14, 16, 20, 24, 32, 48, 64
        ],
        fontWeights: {
            body: 400,
            heading: 700,
            bold: 700,
        },
        lineHeights: {
            body: 1.5,
            heading: 1.125,
        },
        letterSpacings: {
            body: 'normal',
            caps: '0.2em',
        },
        styles: {
            h1: {
                fontSize: 600,
                fontFamily: 'heading',
                fontWeight: 'heading',
                color: 'brand.primary',

            },
            h2: {
                variant: 'text.heading',
                fontSize: 4,
            },
            h3: {
                variant: 'text.heading',
                fontSize: 3,
            },
            h4: {
                variant: 'text.heading',
                fontSize: 2,
            },
            h5: {
                variant: 'text.heading',
                fontSize: 1,
            },
            h6: {
                variant: 'text.heading',
                fontSize: 0,
            },
        }
    },
    colors: {
        brand: {
            primary: "#ffcdd2",
            gray: "#E1E2E1",
            hoverPrimary: "#cb9ca1",
            hoverGray: "#262626",
            lightgray: "#b3b3b3",
            darkgray: "#262626",
            textGray: "#848984",
            light: "#eeeeee",
        },
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: 'bold',
                textColor: 'brand.darkgray',
                width: '300px',
                bg: "brand.primary", rounded: 'md',
                _hover: {bg: 'brand.hoverPrimary', color: 'brand.darkgray'},


            },

            variants: {

                primary: {
                    color: 'brand.darkgray',
                    bg: 'brand.primary',
                    h: '35px',
                    rounded: 'md',
                    _hover: {
                        bg: 'brand.hoverPrimary', color: 'white', fontSize: 16, transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                    },
                },
                secondary: {

                    rounded: 'xl',
                    boxShadow: '0 5px 20px 0px rgb(72 187 120 / 43%)',
                    mt: '10',
                    w: 'full',
                    color: 'white',
                    bg: 'brand.hoverPrimary',
                    fontWeight: 'bold',
                    fontSize: 21,
                    _hover: {
                        bg: 'brand.primary',
                        color: 'brand.darkgray',
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                    },
                    _focus: {
                        bg: 'brand.primary',
                        color: 'brand.darkgray',
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                    }

                }, outline: {
                    border: 'solid',
                    borderColor: 'brand.light',
                    rounded: 'md',
                    boxShadow:
                        '0px 1px 25px -5px rgb(66 153 225 / 28%), 0 10px 10px -5px rgb(66 153 225 / 3%)',

                    _hover: {
                        bg: 'brand.lightgray', borderColor: 'brand.darkgray', transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                    }

                },
            },

        },
//         Tabs: {
//             variants: {
//                 soft_rounded: {
// bg:"whiteAlpha.300",
//                        tab: {
//                         bg: 'brand.gray',
//                         fontSize:'2xl',
//                         fontWeight:'bold',
//                         _hover:{transform: "scale(1.03)",},
//                         transition:"0.2s ease-in-out",
//                         color:'brand.darkgray',
//                         _selected: {
//                             rounded:'2xl',
//                             fontSize:'2xl', color: 'white', bg: 'brand.hoverPrimary'
//                         },
//                     },
//                 },
//             },
//         },
        Heading: {p: '20px'},
        Select: {
            baseStyle: {
                field: {
                    color: '#434E61',
                    bg: '#F6F6F6',
                },
                icon: {
                    fontSize: '2xl',
                },
                colorScheme: {color: '#B3B3B3'},

            },
        },

    },


});


export default theme;