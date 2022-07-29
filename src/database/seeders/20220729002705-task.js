module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('tasks', [
      {
        user_id: 1,
        description: 'this is the first task by first user',
        status: 'To do',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        description: 'this is the second task by first user',
        status: 'In progress',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        description: 'this is the third task by first user',
        status: 'Concluded',
        created_at: new Date(),
        updated_at: new Date(),
      },  
      {
        user_id: 2,
        description: 'this is the first task by second user',
        status: 'To do',
        created_at: new Date(),
        updated_at: new Date(),
      },      
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
