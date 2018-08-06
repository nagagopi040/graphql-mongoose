const employeeList = [
    {
        _id: '1',
        name: 'Naga',
        age: '23'
    },
    {
        _id: '2',
        name: 'Gopi',
        age: '25'
    }
]

export const resolvers = {
    Query: {
        Employees() {
            return employeeList;
        }
    },
    Mutation: {
        createEmployee(_,{ input }){
            input._id= '0001'
            employeeList.push(input);
            return input
        }
    }
}