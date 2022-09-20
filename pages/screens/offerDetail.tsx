import {Box, HStack, IconButton, Stack, Text} from '@chakra-ui/react'
import React from "react";
import {FcLike} from "react-icons/fc";


export default function OfferDetail({dir, id}) {

    return (
        <Stack dir={dir}>
            <HStack spacing={'50%'}>
                <Text fontWeight="bold">
                {'category'}
            </Text>
                <IconButton
                    colorScheme='brand.darkgray'
                    aria-label='Call Sage'
                    fontSize='18px'
                    bg={'color.darkgray'}
                    //onClick={onFavoritePressed}
                    // icon={offerState.Favorite === true ? <FcLike/> : <IoHeartOutline/>}
                    icon={<FcLike/>}
                />
            </HStack>
            <Box>

                <Text fontWeight="light" fontSize={'21px'} textColor={'brand.lightgray'}>
                    {'title'}

                </Text> <Text fontWeight="bold" textColor={'brand.textGray'}>
                " wwwwuuuuuuuuuuuuuuu color='brand.primary' href={'../pages/screens/Clinics'}> color='brand.primary'
                href={'../pages/screens/Clinics'}> color='brand.primary' href={'../pages/screens/Clinics'}>
                color='brand.primary' href={'../pages/screens/Clinics'}> color='brand.primary'
                href={'../pages/screens/Clinics'}> color='brand.primary' href={'../pages/screens/Clinics'}>uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuubbbbbbbbbbbbbbbbbbbbbbbbpppppppppppppp"
            </Text>
            </Box>
        </Stack>


    );
}