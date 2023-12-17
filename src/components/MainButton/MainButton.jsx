

import "./MainButton.css";

const MainButton = ({ btnTytle }) => {
    return (
        <div>
            <button className="customBtn btnStyle">{btnTytle}</button>
        </div>
    );
};

export default MainButton;