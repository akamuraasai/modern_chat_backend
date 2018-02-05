import idToString from '../../Helpers/idToString';

const getUsers = async (parent, args, { User }) =>
  (await User.find()).map(idToString);

const getUser = async (parent, { _id }, { User }) =>
  idToString(await User.findOne({ _id }));

const createUser = async (root, { name }, { User }) =>
  idToString(await User.create({ name }));

const removeUser = async (root, { _id }, { User }) =>
  idToString(await User.findOneAndRemove({ _id }));

export const Query = {
  users: getUsers,
  user: getUser,
};

export const Mutation = {
  createUser,
  removeUser,
};
