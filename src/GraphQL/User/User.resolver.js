import idToString from '../../Helpers/idToString';

export default {
  users: async (parent, args, { User }) => (await User.find()).map(idToString),
  user: async (parent, { _id }, { User }) => idToString(await User.findOne({ _id })),
};
