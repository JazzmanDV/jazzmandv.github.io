import React, { FC } from "react";
import { Link } from "gatsby";

// markup
const NotFoundPage: FC = () => {
    return (
        <main>
            <p>404</p>
            <Link to="./">Вернуться на главную</Link>
        </main>
    );
};

export default NotFoundPage;
