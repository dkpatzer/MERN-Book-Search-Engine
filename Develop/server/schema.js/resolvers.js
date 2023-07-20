const { User } = require('..\models');

const resolvers = {
  Query: {
    getSingleUser: async (parent, args, context, info) => {
      const { id, username } = args;

      try {
        const foundUser = await User.findOne({
          $or: [{ _id: id }, { username }],
        });

        if (!foundUser) {
          throw new Error('Cannot find a user with this id!');
        }

        return foundUser;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
  Mutation: {
    createUser: async (parent, args, context, info) => {
      const { body } = args;

      try {
        const user = await User.create(body);

        return user;
      } catch (error) {
        throw new Error('Something went wrong!');
      }
    },
    login: async (parent, args, context, info) => {
      const { username, email, password } = args;

      try {
        const user = await User.findOne({ $or: [{ username }, { email }] });

        if (!user) {
          throw new Error("Can't find this user");
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
          throw new Error('Wrong password!');
        }

        return user;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    saveBook: async (parent, args, context, info) => {
      const { user, body } = args;

      try {
        const updatedUser = await User.findOneAndUpdate(
          { _id: user },
          { $addToSet: { savedBooks: body } },
          { new: true, runValidators: true }
        );

        return updatedUser;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    deleteBook: async (parent, args, context, info) => {
      const { user, params } = args;

      try {
        const updatedUser = await User.findOneAndUpdate(
          { _id: user },
          { $pull: { savedBooks: { bookId: params } } },
          { new: true }
        );

        if (!updatedUser) {
          throw new Error("Couldn't find user with this id!");
        }

        return updatedUser;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
};

module.exports = resolvers;

