export const signup = (user) => {
    return $.ajax({
            method: "POST",
            url: 'api/users',
            data: { user }
    });
};

export const signin = (user) => {
    return $.ajax({
        method: "POST",
        url: `/api/session`,
        data: { user }
    });
};

export const signout = (id) => {
    return $.ajax ({
        method: "DELETE",
        url: `/api/session`,
        data: id
    });
};