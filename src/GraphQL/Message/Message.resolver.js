import idToString from '../../Helpers/idToString';

export const Query = {
  messages: async (parent, args, { Message }) => (await Message.find().populate('from').populate('to')).map(idToString),
  message: async (parent, { _id }, { Message }) => idToString(await Message.findOne({ _id }).populate('to').populate('from')),
};

export const Mutation = {
  sendMessage: async (
    root,
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
    })),
};
