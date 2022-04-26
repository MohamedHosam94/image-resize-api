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
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const sharp_1 = __importDefault(require("sharp"));
const resize = (name, width, height, cached) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, sharp_1.default)(name)
        .resize(width, height)
        .toFile(path_1.default.join('./storage/cached', `${cached}-cached-${width}-${height}.jpg`));
    console.log(width, height);
});
const getCachedImg = (cacheName, name, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    if (fs_1.default.existsSync(path_1.default.resolve('./storage', 'cached', `${cacheName}-cached-${width}-${height}.jpg`))) {
        console.log('true it exist');
        return path_1.default.resolve('./storage', 'cached', `${cacheName}-cached-${width}-${height}.jpg`);
    }
    else {
        yield resize(path_1.default.resolve('./storage', 'images', `${name}.jpg`), width, height, name);
        return path_1.default.resolve('./storage', 'cached', `${cacheName}-cached-${width}-${height}.jpg`);
    }
});
exports.default = getCachedImg;
