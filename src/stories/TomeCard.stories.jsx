"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const TomeCard_1 = require("../components/TomeCard");
exports.default = {
    title: 'TomeCard',
    component: TomeCard_1.TomeCard,
};
const Template = (args) => <TomeCard_1.TomeCard {...args}/>;
exports.Default = Template.bind({});
