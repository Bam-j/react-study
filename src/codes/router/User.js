import React from 'react';

const data = {
    Bam: {
        name: 'Bam',
        description: 'Bam입니다.',
    },
};

const User = ({match}) => {
    const {userName} = match.params.user;
    const user = data[userName];

    if (!user) {
        return (
            <div>등록되지 않은 user입니다.</div>
        );
    }

    return (
        <div>
            <h2>
                {userName}
            </h2>
            <p>
                {user.description}
            </p>
        </div>
    );
};

export default User;