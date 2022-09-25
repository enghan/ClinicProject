import {Box,HStack} from "@chakra-ui/react";
import {BsStar, BsStarFill, BsStarHalf} from "react-icons/all";
import {FormattedMessage} from "react-intl";

interface RatingProps {
    rating: number;
    numReviews: number;
}
export default  function Rating({ rating, numReviews }: RatingProps) {
    return (
        <HStack alignItems="center">
            {Array(5)
                .fill('')
                .map((_, i) => {
                    const roundedRating = Math.round(rating * 2) / 2;
                    if (roundedRating - i >= 1) {
                        return (
                            <BsStarFill
                                key={i}
                                style={{ marginLeft: '3' }}
                                color={i < rating ? 'brand.primary' : 'brand.darkgray'}
                            />
                        );
                    }
                    if (roundedRating - i === 0.5) {
                        return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
                    }
                    return <BsStar key={i} style={{ marginLeft: '1' }} />;
                })}
            <Box as="span" ml="2" color="brand.textGray" fontSize="sm">
                {numReviews} <FormattedMessage id={"review"}/>
            </Box>
        </HStack>
    );
}