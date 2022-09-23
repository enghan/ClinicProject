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
                bg: "brand.primary", rounded:'md',
                _hover: {bg: 'brand.hoverPrimary', color: 'brand.darkgray'},


            },

            variants: {

                primary: {
                    color: 'brand.darkgray',
                    bg: 'brand.primary',
                    h: '35px',
                    rounded:'md',
                    _hover: {bg: 'brand.hoverPrimary', color: 'white', fontSize: 16,   transform: 'translateY(-2px)',
                        boxShadow: 'lg',},
                },
                secondary: {
                    width: '100px',
                    color: 'brand.lightgray',
                    bg: 'brand.secondary',
                    fontWeight: 'bold',
                    fontSize: 21,
                    rounded:'md',
                    _hover: {
                        bg: 'brand.hoverPrimary',
                        color: 'brand.darkgray',
                        fontSize: 18,
                        textDecoration: 'none',
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                    }

                }, outline: {
                    border: 'solid',
                    borderColor:'brand.light',
                    rounded:'md',
                    boxShadow:
                        '0px 1px 25px -5px rgb(66 153 225 / 28%), 0 10px 10px -5px rgb(66 153 225 / 3%)',

                    _hover: {bg: 'brand.lightgray', borderColor: 'brand.darkgray',   transform: 'translateY(-2px)',
                        boxShadow: 'lg',}

                },
            },

        },
        Tabs: {
            variants: {
                unStyled: {

                    margin: '20',
                    bg: 'brand.primary',

                    tab: {
                        bg: 'brand.gray',
                        _selected: {
                            color: 'brand.darkGray',
                            boxShadow: 'none',
                            bg: 'brand.lightgray',
                        },
                    },
                },
            },
        },
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