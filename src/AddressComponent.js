import React from 'react';
import Postcode from 'react-daum-postcode';

class AddressComponent extends React.Component {
  getAddressData = data => {
    let defaultAddress = ''; // 기본주소
    if (data.buildingName === 'N') {
      defaultAddress = data.apartment;
    } else {
      defaultAddress = data.buildingName;
    }

    // navigation.goBack();
    if (this.props.route.params && this.props.route.params.onSelect) {
      this.props.route.params.onSelect({
        zone_code: data.zonecode,
        default_address: data.address + ' ' + defaultAddress,
      });
    }
  };

  render() {
    return (
      <Postcode
        style={{ flex: 1, width: '100%', zIndex: 999 }}
        jsOptions={{ animation: true }}
        onSelected={data => this.getAddressData(data)}
        onError={error => {
          throw new Error('Function not implemented.');
        }}
      />
    );
  }
}

export default AddressComponent;
