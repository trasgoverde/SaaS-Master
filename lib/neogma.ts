const { Neogma, ModelFactory } = require('neogma');

/* --> create a neogma instance and database connection */
const neogma = new Neogma(
    {
        /* --> use your connection details */
        url: 'bolt://44.222.238.246:7687',
        username: 'neo4j',
        password: 'remains-tubs-removal',
    },
    {
        logger: console.log,
    }
);

/* --> create a Users model */
const Users = ModelFactory({
    label: 'User',
    schema: {
        name: {
            type: 'string',
            minLength: 3,
            required: true
        },
        age: {
            type: 'number',
            minimum: 0,
        },
        id: {
            type: 'string',
            required: true,
        }
    },
    primaryKeyField: 'id',
    relationshipCreationKeys: {},
}, neogma);

const createAndUpdateUser = async () => {
    /* --> creates a new Users node */
    const user = await Users.createOne({
        id: '1',
        name: 'John',
        age: 38
    });

    console.log(user.name); // 'John'

    user.name = 'Alex';
    /* --> updates the node's name in the database */
    await user.save();
    console.log(user.name); // 'Alex'

    await neogma.getDriver().close();
}

createAndUpdateUser();