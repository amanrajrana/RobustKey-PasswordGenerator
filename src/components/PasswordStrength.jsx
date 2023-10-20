import zxcvbn from "zxcvbn";
import PropTypes from 'prop-types';
const getScore = (password) => {
    const ans = zxcvbn((password));
    return ans.score;
};
const getStrength = (password) => {
    const ans = zxcvbn((password));
    let res = "Very Weak";
    if (ans.score == 2) res = "Weak";
    else if (ans.score == 3) res = "Medium";
    else res = "Strong";
    return res;
}
const PasswordStrengthIndicator = ({ password }) => {
    return (
        <div>
            <p>Password Score: {getScore(password)}</p>
            <p>Password Strength: {getStrength(password)}</p>
        </div>

    )
};
PasswordStrengthIndicator.propTypes = {
    password: PropTypes.string.isRequired, // Here, password is expected to be a string and is required.
};
export default PasswordStrengthIndicator;