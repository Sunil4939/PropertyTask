import { View, Text, ImageBackground, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import MainView from '../../component/mainView'
import { COLORS, SIZES, images } from '../../constants'
import styles from './styles'

import { connect } from 'react-redux'
import { GetAllPropertiesApi } from '../../redux/actions/property'
import PropertyCard from '../../component/cards/PropertyCard'

const Home = ({ navigation, getAllProperty, GetAllPropertiesApi }) => {
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [refresh, setRefresh] = useState(false)
  const [downloading, setDownloading] = useState(false)

  useEffect(() => {
    GetAllPropertiesApi(1, 'Bhopal', ['pgHostel'], (loading) => setLoading(loading))
  }, [])

  // console.log('getAllProperty : ', getAllProperty?.propertyList?.[0])

  return (
    <MainView >

      {loading ?
        <View style={{
          flex: 1,
          alignItems: 'center', justifyContent: 'center'
        }}>
          <ActivityIndicator size={'large'} color={COLORS.primary} style={{ marginVertical: 10 }} />
        </View>
        :
        <View>
          {/* <TouchableOpacity>
            <Text style={styles.filterText}>Filters</Text>
            <Icons name={'filter'} color={COLORS.primary} size={SIZES.width * .08} />
          </TouchableOpacity> */}
          <FlatList
            data={getAllProperty?.propertyList?.[0] ? getAllProperty?.propertyList : []}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <PropertyCard
                key={index}
                item={item}
              />
            )}
            onRefresh={() => GetAllPropertiesApi(1, 'Bhopal', ['pgHostel'], (loading) => setRefresh(loading))}
            refreshing={refresh}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (getAllProperty?.propertyList?.length >= 30 && !downloading) {
                GetAllPropertiesApi(page + 1, 'Bhopal', ['pgHostel'], (loading, success) => { setDownloading(loading), success == "success" && setPage(page + 1) })
              }
            }}
            ListFooterComponent={() => (
              downloading && <ActivityIndicator size={'large'} color={COLORS.primary} style={{ marginVertical: 10 }} />
            )}
          />
        </View>
      }
    </MainView>
  )
}

const mapStateToProps = state => ({
  getAllProperty: state.property.getAllProperty
});

const mapDispatchToProps = {
  GetAllPropertiesApi
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);