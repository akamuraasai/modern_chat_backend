import idToString from '../../Helpers/idToString';

export const Query = {
  users: async (parent, args, { User }) => (await User.find()).map(idToString),
  user: async (parent, { _id }, { User }) => idToString(await User.findOne({ _id })),
};

export const Mutation = {
  createUser: async (root, { name }, { User }) => idToString(await User.create({ name })),
};
