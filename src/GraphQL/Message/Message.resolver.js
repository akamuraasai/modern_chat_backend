import idToString from '../../Helpers/idToString';

const getMessages = async (parent, args, { Message }) =>
  (await Message.find().populate('from').populate('to')).map(idToString);

const getMessage = async (parent, { _id }, { Message }) =>
  idToString(await Message.findOne({ _id }).populate('to').populate('from'));

const sendMessage = async (root,
  {
    to,
    from,
    message,
    date,
  },
  { Message }) => idToString(await
  Message.create({
    to,
    from,
    message,
    date,
  }));

export const Query = {
  messages: getMessages,
  message: getMessage,
};

export const Mutation = {
  sendMessage,
};
