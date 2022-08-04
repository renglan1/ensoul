"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TomeCard = void 0;
/*ES7 snippet 'rafcp' will generate this component scheme*/
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
require("../stories/styles/css/tome-card.css");
const TomeCard = ({ figureName, figureTitle }) => {
    return (<div className="tome-card">
      <img src={require(`../assets/images/${figureName.toLowerCase()}.svg`)} alt={figureName}/>
      <h2>{figureName.toUpperCase()}</h2>
      <h3>{figureTitle}</h3>
    </div>);
};
exports.TomeCard = TomeCard;
exports.TomeCard.propTypes = {
    figureName: prop_types_1.default.string.isRequired,
    figureTitle: prop_types_1.default.string.isRequired,
};
exports.TomeCard.defaultProps = {
    figureName: "direction",
};
