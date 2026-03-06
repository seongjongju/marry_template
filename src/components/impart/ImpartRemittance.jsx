import React from 'react';
import Remittance from './Remittance';
import { bride, brideAccount, brideDad, brideDadAccount, bridegroom, bridegroomAccount, bridegroomDad, bridegroomDadAccount, bridegroomMom, bridegroomMomAccount, brideMom, brideMomAccount } from '../../shared/environment/environment';

const ImpartRemittance = () => {
    return (
        <>
            <Remittance 
                celebrant="신랑"
                names={{
                    myName: bridegroom,
                    dadName: bridegroomDad,
                    momName: bridegroomMom
                }}
                accounts={{
                    myAccount: bridegroomAccount,
                    dadAcount: bridegroomDadAccount,
                    momAcount: bridegroomMomAccount
                }}
            />
            <Remittance 
                celebrant="신부"
                names={{
                    myName: bride,
                    dadName: brideDad,
                    momName: brideMom
                }}
                accounts={{
                    myAccount: brideAccount,
                    dadAcount: brideDadAccount,
                    momAcount: brideMomAccount
                }}
            />
        </>
    );
};

export default ImpartRemittance;