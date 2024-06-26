// userInfo.js

function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => {
        return {
            id: index + 1,
            originalName: name,
            modifiedName: modifiedNames[index]
        };
    });
}

// Example usage:
// const names = ["Alice", "Bob", "Charlie"];
// const modifiedNames = ["ALICE", "bob", "CHARLIE"];
// const userProfiles = createUserProfiles(names, modifiedNames);
