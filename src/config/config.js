import config from 'react-global-configuration';

config.set({
    source: process.env.REACT_APP_review_source,
    amount: process.env.REACT_APP_giftcard_amount,
    email: process.env.REACT_APP_contact_email,
});


export default config
