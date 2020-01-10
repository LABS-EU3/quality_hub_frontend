const size = {
  mobile: '500px',
  tablet: '900px',
  large: '1000px',
};

const devices = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  large: `(min-width: ${size.large})`,
};

export default devices;
