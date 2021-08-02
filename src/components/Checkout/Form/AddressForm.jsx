import { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Grid, Typography } from '@material-ui/core';

import { commerce } from '../../../lib/commerce';
import CustomTextField from '../CustomFields/CustomTextField';
import CustomSelectField from '../CustomFields/CustomSelectField';

const AddressForm = ({ checkoutToken }) => {
  const formMethods = useForm();

  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, [checkoutToken]);

  return (
    <>
      <Typography variant='h6' gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...formMethods}>
        <form onSubmit={() => console.log(` `)}>
          <Grid container spacing={3}>
            <CustomTextField name='firstName' label='First Name' />
            <CustomTextField name='lastName' label='Last Name' />
            <CustomTextField name='address' label='Address' />
            <CustomTextField name='email' label='E-mail' />
            <CustomTextField name='city' label='City' />
            <CustomTextField name='zip' label='Zip Code' />
            {shippingCountries && (
              <CustomSelectField
                label='Shipping Country'
                shippingItem={shippingCountry}
                setShippingItem={setShippingCountry}
                shippingObject={shippingCountries}
              />
            )}
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
