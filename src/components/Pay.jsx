import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect, useHistory } from 'react';
import axios from 'axios';
const stripePublicKey = 'pk_test_51IyN1nIUupTlFr1HiIt617bPR42i6PMEpZxyodlyplhYrtqrGtq8EXx5iD6gKE3N7813peaBv3WfJlsywrsiEMj800jLtqbfGb'

const Pay = () => {

const [stripeToken, setStripeToken] = useState(null);
// const history = useHistory();


    const onToken= (token) =>{
        setStripeToken(token);
        console.log(token);
    }

    useEffect(() =>{
        const makeRequest = async ()=>{
            try{
              const res = await axios.post("http://localhost:5000/api/checkout/payment",{
                tokenId: stripeToken.id,
                amount: 2000,

              })
              console.log(res.data);
            //   history.push('/success');


            }catch(err){
                console.log(err);
            }
        }
       stripeToken && makeRequest();
    },[stripeToken,])

    return(<div>

    <StripeCheckout 

    name='la-Elegancia Shop'
    billingAddress
    shippingAddress
    description='total is $20'
    amount={2000}
    token={onToken}
    stripeKey={stripePublicKey}
    
    >
        <button>Pay</button>
    </StripeCheckout>
        
    </div>)
}


export default Pay;