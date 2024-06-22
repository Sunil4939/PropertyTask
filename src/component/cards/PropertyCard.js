import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { COLORS, SIZES, FONTS } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { http2 } from '../../services/api'
import { GET_ALL_WISHLIST } from '../../redux/types'
import Icons from '../Icons'

const PropertyCard = ({ item, }) => {
  const ref = useRef(null)

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / SIZES.width * .94);
    setCurrentSlideIndex(currentIndex);
  };

  const [condition, setCondition] = useState(false);
  const navigation = useNavigation()

  const dispatch = useDispatch()

  const getAllWishlist = useSelector(state => state?.property?.getAllWishlist);

  useEffect(() => {
    if (getAllWishlist && getAllWishlist?.[0]) {
      if (getAllWishlist?.some(i => i?.id === item?.id)) {
        setCondition(true);
      } else {
        setCondition(false);
      }
    } else {
      setCondition(false);
    }
  }, [getAllWishlist])

  const handleChange = () => {
    if (condition) {
      let arr = getAllWishlist?.filter(i => i?.id !== item?.id)
      dispatch({
        type: GET_ALL_WISHLIST,
        payload: arr
      })
      setCondition(false);
    } else {
      let arr = getAllWishlist ? [...getAllWishlist] : []
      dispatch({
        type: GET_ALL_WISHLIST,
        payload: [...arr, item]
      })
      setCondition(true);
    }
  };


  return (
    <View style={styles.card}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        data={item?.images || []}
        renderItem={({ item, index }) => (
          <View style={styles.cardImage} key={index}>
            <Image source={{ uri: http2 + item }} style={styles.image} resizeMode='cover' />
          </View>
        )}
      />

      <View style={styles.lengthBox}>
        <Text style={styles.imageLength}>{currentSlideIndex + 1}/{item?.images?.length - 1}</Text>
      </View>

        <Text style={styles.lime}>{item?.isLimelightListing ? "Limelight" : "Featured Project"}</Text>

      <View style={styles.priceBox}>

        <Text style={styles.price}>{item?.displayPrice?.priceRange?.from ? `₹${item?.displayPrice?.priceRange?.from} - ` : ''}{item?.displayPrice?.priceRange?.to ? `₹${item?.displayPrice?.priceRange?.to}` : ""}</Text>

        <TouchableOpacity activeOpacity={0.5} onPress={handleChange}>
          <Icons name={condition ? 'heart' : 'hearto'} size={SIZES.width * .06} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>{item?.name}</Text>
      <Text style={styles.subtitle}>by {item?.company?.name}</Text>
      <View style={styles.locationRow}>
        <Icons size={SIZES.width * .08} name={'location'} color={COLORS.primary} />
        <Text style={styles.location}>{item?.address?.area}, {item?.address?.city?.name}</Text>
      </View>

      <View style={styles.typeRow}>
        {item?.configuration?.map((i, index) => (
          <Text key={index} style={styles.type}>{i}{index != 0 && index != item?.configuration?.length ? ", " : ""} </Text>
        ))}
        <Text style={styles.type}>Apartment</Text>
      </View>

    </View>
  )
}

export default PropertyCard

const styles = StyleSheet.create({
  card: {
    width: SIZES.width * .94,
    // height: SIZES.height * .3,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: SIZES.height * .01,
    borderWidth: 1,
    alignSelf: 'center',
    borderColor: COLORS.gray20,
  },
  cardImage: {
    width: SIZES.width * .936,
    height: SIZES.height * .2,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    marginVertical: SIZES.height * .01,
    // borderWidth: 1,
  },
  image: {
    width: SIZES.width * .84,
    height: SIZES.height * .2,
    borderRadius: 10,
  },

  lime: {
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * .05,
    marginLeft: SIZES.width * .05,
    backgroundColor: COLORS.lime,
    paddingVertical: SIZES.height * .01,
    paddingHorizontal: SIZES.width * .03,
    textAlign: 'left',
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginVertical: SIZES.height * .01,
  },
  lengthBox: {
    backgroundColor: COLORS.black,
    borderRadius: SIZES.width * .1,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingHorizontal: SIZES.width * .03,
    paddingVertical: SIZES.height * .01,
  },
  imageLength: {
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * .034,
  },
  priceBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.width * .05,
    marginTop: SIZES.height * .01,
  },
  price: {
    color: COLORS.gray01,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * .05,
  },
  title: {
    color: COLORS.black,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * .05,
    marginLeft: SIZES.width * .05,
    marginTop: SIZES.height * .01,
  },
  subtitle: {
    color: COLORS.gray01,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * .04,
    marginLeft: SIZES.width * .05,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: SIZES.width * .03,
    marginTop: SIZES.height * .01,
  },
  location: {
    color: COLORS.gray01,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * .04,
    marginLeft: SIZES.width * .01,
  },
  type: {
    color: COLORS.gray01,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * .04,
  },
  typeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: SIZES.width * .05,
    marginTop: SIZES.height * .01,
    marginBottom: SIZES.height * .015,
  },
})