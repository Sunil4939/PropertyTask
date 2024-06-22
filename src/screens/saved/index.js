import { View, Text, ImageBackground, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import MainView from '../../component/mainView'
import { COLORS, SIZES, images } from '../../constants'
import styles from './styles'
import { connect } from 'react-redux'
import PropertyCard from '../../component/cards/PropertyCard'
import EmptyData from '../../component/EmptyData/emptyData'

const Saved = ({ navigation, getAllWishlist }) => {
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [refresh, setRefresh] = useState(false)
  const [downloading, setDownloading] = useState(false)


  return (
    <MainView >

        <FlatList
          data={getAllWishlist?.[0] ? getAllWishlist : []}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <PropertyCard
              key={index}
              item={item}
            />
          )}
         ListEmptyComponent={() => (
          <EmptyData title={"Data not found"} mainStyle={{ height: SIZES.height * .8 }} />
         )}
        />
      
    </MainView>
  )
}

const mapStateToProps = state => ({
  getAllWishlist: state.property.getAllWishlist
});

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Saved);