const saySomething = (req, res, next) => {
    res.status(200).json({
        body: 'Hello from the server!'
    });
}

const getMembers = (req, res, next) => {
    const members = [
        {_id: "12", memberId: "1", name: "name 1", house: "1", street:"street 1"},
        {_id: "22", memberId: "2", name: "name 2", house: "1", street:"street 1"},
        {_id: "33", memberId: "3", name: "name 3", house: "1A", street:"street 1"},
        {_id: "44", memberId: "4", name: "name 4", house: "100", street:"street 2"},
        {_id: "55", memberId: "5", name: "name 5", house: "1B", street:"street 2"},
        {_id: "66", memberId: "6", name: "name 6", house: "1", street:"street 2"},
        {_id: "77", memberId: "7", name: "name 7", house: "2", street:"street 2"},
        {_id: "86", memberId: "8", name: "name 8", house: "9", street:"street 3"},
        {_id: "94", memberId: "9", name: "name 9", house: "1B", street:"street 3"},
        {_id: "106", memberId: "10", name: "name 10", house: "10", street:"street 3"},
        {_id: "114", memberId: "11", name: "name 11", house: "11", street:"street 3"},
        {_id: "122", memberId: "12", name: "name 12", house: "23", street:"street 3"},
      ]
    
    res.status(200).json({
        body: members 
    });
}

//module.exports.saySomething = saySomething;
module.exports.getMembers = getMembers;