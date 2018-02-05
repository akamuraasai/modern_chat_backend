import idToString from '../../Helpers/idToString';

export default {
  messages: async (parent, args, { Message }) => (await Message.find().populate('from').populate('to')).map(idToString),
  message: async (parent, { _id }, { Message }) => idToString(await Message.findOne({ _id }).populate('to').populate('from')),
};
