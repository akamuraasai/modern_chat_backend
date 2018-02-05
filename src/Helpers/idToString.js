/* eslint-disable no-underscore-dangle */
export default obj => (
  {
    ...obj._doc,
    _id: obj._id.toString(),
  }
);
