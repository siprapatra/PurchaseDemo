import React, { Component } from "react";
import { SafeAreaView, Text, Image, View } from "react-native";
import { applyDiscountAction } from "../store/actions/HomeScreenAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import Tooltip from 'react-native-walkthrough-tooltip';
import Card from "../components/card";
import ExpandableView from "../components/ExpandableView";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainValue: 100,
      discount: 0,
      priceAfterDiscount: 100,
      toolTipVisible: true,
      showItemDetails: false,
      showPromoCodeView: false,
      promoCode: ""
    };
  }

  componentDidMount() {
    this.props.applyDiscountAction("DISCOUNT", this.state.mainValue);
  }

  render() {
    const { priceAfterDiscount } = this.state;
    return (
      <SafeAreaView style={{ paddingHorizontal: 20, flex: 1 }}>
        <View style={{ paddingHorizontal: 10, flex: 1 }}>
          <Card title="SubTotal" value="$102.6" />
          <Card
            titleStyle={{ textDecorationLine: "underline" }}
            title="Pickup savings"
            valueStyle={{ color: "red" }}
            value="-$3.85"
          />
          <Card
            title="Est Taxes and Fees"
            value="$8.92"
            additionText="(Based on 94085)"
          />
          <View
            style={{ height: 0.5, backgroundColor: "gray", marginVertical: 10 }}
          />
          <Card
            viewContainer={{ alignItems: "center" }}
            titleStyle={{ fontSize: 24, fontWeight: "bold" }}
            title="Est. total"
            valueStyle={{ fontSize: 27, fontWeight: "bold" }}
            value="$108.03"
          />
          <ExpandableView
            onPress={show => this.setState({ showItemDetails: show })}
            show={this.state.showItemDetails}
            showText="Hide item details"
            hiddenText="See item details"
          >
            <View style={{ flexDirection: "row", margin: 10 }}>
              <Image
                style={{ height: 50, width: 50, backgroundColor: "gray" }}
              />
              <View style={{ paddingHorizontal: 15 }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: "black"
                  }}
                >
                  Essentials by OFM{"\n"}ESS-3085 Racing{"\n"}Style Leather
                  {"\n"}Gaming Chair, Red
                </Text>
                <Card
                  viewContainer={{ marginTop: 3 }}
                  titleStyle={{ fontWeight: "bold", fontSize: 16 }}
                  title="$99.11"
                  value="Qty:1"
                  valueStyle={{ fontWeight: "300", fontSize: 16 }}
                />
              </View>
            </View>
          </ExpandableView>
          <ExpandableView
            onPress={show => this.setState({ showPromoCodeView: show })}
            show={this.state.showPromoCodeView}
            showText="Hide promo code"
            hiddenText="Apply promo code"
          >
            <View style={{ margin: 10 }}>
              <Text
                style={{ fontSize: 16, marginHorizontal: 10, marginBottom: 5 }}
              >
                Promo code
              </Text>
              <View style={{ flexDirection: "row" }}>
                <TextInput
                  value={this.state.promoCode}
                  style={{
                    borderWidth: 0.5,
                    borderRadius: 10,
                    borderColor: "gray",
                    height: 40,
                    paddingHorizontal: 10,
                    flex: 1
                  }}
                  onChangeText={text => this.setState({ promoCode: text })}
                />
                <TouchableOpacity
                  style={{
                    borderRadius: 10,
                    borderWidth: 0.5,
                    borderColor: "gray",
                    height: 40,
                    justifyContent: "center",
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    marginHorizontal: 5
                  }}
                  onPress={() =>
                    this.props.applyDiscountAction(
                      this.state.promoCode,
                      this.state.mainValue
                    )
                  }
                >
                  <Text>Apply</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ExpandableView>
        </View>
      </SafeAreaView>
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.myReducer.itemPrice) {
      this.setState({
        priceAfterDiscount: nextProps.myReducer.itemPrice
      });
    }
  }
}

function mapStateToProps(state) {
  return {
    myReducer: state.homeScreenReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      applyDiscountAction: applyDiscountAction
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
