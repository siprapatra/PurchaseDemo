import React, { Component } from "react";
import { SafeAreaView, Text, TouchableHighlight,View } from "react-native";
import { applyDiscountAction } from "../store/actions/HomeScreenAction";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Tooltip from 'react-native-walkthrough-tooltip';
import Card from "../components/card"

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainValue: 100,
      discount:0,
      priceAfterDiscount: 100,
      toolTipVisible: true
    };
  }

  componentDidMount(){
      this.props.applyDiscountAction("DISCOUNT",this.state.mainValue)
  }

  render() {
    const {priceAfterDiscount} = this.state;
    return (
      <SafeAreaView style={{paddingHorizontal:20,flex:1}}>
      <View style={{paddingHorizontal:10,flex:1}}>
        <Card title= "SubTotal" value= "$102.6" />
        <Card title= "Pickup Savings" value= "-$3.85" />
        <Card title= "Est Taxes and Fees" value= "$8.92" />
        </View>
      </SafeAreaView>
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.myReducer.itemPrice) {
          this.setState({
            priceAfterDiscount: nextProps.myReducer.itemPrice
          })
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
