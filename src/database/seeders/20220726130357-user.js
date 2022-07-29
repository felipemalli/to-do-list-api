module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Admin',
        email: 'admin@admin.com',
        password: 'senha1',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'User',
        email: 'user@user.com',
        password: 'senha2',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
