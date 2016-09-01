import test from "ava";
import webpack from "webpack";
import temp from "temp";
import fs from "fs";
import path from "path";

temp.track();

const tempDir = temp.mkdirSync();
const webpackConfig = {
    context: "./fixtures",
    entry: "./index.js",
    output: {
        path: `${tempDir}`,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.modernizrrc$/,
                loader: path.resolve(__dirname, "../index.js")
            }
        ]
    }
};

test.cb((t) => {
    webpack(webpackConfig, (err, stats) => {
        if (err) {
            t.end(err);
            return;
        }

        const build = fs.readFileSync(`${tempDir}/bundle.js`, "utf8");

        t.true(/addTest\('flexbox/.test(build));
        t.true(/addTest\('promise/.test(build));
        t.true(/addTest\('serviceworker/.test(build));

        t.end();
    });
});

