import React from 'react';
import Card from '../../layouts/Card';
import { Link, Text, Button } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import ModalBox from '../../layouts/ModalBox';
import FadeInUp from '../../Animation/FadeInUp';
import axios from 'axios';
import { useState, useEffect } from 'react';

const RideCard = (props) => {
  const from = props.from;
  const to = props.to;
  const doj = props.doj;
  const price = props.price;
  const nop = props.nop;
  const rideID = props.rideID;
  const pid = props.pid;

  const [publisherDetail, setPublisherDetail] = useState({});


  useEffect(async () => {
    try {
      const d = await axios.get(`http://localhost:8000/user/data/${pid}`)
      console.log(d.data);
      setPublisherDetail(d.data);
    } catch (err) {
      alert(`Error: ${err}`);
    }
  }, [])
  
  console.log(props);

  var color = 'white';
  var statusColor = 'orange.200';
  
  const bookRide = async () => {
    // console.log('Book Ride');
  };

  return (
    <FadeInUp>
      <Card
        py="3rem"
        my="2rem"
        px="2rem"
        mx="4rem"
        width="90vw"
        borderRadius="16px"
        boxShadow=" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        height={{ sm: '200px' }}
        bg={color}
        position="relative"
      >
        <Grid templateColumns="repeat(7, 1fr)" gap={3}>
          <GridItem
            w="100%"
            bgColor={statusColor}
            textAlign={'center'}
            verticalAlign={'middle'}
            h={'60px'}
            borderRadius={'50px'}
          >
            <Text fontWeight={600} fontSize={'3xl'}>
              {from}
            </Text>
          </GridItem>
          <GridItem
            w="100%"
            bgColor={statusColor}
            textAlign={'center'}
            verticalAlign={'middle'}
            h={'60px'}
            borderRadius={'50px'}
          >
            <Text fontWeight={600} fontSize={'3xl'}>
              {to}
            </Text>
          </GridItem>

          <GridItem w="100%" textAlign={'center'}>
            <Text fontWeight={'bold'}>Date of Journey:</Text>
            {doj}
          </GridItem>
          <GridItem w="100%" textAlign={'center'}>
            <Text fontSize={'2xl'}>{nop} Passengers</Text>
          </GridItem>
          <GridItem w="100%" textAlign={'center'}>
            <b>Price</b>
            <br />
            Rs. {price}
          </GridItem>
          <GridItem w="100%" textAlign={'center'}>
            <Text fontSize={'lg'}>Published by: {`${publisherDetail.fname} ${publisherDetail.lname}`}</Text>
          </GridItem>
          <GridItem w="100%" textAlign={'center'}>
            {/* <ModalBox
            status={status}
            name={asgnTO_name}
            phone={phone}
            OTP={OTP}
            timestamp={timestamp}
            completedTime={completedTime}
            description={description}
            category={category}
            subcategory={subcategory}
            cID = {complaintID}
            /> */}
            <br />
            <Button onClick={bookRide}>Book Ride</Button>
          </GridItem>
        </Grid>
        <br />
        <br />
      </Card>
    </FadeInUp>
  );
};

export default RideCard;