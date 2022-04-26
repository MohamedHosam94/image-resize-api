"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const utils_1 = __importDefault(require("../../utils/utils"));
const fs_1 = __importDefault(require("fs"));
const image = express_1.default.Router();
image.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!fs_1.default.existsSync(path_1.default.resolve('./storage', 'images', `${req.query.title}.jpg`))) {
        res.send('Image Does Not Exist .. Please add Image');
    }
    else {
        let widthNum;
        req.query.width == null
            ? (widthNum = 200)
            : (widthNum = parseInt(req.query.width));
        let heightNum;
        req.query.height == null
            ? (heightNum = 200)
            : (heightNum = parseInt(req.query.height));
        const cachedFile = yield (0, utils_1.default)(req.query.title, req.query.title, widthNum, heightNum);
        res.sendFile(cachedFile);
        // console.log(cachedFile , typeof(widthNum));
    }
}));
exports.default = image;
