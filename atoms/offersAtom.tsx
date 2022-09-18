import { atom } from 'recoil';

export const myOfferState = atom({
    key: 'myOfferState',
    default: {
        Favorite: false,
        Rate:0
    },
});