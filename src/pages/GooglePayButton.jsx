import { useEffect } from 'react';

const GooglePayButton = () => {
  useEffect(() => {
    // Load the Google Pay script dynamically
    const script = document.createElement('script');
    script.src = 'https://pay.google.com/gp/p/js/pay.js';
    script.async = true;
    script.onload = () => {
      // Create PaymentsClient in TEST mode
      const paymentsClient = new window.google.payments.api.PaymentsClient({
        environment: 'TEST', // Change to 'PRODUCTION' when ready
      });
      
      // Create the button with desired properties
      const button = paymentsClient.createButton({
        onClick: onGooglePaymentButtonClicked,
        buttonColor: 'black', // You can choose 'black' or 'white'
        buttonType: 'donate', // The button type can be 'buy', 'donate', etc.
      });
      
      // Append the created button to our div
      const buttonContainer = document.getElementById('google-pay-button');
      if (buttonContainer) {
        buttonContainer.appendChild(button);
      }
    };
    document.body.appendChild(script);
  }, []);

  const onGooglePaymentButtonClicked = () => {
    // Define your payment request object here.
    // This is a sample request in TEST mode.
    const paymentDataRequest = {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [{
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['AMEX', 'DISCOVER', 'JCB', 'MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example', // Replace with your gateway (e.g., 'stripe')
            gatewayMerchantId: 'exampleMerchantId' // Replace with your merchant ID if applicable
          },
        },
      }],
      merchantInfo: {
        merchantId: '01234567890123456789', // Replace with your merchant ID if you have one
        merchantName: 'Your Donation Merchant Name',
      },
      transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPrice: '1.00', // Set the donation amount here (as a string), e.g., '1.00' for $1.00 donation
        currencyCode: 'USD', // Change currency code if needed
        countryCode: 'US',   // Change country code if needed
      },
    };

    // Create a PaymentsClient and load the payment data
    const paymentsClient = new window.google.payments.api.PaymentsClient({
      environment: 'TEST',
    });
    paymentsClient.loadPaymentData(paymentDataRequest)
      .then(paymentData => {
        // Handle successful payment data response
        console.log('Payment Data:', paymentData);
        alert('Donation successful!');
      })
      .catch(err => {
        // Handle errors or user cancellations
        console.error('Payment failed:', err);
        alert('Donation failed or cancelled.');
      });
  };

  return <div id="google-pay-button"></div>;
};

export default GooglePayButton;
